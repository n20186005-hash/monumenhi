/**
 * TopicPage: data-driven long-tail page for Monumen Selamat Datang / Bundaran HI.
 * Renders breadcrumb, H1, sections, FAQ + FAQPage JSON-LD, and internal related links.
 */
import SiteShell, { useLanguage } from "@/components/SiteShell";
import { getTopic, topicSlug, type TopicContent } from "@/lib/topics";
import { languagePath } from "@/const";

export default function TopicPage({ topicId, group }: { topicId: string; group?: string }) {
  const { lang, t } = useLanguage();
  const topic = getTopic(lang, topicId);
  if (!topic) return null;
  const home = languagePath(lang);
  const relatedLinks = topic.related
    .map((id) => ({ id, slug: topicSlug(lang, id), title: getTopic(lang, id)?.title }))
    .filter((r) => r.slug && r.title) as { id: string; slug: string; title: string }[];

  return (
    <SiteShell page={topicSlug(lang, topicId) || ""}>
      <main className="topic-page">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(topicSchema(lang, topicId, topic, home)) }} />
        <div className="topic-inner">
          <nav className="topic-breadcrumb" aria-label={lang === "id" ? "Lokasi halaman" : "Breadcrumb"}>
            <a href={home}>{lang === "id" ? "Beranda" : "Home"}</a>
            <span aria-hidden="true">/</span>
            <span>{topic.title}</span>
          </nav>
          <header className="topic-head">
            <p className="section-number">{topic.eyebrow}</p>
            <h1>{topic.title}</h1>
            <p className="topic-lead">{topic.lead}</p>
            <p className="topic-updated">{topic.updated}</p>
          </header>

          <div className="topic-body">
            {topic.sections.map((section, i) => (
              <section className="topic-section" key={i}>
                <p className="section-number">{String(i + 1).padStart(2, "0")}</p>
                <div>
                  <h2 className="side-title">{section.heading}</h2>
                  {section.body.map((p, j) => <p key={j}>{p}</p>)}
                  {section.bullets && (
                    <ul className="topic-bullets">
                      {section.bullets.map((b, k) => <li key={k}>{b}</li>)}
                    </ul>
                  )}
                </div>
              </section>
            ))}
          </div>

          {topic.faqs.length > 0 && (
            <section className="topic-faq">
              <p className="section-number">{lang === "id" ? "Pertanyaan umum" : "Common questions"}</p>
              <div className="faq-list">
                {topic.faqs.map((f, i) => (
                  <details key={i}>
                    <summary>{f.q}</summary>
                    <p>{f.a}</p>
                  </details>
                ))}
              </div>
            </section>
          )}

          {relatedLinks.length > 0 && (
            <section className="topic-related">
              <p className="section-number">{lang === "id" ? "Bacaan lanjutan" : "Related reading"}</p>
              <div className="related-grid">
                {relatedLinks.map((r) => (
                  <a key={r.id} href={languagePath(lang, r.slug)} className="related-card">
                    <h3>{r.title}</h3>
                  </a>
                ))}
              </div>
            </section>
          )}

          <section className="topic-sources">
            <h2 className="section-number">{t.sourcesLabel}</h2>
            <p className="topic-sources-copy">{lang === "id"
              ? "Halaman ini adalah panduan informasi independen, bukan situs resmi. Riwayat merujuk Galeri Nasional Indonesia; lokasi merujuk Pemerintah DKI Jakarta; informasi operator dan peta diverifikasi 19 Oktober 2026. Akses, jam, dan layanan harus dikonfirmasi kembali."
              : "This is an independent information guide, not an official site. History refers to the National Gallery of Indonesia; location context to Jakarta’s provincial government; operator and map information was checked on 19 October 2026. Access, hours, and services still require confirmation."}</p>
            <ul className="source-links">
              {t.sourceLinks.map(([label, href]) => (
                <li key={href}><a href={href} target="_blank" rel="noreferrer">{label}</a></li>
              ))}
            </ul>
          </section>
        </div>
      </main>
    </SiteShell>
  );
}

function topicSchema(lang: "id" | "en", topicId: string, topic: TopicContent, home: string) {
  const url = "https://monumenhi.com" + languagePath(lang, topicSlug(lang, topicId) || "");
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": url + "#webpage",
        url,
        name: topic.title,
        description: topic.lead,
        inLanguage: lang === "id" ? "id-ID" : "en-US",
        isPartOf: { "@id": "https://monumenhi.com#website" },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: lang === "id" ? "Beranda" : "Home", item: home },
          { "@type": "ListItem", position: 2, name: topic.title, item: url },
        ],
      },
      topic.faqs.length
        ? {
            "@type": "FAQPage",
            mainEntity: topic.faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }
        : undefined,
    ].filter(Boolean),
  };
}
