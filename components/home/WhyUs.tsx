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
      "2016 yılından bu yana kaliteli ürün ve güvenilir hizmet anlayışıyla faaliyet gösteriyoruz.",
    icon: Building2,
  },
  {
    title: "Türkiye Geneline Hizmet",
    description:
      "Türkiye'nin dört bir yanına hızlı ve güvenli ürün tedariği sağlıyoruz.",
    icon: Truck,
  },
  {
    title: "Hakan Plastik Yetkili Satış Noktası",
    description:
      "Hakan Plastik ürünleriyle güvenilir ve uzun ömürlü çözümler sunuyoruz.",
    icon: ShieldCheck,
  },
  {
    title: "Profesyonel Destek",
    description:
      "Doğru ürün seçiminde uzman ekibimizle her zaman yanınızdayız.",
    icon: Headset,
  },
];

export default function WhyUs() {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-24">
      <Container>

        <SectionTitle
          badge="NEDEN ASKA BORU"
          title="Neden Bizi Tercih Etmelisiniz?"
          description="Kaliteli ürün, güvenilir hizmet ve müşteri memnuniyetini esas alan yaklaşımımızla projelerinize değer katıyoruz."
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {features.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group rounded-3xl border border-gray-200 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:border-red-700 hover:shadow-2xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-red-50 text-red-700 transition group-hover:bg-red-700 group-hover:text-white">

                  <Icon size={30} strokeWidth={2.2} />

                </div>

                <h3 className="mt-8 text-2xl font-bold text-neutral-900">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-neutral-600">
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