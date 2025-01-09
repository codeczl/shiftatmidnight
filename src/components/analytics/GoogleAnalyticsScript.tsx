"use client";

import Script from "next/script";

const GA_MEASUREMENT_ID = 'G-GGV7B7Y7DK';

export function GoogleAnalyticsScript() {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${GA_MEASUREMENT_ID}');
        `}
      </Script>
    </>
  );
}

export function useGoogleAnalytics() {
  const trackEvent = (event: string, data?: Record<string, unknown>) => {
    if (typeof window === "undefined" || !(window as any).gtag) {
      return;
    }

    (window as any).gtag("event", event, data);
  };

  return {
    trackEvent,
  };
}
