import { FileText, Download } from "lucide-react";
export default function Catalog() {
  return (
    <section
      id="katalog"
      className="catalog-section catalog-simple"
      aria-labelledby="catalog-heading"
    >
      <div className="shell catalog-simple-inner">
        <div className="catalog-simple-icon">
          <FileText size={30} strokeWidth={1.5} aria-hidden="true" />
        </div>
        <div className="catalog-simple-copy">
          <p className="eyebrow">GF HAKAN PLASTİK</p>
          <h2 id="catalog-heading">Ürün kataloğu.</h2>
          <p>Ürünler, ölçüler ve teknik detaylar tek PDF’te.</p>
        </div>
        <a
          href="/pdf/gf-katalog.pdf"
          className="button button-blue"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Download size={18} aria-hidden="true" /> Kataloğu açın{" "}
          <span className="pdf-label">PDF</span>
        </a>
      </div>
    </section>
  );
}
