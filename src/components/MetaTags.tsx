import { Metadata } from 'next'

interface MetaTagsProps {
  title: string
  description: string
  url: string
  imageUrl: string
}

export function generateMetaTags({
  title,
  description,
  url,
  imageUrl
}: MetaTagsProps): Partial<Metadata> {
  return {
    // Open Graph
    openGraph: {
      title: title,
      description: description,
      url: url,
      siteName: 'Roblox Code',
      images: [{
        url: imageUrl,
        width: 1200,
        height: 630,
        alt: title,
      }],
      locale: 'en_US',
      type: 'website',
    },
    // Twitter
    twitter: {
      card: 'summary_large_image',
      title: title,
      description: description,
      images: [imageUrl],
      creator: '@robloxcode',
      site: '@robloxcode',
    },
    // 其他元数据
    other: {
      'facebook-domain-verification': 'your-facebook-domain-verification-code',
    }
  }
} 