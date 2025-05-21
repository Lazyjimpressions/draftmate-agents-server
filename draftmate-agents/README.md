# Draftmate Agents Backend

This is a Railway-deployable backend for the Draftmate platform using OpenAI's Agents SDK. It supports:

- Multi-tool agent workflows
- Document-type-specific tool configurations
- Supabase-integrated document and user support

## Endpoints

### POST `/run-agent`
**Request Body:**
```json
{
  "documentId": "abc123",
  "userId": "xyz789",
  "docType": "legal_brief",
  "inputText": "...",
  "tone": "formal"
}
```
**Response:**
```json
{
  "output": { "role": "assistant", "content": "..." }
}
```

## Environment Variables
- `OPENAI_API_KEY`
- `SUPABASE_URL`
- `SUPABASE_SERVICE_ROLE_KEY`

## To Run Locally
```bash
npm install
npm run dev
```

Deploy to Railway and point your Draftmate UI to `https://your-backend.run/run-agent`
