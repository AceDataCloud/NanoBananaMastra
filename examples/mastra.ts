import { MastraEditor } from '@mastra/editor';
import { NanoBananaToolProvider } from '../src/index.js';

// Pass editor into your existing new Mastra({ ..., editor, storage }) configuration.
// Its API key belongs to the server owner; it is not a per-user OAuth connection.
export function createNanoBananaEditor(apiKey: string) {
  const nanobanana = new NanoBananaToolProvider({ apiKey });
  const editor = new MastraEditor({ toolProviders: { nanobanana } });
  return { nanobanana, editor };
}

// Code-configured agents can use the same provider without stored-agent editing.
export async function createNanoBananaTools(apiKey: string) {
  const nanobanana = new NanoBananaToolProvider({ apiKey });
  const tools = await nanobanana.resolveTools(['nanobanana_generate_image', 'nanobanana_get_task']);
  return { nanobanana, tools };
}
