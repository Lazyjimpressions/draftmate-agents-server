export const refineTool = {
  type: 'function',
  function: {
    name: 'refine_section',
    description: 'Rewrites a document section to improve tone and clarity',
    parameters: {
      type: 'object',
      properties: {
        text: { type: 'string' },
        tone: { type: 'string' }
      },
      required: ['text', 'tone']
    }
  }
};