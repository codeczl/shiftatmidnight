import type { MetadataRoute } from 'next';

const BASE_URL = 'https://shiftatmidnight.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const sitemapRoutes: MetadataRoute.Sitemap = [
    {
      url: '', // 首页
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    // 游戏相关文章
    {
      url: 'article/game-overview',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: 'article/survival-guide',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: 'article/doppelganger-lore',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'article/gas-station-mechanics',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'article/night-shift-survival',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'article/security-systems',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    // 新增英文文章
    {
      url: 'en/article/shift-at-midnight-doppelganger-guide',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: 'en/article/shift-at-midnight-game-guide',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    // 新增中文文章
    {
      url: 'zh/article/shift-at-midnight-doppelganger-guide',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: 'zh/article/shift-at-midnight-game-guide',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    // 多语言支持页面
    {
      url: 'zh',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: 'zh/article',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: 'en',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: 'en/article',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    // 其他重要页面
    {
      url: 'changelog',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: 'privacy',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: 'terms',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: 'about',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    }
  ];

  const sitemapData = sitemapRoutes.map((route) => {
    const routeUrl = route.url === '' ? '' : `/${route.url}`;
    return {
      ...route,
      url: `${BASE_URL}${routeUrl}`,
    };
  });

  return sitemapData;
}
