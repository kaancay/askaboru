import Image from "next/image";
import { FileText } from "lucide-react";
export default function Hero() {
  return (
    <>
      <section id="anasayfa" className="hero dealer-hero">
        <Image
          className="hero-image"
          src="/images/aska-giris-1.png"
          alt="GF Hakan Plastik boru ve bağlantı elemanları"
          fill
          preload
          sizes="100vw"
        />
        <div className="hero-shade" />
        <div className="shell hero-inner">
          <div className="hero-content">
            <p className="eyebrow light">ANTALYA · ASKA BORU</p>
            <h1>
              <span>GF Hakan Plastik</span>
              <br />
              <em>Yetkili Bayisi.</em>
            </h1>
            <p className="hero-description">
              Boru ve ek parçada doğru ürün, doğrudan tedarik.
              <br />
              2016’dan bu yana projelerinizin yanındayız.
            </p>
            <div className="hero-actions">
              <a href="#urunler" className="button button-blue">
                Ürünlerimizi inceleyin
              </a>
              <a href="#katalog" className="button button-glass">
                <FileText size={19} aria-hidden="true" /> Ürün kataloğu
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
