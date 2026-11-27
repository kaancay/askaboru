import { Clock3, MapPin, Phone } from "lucide-react";
import { site } from "@/lib/site";
export default function Map() {
  return (
    <section
      id="harita"
      className="map-section visit-section"
      aria-labelledby="dealer-heading"
    >
      <div className="shell">
        <div className="map-heading">
          <div>
            <p className="eyebrow">GF HAKAN PLASTİK · ANTALYA BAYİSİ</p>
            <h2 id="dealer-heading">
              Bizi <span>ziyaret edin.</span>
            </h2>
          </div>
        </div>
        <div className="dealer-grid">
          <div className="dealer-card">
            <h3>Aska Boru · Antalya</h3>
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
                <div>
                  <dt>Pazar</dt>
                  <dd>Kapalı</dd>
                </div>
              </dl>
            </div>
            <a
              className="button button-blue"
              href={site.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MapPin size={18} aria-hidden="true" /> Yol tarifi alın
            </a>
            <a className="dealer-call" href="tel:+902423381666">
              <Phone size={18} aria-hidden="true" /> (0242) 338 16 66
            </a>
            <p className="dealer-visit-note">
              Ziyaretiniz öncesinde bizimle iletişime geçebilirsiniz.
            </p>
          </div>
          <div className="map-frame">
            <iframe
              title="Aska Boru GF Hakan Plastik Antalya bayisi konumu"
              src="https://www.google.com/maps?cid=3266340276825931263&output=embed"
              width="100%"
              height="420"
              loading="lazy"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
