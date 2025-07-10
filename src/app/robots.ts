import type { MetadataRoute } from "next";

const BASE_URL = 'https://shiftatmidnight.com';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: [
          "/",
          "/zh",
          "/en",
          "/zh/article/*",
          "/en/article/*",
          "/article/*",
          "/changelog",
          "/privacy",
          "/terms",
          "/about",
          "/sitemap.xml"
        ],
        disallow: [
          "/api/*",
          "/admin/*",
          "/_next/*",
          "/socket.io/*",
          "/*.json$",
          "/*.js$",
          "/debug/*",
          "/login",
          "/admin",
          "/temp/*",
          "/*?*" // 禁止带参数的URL
        ]
      }
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  };
}
