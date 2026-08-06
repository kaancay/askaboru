import Image from "next/image";
import Container from "../layout/Container";
import { BadgeCheck, Truck, ShieldCheck, MessageCircle } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-gray-50 to-red-50">

      <Container>

        <div className="grid min-h-[88vh] items-center gap-10 py-16 lg:grid-cols-[0.9fr_1.1fr]">


          {/* Sol Alan */}

          <div>


            <span className="inline-flex rounded-full bg-red-100 px-5 py-2 text-sm font-bold text-red-500">
              GF HAKAN PLASTİK YETKİLİ BAYİSİ
            </span>



            <h1 className="mt-8 text-5xl font-black leading-tight text-neutral-900 lg:text-7xl">

              Plastik Boru
              <br />
              ve Altyapı
              <br />
              Çözümlerinde
              <br />
              Güvenilir Firmanız

            </h1>



            <p className="mt-8 max-w-xl text-lg leading-8 text-neutral-600">

              GF Hakan Plastik ürün gamı ile kaliteli, dayanıklı
              ve uzun ömürlü boru sistemleri çözümleri sunuyoruz.

            </p>



            <div className="mt-10 flex flex-wrap gap-4">


              {/* Teklif Al */}

              <a
                href="https://wa.me/905374198285?text=Merhaba%20Aska%20Boru%20ürünleriniz%20hakkında%20bilgi%20almak%20istiyorum."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-xl bg-green-500 px-8 py-4 font-bold text-white transition hover:bg-green-600"
              >

                <MessageCircle size={22} />

                Teklif Al

              </a>



              <a
                href="/pdf/gf-katalog.pdf"
                target="_blank"
                className="rounded-xl border border-gray-300 px-8 py-4 font-bold transition hover:bg-white"
              >

                Kataloğu İncele

              </a>


            </div>



            <div className="mt-12 grid gap-4">


              <div className="flex items-center gap-3">
                <BadgeCheck className="text-red-700" />
                <span className="font-medium">
                  2016'dan bu yana güvenilir hizmet
                </span>
              </div>



              <div className="flex items-center gap-3">
                <Truck className="text-red-700" />
                <span className="font-medium">
                  Türkiye geneline ürün tedariği
                </span>
              </div>



              <div className="flex items-center gap-3">
                <ShieldCheck className="text-red-700" />
                <span className="font-medium">
                  GF Hakan Plastik Yetkili Bayisi
                </span>
              </div>


            </div>


          </div>





          {/* Sağ Alan */}

          <div className="relative lg:-mr-20">


            <Image
              src="/images/hero-depo.png"
              alt="Aska Boru Depo"
              width={900}
              height={900}
              className="h-[650px] w-full rounded-[36px] object-cover shadow-2xl"
            />



            <div className="absolute -bottom-8 -left-8 rounded-3xl bg-white p-8 shadow-2xl">

              <p className="text-sm text-neutral-500">
                Kuruluş
              </p>


              <h3 className="mt-2 text-5xl font-black text-red-700">
                2016
              </h3>


            </div>


          </div>


        </div>


      </Container>


    </section>
  );
}