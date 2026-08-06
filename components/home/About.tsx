import Image from "next/image";
import {
  ShieldCheck,
  Truck,
  Settings,
  Layers,
} from "lucide-react";

import Container from "../layout/Container";
import SectionTitle from "../shared/SectionTitle";


const cards = [
  {
    title: "GF Hakan Plastik",
    text: "Yetkili bayi güvencesi",
    icon: ShieldCheck,
  },
  {
    title: "Türkiye Geneli",
    text: "Güvenli ürün tedariği",
    icon: Truck,
  },
  {
    title: "Profesyonel Destek",
    text: "Doğru ürün danışmanlığı",
    icon: Settings,
  },
  {
    title: "Güvenilir Çözümler",
    text: "Altyapı ve üstyapı sistemleri",
    icon: Layers,
  },
];


export default function About() {
  return (
    <section
      id="hakkimizda"
      className="relative scroll-mt-24 overflow-hidden bg-gradient-to-b from-white via-red-50/30 to-white py-28"
    >

      {/* Arka Plan Logo */}

      <div className="pointer-events-none absolute left-1/2 top-20 -translate-x-1/2 opacity-[0.04]">

        <Image
          src="/logos/aska-logo-round.png"
          alt=""
          width={600}
          height={600}
        />

      </div>



      <Container>


        <SectionTitle
          badge="HAKKIMIZDA"
          title="2016'dan Bugüne Güvenilir Çözüm Ortağınız"
          description="Aska Boru olarak GF Hakan Plastik ürünleriyle altyapı, üstyapı ve tesisat projelerinde kaliteli, güvenilir ve uzun ömürlü çözümler sunuyoruz."
        />



        {/* Büyük Görsel */}

        <div className="mx-auto mt-16 max-w-6xl">

          <div className="rounded-[40px] bg-white p-4 shadow-2xl">


            <Image
              src="/images/aska.hakkimizda.png"
              alt="Aska Boru Hakkımızda"
              width={1400}
              height={900}
              className="w-full rounded-[32px] object-contain"
            />


          </div>

        </div>





        {/* Açıklama Alanı */}

        <div className="mx-auto mt-20 max-w-5xl text-center">


          <h3 className="text-4xl font-black text-neutral-900">
            Kalite, Güven ve Profesyonel Hizmet
          </h3>


          <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-red-700"></div>




          <p className="mt-8 text-lg leading-8 text-neutral-600">

            Antalya merkezli Aska Boru,
            <strong className="font-bold text-neutral-900">
              {" "}GF Hakan Plastik yetkili bayisi
            </strong>
            {" "}olarak temiz su, atık su, sessiz boru ve yerden ısıtma sistemlerinde profesyonel çözümler sunmaktadır.

          </p>




          <p className="mt-6 text-lg leading-8 text-neutral-600">

            Güçlü stok yapımız, hızlı sevkiyat ağımız ve teknik desteğimiz ile
            Türkiye genelindeki projelere güvenilir ürün tedariği sağlamaya devam ediyoruz.

          </p>


        </div>







        {/* Bilgi Kartları */}


        <div className="mx-auto mt-14 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-4">


          {cards.map((card) => {

            const Icon = card.icon;


            return (

              <div
                key={card.title}
                className="group rounded-3xl border border-red-100 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-red-300 hover:shadow-xl"
              >


                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-100 text-red-700 transition duration-300 group-hover:bg-red-700 group-hover:text-white">

                  <Icon size={26} />

                </div>




                <h4 className="mt-6 text-xl font-bold text-neutral-900 group-hover:text-red-700">

                  {card.title}

                </h4>




                <p className="mt-3 text-neutral-600">

                  {card.text}

                </p>



              </div>

            );

          })}


        </div>



      </Container>


    </section>
  );
}