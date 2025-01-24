'use client'

import { useTranslations } from 'next-intl'

export function ReviewsSection() {
  const t = useTranslations('home.reviews')
  
  return (
    <div className="-mx-[calc((100vw-100%)/2)] bg-gradient-to-b from-white to-gray-50">
      <section className="w-full py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto mb-16 text-center">
            <h2 className="text-4xl font-bold tracking-tight mb-4">
              {t('title')}
            </h2>
            <p className="text-lg text-gray-600">
              {t('subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all"
              >
                <div className="flex text-yellow-400 mb-4">
                  {"★".repeat(5)}
                </div>
                <h3 className="text-xl font-bold mb-3">
                  {t(`item${index}.title`)}
                </h3>
                <p className="text-gray-600 mb-4">
                  {t(`item${index}.content`)}
                </p>
                <span className="text-gray-500 italic">
                  {t(`item${index}.author`)}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
} 