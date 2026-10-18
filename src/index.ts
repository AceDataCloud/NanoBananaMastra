import { ServiceToolProvider, type ProviderOptions } from './provider.js';
export { AceToolError } from './provider.js';
export type { ProviderOptions as NanoBananaToolProviderOptions } from './provider.js';

/** Nano Banana tools through Ace Data Cloud, independently installable in Mastra. */
export class NanoBananaToolProvider extends ServiceToolProvider {
  constructor(options: ProviderOptions = {}) {
    super({
      slug: 'nanobanana',
      name: 'Nano Banana by Ace Data Cloud',
      description: 'Nano Banana image generation and image editing, and same-task result queries.',
      endpoint: 'https://nanobanana.mcp.acedata.cloud/mcp',
      packageName: '@acedatacloud/mastra-nano-banana',
    }, options);
  }
}
