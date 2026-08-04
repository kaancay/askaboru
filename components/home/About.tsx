import Image from "next/image";
import Container from "../layout/Container";
import SectionTitle from "../shared/SectionTitle";

export default function About() {
  return (
    <section
      id="hakkimizda"
      className="bg-white py-24 scroll-mt-24"
    >
      <Container>
        <SectionTitle
          badge="HAKKIMIZDA"
          title="2016'dan Bugüne Güvenilir Çözüm Ortağınız"
          description="Aska Boru olarak 2016 yılından bu yana kaliteli ürün, güvenilir hizmet ve müşteri memnuniyetini ön planda tutarak Türkiye'nin dört bir yanına hizmet veriyoruz."
        />

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Sol Taraf */}

          <div className="relative">

            <Image
              src="/images/hero-depo.png"
              alt="Aska Boru Deposu"
              width={700}
              height={700}
              className="rounded-[32px] shadow-2xl"
            />

            <div className="absolute -bottom-8 -right-8 rounded-3xl bg-red-700 p-8 text-white shadow-xl">

              <h3 className="text-5xl font-black">
                2016
              </h3>

              <p className="mt-2 text-red-100">
                Kuruluş Yılı
              </p>

            </div>

          </div>

          {/* Sağ Taraf */}

          <div>

            <h3 className="text-4xl font-black text-neutral-900">
              Kalite, Güven ve Profesyonel Hizmet
            </h3>

            <p className="mt-8 text-lg leading-8 text-neutral-600">
              Antalya merkezli Aska Boru, Hakan Plastik ürünleriyle temiz su,
              atık su, sessiz boru ve yerden ısıtma sistemlerinde güvenilir
              çözümler sunmaktadır.
            </p>

            <p className="mt-6 text-lg leading-8 text-neutral-600">
              Kurulduğumuz günden bu yana kaliteli ürün tedariği, hızlı sevkiyat
              ve müşteri memnuniyetini ön planda tutarak Türkiye'nin dört bir
              yanına hizmet vermeye devam ediyoruz.
            </p>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">

              <div className="rounded-2xl border border-gray-200 p-6 shadow-sm">
                <h4 className="text-xl font-bold">
                  Türkiye Geneli
                </h4>

                <p className="mt-3 text-neutral-600">
                  Güvenli ürün tedariği
                </p>
              </div>

              <div className="rounded-2xl border border-gray-200 p-6 shadow-sm">
                <h4 className="text-xl font-bold">
                  Hakan Plastik
                </h4>

                <p className="mt-3 text-neutral-600">
                  Yetkili satış noktası
                </p>
              </div>

              <div className="rounded-2xl border border-gray-200 p-6 shadow-sm">
                <h4 className="text-xl font-bold">
                  Profesyonel Destek
                </h4>

                <p className="mt-3 text-neutral-600">
                  Doğru ürün danışmanlığı
                </p>
              </div>

              <div className="rounded-2xl border border-gray-200 p-6 shadow-sm">
                <h4 className="text-xl font-bold">
                  Güvenilir Çözümler
                </h4>

                <p className="mt-3 text-neutral-600">
                  Altyapı ve üstyapı sistemleri
                </p>
              </div>

            </div>

          </div>

        </div>
      </Container>
    </section>
  );
}