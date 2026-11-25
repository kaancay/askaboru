import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import TopBar from "@/components/layout/TopBar";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/shared/FloatingWhatsApp";
import ProductGrid from "@/components/shared/ProductGrid";
import JsonLd from "@/components/shared/JsonLd";
import { products } from "@/lib/products";
import { site } from "@/lib/site";
export const metadata: Metadata = {
  title: "Plastik Boru ve GF Hakan Plastik Ürünleri",
  description:
    "Antalya Aska Boru’da GF Hakan Plastik ürünleri: Silenta sessiz boru, PVC atık su, Aquasystem PP-R ve yerden ısıtma. Teknik katalogları inceleyin.",
  alternates: { canonical: "/urunler" },
  openGraph: {
    title: "Plastik Boru Sistemleri | Aska Boru Antalya",
    description:
      "GF Hakan Plastik boru ve tesisat ürünleri, teknik kataloglar ve proje bazlı teklif.",
    url: "/urunler",
    images: ["/images/aska-giris-1.png"],
  },
};
export default function ProductIndex() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${site.url}/urunler#webpage`,
        url: `${site.url}/urunler`,
        name: "Plastik Boru Sistemleri",
        inLanguage: "tr-TR",
        isPartOf: { "@id": `${site.url}/#website` },
        publisher: { "@id": `${site.url}/#business` },
        mainEntity: {
          "@type": "ItemList",
          itemListElement: products.map((p, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: p.title,
            url: `${site.url}/urunler/${p.slug}`,
          })),
        },
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
        ],
      },
    ],
  };
  return (
    <>
      <JsonLd data={schema} />
      <TopBar />
      <Header />
      <main>
        <section className="product-index-hero">
          <div className="shell">
            <nav className="breadcrumbs" aria-label="İçerik yolu">
              <a href="/">Anasayfa</a>
              <span>/</span>
              <span aria-current="page">Ürünler</span>
            </nav>
            <p className="eyebrow light">
              GF HAKAN PLASTİK · ANTALYA YETKİLİ BAYİ
            </p>
            <h1>
              Plastik boru sistemleri.
              <br />
              <span>İhtiyacınıza uygun çözümler.</span>
            </h1>
            <p>
              Temiz su, atık su, ses yalıtımı ve ısıtma ihtiyaçları için ürün
              ailelerini karşılaştırın. Teknik kataloglara ulaşın, malzeme
              listeniz için teklif isteyin.
            </p>
          </div>
        </section>
        <section className="section products-section">
          <div className="shell">
            <ProductGrid headingLevel="h2" />
          </div>
        </section>
        <section className="section">
          <div className="shell">
            <div className="section-heading">
              <div>
                <p className="eyebrow">HANGİ BORU SİSTEMİ?</p>
                <h2>
                  Seçime kullanım
                  <br />
                  <span>amacından başlayın.</span>
                </h2>
              </div>
              <p>
                Ürünün malzemesi kadar çalışma koşulları, montaj yöntemi ve
                proje şartnamesi de önemlidir.
              </p>
            </div>
            <div className="selection-table-wrap">
              <table className="selection-table">
                <caption>
                  Boru sistemlerini kullanım ihtiyacına göre karşılaştırın
                </caption>
                <thead>
                  <tr>
                    <th>İhtiyaç</th>
                    <th>İncelenecek ürün ailesi</th>
                    <th>Teklif için hazırlayın</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Ses yalıtımlı atık su hattı</td>
                    <td>
                      <a href="/urunler/silenta-3a">Silenta 3A</a>,{" "}
                      <a href="/urunler/silenta-premium">Premium</a>,{" "}
                      <a href="/urunler/silenta-fr">FR</a>
                    </td>
                    <td>Akustik hedef, şartname, çap ve ek parçalar</td>
                  </tr>
                  <tr>
                    <td>PVC atık su tesisatı</td>
                    <td>
                      <a href="/urunler/pvc-atik-su-boru">
                        PVC atık su boru ve ek parçaları
                      </a>
                    </td>
                    <td>Uygulama alanı, boru çapı, boy ve parça adetleri</td>
                  </tr>
                  <tr>
                    <td>Sıcak ve soğuk su tesisatı</td>
                    <td>
                      <a href="/urunler/aquasystem-ppr-boru">
                        Aquasystem PP-R / PP-RCT
                      </a>
                    </td>
                    <td>Ürün serisi, çalışma koşulları ve metraj</td>
                  </tr>
                  <tr>
                    <td>Sulu yerden ısıtma</td>
                    <td>
                      <a href="/urunler/yerden-isitma-sistemleri">
                        Yerden ısıtma ürünleri
                      </a>
                    </td>
                    <td>Mekanik proje, boru özellikleri ve malzeme listesi</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="detail-note">
              <h3>
                Plastik boru fiyatları için net bir malzeme listesi hazırlayın
              </h3>
              <p>
                “Boru fiyatı” tek başına bir ürün tanımlamaz. Marka, seri, çap,
                metraj ve ek parça adetleri fiyatın hazırlanmasında önem taşır.
                Mevcut bir hattı tamamlıyorsanız ürün kodunu veya üzerindeki
                bilgileri de paylaşın. Antalya içi ve Türkiye geneli sevkiyat
                talepleri teslimat konumuna göre birlikte değerlendirilir.
              </p>
              <a className="button button-blue" href="/#iletisim">
                Malzeme listeniz için teklif alın
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
