/**
 * Lingkar Kota design system: restrained legal-information page with paper ground and orbit rule.
 */
import { ArrowLeft } from "lucide-react";
import { Link, useLocation } from "wouter";
import SiteShell, { useLanguage } from "@/components/SiteShell";

type PageType = "privacy" | "terms";

export default function InfoPage({ type }: { type: PageType }) {
  const { t } = useLanguage();
  const page = t[type];
  return <SiteShell compact>
    <main className="policy-page">
      <div className="policy-rail" aria-hidden="true"><span>JKT · 06°11′S</span></div>
      <article className="policy-content">
        <Link href="/" className="back-link"><ArrowLeft size={16} /> {type === "privacy" ? "MONUMEN" : "MONUMEN"}</Link>
        <p className="eyebrow orange">{page.eyebrow}</p>
        <h1>{page.title}</h1>
        <p className="policy-date">{page.updated}</p>
        <p className="policy-intro">{page.intro}</p>
        <div className="policy-sections">{page.sections.map(([heading, text]) => <section key={heading}><h2>{heading}</h2><p>{text}</p></section>)}</div>
      </article>
    </main>
  </SiteShell>;
}
