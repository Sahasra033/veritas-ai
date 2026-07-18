export class CredibilityAgent {

  async analyze(news: any) {

    let score = 50;
    let level = "MEDIUM";

    const trustedSources = [
      "Reuters",
      "Associated Press",
      "BBC",
      "The Times of India",
      "The Hindu",
      "BusinessLine",
      "NDTV",
      "PIB",
      "WHO"
    ];

    if (news.sources && news.sources.length > 0) {

      let trustedCount = 0;

      for (const article of news.sources) {

        const sourceName = article.source;

        if (trustedSources.includes(sourceName)) {
          trustedCount++;
        }

      }

      score = Math.round((trustedCount / news.sources.length) * 100);

      if (score >= 80) {
        level = "HIGH";
      } else if (score >= 50) {
        level = "MEDIUM";
      } else {
        level = "LOW";
      }

      return {
        score,
        level,
        trustedSourcesFound: trustedCount,
        summary: `${trustedCount} trusted source(s) found`
      };
    }

    return {
      score: 0,
      level: "LOW",
      trustedSourcesFound: 0,
      summary: "No sources available."
    };

  }

}