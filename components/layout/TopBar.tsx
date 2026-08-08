import { Phone, MapPin, Truck, MessageCircle } from "lucide-react";
import Container from "./Container";

export default function TopBar() {

  return (

    <div className="bg-[#005B9A] text-white">


      <Container>


        <div
          className="
          grid
          grid-cols-2
          gap-y-3
          py-3
          text-xs
          font-semibold
          md:flex
          md:items-center
          md:justify-between
          md:gap-5
          md:py-3
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

              (0242)
              <br className="md:hidden" />
              {" "}338 16 66

            </span>


          </a>







          {/* WhatsApp */}


          <a

            href="https://wa.me/905374198285"

            target="_blank"

            rel="noopener noreferrer"

            className="
            flex
            items-center
            gap-2
            hover:text-blue-100
            "

          >

            <MessageCircle size={15} />


            <span>

              WhatsApp:
              <br className="md:hidden" />
              {" "}+90 537 419 82 85

            </span>


          </a>








          {/* Konum */}



          <a

            href="#harita"

            className="
            flex
            items-center
            gap-2
            hover:text-blue-100
            "

          >

            <MapPin size={15} />


            <span>

              Muratpaşa /
              <br className="md:hidden" />
              {" "}Antalya

              <span className="hidden md:inline">

                {" "}(Haritada Gör)

              </span>

            </span>


          </a>









          {/* Sevkiyat */}



          <div

            className="
            flex
            items-center
            gap-2
            "

          >

            <Truck size={15} />


            <span>

              Türkiye
              <br className="md:hidden" />
              {" "}Geneline Sevkiyat

            </span>


          </div>





        </div>


      </Container>


    </div>


  );

}