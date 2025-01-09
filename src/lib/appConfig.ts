export const appConfig = {
    i18n: {
      locales: ["en", "zh"] as const,
      defaultLocale: "en" as const,
      localeLabels: {
        en: "English",
        zh: "简体中文",
      },
      localeDetection: false,
      localeCurrencies: {
        en: "USD",
        zh: "CNY",
      },
    },
    auth: {
      oAuthProviders: ["google", "github"],
    },
  };
  
