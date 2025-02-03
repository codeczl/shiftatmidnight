import type { MetadataRoute } from "next";

const BASE_URL = 'https://hapunan.me';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: [
          "/",
          "/zh",
          "/en",
          "/game/*", 
          "/article/*", 
          "/changelog",
          "/privacy", 
          "/terms"
        ],
        disallow: [
          "/api/*", 
          "/admin/*",
          "/_next/*",
          "/socket.io/*",
          "/*.json$",
          "/*.js$",
          "/debug/*"
        ]
      }
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  };
}
