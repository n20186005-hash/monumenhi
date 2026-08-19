/**
 * Lingkar Kota design system: shared warm-paper shell, circular logo, and Indonesian-first navigation.
 */
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { copy, getRouteLanguage, languageName, type Lang } from "@/lib/site-content";
import { applyAnalyticsConsent } from "@/lib/analytics";

type Props = { children: React.ReactNode; compact?: boolean };

const logoUrl = "/assets/monumen-selamat-datang-logo.png";

export function useLanguage() {
  const [lang, setLangState] = useState<Lang>(getRouteLanguage);
  const setLang = (next: Lang) => {
    setLangState(next);
    window.localStorage.setItem("msd-language", next);
  };
  useEffect(() => { document.documentElement.lang = lang; }, [lang]);
  return { lang, setLang, t: copy[lang] };
}

export default function SiteShell({ children, compact = false }: Props) {
  const { lang, setLang, t } = useLanguage();
  const [open, setOpen] = useState(false);
  useEffect(() => {
    applyAnalyticsConsent(window.localStorage.getItem("msd-analytics") === "true");
    const refreshConsent = () => applyAnalyticsConsent(window.localStorage.getItem("msd-analytics") === "true");
    window.addEventListener("msd-analytics-change", refreshConsent);
    return () => window.removeEventListener("msd-analytics-change", refreshConsent);
  }, []);
  const nav = [
    ["#cerita", t.nav.story], ["#rencanakan", t.nav.visit], ["#sekitar", t.nav.around], ["#faq", t.nav.faq],
  ];
  const changeLang = (next: Lang) => { setLang(next); window.dispatchEvent(new Event("msd-language-change")); };

  return (
    <div className="min-h-screen bg-[#f6f0e5] text-[#14233b]">
      <header className="site-header">
        <Link href="/" className="brand" aria-label="Monumen Selamat Datang Guide">
          <img src={logoUrl} alt="" className="brand-mark" />
          <span><strong>MONUMEN</strong><em>Selamat Datang</em></span>
        </Link>
        {!compact && <nav className="desktop-nav" aria-label="Primary navigation">{nav.map(([href, label]) => <a key={href} href={href}>{label}</a>)}</nav>}
        <div className="header-actions">
          <div className="language-switch" aria-label="Language selection">
            {(["id", "en"] as Lang[]).map((item) => <button key={item} className={lang === item ? "active" : ""} onClick={() => changeLang(item)}>{languageName[item]}</button>)}
          </div>
          {!compact && <button className="mobile-menu" onClick={() => setOpen(!open)} aria-label="Open navigation">{open ? <X size={20} /> : <Menu size={20} />}</button>}
        </div>
      </header>
      {!compact && open && <nav className="mobile-nav" aria-label="Mobile navigation">{nav.map(([href, label]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}</nav>}
      {children}
      <Footer lang={lang} />
    </div>
  );
}

function Footer({ lang }: { lang: Lang }) {
  const t = copy[lang];
  return <footer className="site-footer">
    <div className="footer-orbit" aria-hidden="true"><i /><i /></div>
    <div className="footer-grid">
      <div className="footer-brand"><img src={logoUrl} alt="" /><p className="eyebrow">{t.brandKicker}</p><h2>MONUMEN<br /><em>Selamat Datang</em></h2></div>
      <div className="footer-copy"><p>{t.footerNonOfficial}</p><p>{t.footerReference}</p><p>{t.footerCredit}</p></div>
      <div className="footer-links"><Link href="/privacy">{t.footerLinks.privacy}</Link><Link href="/terms">{t.footerLinks.terms}</Link><Link href="/cookies">{t.footerLinks.cookies}</Link><a href="#sumber">{t.sourcesLabel}</a></div>
    </div>
    <div className="footer-bottom"><span>{t.footerCopyright}</span><span>Jakarta Pusat · Indonesia</span></div>
  </footer>;
}
