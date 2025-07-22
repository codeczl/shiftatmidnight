// components/Layout.tsx
import React from 'react'; // 确保导入 React
import { Navigation } from './Navigation'
import { Footer } from '@/components/Footer'
import { getCategories } from '@/lib/data';
import { getLocale } from 'next-intl/server';
import backgroundImage from '@/images/background.jpg'

// @ts-expect-error
export async function Layout({ children }) {
  const locale = await getLocale();
  // categories data
  const categories: { name: string, src: string, description: string, link: string }[] = getCategories(locale);

  return (
    <div 
      className="relative bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: `url(${backgroundImage.src})`
      }}
    >
      <Navigation categories={categories}/>
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}