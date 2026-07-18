import { ToolDecorator as Tool, Widget, ExecutionContext, z } from '@nitrostack/core';
import { NewsAgent } from '../../agents/news.agent.js';
import { GovernmentAgent } from '../../agents/government.agent.js';
import { EvidenceAgent } from '../../agents/evidence.agent.js';
import { TimelineAgent } from '../../agents/timeline.agent.js';
import { CredibilityAgent } from '../../agents/credibility.agent.js';
import { DecisionAgent } from '../../agents/decision.agent.js';

export class VeritasTools {

  private newsAgent = new NewsAgent();
  private governmentAgent = new GovernmentAgent();
  private evidenceAgent = new EvidenceAgent();
  private timelineAgent = new TimelineAgent();
  private credibilityAgent = new CredibilityAgent();
  private decisionAgent = new DecisionAgent();

  @Tool({
    name: 'verify_claim',
    description: 'Verify a public claim using multiple verification agents.',
    inputSchema: z.object({
      claim: z.string().describe('Claim to verify')
    })
  })
  @Widget('veritas-ai')
  async verifyClaim(input: any, ctx: ExecutionContext) {

    ctx.logger.info('Starting Veritas Verification', {
      claim: input.claim
    });

    // Run all agents
    const newsAgent = await this.newsAgent.analyze(input.claim);

    const governmentAgent = await this.governmentAgent.analyze(input.claim);

    const evidence = await this.evidenceAgent.analyze(input.claim);

    const timeline = await this.timelineAgent.analyze(input.claim);

    const credibility = await this.credibilityAgent.analyze(newsAgent);

    // Final decision
    const decision = this.decisionAgent.analyze(
      newsAgent,
      governmentAgent,
      evidence,
      timeline,
      credibility
    );

    return {
      claim: input.claim,

      verdict: decision.verdict,

      confidence: decision.confidence,

      risk: decision.risk,

      agents: {

        news: {
          status: newsAgent.status,
          confidence: newsAgent.confidence,
          summary: newsAgent.summary,
          sources: newsAgent.sources
        },

        government: {
          status: governmentAgent.status,
          confidence: governmentAgent.confidence,
          summary: governmentAgent.summary,
          agencies: governmentAgent.agencies
        },

        evidence,

        timeline,

        credibility

      },

      recommendation: decision.recommendation
    };
  }
}