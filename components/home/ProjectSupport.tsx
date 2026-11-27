import { PackagePlus, MessageCircle } from "lucide-react";
export default function ProjectSupport() {
  return (
    <section
      className="delivery-strip project-support-section"
      id="teslimat"
      aria-labelledby="support-heading"
    >
      <div className="shell delivery-inner">
        <div className="delivery-icon">
          <PackagePlus size={34} strokeWidth={1.5} aria-hidden="true" />
        </div>
        <div className="delivery-copy">
          <p className="eyebrow">ANTALYA’DAKİ PROJELERİNİZE DESTEK</p>
          <h2 id="support-heading">Eksik ya da ek parça mı gerekiyor?</h2>
          <p>
            İhtiyacınız olan boru ve bağlantı parçalarını doğrudan projenize
            ulaştıralım.
          </p>
          <small>Malzeme listenizi ve proje adresinizi bizimle paylaşın.</small>
        </div>
        <a
          className="button button-blue"
          href="https://wa.me/905374198285?text=Merhaba%20Aska%20Boru%2C%20Antalya%27daki%20projem%20i%C3%A7in%20eksik%20veya%20ek%20boru%20ve%20ba%C4%9Flant%C4%B1%20par%C3%A7alar%C4%B1na%20ihtiyac%C4%B1m%20var.%20Projeye%20teslimat%20i%C3%A7in%20bilgi%20alabilir%20miyim%3F"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MessageCircle size={20} aria-hidden="true" /> Parça talebinizi iletin
        </a>
      </div>
    </section>
  );
}
