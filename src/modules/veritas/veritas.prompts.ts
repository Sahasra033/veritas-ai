import { PromptDecorator as Prompt, ExecutionContext } from '@nitrostack/core';

export class VeritasPrompts {
  @Prompt({
    name: 'verify_claim_help',
    description: 'Help users understand how to verify claims'
  })
  async getHelp(args: any, ctx: ExecutionContext) {
    ctx.logger.info('Providing Veritas AI help');

    return [
      {
        role: 'user' as const,
        content: 'How do I verify a claim using Veritas AI?'
      },
      {
        role: 'assistant' as const,
        content:
          'Use the verify_claim tool and provide the claim you want to verify. Veritas AI will analyze it using trusted sources and provide a verification result.'
      }
    ];
  }
}