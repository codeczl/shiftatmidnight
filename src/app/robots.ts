import type { MetadataRoute } from "next";

const BASE_URL = 'https://steamcookieclicker.com';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/", "/game/*", "/article/*", "/changelog", "/privacy", "/terms"],
        disallow: [
          "/api/*", 
          "/admin/*",
          "/_next/*",
          "/socket.io/*"
        ]
      }
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  };
}
