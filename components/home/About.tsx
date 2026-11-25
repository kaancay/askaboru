import Image from "next/image";
import { Check } from "lucide-react";
export default function About() {
  return (
    <section id="hakkimizda" className="section about-section">
      <div className="shell about-grid">
        <div className="about-visual">
          <Image
            src="/images/aska-depo-yeni.png"
            alt="Antalya Aska Boru deposu ve GF Hakan Plastik tabelası"
            fill
            sizes="(max-width:900px) 100vw, 50vw"
          />
          <div className="about-stamp">
            <strong>2016</strong>
            <span>
              yılından beri
              <br />
              aynı güvenle.
            </span>
          </div>
        </div>
        <div className="about-copy">
          <p className="eyebrow">BİZ ASKA BORU’YUZ</p>
          <h2>
            İşimizin temelinde
            <br />
            <span>güven var.</span>
          </h2>
          <p>
            2016 yılından bu yana Antalya merkezli olarak, GF Hakan Plastik
            yetkili bayi kimliğimizle projeleri doğru ürünlerle buluşturuyoruz.
          </p>
          <p>
            Temiz su, atık su, sessiz boru ve yerden ısıtma sistemlerinde ürün
            tedariğinden teknik danışmanlığa kadar yanınızdayız.
          </p>
          <ul className="check-list">
            <li>
              <Check size={18} /> GF Hakan Plastik yetkili bayi güvencesi
            </li>
            <li>
              <Check size={18} /> Türkiye genelindeki projelere ürün tedariği
            </li>
            <li>
              <Check size={18} /> İhtiyaca odaklı ürün seçimi ve destek
            </li>
          </ul>
          <a href="#iletisim" className="text-link">
            Projenizi konuşalım
          </a>
        </div>
      </div>
    </section>
  );
}
