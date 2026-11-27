import {
  Building2,
  Hotel,
  Factory,
  Hospital,
  Sprout,
  Landmark,
} from "lucide-react";

const projectAreas = [
  {
    title: "Otel ve turistik tesisler",
    icon: Hotel,
    text: "Misafir konforu için sessiz boru, temiz su ve atık su sistemlerinde ürün tedariği.",
  },
  {
    title: "Villa ve konut projeleri",
    icon: Building2,
    text: "Yaşam alanlarının temiz su, atık su ve yerden ısıtma ihtiyaçlarına uygun ürünler.",
  },
  {
    title: "AVM ve hastaneler",
    icon: Hospital,
    text: "Yoğun kullanımlı yapıların teknik gereksinimlerine uygun boru ve bağlantı elemanları.",
  },
  {
    title: "Toplu konut ve kamu yapıları",
    icon: Landmark,
    text: "Büyük ölçekli projelerde malzeme listesine uygun ürün seçimi, tedarik ve sevkiyat desteği.",
  },
  {
    title: "Sanayi tesisleri",
    icon: Factory,
    text: "Endüstriyel tesislerin altyapı ve tesisat ihtiyaçlarına yönelik ürün seçenekleri.",
  },
  {
    title: "Tarımsal sulama",
    icon: Sprout,
    text: "Tarımsal projelerin su iletim ihtiyaçlarına uygun ürünler ve tedarik desteği.",
  },
];

export default function ProjectAreas() {
  return (
    <section
      className="project-areas"
      id="proje-alanlari"
      aria-labelledby="project-areas-heading"
    >
      <div className="shell">
        <div className="project-areas-heading">
          <div>
            <p className="eyebrow">PROJE ALANLARIMIZ</p>
            <h2 id="project-areas-heading">
              Hizmet verdiğimiz
              <br />
              <span>proje alanları.</span>
            </h2>
          </div>
          <div className="project-areas-intro">
            <p>
              Konutlardan büyük ölçekli tesislere, projenizin ihtiyacına uygun
              boru ve bağlantı elemanları.
            </p>
            <a href="#iletisim" className="text-link">
              Projeniz için görüşelim
            </a>
          </div>
        </div>
        <div className="project-area-grid">
          {projectAreas.map((area) => (
            <article className="project-area-card" key={area.title}>
              <div className="project-area-icon">
                <area.icon size={27} strokeWidth={1.5} aria-hidden="true" />
              </div>
              <h3>{area.title}</h3>
              <p>{area.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
