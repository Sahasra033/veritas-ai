import { ResourceDecorator as Resource, ExecutionContext } from '@nitrostack/core';

export class VeritasResources {
  @Resource({
    uri: 'veritas://sources',
    name: 'Trusted Sources',
    description: 'Trusted sources used by Veritas AI',
    mimeType: 'application/json'
  })
  async getSources(uri: string, ctx: ExecutionContext) {
    ctx.logger.info('Fetching trusted sources');

    return {
      contents: [
        {
          uri,
          mimeType: 'application/json',
          text: JSON.stringify({
            sources: [
              "Government Records",
              "Trusted News",
              "Emergency Services"
            ]
          }, null, 2)
        }
      ]
    };
  }
}