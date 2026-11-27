const questions = [
  {
    q: "Antalya’da GF Hakan Plastik ürünlerini nereden alabilirim?",
    a: "Aska Boru, Antalya’da GF Hakan Plastik yetkili bayisi olarak hizmet verir. PVC atık su, Aquasystem PP-R / PP-RCT, Silenta sessiz boru ve yerden ısıtma ürünleri için ekibimize ulaşabilirsiniz.",
  },
  {
    q: "Fiyat teklifi nasıl alabilirim?",
    a: "Ürün serisi, çap, ölçü ve miktar bilgilerini içeren malzeme listenizi WhatsApp veya e-posta üzerinden paylaşabilirsiniz. Güncel fiyat ve teslimat koşullarını talebinize göre birlikte netleştirelim.",
  },
  {
    q: "Proje sırasında ek parça ihtiyacında destek oluyor musunuz?",
    a: "Malzeme tedariğini bizimle yürüten Antalya projelerinde, sonradan gereken ek ve tamamlayıcı parçalar için yerel teslimat desteği sunuyoruz. Desteğin kapsamını proje planınıza göre birlikte belirliyoruz.",
  },
  {
    q: "Cumartesi açık mısınız?",
    a: "Hafta içi 08:00–18:00, cumartesi 08:00–13:00 saatlerinde hizmet veriyoruz. Pazar günleri kapalıyız. Ziyaretiniz öncesinde bizimle iletişime geçebilirsiniz.",
  },
  {
    q: "Antalya dışına boru sevkiyatı yapıyor musunuz?",
    a: "Antalya merkezli olarak Türkiye genelindeki ürün taleplerini değerlendiriyoruz. Sevkiyat planı ve koşulları, istenen ürünler, miktar ve teslimat konumu bilgilerine göre teklif sırasında netleştirilir.",
  },
  {
    q: "Ürünlerin teknik bilgilerine nereden ulaşabilirim?",
    a: "Ürün kataloğu bölümünden GF Hakan Plastik kataloğuna, ürün sayfalarından ilgili teknik belgelere ulaşabilirsiniz. Ürün seçimi için ekibimizden de destek alabilirsiniz.",
  },
];
export default function FAQ() {
  return (
    <section
      className="section faq-section"
      id="sik-sorulan-sorular"
      aria-labelledby="faq-heading"
    >
      <div className="shell faq-grid">
        <div className="faq-heading">
          <p className="eyebrow">SORU & CEVAP</p>
          <h2 id="faq-heading">
            Sık sorulan
            <br />
            <span>sorular.</span>
          </h2>
          <p className="faq-intro">
            Teklif, ürün seçimi ve proje tedariği hakkında merak ettikleriniz.
          </p>
          <a className="text-link" href="#iletisim">
            Başka bir sorunuz mu var? Bize ulaşın
          </a>
        </div>
        <div className="faq-list">
          {questions.map((item, index) => (
            <details key={item.q} name="home-faq" open={index === 0}>
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
