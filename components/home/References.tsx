import Image from "next/image";
export default function References() {
  return (
    <section
      className="section silenta-section"
      aria-labelledby="silenta-heading"
    >
      <div className="shell silenta-feature-grid">
        <figure className="silenta-poster">
          <Image
            src="/images/sessiz-boru.jpg"
            alt="GF Silenta 3A sessiz boru sistemi: Sessizlik deyince akıllara gelen ilk isim"
            width={1080}
            height={1350}
            sizes="(max-width:900px) 100vw, 45vw"
          />
        </figure>
        <div className="silenta-feature-copy">
          <p className="eyebrow">GF HAKAN PLASTİK · SİLENTA</p>
          <h2>
            Sessizliğe
            <br />
            <span>yer açın.</span>
          </h2>
          <p>
            Ses yalıtımlı atık su sistemlerini keşfedin. Projenize uygun boru ve
            ek parçaları birlikte seçelim.
          </p>
          <a className="button button-blue" href="/urunler/silenta-3a">
            Silenta 3A’yı inceleyin
          </a>
          <a className="text-link" href="/urunler/silenta-premium">
            Silenta Premium
          </a>
          <a className="text-link" href="/urunler/silenta-fr">
            Silenta FR
          </a>
        </div>
      </div>
    </section>
  );
}
