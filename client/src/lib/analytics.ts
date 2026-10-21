const GA_ID = "G-HXM22WWPKP";
const VETO_KEY = "msd-analytics-denied";
let documentVeto = false;
export type Consent = { analytics: boolean; preferences: boolean };
export type ConsentResult = { saved: boolean; scope: "saved" | "tab" | "page"; analytics: boolean };
function hasVeto() {
  if (documentVeto) return true;
  try { return sessionStorage.getItem(VETO_KEY) === "1"; } catch { return true; }
}
export function readConsent(): Consent {
  try {
    const v = JSON.parse(localStorage.getItem("msd-consent") || "{}");
    return { analytics: v?.analytics === true && !hasVeto(), preferences: v?.preferences === true };
  } catch { return { analytics: false, preferences: false }; }
}
export function saveConsent(value: Consent): ConsentResult {
  let tabVeto = false;
  if (!value.analytics) {
    // Runtime denial must not depend on either storage write succeeding.
    documentVeto = true;
    applyAnalyticsConsent(false);
    try { sessionStorage.setItem(VETO_KEY, "1"); tabVeto = true; } catch {}
  }
  let saved = false;
  const previousVeto = hasVeto();
  let canSave = true;
  if (value.analytics) {
    // Do not publish a shared grant while this tab cannot clear its denial.
    try {
      sessionStorage.removeItem(VETO_KEY);
      canSave = sessionStorage.getItem(VETO_KEY) !== "1";
    } catch { canSave = false; }
  }
  if (canSave) {
    try {
      localStorage.setItem("msd-consent", JSON.stringify({ ...value, updated: "2026-10-21" }));
      saved = true;
    } catch {}
  }
  if (value.analytics && saved) documentVeto = false;
  else if (value.analytics && previousVeto) {
    // A failed local grant must also retain denial across this tab's reloads.
    documentVeto = true;
    try { sessionStorage.setItem(VETO_KEY, "1"); } catch {}
  }
  if (!value.preferences) { try { localStorage.removeItem("msd-itinerary"); } catch {} }
  const effective = readConsent();
  applyAnalyticsConsent(effective.analytics);
  window.dispatchEvent(new Event("msd-analytics-change"));
  if (value.analytics && !effective.analytics) saved = false;
  try { tabVeto = sessionStorage.getItem(VETO_KEY) === "1"; } catch {}
  return { saved, scope: saved ? "saved" : tabVeto ? "tab" : "page", analytics: effective.analytics };
}
// Subscribe at both runtime and controls boundaries; storage events originate in other tabs.
export function subscribeConsent(listener: (value: Consent, source: "initial" | "local" | "storage") => void) {
  const refresh = () => listener(readConsent(), "local");
  const storage = (event: StorageEvent) => {
    if ((event.key !== "msd-consent" && event.key !== null) ||
        (event.storageArea && event.storageArea !== localStorage)) return;
    const value = readConsent();
    if (!value.analytics) {
      documentVeto = true;
      applyAnalyticsConsent(false);
      try { sessionStorage.setItem(VETO_KEY, "1"); } catch {}
    }
    listener(readConsent(), "storage");
  };
  window.addEventListener("msd-analytics-change", refresh);
  window.addEventListener("storage", storage);
  listener(readConsent(), "initial");
  return () => {
    window.removeEventListener("msd-analytics-change", refresh);
    window.removeEventListener("storage", storage);
  };
}
export function readItinerary() { try { if (!readConsent().preferences) return []; const v = JSON.parse(localStorage.getItem("msd-itinerary") || "[]"); return Array.isArray(v) ? v.filter((id): id is string => typeof id === "string") : []; } catch { return []; } }
export function saveItinerary(value: string[]) { try { if (!readConsent().preferences) return "temporary"; localStorage.setItem("msd-itinerary", JSON.stringify(value)); return "saved"; } catch { return "failed"; } }
declare global { interface Window { dataLayer?: unknown[]; gtag?: (...args: unknown[]) => void } }
export function applyAnalyticsConsent(enabled: boolean) {
  enabled = enabled && !hasVeto();
  if (!enabled) {
    window.gtag?.("consent", "update", { analytics_storage: "denied" });
    return;
  }
  if (document.querySelector('script[data-msd-analytics]')) {
    window.gtag?.("consent", "update", { analytics_storage: "granted" });
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
