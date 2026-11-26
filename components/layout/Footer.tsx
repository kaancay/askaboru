import Image from "next/image";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="shell">
        <div className="footer-grid">
          <div className="footer-brand">
            <Image
              src="/logos/aska-logo.png"
              alt="Aska Boru"
              width={620}
              height={288}
            />
            <p>
              2016’dan bu yana doğru ürün,
              <br />
              güçlü tedarik, güvenilir bağlantılar.
            </p>
            <span>GF Hakan Plastik Yetkili Bayisi</span>
          </div>
          <div>
            <h3>Keşfedin</h3>
            <a href="/#hakkimizda">Hakkımızda</a>
            <a href="/urunler">Ürünlerimiz</a>
            <a href="/#katalog">Ürün kataloğu</a>
            <a href="/#harita">Antalya bayimiz ve ulaşım</a>
            <a href="/#iletisim">İletişim</a>
          </div>
          <div>
            <h3>Ürün çözümleri</h3>
            <a href="/urunler/silenta-3a">Sessiz boru sistemleri</a>
            <a href="/urunler/pvc-atik-su-boru">PVC atık su sistemleri</a>
            <a href="/urunler/aquasystem-ppr-boru">Temiz su sistemleri</a>
            <a href="/urunler/yerden-isitma-sistemleri">Yerden ısıtma</a>
          </div>
          <div>
            <h3>Bize ulaşın</h3>
            <a href="tel:+902423381666">(0242) 338 16 66</a>
            <a href="mailto:info@askaboru.com">info@askaboru.com</a>
            <a href="mailto:askaboru@gmail.com">askaboru@gmail.com</a>
            <p>
              Pazartesi – Cuma: 08:00 – 18:00
              <br />
              Cumartesi: 08:00 – 13:00
            </p>
          </div>
        </div>
        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} Aska Boru. Tüm hakları saklıdır.
          </span>
          <span>Muratpaşa, Antalya · Türkiye</span>
        </div>
      </div>
    </footer>
  );
}
