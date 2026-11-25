import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { FileText, MessageCircle, Check } from "lucide-react";
import Header from "@/components/layout/Header";
import TopBar from "@/components/layout/TopBar";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/shared/FloatingWhatsApp";
import ProductGrid from "@/components/shared/ProductGrid";
import JsonLd from "@/components/shared/JsonLd";
import { products, getProduct } from "@/lib/products";
import { site } from "@/lib/site";
export const dynamicParams = false;
export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = getProduct(slug);
  if (!p) notFound();
  return {
    title: p.seoTitle,
    description: p.description,
    alternates: { canonical: `/urunler/${p.slug}` },
    openGraph: {
      title: `${p.seoTitle} | Aska Boru`,
      description: p.description,
      url: `/urunler/${p.slug}`,
      images: [{ url: `/images/products/${p.image}.png`, alt: p.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${p.seoTitle} | Aska Boru`,
      description: p.description,
      images: [`/images/products/${p.image}.png`],
    },
  };
}
export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = getProduct(slug);
  if (!p) notFound();
  const url = `${site.url}/urunler/${p.slug}`;
  const related = products
    .filter((item) => item.slug !== p.slug)
    .sort(
      (a, b) =>
        Number(b.category === p.category) - Number(a.category === p.category),
    )
    .slice(0, 3);
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: p.heading,
        description: p.description,
        inLanguage: "tr-TR",
        isPartOf: { "@id": `${site.url}/#website` },
        publisher: { "@id": `${site.url}/#business` },
        about: { "@type": "Thing", name: p.heading },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Anasayfa",
            item: site.url,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Ürünler",
            item: `${site.url}/urunler`,
          },
          { "@type": "ListItem", position: 3, name: p.title, item: url },
        ],
      },
    ],
  };
  const wa = `https://wa.me/905374198285?text=${encodeURIComponent(`Merhaba Aska Boru, ${p.title} için ürün bilgisi ve fiyat teklifi almak istiyorum.`)}`;
  return (
    <>
      <JsonLd data={schema} />
      <TopBar />
      <Header />
      <main>
        <section className="detail-hero section">
          <div className="shell">
            <nav className="breadcrumbs" aria-label="İçerik yolu">
              <a href="/">Anasayfa</a>
              <span>/</span>
              <a href="/urunler">Ürünler</a>
              <span>/</span>
              <span aria-current="page">{p.title}</span>
            </nav>
            <div className="detail-grid">
              <div className="detail-copy">
                <p className="eyebrow">{p.category} · ANTALYA</p>
                <h1>{p.heading}</h1>
                <p className="detail-intro">{p.intro}</p>
                <ul className="check-list">
                  {p.features.map((feature) => (
                    <li key={feature}>
                      <Check size={18} />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="hero-actions">
                  <a
                    href={wa}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button button-blue"
                  >
                    <MessageCircle size={18} /> Ürün için teklif alın
                  </a>
                  {p.pdf && (
                    <a
                      href={`/pdf/${p.pdf}.pdf`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="button button-outline"
                    >
                      <FileText size={18} /> Teknik katalog
                    </a>
                  )}
                </div>
                <p className="detail-dealer">
                  Aska Boru · GF Hakan Plastik Antalya Yetkili Bayisi
                </p>
              </div>
              <div className="detail-image">
                <Image
                  src={`/images/products/${p.image}.png`}
                  alt={`GF Hakan Plastik ${p.title} boru ve bağlantı elemanları`}
                  fill
                  preload
                  sizes="(max-width:900px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="section detail-body">
          <div className="shell detail-body-grid">
            <article>
              {p.sections.map((s) => (
                <section className="detail-section" key={s.title}>
                  <h2>{s.title}</h2>
                  <p>{s.text}</p>
                </section>
              ))}
              <section className="detail-section">
                <h2>{p.title} hakkında sık sorulanlar</h2>
                <div className="faq-list">
                  {p.questions.map((item) => (
                    <details key={item.q}>
                      <summary>{item.q}</summary>
                      <p>{item.a}</p>
                    </details>
                  ))}
                </div>
              </section>
            </article>
            <aside className="detail-sidebar">
              <p className="eyebrow">PROJENİZ İÇİN HAZIRLAYIN</p>
              <h2>Teklifiniz net olsun.</h2>
              <ul>
                <li>Ürün adı, seri veya ürün kodu</li>
                <li>Boru çapı, metraj ve ek parça adetleri</li>
                <li>Proje şartnamesi ve kullanım amacı</li>
                <li>Sevkiyat yapılacak il / ilçe</li>
              </ul>
              <p>
                Stok, termin ve teslimat koşulları talebiniz üzerinden
                netleştirilir.
              </p>
              <a
                className="button button-blue"
                href={wa}
                target="_blank"
                rel="noopener noreferrer"
              >
                Malzeme listenizi paylaşın
              </a>
              <a href="tel:+902423381666" className="detail-phone">
                (0242) 338 16 66
              </a>
              <a href="mailto:askaboru@gmail.com" className="detail-email">
                askaboru@gmail.com
              </a>
            </aside>
          </div>
        </section>
        <section className="section products-section">
          <div className="shell">
            <div className="section-heading">
              <div>
                <p className="eyebrow">DİĞER ÜRÜN ÇÖZÜMLERİ</p>
                <h2>
                  Projenizin devamı
                  <br />
                  <span>için inceleyin.</span>
                </h2>
              </div>
              <a className="text-link" href="/urunler">
                Tüm ürün grupları
              </a>
            </div>
            <ProductGrid items={related} />
          </div>
        </section>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
