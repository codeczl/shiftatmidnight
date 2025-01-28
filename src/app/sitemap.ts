import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const sitemapRoutes: MetadataRoute.Sitemap = [
    {
      url: '', // 首页
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: 'game', // 游戏主页
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: 'article', // 文章列表页
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: 'article/dark-queen-power-guide', // 暗黑女王能力指南
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'article/boss-battle-strategies', // Boss战斗策略
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'game/abilities-guide', // 能力系统指南
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'game/hero-counter-tactics', // 英雄克制策略
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'game/lair-defense-guide', // 城堡防御指南
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'changelog', // 更新日志
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.6,
    },
    {
      url: 'privacy', // 隐私政策
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: 'terms', // 服务条款
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    }
  ];

  const sitemapData = sitemapRoutes.flatMap((route) => {
    const routeUrl = route.url === '' ? '' : `/${route.url}`;
    return {
      ...route,
      url: `https://mortholme.com${routeUrl}`,
    };
  });

  return sitemapData;
}
