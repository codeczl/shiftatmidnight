import type { MetadataRoute } from "next";

const BASE_URL = 'https://robloxcode.net';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: ["/", "/category/*", "/article/*", "/changelog"],
      disallow: ["/api/*", "/admin/*"]
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
