import Container from "../layout/Container";
import SectionTitle from "../shared/SectionTitle";

import {
  Building2,
  Truck,
  ShieldCheck,
  Headset,
} from "lucide-react";


const features = [
  {
    title: "2016'dan Bu Yana",
    description:
      "Yıllara dayanan tecrübemizle kaliteli ürün ve güvenilir hizmet anlayışıyla projelerinize çözüm üretiyoruz.",
    icon: Building2,
  },
  {
    title: "Türkiye Geneline Sevkiyat",
    description:
      "Güçlü lojistik altyapımız ile Türkiye'nin dört bir yanına hızlı ve güvenli ürün tedariği sağlıyoruz.",
    icon: Truck,
  },
  {
    title: "GF Hakan Plastik Yetkili Bayi",
    description:
      "GF Hakan Plastik ürünleriyle kaliteli, dayanıklı ve uzun ömürlü sistem çözümleri sunuyoruz.",
    icon: ShieldCheck,
  },
  {
    title: "Profesyonel Teknik Destek",
    description:
      "Doğru ürün seçimi ve proje ihtiyaçlarınız için uzman desteğimizle yanınızdayız.",
    icon: Headset,
  },
];


export default function WhyUs() {

  return (

    <section className="relative overflow-hidden bg-gradient-to-b from-white via-red-50/20 to-gray-50 py-32">


      {/* Arka Plan Efekti */}

      <div className="pointer-events-none absolute left-0 top-0 h-72 w-72 rounded-full bg-red-100/40 blur-3xl" />

      <div className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-full bg-red-100/40 blur-3xl" />



      <Container>



        <SectionTitle
          badge="NEDEN ASKA BORU"
          title="Neden Aska Boru?"
          description="GF Hakan Plastik güvencesiyle kaliteli ürün, hızlı sevkiyat ve profesyonel destek anlayışımızla projelerinize değer katıyoruz."
        />





        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">


          {features.map((item) => {

            const Icon = item.icon;


            return (

              <div
                key={item.title}
                className="group relative rounded-[32px] border border-gray-200 bg-white p-9 shadow-sm transition-all duration-300 hover:-translate-y-3 hover:border-red-200 hover:shadow-2xl"
              >


                {/* Kırmızı çizgi */}

                <div className="absolute left-0 top-0 h-1 w-0 rounded-full bg-red-700 transition-all duration-300 group-hover:w-full" />




                <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-red-50 text-red-700 transition duration-300 group-hover:bg-red-700 group-hover:text-white">


                  <Icon 
                    size={38}
                    strokeWidth={2}
                  />


                </div>





                <h3 className="mt-8 text-2xl font-black leading-tight text-neutral-900">

                  {item.title}

                </h3>




                <p className="mt-5 leading-7 text-neutral-600">

                  {item.description}

                </p>



              </div>

            );

          })}


        </div>



      </Container>


    </section>

  );
}