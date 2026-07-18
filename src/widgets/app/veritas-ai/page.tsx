'use client';

import { useTheme, useWidgetSDK } from '@nitrostack/widgets';

interface VeritasResult {
  claim: string;
  verdict: string;
  confidence: number;
  risk: string;
  recommendation: string;

  agents: {
    news: {
      status: string;
      confidence: number;
      summary: string;
    };

    government: {
      status: string;
      confidence: number;
      summary: string;
    };

    evidence: {
      images: number;
      videos: number;
      summary: string;
    };

    timeline: {
      summary: string;
    };

    credibility: {
      score: number;
      level: string;
      trustedSourcesFound: number;
    };
  };
}

export default function VeritasAI() {
  const theme = useTheme();
  const { getToolOutput } = useWidgetSDK();

  const data = getToolOutput<VeritasResult>();

  const dark = theme === "dark";

  if (!data) {
    return (
      <div style={{
        padding: 30,
        textAlign: "center",
        fontSize: 20
      }}>
        Loading Veritas AI...
      </div>
    );
  }

  return (
    <div style={{
      padding: 30,
      borderRadius: 20,
      background: dark ? "#1a1a1a" : "#ffffff",
      color: dark ? "white" : "black",
      maxWidth: 700,
      margin: "20px auto"
    }}>

      <h1>🛡 Veritas AI</h1>

      <hr />

      <h3>Claim</h3>
      <p>{data.claim}</p>

      <h3>Verdict</h3>
      <p>{data.verdict}</p>

      <h3>Confidence</h3>
      <p>{data.confidence}%</p>

      <h3>Risk</h3>
      <p>{data.risk}</p>

      <hr />

      <h2>📰 News Agent</h2>
      <p>{data.agents.news.summary}</p>

      <h2>🏛 Government Agent</h2>
      <p>{data.agents.government.summary}</p>

      <h2>📷 Evidence Agent</h2>
      <p>
        Images: {data.agents.evidence.images}
        <br />
        Videos: {data.agents.evidence.videos}
      </p>

      <h2>⏱ Timeline Agent</h2>
      <p>{data.agents.timeline.summary}</p>

      <h2>⭐ Credibility Agent</h2>
      <p>
        {data.agents.credibility.level}
        <br />
        Score: {data.agents.credibility.score}
        <br />
        Trusted Sources: {data.agents.credibility.trustedSourcesFound}
      </p>

      <hr />

      <h2>💡 Recommendation</h2>
      <p>{data.recommendation}</p>

    </div>
  );
}