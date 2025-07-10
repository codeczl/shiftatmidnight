import type { MetadataRoute } from 'next';

const BASE_URL = 'https://shiftatmidnight.com'; // 更新为新的域名

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
      url: 'article/game-overview', // 游戏概览
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: 'article/survival-guide', // 生存指南
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: 'article/doppelganger-lore', // 替身者传说
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    // 游戏机制指南
    {
      url: 'article/gas-station-mechanics', // 加油站机制
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'article/night-shift-survival', // 夜班生存
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'article/security-systems', // 安保系统
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
      url: 'zh/article', // 中文文章列表
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: 'en', // 英文首页
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: 'en/article', // 英文文章列表
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    // 其他重要页面
    {
      url: 'changelog', // 更新日志
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
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
    },
    {
      url: 'about', // 关于我们
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
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
