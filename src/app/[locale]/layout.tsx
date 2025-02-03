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
    default: 'Hapunan - The Ultimate Gaming Experience',
    template: '%s | Hapunan'
  },
  description: 'Step into the immersive world of Hapunan, where strategy meets excitement. Experience dynamic gameplay, competitive multiplayer, and endless customization options.',
  authors: { name: 'hapunan.me', url: 'https://hapunan.me/' },
  keywords: 'Hapunan, Gaming, Strategy Games, Multiplayer Games, Gaming Experience, Competitive Gaming, Game Customization',
  alternates: {
    canonical: "https://hapunan.me/",
    languages: {
      "en": "https://hapunan.me/en",
      "zh": "https://hapunan.me/zh",
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
        color: '#5bbad5'
      }
    ]
  },
  manifest: '/site.webmanifest',
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Hapunan"
  },
  ...generateMetaTags({
    title: 'Hapunan - The Ultimate Gaming Experience',
    description: 'Step into the immersive world of Hapunan, where strategy meets excitement. Experience dynamic gameplay, competitive multiplayer, and endless customization options.',
    url: 'https://hapunan.me',
    imageUrl: 'https://hapunan.me/og-image.jpg'
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
