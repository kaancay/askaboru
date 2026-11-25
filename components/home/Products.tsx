import ProductGrid from "@/components/shared/ProductGrid";
export default function Products() {
  return (
    <section id="urunler" className="section products-section">
      <div className="shell">
        <div className="section-heading">
          <div>
            <p className="eyebrow">ÜRÜN ÇÖZÜMLERİMİZ</p>
            <h2>
              Her bağlantıda kalite.
              <br />
              <span>Her projeye bir çözüm.</span>
            </h2>
          </div>
          <p>
            GF Hakan Plastik boru ve tesisat sistemleri: sessiz boru, PVC atık
            su, PP-R temiz su ve yerden ısıtma ürünlerini keşfedin.
          </p>
        </div>
        <ProductGrid />
        <div className="product-help">
          <a href="/urunler">
            Tüm boru sistemlerini ve seçim rehberini inceleyin
          </a>
          <a href="/#iletisim">Projeniz için bilgi alın</a>
        </div>
      </div>
    </section>
  );
}
