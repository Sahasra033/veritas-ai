export class GovernmentAgent {
  async analyze(claim: string) {
    return {
      status: "NOT VERIFIED",
      confidence: 65,
      summary: `Government databases do not currently confirm the claim: "${claim}".`,
      agencies: [
        "Disaster Management Authority",
        "Police Department"
      ]
    };
  }
}