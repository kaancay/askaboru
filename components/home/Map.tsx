import Container from "../layout/Container";

export default function Map() {
  return (
    <section id="harita" className="bg-white py-24">
      <Container>
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-700">
            KONUMUMUZ
          </p>

          <h2 className="mt-4 text-4xl font-black text-gray-900">
            Bizi Ziyaret Edin
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
            Antalya'daki Depomuzu ziyaret edebilir veya bizimle iletişime
            geçebilirsiniz.
          </p>
        </div>

        <div className="overflow-hidden rounded-3xl border border-gray-200 shadow-xl">
          <iframe
            src="https://www.google.com/maps?q=Aska%20Boru%20Antalya&output=embed"
            width="100%"
            height="500"
            loading="lazy"
            allowFullScreen
          ></iframe>
        </div>
      </Container>
    </section>
  );
}