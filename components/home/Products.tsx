import ProductGrid from "@/components/shared/ProductGrid";
export default function Products() {
  return (
    <section id="urunler" className="section products-section">
      <div className="shell">
        <div className="section-heading">
          <div>
            <p className="eyebrow">GF HAKAN PLASTİK</p>
            <h2>Ürünlerimiz.</h2>
          </div>
          <p>Projenize uygun boru ve ek parçaları keşfedin.</p>
        </div>
        <ProductGrid />
        <div className="product-help">
          <a href="/urunler">Tüm ürünleri inceleyin</a>
        </div>
      </div>
    </section>
  );
}
