import Image from "next/image";
import {
  ShieldCheck,
  Truck,
  Headset,
  PackageCheck,
  FileText,
} from "lucide-react";
const features = [
  {
    icon: ShieldCheck,
    title: "Yetkili bayi güvencesi",
    text: "GF Hakan Plastik",
  },
  {
    icon: PackageCheck,
    title: "Güçlü ürün tedariği",
    text: "Projenize uygun çözümler",
  },
  {
    icon: Truck,
    title: "Türkiye geneline sevkiyat",
    text: "Antalya merkezli dağıtım",
  },
  {
    icon: Headset,
    title: "Teknik danışmanlık",
    text: "Ürün seçiminde yanınızdayız",
  },
];
export default function Hero() {
  return (
    <>
      <section id="anasayfa" className="hero">
        <Image
          className="hero-image"
          src="/images/aska-giris-1.png"
          alt="GF boru ve bağlantı elemanları"
          fill
          priority
          sizes="100vw"
        />
        <div className="hero-shade" />
        <div className="shell hero-inner">
          <div className="hero-content">
            <p className="eyebrow light">
              <span /> GF HAKAN PLASTİK YETKİLİ BAYİSİ
            </p>
            <h1>
              Plastik boruda
              <br />
              <em>güvenilir bağlantınız.</em>
            </h1>
            <p className="hero-description">
              Antalya’da GF Hakan Plastik yetkili bayiniz.
              <br className="desktop-break" /> PVC, temiz su, sessiz boru ve
              yerden ısıtma çözümleri.
            </p>
            <div className="hero-actions">
              <a href="#urunler" className="button button-blue">
                Ürünleri keşfedin
              </a>
              <a
                href="/pdf/gf-katalog.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="button button-glass"
              >
                <FileText size={18} /> Ürün kataloğu
              </a>
            </div>
            <div className="hero-signature">
              <span className="gf-mark">+GF+</span>
              <span>
                Hakan Plastik<small>Kaliteyi projenizle buluşturuyoruz.</small>
              </span>
            </div>
          </div>
          <div className="hero-caption">
            <span>BİRBİRİNE BAĞLANAN ÇÖZÜMLER</span>
            <p>
              Sağlam bir gelecek,
              <br />
              doğru bağlantıyla başlar.
            </p>
          </div>
        </div>
      </section>
      <div className="trust-strip">
        <div className="shell trust-grid">
          {features.map((f) => (
            <div className="trust-item" key={f.title}>
              <f.icon size={28} strokeWidth={1.5} />
              <div>
                <strong>{f.title}</strong>
                <span>{f.text}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
