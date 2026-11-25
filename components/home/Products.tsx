import Image from "next/image";
import { FileText, MessageCircle } from "lucide-react";
const products = [
  {
    title: "Silenta 3A",
    category: "Sessiz boru",
    image: "silenta.3a",
    pdf: "silenta.3a",
    text: "Yapılarda akustik konfor için sessiz atık su çözümleri.",
  },
  {
    title: "Silenta Premium",
    category: "Sessiz boru",
    image: "silenta.premium",
    pdf: "silenta.premium",
    text: "Sessiz atık su tesisatları için Premium ürün ailesi.",
  },
  {
    title: "Silenta FR",
    category: "Sessiz boru",
    image: "silenta.fr",
    pdf: "silenta.fr",
    text: "Projenizin teknik ihtiyaçlarına uygun Silenta FR sistemleri.",
  },
  {
    title: "PVC Atık Su Sistemleri",
    category: "Atık su",
    image: "pvc",
    pdf: "pvc",
    text: "Atık su tesisatları için boru ve bağlantı elemanları.",
  },
  {
    title: "Aquasystem PP-R / PP-RCT",
    category: "Temiz su",
    image: "aquasystem",
    pdf: "ppr",
    text: "Temiz su tesisatlarında birbiriyle uyumlu sistem çözümleri.",
  },
  {
    title: "Yerden Isıtma Sistemleri",
    category: "Isıtma",
    image: "yerden.isitma",
    pdf: "",
    text: "Yaşam alanları için yerden ısıtma sistem çözümleri.",
  },
];
export default function Products() {
  return (
    <section id="urunler" className="section products-section">
      <div className="shell">
        <div className="section-heading">
          <div>
            <p className="eyebrow">ÜRÜN ÇÖZÜMLERİMİZ</p>
            <h2>
              Her bağlantıda kalite.
              <br />
              <span>Her projeye bir çözüm.</span>
            </h2>
          </div>
          <p>
            GF Hakan Plastik ürün ailesini keşfedin.
            <br />
            İhtiyacınıza uygun sistem için birlikte doğru seçimi yapalım.
          </p>
        </div>
        <div className="product-grid">
          {products.map((p) => (
            <article className="product-card" key={p.title}>
              <div className="product-image">
                <Image
                  src={`/images/products/${p.image}.png`}
                  alt={p.title}
                  fill
                  sizes="(max-width:650px) 100vw, (max-width:1000px) 50vw, 33vw"
                />
              </div>
              <div className="product-content">
                <span className="product-category">{p.category}</span>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
                <a
                  className="product-link"
                  href={p.pdf ? `/pdf/${p.pdf}.pdf` : "#iletisim"}
                  {...(p.pdf
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  {p.pdf ? <FileText size={17} /> : <MessageCircle size={17} />}{" "}
                  {p.pdf
                    ? "Teknik kataloğu inceleyin"
                    : "Ürün hakkında bilgi alın"}
                </a>
              </div>
            </article>
          ))}
        </div>
        <div className="product-help">
          <span>
            Projeniz için hangi ürünün uygun olduğundan emin değil misiniz?
          </span>
          <a href="#iletisim">Birlikte değerlendirelim</a>
        </div>
      </div>
    </section>
  );
}
