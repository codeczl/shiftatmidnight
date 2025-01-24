// components/ArticleList.tsx
import React from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';

interface Article {
  id: string;
  title: string;
  description: string;
  date: string;
  coverImage: any;  // 修改为接收 StaticImageData
}

interface ArticleListProps {
  articles: Article[];
  showMoreLink?: boolean;
}

function ArticleList({ articles }: ArticleListProps) {
  const t = useTranslations('articleList');
  
  return (
    <section className="py-12 w-full max-w-7xl mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl lg:text-5xl font-bold tracking-tight mb-4">
          {t('h2')}
        </h2>
        <Link 
          href="/article" 
          className="text-blue-600 hover:text-blue-800 transition-colors inline-block text-lg"
        >
          {t('viewAllBlogs')}
        </Link>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map(({ id, title, description, coverImage }) => (
          <Card key={id} className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="relative w-full h-48">
              <Image
                src={coverImage}
                alt={title}
                fill
                className="object-cover"
                loading="lazy"
              />
            </div>
            <CardHeader>
              <Link 
                href={`/article/${id}`}
                className="text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-1"
              >
                <CardTitle className="text-lg mr-1 line-clamp-2">{title}</CardTitle>
                →
              </Link>
              <CardDescription className="line-clamp-3 mt-2">
                {description}
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  )
}

function ArticlePage({ articles }: ArticleListProps) {
  return (
    <section>
      <div className="space-y-6">
        {articles.map(({ id, title, description }) => (
          <Card key={id}>
            <CardHeader>
              <Link 
                href={`/article/${id}`}
                className="text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-1"
              >
                <CardTitle className='mr-1'>{title}</CardTitle>
                →
              </Link>
              <CardDescription>{description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  )
}

export { ArticleList, ArticlePage } 