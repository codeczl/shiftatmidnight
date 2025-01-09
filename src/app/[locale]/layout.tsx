import './globals.css';
import '@radix-ui/themes/styles.css';
import React from 'react';
import { Inter } from 'next/font/google'
import { Layout } from '@/components/Layout';
import { Metadata } from 'next'
import { GoogleAnalyticsScript } from "@/components/analytics/GoogleAnalyticsScript";
import { PlausibleAnalyticsScript } from "@/components/analytics/PlausibleAnalyticsScript";
import GoogleAdsenseScript from "@/components/ads/GoogleAdsenseScript";
import { ThemeProvider } from "next-themes"
import { DM_Sans } from "next/font/google";
import { cn } from "@/lib/utils";

import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

const inter = Inter({ subsets: ['latin'] })
const sansFont = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: {
    default: 'Roblox Code | Latest Promo Codes & Redeem Guide',
    template: '%s | Roblox Code'
  },
  description: 'Discover the latest Roblox codes, how to redeem them, and tips for using them effectively to maximize your gaming experience.',
  authors: { name: 'robloxcode.net', url: 'https://robloxcode.net/' },
  keywords: 'Roblox code, redeem Roblox codes, Roblox promo codes, Roblox game codes',
  alternates: {
    canonical: "https://robloxcode.net/",
    languages: {
      "en-US": "https://robloxcode.net/en/",
      "zh-CN": "https://robloxcode.net/zh/",
    }
  },
  icons: [
    { rel: "icon", type: "image/png", sizes: "16x16", url: "/favicon-16x16.png" },
    { rel: "icon", type: "image/png", sizes: "32x32", url: "/favicon-32x32.png" },
    { rel: "icon", type: "image/png", sizes: "192x192", url: "/android-chrome-192x192.png" },
    { rel: "icon", type: "image/png", sizes: "512x512", url: "/android-chrome-512x512.png" },
    { rel: "apple-touch-icon", sizes: "180x180", url: "/apple-touch-icon.png" },
    { rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#5bbad5" }
  ],
  manifest: "/site.webmanifest",
  themeColor: "#ffffff",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Roblox Code"
  },
  viewport: "width=device-width, initial-scale=1.0",
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
          <ThemeProvider attribute="class">
            <Layout>{children}</Layout>
            <GoogleAdsenseScript />
            <PlausibleAnalyticsScript />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}