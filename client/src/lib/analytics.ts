/** Lingkar Kota privacy rule: analytics is loaded only after explicit local consent. */
const GA_ID = "G-HXM22WWPKP";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function applyAnalyticsConsent(enabled: boolean) {
  if (!enabled) {
    window.gtag?.("consent", "update", { analytics_storage: "denied" });
    return;
  }
  if (window.gtag) {
    window.gtag("consent", "update", { analytics_storage: "granted" });
    return;
  }
  window.dataLayer = window.dataLayer || [];
  window.gtag = (...args: unknown[]) => window.dataLayer?.push(args);
  window.gtag("consent", "default", { analytics_storage: "granted" });
  window.gtag("js", new Date());
  window.gtag("config", GA_ID, { anonymize_ip: true });
  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  script.dataset.msdAnalytics = "true";
  document.head.appendChild(script);
}
