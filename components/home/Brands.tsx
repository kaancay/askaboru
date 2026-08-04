import Image from "next/image";
import Container from "../layout/Container";

export default function Brands() {
  return (
    <section className="bg-white py-24">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">

          <div>
            <Image
              src="/images/hakan-plastik.jpg"
              alt="Hakan Plastik"
              width={700}
              height={500}
              className="rounded-3xl shadow-xl"
            />
          </div>

          <div>

            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-700">
              MARKAMIZ
            </p>

            <h2 className="mt-4 text-5xl font-black text-gray-900">
              Hakan Plastik
            </h2>

            <p className="mt-8 text-lg leading-8 text-gray-600">
              Aska Boru olarak Hakan Plastik ürünlerinin satışını
              gerçekleştiriyor ve müşterilerimize kaliteli altyapı
              çözümleri sunuyoruz.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-4">

              <div className="rounded-xl border p-5">
                ✔ Temiz Su Sistemleri
              </div>

              <div className="rounded-xl border p-5">
                ✔ Atık Su Sistemleri
              </div>

              <div className="rounded-xl border p-5">
                ✔ Sessiz Boru Sistemleri
              </div>

              <div className="rounded-xl border p-5">
                ✔ Doğalgaz Sistemleri
              </div>

              <div className="rounded-xl border p-5">
                ✔ Yağmur Suyu Sistemleri
              </div>

              <div className="rounded-xl border p-5">
                ✔ Yerden Isıtma Sistemleri
              </div>

            </div>

          </div>

        </div>
      </Container>
    </section>
  );
}