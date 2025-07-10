import './globals.css';
import '@radix-ui/themes/styles.css';
import React from 'react';
import { Inter } from 'next/font/google'
import { Layout } from '@/components/Layout';
import { Metadata, Viewport } from 'next'
import { GoogleAnalyticsScript } from "@/components/analytics/GoogleAnalyticsScript";
import { PlausibleAnalyticsScript } from "@/components/analytics/PlausibleAnalyticsScript";
import GoogleAdsenseScript from "@/components/ads/GoogleAdsenseScript";
import { ThemeProvider } from "next-themes"
import { DM_Sans } from "next/font/google";
import { cn } from "@/lib/utils";

import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { generateMetaTags } from '@/components/MetaTags'

const inter = Inter({ subsets: ['latin'] })
const sansFont = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' }
  ],
  width: 'device-width',
  initialScale: 1
}

export const metadata: Metadata = {
  title: {
    default: 'Shift at Midnight - A Terrifying Night Shift at a 90s Gas Station',
    template: '%s | Shift at Midnight'
  },
  description: 'Step into the immersive world of Shift at Midnight, where every visitor might be a doppelganger in this thrilling horror gaming experience.',
  authors: { name: 'shiftatmidnight.com', url: 'https://shiftatmidnight.com/' },
  keywords: 'Shift at Midnight, Horror Game, Gas Station, Night Shift, Doppelganger, Survival Horror, Co-op Horror, 90s Horror',
  alternates: {
    canonical: "https://shiftatmidnight.com/",
    languages: {
      "en": "https://shiftatmidnight.com/en",
      "zh": "https://shiftatmidnight.com/zh",
    }
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png' }
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
        color: '#1a1a1a'
      }
    ]
  },
  manifest: '/site.webmanifest',
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Shift at Midnight"
  },
  ...generateMetaTags({
    title: 'Shift at Midnight - A Terrifying Night Shift at a 90s Gas Station',
    description: 'Step into the immersive world of Shift at Midnight, where every visitor might be a doppelganger in this thrilling horror gaming experience.',
    url: 'https://shiftatmidnight.com',
    imageUrl: 'https://shiftatmidnight.com/og-image.jpg'
  }),
}

export default async function RootLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <GoogleAnalyticsScript />
      </head>
      <body className={cn(inter.className, sansFont.variable)}>
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider 
            attribute="class" 
            defaultTheme="light"
            enableSystem={false}
          >
            <Layout>{children}</Layout>
            <GoogleAdsenseScript />
            <PlausibleAnalyticsScript />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
