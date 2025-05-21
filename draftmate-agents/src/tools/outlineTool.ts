export const outlineTool = {
  type: 'function',
  function: {
    name: 'build_outline',
    description: 'Creates a structured outline for a document',
    parameters: {
      type: 'object',
      properties: {
        topic: { type: 'string', description: 'Main topic of the document' }
      },
      required: ['topic']
    }
  }
};