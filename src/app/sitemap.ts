import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://dulcescobar.ae";
  const now = new Date();

  return [
    { url: `${base}/`, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/services`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/off-plan-properties`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/sale`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/off-plan`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/gallery`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/concierge`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/contact-us`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
  ];
}
