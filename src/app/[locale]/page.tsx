// pages/index.js
import React, { Suspense } from 'react'; // 确保导入 React
import { getSortedPostsData } from '@/lib/posts'
import { getCategories } from '@/lib/data';

import { ToolsList } from '@/components/ToolsList';
import { ArticleList } from '@/components/ArticleList'

import { Search } from '@/components/Search';
import {getTranslations, getLocale} from 'next-intl/server';

export async function generateMetadata() {
  const t = await getTranslations('home');
  return {
    title: t("meta_title"),
    description: t("meta_description"),
  };
}


type categoryType = { 
  name: string; 
  src: string; 
  description: string;
  link: string; 
}


export default async function Home() {
  const locale = await getLocale();
  const t = await getTranslations('home');
  // categories data
  const categories = getCategories(locale);
  const allPostsData = getSortedPostsData().slice(0, 6)
  
  return (
    <div className="container mx-auto py-12 space-y-16 ">
      <section className="flex flex-col items-center justify-center text-center space-y-6">
        <h1 className="mx-auto max-w-3xl text-3xl font-bold lg:text-7xl tracking-tighter">
          {t("h1")}
        </h1>
        <h2 className="text-2xl tracking-tight sm:text-3xl md:text-3xl lg:text-3xl">{t("h2")}</h2>
        <p className="mx-auto max-w-[700px] md:text-xl tracking-tight">
          {t("intro")}
        </p>
        <div className='w-full px-2 pt-10 lg:w-1/2'>
          <Search />
        </div>
      </section>

      {/* Latest Codes Section */}
      <section id="latest-codes" className="space-y-6">
        <h2 className="text-3xl font-bold">{t("latest_codes.title")}</h2>
        <ul className="space-y-4">
          <li>{t("latest_codes.code1")}</li>
          <li>{t("latest_codes.code2")}</li>
        </ul>
        <p>{t("latest_codes.update_note")}</p>
      </section>

      {/* How to Redeem Section */}
      <section id="how-to-redeem" className="space-y-6">
        <h2 className="text-3xl font-bold">{t("how_to_redeem.title")}</h2>
        <p>{t("how_to_redeem.intro")}</p>
        <ol className="list-decimal list-inside space-y-2">
          <li>{t("how_to_redeem.step1")}</li>
          <li>{t("how_to_redeem.step2")}</li>
          <li>{t("how_to_redeem.step3")}</li>
          <li>{t("how_to_redeem.step4")}</li>
        </ol>
        <p>{t("how_to_redeem.note")}</p>
      </section>

      {/* Tips Section */}
      <section id="tips" className="space-y-6">
        <h2 className="text-3xl font-bold">{t("tips.title")}</h2>
        <p>{t("tips.intro")}</p>
        <ul className="list-disc list-inside space-y-2">
          <li>{t("tips.tip1")}</li>
          <li>{t("tips.tip2")}</li>
          <li>{t("tips.tip3")}</li>
        </ul>
        <p>{t("tips.conclusion")}</p>
      </section>

      <div className='border-t'></div>
      
      {/* 保持原有的 ToolsList 和 ArticleList */}
      {categories.map((category: categoryType, index: React.Key | null | undefined) => (
        <ToolsList key={index} category={category} locale={locale} />
      ))}
      <div className='border-t'></div>
      <Suspense fallback={<div>Loading editor...</div>}>
        <ArticleList articles={allPostsData} />
      </Suspense>
    </div>
  )
}