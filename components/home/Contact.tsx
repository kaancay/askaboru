import Container from "../layout/Container";

export default function Contact() {
  return (
    <section id="iletisim" className="bg-neutral-900 py-24 text-white">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-red-600">
              İLETİŞİM
            </p>

            <h2 className="mt-4 text-5xl font-black">
              Bizimle İletişime Geçin
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-300">
              Ürünlerimiz hakkında bilgi almak, fiyat teklifi istemek veya sipariş oluşturmak için bize ulaşabilirsiniz.
            </p>

            <div className="mt-10 space-y-8">

              <div>
                <h3 className="font-bold text-xl">Adres</h3>
                <p className="mt-2 text-neutral-300">
                  Antalya
                </p>
              </div>

              <div>
                <h3 className="font-bold text-xl">Telefon</h3>
                <p className="mt-2 text-neutral-300">
                  Telefon numarası eklenecek
                </p>
              </div>

              <div>
                <h3 className="font-bold text-xl">E-posta</h3>
                <p className="mt-2 text-neutral-300">
                  info@askaboru.com
                </p>
              </div>

            </div>
          </div>

          <div className="rounded-3xl bg-white p-10 text-neutral-900 shadow-2xl">

            <h3 className="text-3xl font-black">
              Hızlı Teklif Alın
            </h3>

            <p className="mt-4 text-neutral-600">
              WhatsApp üzerinden bize ulaşarak hızlı fiyat teklifi alabilirsiniz.
            </p>

            <a
              href="https://wa.me/90XXXXXXXXXX"
              className="mt-10 inline-block rounded-xl bg-red-700 px-8 py-4 font-bold text-white transition hover:bg-red-800"
            >
              WhatsApp'tan Yaz
            </a>

          </div>
        </div>
      </Container>
    </section>
  );
}