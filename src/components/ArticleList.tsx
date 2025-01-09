// components/ArticleList.tsx
import React from 'react';
import { Link } from "@/lib/i18n";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"
import { useTranslations } from 'next-intl';

interface Article {
  id: string;
  title: string;
  description: string;
  date: string;
}

interface ArticleListProps {
  articles: Article[];
  showMoreLink?: boolean;
}

const ArticleList: React.FC<ArticleListProps> = ({ articles, showMoreLink = true }) => {
  const t = useTranslations('articleList');
  
  return (
    <section>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold tracking-tight">{t('h2')}</h2>
        {showMoreLink && (
          <Link href="/article" className="text-blue-600 hover:text-blue-800 transition-colors">
            {t('moreArticles')} →
          </Link>
        )}
      </div>
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

const ArticlePage: React.FC<ArticleListProps> = ({ articles }) => {
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