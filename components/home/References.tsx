"use client";
import Image from "next/image";
import { useState } from "react";
import {
  Building2,
  Hotel,
  Factory,
  Hospital,
  Sprout,
  Landmark,
  Plus,
  Minus,
} from "lucide-react";
const projects = [
  {
    title: "Otel ve turistik tesisler",
    icon: Hotel,
    text: "Misafir konforunun ön planda olduğu yapılarda sessiz boru, temiz su ve atık su sistemleri için ürün seçenekleri.",
  },
  {
    title: "Villa ve konut projeleri",
    icon: Building2,
    text: "Yaşam alanlarında temiz su, atık su ve yerden ısıtma ihtiyaçlarını bir arada değerlendiren sistem çözümleri.",
  },
  {
    title: "AVM ve hastaneler",
    icon: Hospital,
    text: "Yoğun kullanımlı yapılarda projenin teknik gereksinimlerine uygun boru ve bağlantı elemanlarının tedariği.",
  },
  {
    title: "Toplu konut ve kamu yapıları",
    icon: Landmark,
    text: "Farklı ölçeklerdeki yapıların tesisat ihtiyaçları için ürün seçimi, tedarik ve sevkiyat desteği.",
  },
  {
    title: "Sanayi tesisleri",
    icon: Factory,
    text: "Endüstriyel projelerin tesisat ve altyapı ihtiyaçları için uygun ürün gruplarının değerlendirilmesi.",
  },
  {
    title: "Tarımsal sulama",
    icon: Sprout,
    text: "Tarımsal projelerin su iletim ihtiyaçlarına uygun ürün çözümleri ve tedarik desteği.",
  },
];
export default function References() {
  const [active, setActive] = useState<number | null>(0);
  return (
    <section className="section projects-section">
      <div className="shell">
        <div className="section-heading">
          <div>
            <p className="eyebrow">PROJE ALANLARIMIZ</p>
            <h2>
              Farklı yapılar.
              <br />
              <span>Aynı güven.</span>
            </h2>
          </div>
          <p>
            Bir konuttan büyük ölçekli tesislere kadar,
            <br />
            projenizin ihtiyacına uygun sistem çözümleri.
          </p>
        </div>
        <div className="projects-grid">
          <div className="project-accordion">
            {projects.map((p, i) => (
              <div className="project-row" key={p.title}>
                <h3>
                  <button
                    aria-expanded={active === i}
                    aria-controls={`project-${i}`}
                    onClick={() => setActive(active === i ? null : i)}
                  >
                    <p.icon size={23} strokeWidth={1.5} />
                    <span>{p.title}</span>
                    {active === i ? <Minus size={18} /> : <Plus size={18} />}
                  </button>
                </h3>
                <div id={`project-${i}`} hidden={active !== i}>
                  <p>{p.text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="project-visual">
            <Image
              src="/images/hakan-plastik.jpg"
              alt="GF Hakan Plastik boru sistemleri tanıtımı"
              fill
              sizes="(max-width:900px) 100vw, 50vw"
            />
            <div>
              <span className="eyebrow light">GF HAKAN PLASTİK</span>
              <h3>
                Kaliteli sistemler,
                <br />
                sağlam yarınlar.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
