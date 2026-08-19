/**
 * Lingkar Kota design system: an asymmetric editorial field guide, built around Bundaran HI's circular movement.
 */
import { ArrowDownRight, Check, Plus } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import SiteShell, { useLanguage } from "@/components/SiteShell";
import { copy, type Lang } from "@/lib/site-content";

const images = {
  hero: "/assets/lingkar-kota-hero-art.jpg",
  map: "/assets/lingkar-kota-map-art.jpg",
  detail: "/assets/lingkar-kota-fountain-detail.jpg",
  realWide: "/assets/bundaran-hi-2023-baqotun0023.jpg",
  realAerial: "/assets/bundaran-hi-adisurahman.jpg",
};

export default function Home() {
  const { lang, t } = useLanguage();
  const [saved, setSaved] = useState<string[]>([]);
  useEffect(() => { setSaved(JSON.parse(localStorage.getItem("msd-itinerary") || "[]")); }, []);
  useEffect(() => { document.title = lang === "id" ? "Monumen Selamat Datang — Panduan Independen" : "Monumen Selamat Datang — Independent Guide"; }, [lang]);
  const schema = useMemo(() => structuredData(lang), [lang]);
  const toggleItem = (id: string) => setSaved((prev) => { const next = prev.includes(id) ? prev.filter((value) => value !== id) : [...prev, id]; localStorage.setItem("msd-itinerary", JSON.stringify(next)); return next; });
  const savedLabels = t.itinerary.filter(([id]) => saved.includes(id)).map(([, label]) => label);

  return <SiteShell>
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema.attraction) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema.faq) }} />
      <section className="hero" aria-labelledby="hero-title">
        <img src={images.hero} className="hero-art" alt="" />
        <div className="hero-inner"><div className="hero-copy"><p className="eyebrow">{t.heroEyebrow}</p><h1 id="hero-title">{t.heroTitle}</h1><p className="hero-lead">{t.heroLead}</p><div className="hero-actions"><a href="#rencanakan" className="action-button dark">{t.heroPrimary} <ArrowDownRight size={16} /></a><a href="#cerita" className="action-button light">{t.heroSecondary}</a></div></div><div className="hero-side"><p className="hero-coordinate">6°11′42″S · 106°49′14″E</p><div className="hero-orbit" aria-hidden="true"><span className="orbit-dot" /></div></div></div><p className="hero-foot">{t.sourceNote}</p>
      </section>
      <section className="facts" aria-label="Key facts"><Fact value={t.factYear} label={t.factYearLabel} /><Fact value={t.factPlace} label={t.factPlaceLabel} /><Fact value={t.factCost} label={t.factCostLabel} /></section>
      <section id="cerita" className="content-section"><div className="story-grid"><div><p className="section-number">{t.storyLabel}</p><h2 className="side-title">{t.storyTitle}</h2></div><div className="story-body"><p>{t.storyP1}</p><p>{t.storyP2}</p><blockquote className="story-quote">{t.storyQuote}</blockquote></div></div><div className="image-pair"><div className="photo-frame tall"><img src={images.realWide} alt="Monumen Selamat Datang dan Bundaran HI pada siang hari" /><p className="image-caption">{t.photoCaption}</p></div><div className="photo-frame"><img src={images.detail} alt="Visual editorial air mancur pada suasana senja" /><div className="orange-block" /></div></div></section>
      <section className="know-section"><div><p className="section-number">{t.knowLabel}</p><h2 className="know-title">{t.knowTitle}</h2><p className="know-intro">{t.knowIntro}</p></div><div className="know-list">{t.knowItems.map(([title, text]) => <div className="know-item" key={title}><h3>{title}</h3><p>{text}</p></div>)}</div></section>
      <section id="rencanakan" className="planning-section"><div className="planning-head"><div><p className="section-number">{t.planLabel}</p><h2 className="planning-title">{t.planTitle}</h2></div><div className="planning-side"><p>{t.heroLead}</p></div></div><div className="planning-details"><Detail title={t.bestTitle} text={t.bestText} /><Detail title={t.trafficTitle} text={t.trafficText} /></div><div className="itinerary-wrap"><div><h2 className="itinerary-title">{t.itineraryTitle}</h2><p className="itinerary-lead">{t.itineraryLead}</p><p className="itinerary-lead" style={{ marginTop: 24, opacity: .75 }}>{t.stored}</p></div><div className="itinerary-grid">{t.itinerary.map(([id, title, text]) => <div className="task" key={id}><h3>{title}</h3><p>{text}</p><button className={saved.includes(id) ? "saved" : ""} onClick={() => toggleItem(id)}>{saved.includes(id) ? <><Check size={12} /> {t.saved}</> : <><Plus size={12} /> {t.save}</>}</button></div>)}<div className="saved-list"><strong>{t.saved}</strong>{savedLabels.length ? <ul>{savedLabels.map((label) => <li key={label}>{label}</li>)}</ul> : <p className="empty">{t.itineraryEmpty}</p>}</div></div></div></section>
      <section className="access-section"><div className="access-grid"><div><p className="section-number">{t.accessLabel}</p><h2 className="access-title">{t.accessTitle}</h2></div><div><p className="access-intro">{t.accessIntro}</p><div className="transport-list">{t.transport.map(([title, text]) => <div className="transport-row" key={title}><h3>{title}</h3><p>{text}</p></div>)}</div></div></div><div className="map-split"><div className="map-panel"><div><p className="eyebrow">{t.mapLabel}</p><h2>{t.mapTitle}</h2></div><p>{t.mapText}</p></div><div className="map-frame"><iframe title="Peta Monumen Selamat Datang" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7065.3624653449615!2d106.82046897695771!3d-6.195005093792665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f69fabaf5407%3A0x243d1c0d2c810c99!2sSelamat%20Datang%20Monument!5e1!3m2!1sid!2sid!4v1787032277859!5m2!1sid!2sid" loading="lazy" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen /></div></div></section>
      <section id="sekitar" className="around-section"><div className="around-head"><div><p className="section-number">{t.aroundLabel}</p><h2 className="around-title">{t.aroundTitle}</h2></div><img className="around-image" src={images.map} alt="Ilustrasi peta editorial Bundaran HI dan koridor kota" /></div><div className="around-grid">{t.aroundCards.map(([title, text]) => <article className="around-card" key={title}><h3>{title}</h3><p>{text}</p></article>)}</div><div className="services-grid"><div><p className="section-number">{t.servicesLabel}</p><h2 className="services-title">{t.servicesTitle}</h2></div><div className="service-list">{t.services.map(([title, text]) => <div className="service-row" key={title}><h3>{title}</h3><p>{text}</p></div>)}</div></div></section>
      <section id="faq" className="faq-section"><div className="faq-head"><div><p className="section-number">{t.faqLabel}</p><h2 className="faq-title">{t.faqTitle}</h2></div><img className="around-image" src={images.realAerial} alt="Tampak udara Bundaran HI dengan air mancur" /></div><div className="faq-list">{t.faqs.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div></section>
      <section id="sumber" className="sources-section"><div className="sources-layout"><div><p className="section-number">{t.sourcesLabel}</p><h2 className="sources-title">{t.sourcesTitle}</h2></div><div><p className="sources-copy">{t.sourcesText}</p><ul className="source-links">{t.sourceLinks.map(([label, href]) => <li key={href}><a href={href} target="_blank" rel="noreferrer">{label}</a></li>)}</ul></div></div></section>
    </main>
  </SiteShell>;
}

function Fact({ value, label }: { value: string; label: string }) { return <div className="fact"><div className="fact-value">{value}</div><div className="fact-label">{label}</div></div>; }
function Detail({ title, text }: { title: string; text: string }) { return <article className="detail-card"><h3>{title}</h3><p>{text}</p></article>; }

function structuredData(lang: Lang) {
  const t = copy[lang];
  return {
    attraction: { "@context": "https://schema.org", "@type": "TouristAttraction", name: "Monumen Selamat Datang", alternateName: "Bundaran HI", description: t.heroLead, address: { "@type": "PostalAddress", streetAddress: "Bundaran Hotel Indonesia, Menteng", addressLocality: "Kota Jakarta Pusat", addressRegion: "Daerah Khusus Ibukota Jakarta", postalCode: "10310", addressCountry: "ID" }, geo: { "@type": "GeoCoordinates", latitude: -6.195005093792665, longitude: 106.82046897695771 }, isAccessibleForFree: true, publicAccess: true, sameAs: "https://maps.app.goo.gl/woG2tFVduxw75efG8" },
    faq: { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: t.faqs.map(([name, text]) => ({ "@type": "Question", name, acceptedAnswer: { "@type": "Answer", text } })) }
  };
}
