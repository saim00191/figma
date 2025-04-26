import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: "https://crypto-tracking-platform.vercel.app",
      lastModified,
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: "https://crypto-tracking-platform.vercel.app/pricing-page",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://crypto-tracking-platform.vercel.app/profile-page",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://crypto-tracking-platform.vercel.app/recent-calls",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: "https://crypto-tracking-platform.vercel.app/influencer-individual-stats",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: "https://crypto-tracking-platform.vercel.app/token-stats",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: "https://crypto-tracking-platform.vercel.app/follow-up-calls",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];
}
