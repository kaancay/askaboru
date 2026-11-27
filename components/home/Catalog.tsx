import Image from "next/image";
import { FileText, Download } from "lucide-react";
export default function Catalog() {
  return (
    <section
      id="katalog"
      className="catalog-section"
      aria-labelledby="catalog-heading"
    >
      <div className="shell catalog-layout">
        <div className="catalog-inner">
          <div className="catalog-icon">
            <FileText size={38} strokeWidth={1.5} aria-hidden="true" />
          </div>
          <div className="catalog-copy">
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
        <figure className="catalog-poster">
          <Image
            src="/images/hakan-plastik.jpg"
            alt="GF Hakan Plastik boru ve bağlantı elemanları"
            width={1200}
            height={1200}
            sizes="(max-width:650px) 320px, 240px"
          />
        </figure>
      </div>
    </section>
  );
}
