import Image from "next/image";
import Container from "../layout/Container";
import {
  ShieldCheck,
  Truck,
  Handshake,
  Award,
} from "lucide-react";


export default function Hero() {
  return (
    <section className="relative overflow-hidden">

      <div className="relative min-h-[850px]">


        <Image
          src="/images/aska-giris-1.png"
          alt="Aska Boru GF Hakan Plastik"
          fill
          priority
          className="object-cover object-center"
        />


        {/* Sol karartma */}

        <div className="absolute inset-0 bg-gradient-to-r from-[#003B5C]/95 via-[#005B9A]/75 to-transparent" />



        <Container>

          <div className="relative z-10 flex min-h-[850px] items-center">


            <div className="max-w-3xl text-white">



              {/* Yetkili bayi */}

              <div className="mb-8">

                <span className="inline-flex rounded-full border border-blue-300/40 bg-[#005B9A] px-7 py-3 text-base font-bold tracking-wide text-white shadow-xl">

                  GF HAKAN PLASTİK YETKİLİ BAYİSİ

                </span>

              </div>




              <h1 className="text-5xl font-black leading-[1.05] lg:text-7xl">

                Plastik Boruda
                <br />


                <span className="text-[#39A9E8]">
                  Güvenilir 
                  Çözüm
                  Ortağınız
                </span>

              </h1>




              <p className="mt-8 max-w-xl text-lg leading-8 text-white/90">

                2016 Yılından beri GF Hakan Plastik ürün gruplarıyla kaliteli ve güvenilir çözümler sunuyoruz.

              </p>





              <div className="mt-8 flex gap-4">


                <a
                  href="#iletisim"
                  className="rounded-xl bg-green-500 px-8 py-4 font-bold text-white shadow-lg transition hover:bg-green-600"
                >
                  Teklif Al
                </a>



                <a
                  href="#urunler"
                  className="rounded-xl border border-white/40 bg-white/10 px-8 py-4 font-bold text-white backdrop-blur hover:bg-white/20"
                >
                  Ürünlerimizi İncele
                </a>


              </div>





              {/* Bilgi Kartları */}

              <div className="mt-14 grid grid-cols-2 gap-5 lg:grid-cols-4">


                <InfoCard
                  icon={<ShieldCheck size={34}/>}
                  title="Güvenilir"
                  text="Kaliteli ürün çözümleri"
                />


                <InfoCard
                  icon={<Truck size={34}/>}
                  title="Güçlü Lojistik"
                  text="Türkiye geneline sevkiyat"
                />


                <InfoCard
                  icon={<Handshake size={34}/>}
                  title="Profesyonel "
                  text="Çözüm odaklı destek"
                />


                <InfoCard
                  icon={<Award size={34}/>}
                  title="Yetkili Bayi"
                  text="GF Hakan Plastik"
                />


              </div>



            </div>


          </div>


        </Container>


      </div>

    </section>
  );
}





function InfoCard({
  icon,
  title,
  text,
}:{
  icon: React.ReactNode;
  title:string;
  text:string;
}) {

  return (

    <div className="min-h-[130px] rounded-2xl border border-white/25 bg-[#003B5C]/70 p-5 backdrop-blur-md shadow-xl">


      <div className="text-[#35A9E0]">
        {icon}
      </div>


      <h3 className="mt-4 text-base font-black text-white">
        {title}
      </h3>


      <p className="mt-2 text-sm leading-5 text-white/80">
        {text}
      </p>


    </div>

  );

}