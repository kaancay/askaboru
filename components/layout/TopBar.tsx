import { Phone, MapPin, Truck, MessageCircle } from "lucide-react";
import { site } from "@/lib/site";
export default function TopBar() {
  return (
    <div className="topbar">
      <div className="shell topbar-inner">
        <a href="tel:+902423381666">
          <Phone size={15} aria-hidden="true" /> (0242) 338 16 66
        </a>
        <a
          href="https://wa.me/905374198285"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MessageCircle size={15} aria-hidden="true" /> WhatsApp: +90 537 419
          82 85
        </a>
        <a
          className="topbar-location"
          href={site.directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <MapPin size={15} aria-hidden="true" /> Muratpaşa / Antalya{" "}
          <span className="topbar-map-label">· Haritada gör</span>
        </a>
        <a className="topbar-shipping" href="/#teslimat">
          <Truck size={16} aria-hidden="true" /> Türkiye geneline sevkiyat
        </a>
      </div>
    </div>
  );
}
