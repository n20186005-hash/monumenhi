/**
 * Lingkar Kota design system: transparent consent controls that store choices only on the current device.
 */
import { ArrowLeft, Check } from "lucide-react";

import { useEffect, useState } from "react";
import SiteShell, { useLanguage } from "@/components/SiteShell";
import { languagePath } from "@/const";
import {readConsent,saveConsent} from "@/lib/analytics";

export default function CookiePage() {
  const { lang, t } = useLanguage();
  const [analytics, setAnalytics] = useState(false);
  const [preferences, setPreferences] = useState(false);
  const [error,setError]=useState(false);
  const [saved, setSaved] = useState(false);
  useEffect(()=>{const v=readConsent();setAnalytics(v.analytics);setPreferences(v.preferences)},[]);
  const persist=(analyticsValue=analytics,preferencesValue=preferences)=>{const ok=saveConsent({analytics:analyticsValue,preferences:preferencesValue});setSaved(ok);setError(!ok);if(ok){setAnalytics(analyticsValue);setPreferences(preferencesValue)}};
  return <SiteShell compact page="cookies">
    <main className="policy-page cookie-page"><div className="policy-rail" aria-hidden="true"><span>CONTROL · LOCAL</span></div><article className="policy-content">
      <a href={languagePath(lang)} className="back-link"><ArrowLeft size={16} /> MONUMEN</a><p className="eyebrow orange">{t.cookies.eyebrow}</p><h1>{t.cookies.title}</h1><p className="policy-date">{t.cookies.updated}</p><p className="policy-intro">{t.cookies.intro}</p>
      <div className="cookie-list">
        <CookieRow label={t.cookies.essential} text={t.cookies.essentialText} checked disabled />
        <CookieRow label={t.cookies.analytics} text={t.cookies.analyticsText} checked={analytics} onChange={setAnalytics} />
        <CookieRow label={t.cookies.preference} text={t.cookies.preferenceText} checked={preferences} onChange={setPreferences} />
        <CookieRow label={t.cookies.marketing} text={t.cookies.marketingText} checked={false} disabled />
      </div>
      <div className="cookie-actions"><button className="action-button dark" onClick={() => persist()}>{t.cookies.save}</button><button className="action-button light" onClick={() => persist(false, preferences)}>{t.cookies.reject}</button></div>
      {error&&<p role="status">{lang==="id"?"Penyimpanan tidak tersedia; pilihan tidak tersimpan.":"Storage unavailable; choices were not saved."}</p>}
      {saved && <p className="save-confirm"><Check size={16} /> {t.cookies.saved}</p>}
    </article></main>
  </SiteShell>;
}

function CookieRow({ label, text, checked, disabled, onChange }: { label: string; text: string; checked: boolean; disabled?: boolean; onChange?: (value: boolean) => void }) {
  return <div className="cookie-row"><div><h2>{label}</h2><p>{text}</p></div><button aria-pressed={checked} aria-label={label} disabled={disabled} onClick={() => onChange?.(!checked)} className={`toggle ${checked ? "on" : ""}`}><span /></button></div>;
}
