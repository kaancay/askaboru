import { Phone, MapPin, Truck, MessageCircle } from "lucide-react";
import Container from "./Container";

export default function TopBar() {

  return (

    <div className="bg-[#005B9A] text-white">

      <Container>

        <div
          className="
          flex
          items-center
          justify-center
          py-3
          text-xs
          font-semibold
          md:justify-between
          md:text-sm
          "
        >


          {/* Telefon */}

          <a
            href="tel:+902423381666"
            className="
            flex
            items-center
            gap-2
            hover:text-blue-100
            "
          >

            <Phone size={15} />

            <span>
              (0242) 338 16 66
            </span>

          </a>





          {/* WhatsApp - Sadece Masaüstü */}

          <a
            href="https://wa.me/905374198285"
            target="_blank"
            rel="noopener noreferrer"
            className="
            hidden
            items-center
            gap-2
            hover:text-blue-100
            md:flex
            "
          >

            <MessageCircle size={15} />

            <span>
              WhatsApp: +90 537 419 82 85
            </span>

          </a>







          {/* Konum - Sadece Masaüstü */}

          <a
            href="#harita"
            className="
            hidden
            items-center
            gap-2
            hover:text-blue-100
            md:flex
            "
          >

            <MapPin size={15} />

            <span>
              Muratpaşa / Antalya (Haritada Gör)
            </span>

          </a>








          {/* Sevkiyat - Sadece Masaüstü */}

          <div
            className="
            hidden
            items-center
            gap-2
            md:flex
            "
          >

            <Truck size={15} />

            <span>
              Türkiye Geneline Sevkiyat
            </span>

          </div>




        </div>


      </Container>


    </div>

  );

}