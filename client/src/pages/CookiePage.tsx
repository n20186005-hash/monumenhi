/**
 * Lingkar Kota design system: transparent consent controls that store choices only on the current device.
 */
import { ArrowLeft, Check } from "lucide-react";
import { Link } from "wouter";
import { useEffect, useState } from "react";
import SiteShell, { useLanguage } from "@/components/SiteShell";

export default function CookiePage() {
  const { t } = useLanguage();
  const [analytics, setAnalytics] = useState(false);
  const [preferences, setPreferences] = useState(true);
  const [saved, setSaved] = useState(false);
  useEffect(() => { setAnalytics(localStorage.getItem("msd-analytics") === "true"); }, []);
  const persist = (analyticsValue = analytics, preferencesValue = preferences) => {
    localStorage.setItem("msd-analytics", String(analyticsValue));
    localStorage.setItem("msd-preferences", String(preferencesValue));
    window.dispatchEvent(new Event("msd-analytics-change"));
    setAnalytics(analyticsValue); setPreferences(preferencesValue); setSaved(true);
  };
  return <SiteShell compact>
    <main className="policy-page cookie-page"><div className="policy-rail" aria-hidden="true"><span>CONTROL · LOCAL</span></div><article className="policy-content">
      <Link href="/" className="back-link"><ArrowLeft size={16} /> MONUMEN</Link><p className="eyebrow orange">{t.cookies.eyebrow}</p><h1>{t.cookies.title}</h1><p className="policy-date">{t.cookies.updated}</p><p className="policy-intro">{t.cookies.intro}</p>
      <div className="cookie-list">
        <CookieRow label={t.cookies.essential} text={t.cookies.essentialText} checked disabled />
        <CookieRow label={t.cookies.analytics} text={t.cookies.analyticsText} checked={analytics} onChange={setAnalytics} />
        <CookieRow label={t.cookies.preference} text={t.cookies.preferenceText} checked={preferences} onChange={setPreferences} />
        <CookieRow label={t.cookies.marketing} text={t.cookies.marketingText} checked={false} disabled />
      </div>
      <div className="cookie-actions"><button className="action-button dark" onClick={() => persist()}>{t.cookies.save}</button><button className="action-button light" onClick={() => persist(false, preferences)}>{t.cookies.reject}</button></div>
      {saved && <p className="save-confirm"><Check size={16} /> {t.cookies.saved}</p>}
    </article></main>
  </SiteShell>;
}

function CookieRow({ label, text, checked, disabled, onChange }: { label: string; text: string; checked: boolean; disabled?: boolean; onChange?: (value: boolean) => void }) {
  return <div className="cookie-row"><div><h2>{label}</h2><p>{text}</p></div><button aria-pressed={checked} aria-label={label} disabled={disabled} onClick={() => onChange?.(!checked)} className={`toggle ${checked ? "on" : ""}`}><span /></button></div>;
}
