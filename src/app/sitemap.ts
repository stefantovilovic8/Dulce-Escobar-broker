import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://dulcescobar.ae";
  const now = new Date();

  return [
    // Main pages
    { url: `${base}/`, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/rent`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/sale`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/off-plan`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/contact-us`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },

    // Rent listings
    { url: `${base}/rent/binghatti-tulip-1`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/rent/binghatti-tulip-2`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/rent/binghatti-tulip-3`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/rent/binghatti-tulip-4`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/rent/binghatti-aurora`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/rent/binghatti-phantom`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/rent/binghatti-orchid`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/rent/binghatti-lavender`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/rent/neva-residences`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/rent/reef-residence`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/rent/binghatti-emerald`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/rent/damac-courestia-villa`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },

    // Sale listings
    { url: `${base}/sale/binghatti-azure`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/sale/binghatti-aurora`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/sale/binghatti-orchid`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
  ];
}
