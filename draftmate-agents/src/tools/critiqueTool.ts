export const critiqueTool = {
  type: 'function',
  function: {
    name: 'critique_text',
    description: 'Provides constructive critique on a document section',
    parameters: {
      type: 'object',
      properties: {
        text: { type: 'string' }
      },
      required: ['text']
    }
  }
};