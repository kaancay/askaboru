import Container from "../layout/Container";

const references = [
  "Toplu Konut Projeleri",
  "Villa Projeleri",
  "Apartman Projeleri",
  "İş Merkezleri",
  "Sanayi Yapıları",
  "Kamu Projeleri",
];

export default function References() {
  return (
    <section className="bg-white py-24">
      <Container>

        <div className="text-center">

          <p className="text-sm font-bold uppercase tracking-[0.3em] text-red-700">
            REFERANSLAR
          </p>

          <h2 className="mt-4 text-4xl font-black text-neutral-900">
            Çözüm Sunduğumuz Proje Alanları
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-neutral-600">
            Aska Boru olarak farklı ölçeklerdeki projelere kaliteli ürün
            tedariği sağlayarak güvenilir çözümler sunuyoruz.
          </p>

        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {references.map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-gray-200 bg-gray-50 p-8 text-center transition duration-300 hover:border-red-700 hover:bg-white hover:shadow-xl"
            >
              <h3 className="text-xl font-bold text-neutral-900">
                {item}
              </h3>
            </div>
          ))}

        </div>

      </Container>
    </section>
  );
}