import Image from "next/image";
import { FileText, Download } from "lucide-react";
export default function Catalog() {
  return (
    <section
      id="katalog"
      className="catalog-section catalog-feature"
      aria-labelledby="catalog-heading"
    >
      <div className="shell catalog-feature-grid">
        <div className="catalog-feature-copy">
          <p className="eyebrow">GF HAKAN PLASTİK</p>
          <div className="catalog-document-mark">
            <FileText size={30} strokeWidth={1.5} aria-hidden="true" />
            <span>
              ÜRÜN KATALOĞU <small>PDF · Teknik doküman</small>
            </span>
          </div>
          <h2 id="catalog-heading">
            Aradığınız ürün.
            <br />
            <span>Tüm teknik detaylarıyla.</span>
          </h2>
          <p>Boru, ek parça ve ölçü bilgilerine tek katalogdan ulaşın.</p>
          <a
            href="/pdf/gf-katalog.pdf"
            className="button button-blue"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Download size={20} aria-hidden="true" /> Ürün kataloğunu açın{" "}
            <span className="pdf-label">PDF</span>
          </a>
          <a className="text-link catalog-help" href="/#iletisim">
            Ürün seçiminde destek alın
          </a>
        </div>
        <figure className="catalog-poster">
          <Image
            src="/images/hakan-plastik.jpg"
            alt="GF Hakan Plastik boru ve ek parçaları: İşinizi kolaylaştırır, veriminizi artırır"
            width={1200}
            height={1200}
            sizes="(max-width:900px) 100vw, 45vw"
          />
        </figure>
      </div>
    </section>
  );
}
