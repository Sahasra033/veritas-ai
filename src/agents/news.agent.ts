import axios from "axios";

export class NewsAgent {

  async analyze(claim: string) {

    const apiKey = process.env.NEWS_API_KEY;

    if (!apiKey) {
      throw new Error("NEWS_API_KEY is missing in .env");
    }

    try {

      const response = await axios.get(
        "https://newsapi.org/v2/everything",
        {
          params: {
            q: claim,
            language: "en",
            sortBy: "relevancy",
            pageSize: 10,
            apiKey
          }
        }
      );

      const articles = response.data.articles ?? [];

      // Extract important keywords from the claim
      const keywords = claim
        .toLowerCase()
        .split(/\s+/)
        .filter(word => word.length > 2);

      // Keep only relevant articles
      const relevantArticles = articles.filter((article: any) => {

        const text = (
          (article.title || "") +
          " " +
          (article.description || "")
        ).toLowerCase();

        const matchedKeywords = keywords.filter(keyword =>
          text.includes(keyword)
        );

        // Require at least half the keywords to match
        return matchedKeywords.length >= Math.ceil(keywords.length / 2);

      });

      const finalArticles =
        relevantArticles.length > 0
          ? relevantArticles
          : articles;

      return {
        status: finalArticles.length > 0 ? "FOUND" : "NOT FOUND",

        confidence: finalArticles.length > 0 ? 90 : 40,

        summary: `${finalArticles.length} relevant article(s) found.`,

        sources: finalArticles.slice(0, 5).map((article: any) => ({
          title: article.title,
          source: article.source?.name,
          url: article.url
        }))
      };

    } catch (error: any) {

      return {
        status: "ERROR",
        confidence: 0,
        summary: error.message,
        sources: []
      };

    }

  }

}