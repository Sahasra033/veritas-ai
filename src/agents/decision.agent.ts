export class DecisionAgent {

  analyze(
    news: any,
    government: any,
    evidence: any,
    timeline: any,
    credibility: any
  ) {

    // Calculate average confidence from all agents
    const confidence = Math.round(
      (
        news.confidence +
        government.confidence +
        evidence.confidence +
        timeline.confidence +
        credibility.score
      ) / 5
    );

    let verdict = "UNDER VERIFICATION";
    let risk = "MEDIUM";
    let recommendation = "";

    // Final decision logic
    if (confidence >= 90) {
      verdict = "VERIFIED";
      risk = "LOW";
      recommendation =
        "The claim is strongly supported by trusted news, government sources, evidence, timeline analysis, and source credibility.";
    }
    else if (confidence >= 75) {
      verdict = "LIKELY TRUE";
      risk = "LOW";
      recommendation =
        "Most verification agents support this claim. Continue monitoring official updates.";
    }
    else if (confidence >= 50) {
      verdict = "UNDER VERIFICATION";
      risk = "MEDIUM";
      recommendation =
        "The claim requires additional confirmation before it can be trusted.";
    }
    else {
      verdict = "UNVERIFIED";
      risk = "HIGH";
      recommendation =
        "Do not share this claim until reliable evidence becomes available.";
    }

    return {
      verdict,
      confidence,
      risk,
      recommendation,

      // Optional: expose each agent's confidence
      breakdown: {
        news: news.confidence,
        government: government.confidence,
        evidence: evidence.confidence,
        timeline: timeline.confidence,
        credibility: credibility.score
      }
    };

  }

}