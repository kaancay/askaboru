import { MapPin } from "lucide-react";
export default function Map() {
  return (
    <section id="harita" className="map-section">
      <div className="shell">
        <div className="map-heading">
          <div>
            <p className="eyebrow">YERİMİZ BELLİ, KAPIMIZ AÇIK</p>
            <h2>Antalya’da buluşalım.</h2>
          </div>
          <a
            href="https://www.google.com/maps/search/?api=1&query=Aska+Boru+Antalya"
            target="_blank"
            rel="noopener noreferrer"
            className="text-link"
          >
            <MapPin size={18} /> Yol tarifi alın
          </a>
        </div>
        <div className="map-frame">
          <iframe
            title="Aska Boru Antalya konumu"
            src="https://www.google.com/maps?q=Aska%20Boru%20Antalya&output=embed"
            width="100%"
            height="350"
            loading="lazy"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
