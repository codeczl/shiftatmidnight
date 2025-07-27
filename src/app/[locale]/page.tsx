// pages/index.js
import React, { Suspense } from 'react'; // 确保导入 React
import { getSortedPostsData } from '@/lib/posts'
import { getCategories } from '@/lib/data';

import { ToolsList } from '@/components/ToolsList';
import { ArticleList } from '@/components/ArticleList'

import { Search } from '@/components/Search';
import {getTranslations, getLocale} from 'next-intl/server';
import Image from 'next/image'
import heroImage from '@/images/hero.jpg'  // 导入 hero.jpg
import backgroundImage from '@/images/background.jpg'
import feature1 from '@/images/feature1.jpg'
import feature2 from '@/images/feature2.jpg'
import feature3 from '@/images/feature3.jpg'
import ability1 from '@/images/ability1.jpg'
import ability2 from '@/images/ability2.jpg'
import ability3 from '@/images/ability3.jpg'
import ability4 from '@/images/ability4.jpg'
import ability5 from '@/images/ability5.jpg'
import ability6 from '@/images/ability6.jpg'
import { ReviewsSection } from '@/components/ReviewsSection';
import article1 from '@/images/article1.jpg'
import article2 from '@/images/article2.jpg'
import article3 from '@/images/article3.jpg'

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
  const categories = getCategories(locale);
  
  // 获取前三篇文章并分别指定封面图片
  const allPostsData = [
    { ...getSortedPostsData(locale)[0], coverImage: article1 },
    { ...getSortedPostsData(locale)[1], coverImage: article2 },
    { ...getSortedPostsData(locale)[2], coverImage: article3 }
  ];

  return (
    <>
      {/* 固定背景 */}
      <div 
        className="fixed inset-0 z-[-1]"
        style={{
          backgroundImage: `url(${backgroundImage.src})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
      />
      
      {/* 主内容 */}
      <main className="min-h-screen relative">
        <div className="container mx-auto space-y-16">
          {/* Hero Section */}
          <section className="py-16">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
              {/* 左侧文本内容 */}
              <div className="flex-1 text-center lg:text-left space-y-6">
                <h1 className="mx-auto lg:mx-0 max-w-3xl text-3xl font-bold lg:text-7xl tracking-tighter">
                  {t("cookie_clicker.title")}
                </h1>
                <h2 className="text-2xl tracking-tight sm:text-3xl">
                  {t("cookie_clicker.subtitle")}
                </h2>
                <p className="mx-auto lg:mx-0 max-w-[700px] md:text-xl tracking-tight">
                  {t("cookie_clicker.description")}
                </p>
                <a 
                  href="https://bunmuen.itch.io/shiftatmidnight"
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-block px-8 py-4 bg-blue-600 text-white text-xl font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200"
                >
                  {t("cookie_clicker.start_button")}
                </a>
              </div>

              {/* 右侧图片 */}
              <div className="flex-1 flex justify-center">
                <Image
                  src={heroImage}
                  alt="Shift at Midnight Hero"
                  className="rounded-lg shadow-xl max-w-[500px] w-full h-auto"
                  priority
                />
              </div>
            </div>
          </section>

          {/* 下载区块 - 使用共享背景而非深色背景 */}
          <section className="py-20 px-6 my-24 max-w-5xl mx-auto">
            {/* 标题样式与"Unleash the Power"保持一致 */}
            <h2 className="text-5xl md:text-6xl font-bold mb-4 text-gray-900 text-center">
              {t("download.title")}
            </h2>
            
            {/* 副标题样式与页面副标题一致 */}
            <p className="text-xl text-gray-600 text-center mb-12">
              {t("download.installation_steps")}
            </p>
            
            {/* 下载按钮居中 */}
            <div className="flex flex-col items-center">
              <a 
                href="https://github.com/codeczl/shiftatmidnight/releases/download/v1.00/ShiftAtMidnight.zip"
                download
                className="bg-[#ffc017] hover:bg-[#f0b107] text-black font-bold py-4 px-12 rounded-md text-xl max-w-sm w-full text-center transition-colors shadow-md mb-6"
              >
                {t("download.button")}
              </a>
              
              {/* 文件信息居中 */}
              <div className="flex items-center justify-center space-x-3 mt-2 mb-16">
                <span className="text-gray-600">{t("download.file_name")}</span>
                <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">{t("download.file_size")}</span>
                <span>🪟</span>
              </div>
              
              {/* 安装说明部分 */}
              <div className="w-full max-w-xl mx-auto bg-white/70 backdrop-blur-sm rounded-xl p-8 shadow-lg">
                <h3 className="text-xl font-semibold mb-6 text-gray-800">
                  {t("download.installation_title")}
                </h3>
                
                <div className="space-y-6">
                  <div className="flex">
                    <span className="text-blue-600 font-medium mr-3">1.</span>
                    <p className="text-gray-700">
                      {t("download.installation_steps")}
                    </p>
                  </div>
                  
                  <div className="flex">
                    <span className="text-blue-600 font-medium mr-3">2.</span>
                    <p className="text-gray-600">
                      {t("download.installation_note")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-8 space-y-16">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-4xl lg:text-5xl font-bold mb-4 tracking-tight">
                {t("features.title")}
              </h2>
              <p className="text-lg text-gray-600">
                {t("features.subtitle")}
              </p>
            </div>

            {/* Feature 1 */}
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="flex-1 space-y-6">
                <h3 className="text-3xl lg:text-4xl font-bold">{t("features.item1.title")}</h3>
                <p className="text-gray-500 text-xl leading-relaxed">{t("features.item1.description")}</p>
                <a 
                  href="https://bunmuen.itch.io/shiftatmidnight"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-blue-600 hover:text-blue-800 underline-offset-4 hover:underline transition-all duration-200 text-lg font-medium"
                >
                  {t("features.item1.button")} →
                </a>
              </div>
              <div className="flex-1">
                <Image
                  src={feature1}
                  alt="Feature 1"
                  className="rounded-lg shadow-xl"
                  priority
                />
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
              <div className="flex-1 space-y-6">
                <h3 className="text-3xl lg:text-4xl font-bold">{t("features.item2.title")}</h3>
                <p className="text-gray-500 text-xl leading-relaxed">{t("features.item2.description")}</p>
                <a 
                  href="https://bunmuen.itch.io/shiftatmidnight"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-blue-600 hover:text-blue-800 underline-offset-4 hover:underline transition-all duration-200 text-lg font-medium"
                >
                  {t("features.item2.button")} →
                </a>
              </div>
              <div className="flex-1">
                <Image
                  src={feature2}
                  alt="Feature 2"
                  className="rounded-lg shadow-xl"
                  priority
                />
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="flex-1 space-y-6">
                <h3 className="text-3xl lg:text-4xl font-bold">{t("features.item3.title")}</h3>
                <p className="text-gray-500 text-xl leading-relaxed">{t("features.item3.description")}</p>
                <a 
                  href="https://bunmuen.itch.io/shiftatmidnight"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-blue-600 hover:text-blue-800 underline-offset-4 hover:underline transition-all duration-200 text-lg font-medium"
                >
                  {t("features.item3.button")} →
                </a>
              </div>
              <div className="flex-1">
                <Image
                  src={feature3}
                  alt="Feature 3"
                  className="rounded-lg shadow-xl"
                  priority
                />
              </div>
            </div>
          </section>

          {/* Abilities Section */}
          <section className="py-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-center mb-4">
              {t("abilities.title")}
            </h2>
            <p className="text-lg text-gray-600 text-center mb-12">
              {t("abilities.subtitle")}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { id: 1, image: ability1 },
                { id: 2, image: ability2 },
                { id: 3, image: ability3 },
                { id: 4, image: ability4 },
                { id: 5, image: ability5 },
                { id: 6, image: ability6 },
              ].map(({ id, image }) => (
                <div 
                  key={id} 
                  className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all"
                >
                  <div className="flex justify-between items-start gap-4">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-4">
                        {t(`abilities.item${id}.title`)}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {t(`abilities.item${id}.description`)}
                      </p>
                    </div>
                    <div className="flex-shrink-0">
                      <Image
                        src={image}
                        alt={`Ability ${id}`}
                        className="w-16 h-16 object-cover rounded-lg"
                        priority
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Call to Action Section */}
          <div className="-mx-[calc((100vw-100%)/2)] bg-[#111827]"> 
            <section className="text-white py-24 pb-32 text-center">
              <div className="max-w-4xl mx-auto px-4">
                <h2 className="text-4xl lg:text-5xl font-bold mb-6">{t("cta.title")}</h2>
                <p className="text-lg text-gray-300 mb-8">{t("cta.description")}</p>
                <a 
                  href="https://github.com/codeczl/shiftatmidnight/releases/download/v1.00/ShiftAtMidnight.zip"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-4 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition-colors font-medium"
                >
                  {t("cta.button")}
                </a>
              </div>
            </section>
          </div>

          {/* Reviews Section */}
          <div className="-mt-1">
            <div className="relative max-w-2xl mx-auto mb-12 text-center">
              <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-1">
                {t('reviews.title')}
              </h2>
              <p className="text-lg text-gray-600">
                {t('reviews.subtitle')}
              </p>
            </div>
            
            <div className="-mt-1 relative">
              <div className="absolute top-0 left-[-20px] right-[-20px] h-64 bg-gradient-to-b from-white from-0% via-white via-50% to-transparent z-10 pointer-events-none" />
              <ReviewsSection />
              <div className="absolute bottom-0 left-[-20px] right-[-20px] h-64 bg-gradient-to-t from-gray-50 from-0% via-gray-50 via-50% to-transparent z-10 pointer-events-none" />
            </div>
          </div>
          
          <div className="border-t"></div>
          
          {/* ArticleList Section */}
          <div className="container mx-auto px-4 max-w-7xl">
            <Suspense fallback={<div className="text-center py-8">Loading articles...</div>}>
              <ArticleList articles={allPostsData} />
            </Suspense>
          </div>
        </div>

        {/* FAQ Section */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16">
              {t('faq.title')}
            </h2>
            
            <div className="max-w-5xl mx-auto divide-y divide-gray-200">
              {[1, 2, 3, 4, 5].map((index) => (
                <div 
                  key={index} 
                  className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start bg-white p-8"
                  style={{ 
                    borderRadius: index === 1 ? '1rem 1rem 0 0' : 
                                 index === 5 ? '0 0 1rem 1rem' : '0' 
                  }}
                >
                  <h3 className="text-xl font-bold text-gray-900">
                    {t(`faq.item${index}.question`)}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {t(`faq.item${index}.answer`)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
