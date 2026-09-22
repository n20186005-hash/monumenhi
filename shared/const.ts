export const COOKIE_NAME = "app_session_id";
export const ONE_YEAR_MS = 1000 * 60 * 60 * 24 * 365;

// SEO site name follows the "attraction + city + travel guide" convention.
export const SITE_NAME = {
  id: "Monumen Selamat Datang Jakarta Panduan Wisata",
  en: "Monumen Selamat Datang Jakarta Travel Guide",
} as const;

export const withSiteName = (pageTitle: string, lang: "id" | "en"): string =>
  `${pageTitle} | ${SITE_NAME[lang]}`;
