const questions = [
  {
    q: "Antalya’da GF Hakan Plastik ürünlerini nereden alabilirim?",
    a: "Aska Boru, Muratpaşa / Antalya’da GF Hakan Plastik yetkili bayisi olarak hizmet verir. PVC atık su, Aquasystem PP-R / PP-RCT, Silenta sessiz boru ve yerden ısıtma ürünleri için ekibimize ulaşabilirsiniz.",
  },
  {
    q: "Plastik boru fiyatı ve güncel fiyat listesi nasıl öğrenilir?",
    a: "Fiyat; ürün serisi, çap, boru boyu, metraj ve ek parça adetlerine göre değişir. Ürün kataloğundan ihtiyacınızı belirleyip malzeme listenizi WhatsApp veya e-posta üzerinden göndererek güncel fiyat, stok ve sevkiyat bilgisi isteyebilirsiniz.",
  },
  {
    q: "PVC atık su, PP-R temiz su ve sessiz boru arasındaki fark nedir?",
    a: "Bu ürün grupları farklı tesisat ihtiyaçlarına yöneliktir. PVC atık su hatları için; Aquasystem PP-R / PP-RCT sıcak ve soğuk su sistemleri için; Silenta ailesi ise ses yalıtımlı atık su uygulamaları için incelenir. Uygun ürün, proje koşulları ve üretici teknik belgeleriyle belirlenir.",
  },
  {
    q: "Antalya dışına boru sevkiyatı yapıyor musunuz?",
    a: "Antalya merkezli olarak Türkiye genelindeki ürün taleplerini değerlendiriyoruz. Sevkiyat planı ve koşulları, istenen ürünler, miktar ve teslimat konumu bilgilerine göre teklif sırasında netleştirilir.",
  },
  {
    q: "Silenta 3A, Premium ve FR için teknik katalog var mı?",
    a: "Her serinin ürün sayfasından ilgili teknik kataloğa ulaşabilirsiniz. Boru ve ek parça seçeneklerini katalogdan kontrol edip projenizin akustik ve uygulama gereksinimlerine uygun ürünler için bilgi isteyebilirsiniz.",
  },
];
export default function FAQ() {
  return (
    <section className="section faq-section" id="sik-sorulan-sorular">
      <div className="shell faq-grid">
        <div>
          <p className="eyebrow">SORULARINIZA YANITLAR</p>
          <h2>
            Boru ve tesisat
            <br />
            <span>seçimini kolaylaştıralım.</span>
          </h2>
          <p className="faq-intro">
            Antalya’da ürün tedariği, boru seçimi ve fiyat teklifi hakkında
            merak edilenler.
          </p>
          <a className="text-link" href="/urunler">
            Ürün rehberini inceleyin
          </a>
        </div>
        <div className="faq-list">
          {questions.map((item) => (
            <details key={item.q}>
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
