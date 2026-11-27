import Image from "next/image";
import { FileText, Truck } from "lucide-react";
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
      <section
        className="delivery-strip"
        id="teslimat"
        aria-labelledby="delivery-heading"
      >
        <div className="shell delivery-inner">
          <div className="delivery-icon">
            <Truck size={34} strokeWidth={1.5} aria-hidden="true" />
          </div>
          <div className="delivery-copy">
            <h2 id="delivery-heading">Antalya içi gün içinde teslimat.</h2>
            <p>Projenizde eksik kalan boru ve ek parçaları tamamlayın.</p>
            <small>
              Stok ve teslimat adresine göre planlanır. Türkiye geneline
              sevkiyat yapılır.
            </small>
          </div>
          <a
            className="button button-outline"
            href="https://wa.me/905374198285?text=Merhaba%2C%20Antalya%27daki%20projem%20i%C3%A7in%20g%C3%BCn%20i%C3%A7inde%20teslimat%20bilgisi%20almak%20istiyorum."
            target="_blank"
            rel="noopener noreferrer"
          >
            Teslimat bilgisi alın
          </a>
        </div>
      </section>
    </>
  );
}
