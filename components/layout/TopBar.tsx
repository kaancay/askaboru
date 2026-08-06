import { Phone, MapPin, Truck, MessageCircle } from "lucide-react";
import Container from "./Container";

export default function TopBar() {
  return (
    <div className="hidden bg-red-700 text-white lg:block">
      <Container>
        <div className="flex h-11 items-center justify-between text-sm">

          <div className="flex items-center gap-5">

            <div className="flex items-center gap-2">
              <Phone size={15} />
              <span>(0242) 338 16 66</span>
            </div>

            <div className="flex items-center gap-2">
              <MessageCircle size={15} />
              <span>
                WhatsApp: +90 537 419 82 85
              </span>
            </div>

          </div>


          <div className="flex items-center gap-5">

            <a
              href="#harita"
              className="flex items-center gap-2 hover:text-red-100"
            >
              <MapPin size={15} />
              <span>
                Muratpaşa / Antalya (Haritada Gör)
              </span>
            </a>


            <div className="flex items-center gap-2">
              <Truck size={15} />
              <span>
                Türkiye Geneline Sevkiyat
              </span>
            </div>

          </div>

        </div>
      </Container>
    </div>
  );
}