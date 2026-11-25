import { FileText, Download } from "lucide-react";
export default function Catalog() {
  return (
    <section id="katalog" className="catalog-section">
      <div className="shell catalog-inner">
        <div className="catalog-icon">
          <FileText size={38} strokeWidth={1.2} />
        </div>
        <div className="catalog-copy">
          <p className="eyebrow">TEKNİK DOKÜMANLAR</p>
          <h2>Tüm ürün ailesi, tek katalogda.</h2>
          <p>
            Ürün seçenekleri, sistem bilgileri ve teknik detaylar elinizin
            altında.
          </p>
        </div>
        <a
          href="/pdf/gf-katalog.pdf"
          className="button button-blue"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Download size={18} /> Kataloğu açın{" "}
          <span className="pdf-label">PDF</span>
        </a>
      </div>
    </section>
  );
}
