'use client'

import { useTranslations } from 'next-intl'
import { useEffect, useRef, useState } from 'react'

export function ReviewsSection() {
  const t = useTranslations('home.reviews')
  const leftColumnRef = useRef<HTMLDivElement>(null)
  const middleColumnRef = useRef<HTMLDivElement>(null)
  const rightColumnRef = useRef<HTMLDivElement>(null)
  const [reviews, setReviews] = useState<number[]>([])

  useEffect(() => {
    setReviews([...Array(48)].map((_, i) => i % 24))
  }, [])

  useEffect(() => {
    const leftColumn = leftColumnRef.current
    const middleColumn = middleColumnRef.current
    const rightColumn = rightColumnRef.current
    if (!leftColumn || !middleColumn || !rightColumn) return

    let animationFrameId: number
    let offset = 0
    const normalSpeed = 0.2
    const slowSpeed = 0.1 // 中间列速度减半
    const rowHeight = 248
    const resetThreshold = -rowHeight * 8

    const animate = () => {
      offset -= normalSpeed
      const slowOffset = offset * 0.5 // 中间列位移是两侧的一半

      if (offset <= resetThreshold) {
        offset = 0
        ;[leftColumn, middleColumn, rightColumn].forEach(column => {
          column.style.transition = 'none'
          column.style.transform = `translateY(0)`
          void column.offsetHeight
          column.style.transition = 'transform 100ms linear'
        })
      } else {
        leftColumn.style.transform = `translateY(${offset}px)`
        middleColumn.style.transform = `translateY(${slowOffset}px)`
        rightColumn.style.transform = `translateY(${offset}px)`
      }

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId)
      }
    }
  }, [reviews.length])

  const getColumnReviews = (columnIndex: number) => {
    return reviews.filter((_, index) => index % 3 === columnIndex)
  }

  return (
    <div className="mt-0">
      <div className="-mx-[calc((100vw-100%)/2)] bg-gradient-to-b from-white to-gray-50">
        <section className="w-full pt-0 pb-0">
          <div className="container mx-auto px-4">
            <div className="relative h-[600px] overflow-hidden">
              <div className="grid grid-cols-3 gap-12 absolute w-full">
                {/* 左列 */}
                <div 
                  ref={leftColumnRef}
                  className="transition-transform duration-100 ease-linear"
                  style={{ willChange: 'transform' }}
                >
                  {getColumnReviews(0).map((index, i) => (
                    <div 
                      key={`left-${index}-${i}`}
                      className="mb-12 bg-white p-6 rounded-2xl shadow-lg min-h-[200px] flex flex-col"
                    >
                      <div className="flex text-yellow-400 mb-3">
                        {"★".repeat(5)}
                      </div>
                      <h3 className="text-lg font-bold mb-2 line-clamp-1">
                        {t(`items.${index}.title`)}
                      </h3>
                      <p className="text-gray-600 mb-3 text-sm line-clamp-3 flex-grow">
                        {t(`items.${index}.content`)}
                      </p>
                      <span className="text-gray-500 italic text-sm mt-auto">
                        {t(`items.${index}.author`)}
                      </span>
                    </div>
                  ))}
                </div>

                {/* 中间列 */}
                <div 
                  ref={middleColumnRef}
                  className="transition-transform duration-100 ease-linear"
                  style={{ willChange: 'transform' }}
                >
                  {getColumnReviews(1).map((index, i) => (
                    <div 
                      key={`middle-${index}-${i}`}
                      className="mb-12 bg-white p-6 rounded-2xl shadow-lg min-h-[200px] flex flex-col"
                    >
                      <div className="flex text-yellow-400 mb-3">
                        {"★".repeat(5)}
                      </div>
                      <h3 className="text-lg font-bold mb-2 line-clamp-1">
                        {t(`items.${index}.title`)}
                      </h3>
                      <p className="text-gray-600 mb-3 text-sm line-clamp-3 flex-grow">
                        {t(`items.${index}.content`)}
                      </p>
                      <span className="text-gray-500 italic text-sm mt-auto">
                        {t(`items.${index}.author`)}
                      </span>
                    </div>
                  ))}
                </div>

                {/* 右列 */}
                <div 
                  ref={rightColumnRef}
                  className="transition-transform duration-100 ease-linear"
                  style={{ willChange: 'transform' }}
                >
                  {getColumnReviews(2).map((index, i) => (
                    <div 
                      key={`right-${index}-${i}`}
                      className="mb-12 bg-white p-6 rounded-2xl shadow-lg min-h-[200px] flex flex-col"
                    >
                      <div className="flex text-yellow-400 mb-3">
                        {"★".repeat(5)}
                      </div>
                      <h3 className="text-lg font-bold mb-2 line-clamp-1">
                        {t(`items.${index}.title`)}
                      </h3>
                      <p className="text-gray-600 mb-3 text-sm line-clamp-3 flex-grow">
                        {t(`items.${index}.content`)}
                      </p>
                      <span className="text-gray-500 italic text-sm mt-auto">
                        {t(`items.${index}.author`)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
} 