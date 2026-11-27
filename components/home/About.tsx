import Image from "next/image";
import { Check } from "lucide-react";
export default function About() {
  return (
    <section id="hakkimizda" className="section about-section">
      <div className="shell about-grid">
        <figure className="about-figure">
          <div className="about-visual">
            <Image
              src="/images/hakkimizda-2.png"
              alt="Modern bir lojistik yapısının temsili görünümü"
              width={1672}
              height={941}
              sizes="(max-width:900px) 100vw, 50vw"
            />
          </div>
          <figcaption>Tedarik ve lojistik · Temsili görsel</figcaption>
        </figure>
        <div className="about-copy">
          <p className="eyebrow">2016’DAN BU YANA · ASKA BORU</p>
          <h2>
            Antalya’daki
            <br />
            <span>çözüm ortağınız.</span>
          </h2>
          <p>
            GF Hakan Plastik yetkili bayisi olarak temiz su, atık su, sessiz
            boru ve yerden ısıtma sistemlerinde ürün tedariği sağlıyoruz.
          </p>
          <ul className="check-list">
            <li>
              <Check size={18} aria-hidden="true" /> Toptan boru ve ek parça
              tedariği
            </li>
            <li>
              <Check size={18} aria-hidden="true" /> Ürün seçiminde doğrudan
              destek
            </li>
            <li>
              <Check size={18} aria-hidden="true" /> Antalya içi teslimat,
              Türkiye geneline sevkiyat
            </li>
          </ul>
          <a href="#iletisim" className="text-link">
            Bizimle iletişime geçin
          </a>
        </div>
      </div>
    </section>
  );
}
