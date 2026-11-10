import Image from "next/image";
import Container from "../layout/Container";
import {
  ShieldCheck,
  Truck,
  Award,
  Headset,
} from "lucide-react";


const cards = [
  {
    icon: ShieldCheck,
    title: "GF Hakan Plastik",
    text: "Yetkili bayi güvencesi",
  },
  {
    icon: Truck,
    title: "Türkiye Geneli",
    text: "Güvenilir ürün tedariği",
  },
  {
    icon: Award,
    title: "Kaliteli Ürün",
    text: "Uzun ömürlü çözümler",
  },
  {
    icon: Headset,
    title: "Profesyonel Destek",
    text: "Teknik danışmanlık",
  },
];


export default function About() {
  return (
    <section
      id="hakkimizda"
      className="relative overflow-hidden border-t border-[#39A9E8]/40 bg-[#003B5C]"
    >


      {/* Arka Plan */}

      <div className="absolute inset-0">


        <Image
          src="/images/hakkimizda-2.png"
          alt="Aska Boru"
          fill
          sizes="100vw"
          className="object-cover"
        />


        <div className="absolute inset-0 bg-gradient-to-r from-[#003B5C]/95 via-[#005B9A]/80 to-[#003B5C]/80" />


      </div>





      <Container>

        <div className="relative z-10 flex min-h-[760px] items-center">


          <div className="max-w-4xl py-24 text-white">


            <span className="inline-flex rounded-full border border-blue-200/40 bg-[#005B9A] px-7 py-3 text-sm font-black shadow-xl">

              HAKKIMIZDA

            </span>



            <h2 className="mt-8 text-5xl font-black leading-tight lg:text-7xl">


              2016'dan Bugüne
              <br />

              Güvenilir Çözüm
              <br />

              <span className="text-[#39A9E8]">
                Ortağınız
              </span>


            </h2>




            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/90">

              Aska Boru olarak GF Hakan Plastik yetkili bayisi
              kimliğimizle temiz su, atık su, sessiz boru ve
              yerden ısıtma sistemlerinde kaliteli çözümler sunuyoruz.

            </p>




            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/80">

              Güçlü stok yapımız, hızlı sevkiyat ağımız ve
              profesyonel desteğimiz ile Türkiye genelindeki
              projelere güvenilir ürün tedariği sağlıyoruz.

            </p>




            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">


              {cards.map((item)=>{

                const Icon = item.icon;


                return (

                  <div
                    key={item.title}
                    className="rounded-2xl border border-white/20 bg-[#003B5C]/60 p-5 backdrop-blur-md shadow-xl"
                  >

                    <Icon
                      size={32}
                      className="text-[#39A9E8]"
                    />


                    <h3 className="mt-4 font-black">
                      {item.title}
                    </h3>


                    <p className="mt-2 text-sm text-white/80">
                      {item.text}
                    </p>


                  </div>

                );

              })}


            </div>


          </div>


        </div>


      </Container>


    </section>
  );
}
