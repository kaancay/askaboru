import { Phone, MapPin, Truck } from "lucide-react";
import Container from "./Container";

export default function TopBar() {
  return (
    <div className="hidden bg-red-700 text-white lg:block">
      <Container>
        <div className="flex h-11 items-center justify-between text-sm">

          <div className="flex items-center gap-8">

            <div className="flex items-center gap-2">
              <Phone size={16} />
              <span>Telefon eklenecek</span>
            </div>

            <div className="flex items-center gap-2">
              <MapPin size={16} />
              <span>Antalya</span>
            </div>

          </div>

          <div className="flex items-center gap-2">
            <Truck size={16} />
            <span>Türkiye Geneline Sevkiyat</span>
          </div>

        </div>
      </Container>
    </div>
  );
}