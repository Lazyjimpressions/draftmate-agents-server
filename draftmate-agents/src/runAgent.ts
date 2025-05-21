import { createClient } from '@supabase/supabase-js';
import { OpenAI } from 'openai';
import { getToolsForMode } from './tools/toolRegistry.js';
import { Request, Response } from 'express';

const supabase = createClient(
  process.env.SUPABASE_URL || '',
  process.env.SUPABASE_SERVICE_ROLE_KEY || ''
);

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY || '' });

export async function runAgent(req: Request, res: Response) {
  try {
    const { documentId, userId, docType, inputText, tone = 'neutral' } = req.body;

    if (!documentId || !userId || !docType || !inputText) {
      return res.status(400).json({ error: 'Missing required fields.' });
    }

    const tools = getToolsForMode(docType);

    const systemPrompt = `You are an expert assistant helping write a ${docType} in a ${tone} tone.`;

    const response = await openai.chat.completions.create({
      model: 'gpt-4o',
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: inputText }
      ],
      tools,
      tool_choice: 'auto'
    });

    const output = response.choices?.[0]?.message;
    if (!output) {
      return res.status(500).json({ error: 'No output from OpenAI.' });
    }

    res.json({ output });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error', details: error.message });
  }
}