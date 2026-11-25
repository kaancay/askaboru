import { Phone, MapPin, Truck } from "lucide-react";
export default function TopBar() {
  return (
    <div className="topbar">
      <div className="shell topbar-inner">
        <span className="topbar-location">
          <MapPin size={14} /> Antalya’dan Türkiye’nin her yerine
        </span>
        <div>
          <span className="topbar-shipping">
            <Truck size={15} /> Türkiye geneline sevkiyat
          </span>
          <a href="tel:+902423381666">
            <Phone size={14} /> (0242) 338 16 66
          </a>
        </div>
      </div>
    </div>
  );
}
