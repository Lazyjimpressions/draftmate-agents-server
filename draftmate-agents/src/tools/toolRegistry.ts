import { outlineTool } from './outlineTool.js';
import { refineTool } from './refineTool.js';
import { critiqueTool } from './critiqueTool.js';

export function getToolsForMode(docType: string) {
  switch (docType) {
    case 'legal_brief':
      return [outlineTool, critiqueTool];
    case 'marketing_copy':
      return [outlineTool, refineTool];
    default:
      return [outlineTool, refineTool, critiqueTool];
  }
}