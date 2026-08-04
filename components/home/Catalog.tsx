import Container from "../layout/Container";

export default function Catalog() {
  return (
    <section className="bg-gray-50 py-24">
      <Container>
        <div className="mx-auto max-w-5xl overflow-hidden rounded-[32px] border border-gray-200 bg-white shadow-xl">

          <div className="grid items-center gap-10 p-12 lg:grid-cols-2">

            <div>

              <span className="inline-flex rounded-full bg-red-100 px-4 py-2 text-sm font-bold text-red-700">
                DOKÜMANLAR
              </span>

              <h2 className="mt-6 text-4xl font-black text-neutral-900">
                GF Türkiye Genel Ürün Kataloğu
              </h2>

              <p className="mt-6 text-lg leading-8 text-neutral-600">
                Güncel ürün kataloğunu PDF olarak görüntüleyebilir,
                indirebilir ve tüm ürün gruplarını detaylı şekilde
                inceleyebilirsiniz.
              </p>

              <a
                href="/pdf/gf-katalog.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-flex rounded-xl bg-red-700 px-8 py-4 font-bold text-white transition hover:bg-red-800"
              >
                PDF Kataloğunu Aç
              </a>

            </div>

            <div className="flex justify-center">

              <div className="flex h-72 w-56 items-center justify-center rounded-3xl border-8 border-gray-100 bg-red-700 text-center text-white shadow-2xl">

                <div>

                  <div className="text-7xl">
                    📄
                  </div>

                  <h3 className="mt-6 text-2xl font-black">
                    GF
                  </h3>

                  <p className="mt-2 text-red-100">
                    Türkiye Genel
                  </p>

                  <p className="text-red-100">
                    Ürün Kataloğu
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>
      </Container>
    </section>
  );
}