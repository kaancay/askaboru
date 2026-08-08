import Container from "../layout/Container";

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

    <section
      className="
      relative
      overflow-hidden
      bg-gradient-to-br
      from-[#003B5C]
      via-[#005B9A]
      to-[#39A9E8]
      py-28
      "
    >


      <div
        className="
        pointer-events-none
        absolute
        left-0
        top-0
        h-96
        w-96
        rounded-full
        bg-white/10
        blur-3xl
        "
      />


      <div
        className="
        pointer-events-none
        absolute
        bottom-0
        right-0
        h-96
        w-96
        rounded-full
        bg-white/10
        blur-3xl
        "
      />




      <Container>


        {/* BAŞLIK ALANI */}

        <div className="mx-auto max-w-3xl text-center">


          <span
            className="
            inline-flex
            rounded-full
            bg-white/20
            px-5
            py-2
            text-sm
            font-bold
            tracking-wider
            text-white
            backdrop-blur
            "
          >

            NEDEN ASKA BORU

          </span>




          <h2
            className="
            mt-6
            text-4xl
            font-black
            text-white
            lg:text-5xl
            "
          >

            Neden Aska Boru?

          </h2>




          <p
            className="
            mt-5
            text-lg
            leading-8
            text-white/90
            "
          >

            GF Hakan Plastik güvencesiyle kaliteli ürün,
            hızlı sevkiyat ve profesyonel destek anlayışımızla
            projelerinize değer katıyoruz.

          </p>


        </div>






        {/* KARTLAR */}


        <div
          className="
          mt-14
          grid
          gap-7
          md:grid-cols-2
          lg:grid-cols-4
          "
        >



          {features.map((item)=>{


            const Icon = item.icon;


            return (


              <div

                key={item.title}

                className="
                group
                relative
                overflow-hidden
                rounded-3xl
                bg-white
                p-8
                shadow-xl
                transition-all
                duration-300
                hover:-translate-y-2
                hover:shadow-2xl
                "

              >



                <div
                  className="
                  absolute
                  left-0
                  top-0
                  h-1
                  w-full
                  bg-[#39A9E8]
                  opacity-0
                  transition
                  duration-300
                  group-hover:opacity-100
                  "
                />





                <div
                  className="
                  flex
                  h-20
                  w-20
                  items-center
                  justify-center
                  rounded-3xl
                  bg-[#005B9A]/10
                  text-[#005B9A]
                  transition
                  duration-300
                  group-hover:bg-[#005B9A]
                  group-hover:text-white
                  "
                >

                  <Icon
                    size={38}
                    strokeWidth={2}
                  />

                </div>






                <h3
                  className="
                  mt-7
                  text-xl
                  font-black
                  leading-tight
                  text-neutral-900
                  "
                >

                  {item.title}

                </h3>






                <p
                  className="
                  mt-4
                  text-sm
                  leading-7
                  text-neutral-600
                  "
                >

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