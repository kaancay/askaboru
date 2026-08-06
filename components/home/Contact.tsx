import Container from "../layout/Container";
import { MessageCircle, Clock, ShieldCheck, Truck } from "lucide-react";


export default function Contact() {
  return (
    <section
      id="iletisim"
      className="bg-neutral-900 py-28 text-white"
    >

      <Container>

        <div className="grid gap-12 lg:grid-cols-2">


          {/* SOL TARAF */}

          <div>

            <p className="text-sm font-bold uppercase tracking-[0.3em] text-red-500">
              İLETİŞİM
            </p>


            <h2 className="mt-4 text-5xl font-black">
              Bizimle İletişime Geçin
            </h2>


            <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-300">

              GF Hakan Plastik ürünleri hakkında bilgi almak,
              fiyat teklifi istemek veya projeleriniz için destek almak için
              bizimle iletişime geçebilirsiniz.

            </p>




            <div className="mt-10 space-y-8">


              <div>
                <h3 className="text-xl font-bold">
                  Adres
                </h3>

                <p className="mt-2 text-neutral-300">
                  Kızılarık, 2814. Sk. No:54/1
                  <br />
                  07310 Muratpaşa / Antalya
                </p>
              </div>



              <div>
                <h3 className="text-xl font-bold">
                  Telefon
                </h3>

                <a
                  href="tel:+902423381666"
                  className="mt-2 block text-neutral-300 hover:text-white"
                >
                  (0242) 338 16 66
                </a>
              </div>



              <div>
                <h3 className="text-xl font-bold">
                  WhatsApp Teklif Hattı
                </h3>

                <a
                  href="https://wa.me/905374198285"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 block text-neutral-300 hover:text-white"
                >
                  +90 537 419 82 85
                </a>
              </div>



              <div>
                <h3 className="text-xl font-bold">
                  E-posta
                </h3>

                <a
                  href="mailto:info@askaboru.com"
                  className="mt-2 block text-neutral-300 hover:text-white"
                >
                  info@askaboru.com
                </a>
              </div>


            </div>


          </div>








          {/* SAĞ TEKLİF KARTI */}


          <div className="flex items-center justify-center">


            <div className="w-full rounded-[35px] bg-white p-12 text-center text-neutral-900 shadow-2xl">


              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100 text-green-600">

                <MessageCircle size={42}/>

              </div>




              <h3 className="mt-8 text-4xl font-black">
                Hızlı Teklif Alın
              </h3>




              <p className="mx-auto mt-5 max-w-md text-neutral-600">

                WhatsApp üzerinden bize ulaşarak ürünlerimiz hakkında
                hızlı bilgi ve fiyat teklifi alabilirsiniz.

              </p>






              <a
                href="https://wa.me/905374198285?text=Merhaba%20Aska%20Boru%20ürünleriniz%20hakkında%20bilgi%20almak%20istiyorum."
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-3 rounded-xl bg-green-500 px-10 py-5 font-black text-white shadow-lg transition hover:bg-green-600"
              >

                <MessageCircle size={24}/>

                WhatsApp'tan Yaz

              </a>






              <div className="mt-10 grid gap-4 text-left">


                <div className="flex items-center gap-3 rounded-xl bg-gray-50 p-4">

                  <Clock className="text-green-600"/>

                  <span>
                    Hızlı geri dönüş
                  </span>

                </div>



                <div className="flex items-center gap-3 rounded-xl bg-gray-50 p-4">

                  <ShieldCheck className="text-green-600"/>

                  <span>
                    Güvenilir ürün desteği
                  </span>

                </div>



                <div className="flex items-center gap-3 rounded-xl bg-gray-50 p-4">

                  <Truck className="text-green-600"/>

                  <span>
                    Türkiye geneli sevkiyat
                  </span>

                </div>



              </div>


            </div>


          </div>


        </div>


      </Container>


    </section>
  );
}