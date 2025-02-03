import type { MetadataRoute } from 'next';

const BASE_URL = 'https://hapunan.me'; // 更新为新的域名

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
    // 游戏相关文章
    {
      url: 'article/hapunan-game-overview', // 游戏概览
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'article/survival-guide', // 生存指南
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'article/filipino-folklore-elements', // 菲律宾民间传说元素
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    // 游戏机制指南
    {
      url: 'game/combat-system', // 战斗系统
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'game/stealth-mechanics', // 潜行机制
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'game/multiplayer-guide', // 多人游戏指南
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    // 多语言支持页面
    {
      url: 'zh', // 中文首页
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: 'zh/game', // 中文游戏页
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: 'zh/article', // 中文文章页
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    // 其他重要页面
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
      url: `${BASE_URL}${routeUrl}`,
    };
  });

  return sitemapData;
}
