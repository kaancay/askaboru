import { Clock3, MapPin, Phone } from "lucide-react";
import { site } from "@/lib/site";
export default function Map() {
  return (
    <section
      id="harita"
      className="map-section"
      aria-labelledby="dealer-heading"
    >
      <div className="shell">
        <div className="map-heading">
          <div>
            <p className="eyebrow">ANTALYA · ASKA BORU</p>
            <h2 id="dealer-heading">GF Hakan Plastik Antalya bayiniz.</h2>
          </div>
          <a
            href={site.directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-link"
          >
            <MapPin size={18} /> Yol tarifi alın
          </a>
        </div>
        <p className="dealer-intro">
          Antalya’da plastik boru ve tesisat malzemesi arayan inşaat, tesisat ve
          proje firmalarını doğru ürünle buluşturuyoruz. GF Hakan Plastik
          yetkili bayisi olarak önceliğimiz kurumsal ve toptan talepleriniz.
        </p>
        <div className="dealer-grid">
          <div className="dealer-card">
            <h3>Antalya merkezimiz</h3>
            <div className="dealer-info">
              <MapPin size={22} aria-hidden="true" />
              <address>
                Kızılarık, 2814. Sk. No:54/1
                <br />
                07310 Muratpaşa / Antalya
              </address>
            </div>
            <div className="dealer-info">
              <Clock3 size={22} aria-hidden="true" />
              <dl className="dealer-hours">
                <div>
                  <dt>Pazartesi – Cuma</dt>
                  <dd>08:00 – 18:00</dd>
                </div>
                <div>
                  <dt>Cumartesi</dt>
                  <dd>08:00 – 13:00</dd>
                </div>
              </dl>
            </div>
            <a className="button button-blue" href="tel:+902423381666">
              <Phone size={18} aria-hidden="true" /> (0242) 338 16 66
            </a>
            <p className="dealer-visit-note">
              Gelmeden önce ürün serisi, çap ve miktarı paylaşarak güncel stok
              ve teslimat bilgisi alabilirsiniz.
            </p>
          </div>
          <div className="map-frame">
            <iframe
              title="Aska Boru GF Hakan Plastik Antalya bayisi konumu"
              src="https://www.google.com/maps?cid=3266340276825931263&output=embed"
              width="100%"
              height="390"
              loading="lazy"
              allowFullScreen
            />
          </div>
        </div>
        <div className="dealer-products">
          <div>
            <h3>Malzeme listenizle teklif isteyin.</h3>
            <p>
              Boru metrajı, ek parça adedi ve teslimat konumunu paylaşın; ürün
              ve sevkiyat ihtiyacınızı birlikte değerlendirelim.
            </p>
          </div>
          <ul aria-label="Antalya bayimizden bilgi alabileceğiniz ürünler">
            <li>
              <a href="/urunler/pvc-atik-su-boru">
                PVC atık su boruları ve ek parçaları
              </a>
            </li>
            <li>
              <a href="/urunler/aquasystem-ppr-boru">
                Aquasystem PP-R / PP-RCT temiz su sistemleri
              </a>
            </li>
            <li>
              <a href="/urunler/silenta-3a">Silenta sessiz boru sistemleri</a>
            </li>
            <li>
              <a href="/urunler/yerden-isitma-sistemleri">
                Yerden ısıtma sistemleri
              </a>
            </li>
          </ul>
          <a className="button button-outline" href="/#iletisim">
            Teklif talebinizi hazırlayın
          </a>
        </div>
        <div className="dealer-feedback">
          <p>Bizimle çalıştınız mı? Deneyiminizi paylaşabilirsiniz.</p>
          <a
            className="text-link"
            href={site.reviewUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Google’da yorum yazın
          </a>
        </div>
      </div>
    </section>
  );
}
