export class EvidenceAgent {
  async analyze(claim: string) {
    // Demo logic (can later be replaced with real image/video verification)

    let images = 0;
    let videos = 0;
    let confidence = 40;

    const lowerClaim = claim.toLowerCase();

    if (
      lowerClaim.includes("earthquake") ||
      lowerClaim.includes("flood") ||
      lowerClaim.includes("cyclone") ||
      lowerClaim.includes("fire")
    ) {
      images = 3;
      videos = 2;
      confidence = 85;
    }

    return {
      status: images > 0 ? "EVIDENCE_FOUND" : "NO_EVIDENCE",
      confidence,
      summary:
        images > 0
          ? `${images} image(s) and ${videos} video(s) support this claim.`
          : "No supporting media evidence found.",
      images,
      videos,
    };
  }
}