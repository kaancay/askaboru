import TopBar from "@/components/layout/TopBar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Products from "@/components/home/Products";
import WhyUs from "@/components/home/WhyUs";
import References from "@/components/home/References";
import Catalog from "@/components/home/Catalog";
import Contact from "@/components/home/Contact";
import Map from "@/components/home/Map";
import FAQ from "@/components/home/FAQ";
import JsonLd from "@/components/shared/JsonLd";

import FloatingWhatsApp from "@/components/shared/FloatingWhatsApp";
import RemembranceModal from "@/components/shared/RemembranceModal";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Store",
      "@id": "https://www.askaboru.com/#business",
      name: "Aska Boru",
      url: "https://www.askaboru.com/",
      logo: "https://www.askaboru.com/favicon-512x512.png",
      image: "https://www.askaboru.com/images/aska-giris-1.png",
      telephone: "+90 242 338 16 66",
      email: ["info@askaboru.com", "askaboru@gmail.com"],
      address: {
        "@type": "PostalAddress",
        streetAddress: "Kızılarık, 2814. Sk. No:54/1",
        addressLocality: "Muratpaşa",
        addressRegion: "Antalya",
        postalCode: "07310",
        addressCountry: "TR",
      },
      description:
        "Antalya’da GF Hakan Plastik yetkili bayisi. PVC atık su, Aquasystem PP-R / PP-RCT, Silenta sessiz boru ve yerden ısıtma ürünleri tedariği.",
      areaServed: { "@type": "Country", name: "Türkiye" },
      hasMap: "https://www.google.com/maps?cid=3266340276825931263",
      geo: {
        "@type": "GeoCoordinates",
        latitude: 36.9086596,
        longitude: 30.7174179,
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "08:00",
          closes: "18:00",
        },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Plastik Boru ve Tesisat Sistemleri",
        url: "https://www.askaboru.com/urunler",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://www.askaboru.com/#website",
      url: "https://www.askaboru.com/",
      name: "Aska Boru",
      alternateName: "ASKA BORU",
      inLanguage: "tr-TR",
      publisher: { "@id": "https://www.askaboru.com/#business" },
    },
    {
      "@type": "WebPage",
      "@id": "https://www.askaboru.com/#webpage",
      url: "https://www.askaboru.com/",
      name: "GF Hakan Plastik Antalya Bayisi | Aska Boru",
      inLanguage: "tr-TR",
      isPartOf: { "@id": "https://www.askaboru.com/#website" },
      about: { "@id": "https://www.askaboru.com/#business" },
    },
  ],
};

export default function Home() {
  return (
    <>
      <JsonLd data={jsonLd} />

      <RemembranceModal />

      <TopBar />

      <Header />

      <main>
        <Hero />

        <Products />

        <About />

        <References />

        <WhyUs />

        <Catalog />

        <FAQ />

        <Contact />

        <Map />
      </main>

      <Footer />

      <FloatingWhatsApp />
    </>
  );
}
