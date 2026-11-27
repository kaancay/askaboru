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
          <p className="eyebrow">PROJE BOYUNCA YEREL DESTEK</p>
          <h2 id="support-heading">Projeniz boyunca yanınızdayız.</h2>
          <p>
            Malzeme tedariğini bizimle yürüten Antalya projelerinde, sonradan
            gereken ek ve tamamlayıcı parçalar için yerel teslimat desteği
            sunuyoruz.
          </p>
          <small>
            İlk malzeme listesinden son bağlantıya, aynı çözüm ortağı.
          </small>
        </div>
        <a
          className="button button-blue"
          href={`https://wa.me/905374198285?text=${encodeURIComponent("Merhaba Aska Boru, Antalya’daki projemizin malzeme tedariğini sizinle planlamak ve proje süresince sunduğunuz tamamlayıcı tedarik desteği hakkında bilgi almak istiyorum.")}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <MessageCircle size={20} aria-hidden="true" /> Projeniz için görüşelim
        </a>
      </div>
    </section>
  );
}
