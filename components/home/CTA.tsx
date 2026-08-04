import Container from "../layout/Container";

export default function CTA() {
  return (
    <section className="bg-red-700 py-24">
      <Container>
        <div className="text-center">

          <h2 className="text-4xl font-black text-white lg:text-5xl">
            Projeniz İçin Doğru Ürünleri Birlikte Belirleyelim
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-red-100">
            Altyapı, üstyapı ve tesisat projeleriniz için ihtiyaç duyduğunuz
            Hakan Plastik ürünleri hakkında bilgi almak ve fiyat teklifi
            oluşturmak için bizimle hemen iletişime geçin.
          </p>

          <div className="mt-10 flex justify-center gap-5">

            <a
              href="https://wa.me/90XXXXXXXXXX"
              className="rounded-xl bg-white px-8 py-4 font-bold text-red-700 transition hover:scale-105"
            >
              WhatsApp'tan Ulaşın
            </a>

            <a
              href="#iletisim"
              className="rounded-xl border border-white px-8 py-4 font-bold text-white transition hover:bg-white hover:text-red-700"
            >
              İletişim Bilgileri
            </a>

          </div>

        </div>
      </Container>
    </section>
  );
}