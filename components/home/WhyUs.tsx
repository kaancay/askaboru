import { PackageCheck, Truck, Headset } from "lucide-react";
export default function WhyUs() {
  return (
    <section className="service-section">
      <div className="shell service-grid">
        <div>
          <p className="eyebrow light">BİRLİKTE DAHA GÜÇLÜ</p>
          <h2>
            Üründen fazlası.
            <br />
            Her aşamada destek.
          </h2>
        </div>
        {[
          {
            icon: PackageCheck,
            title: "Doğru ürün",
            text: "Projenizin ihtiyacını birlikte değerlendiriyor, uygun ürün grubunu belirliyoruz.",
          },
          {
            icon: Truck,
            title: "Planlı tedarik",
            text: "Ürün talebinizi ve sevkiyat ihtiyaçlarınızı projenize göre planlıyoruz.",
          },
          {
            icon: Headset,
            title: "Doğrudan iletişim",
            text: "Ürün bilgisi ve teklif talepleriniz için ekibimize kolayca ulaşıyorsunuz.",
          },
        ].map((s) => (
          <div className="service-item" key={s.title}>
            <s.icon size={28} strokeWidth={1.5} />
            <h3>{s.title}</h3>
            <p>{s.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
