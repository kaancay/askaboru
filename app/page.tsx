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

import FloatingWhatsApp from "@/components/shared/FloatingWhatsApp";
import RemembranceModal from "@/components/shared/RemembranceModal";



const jsonLd = {

  "@context": "https://schema.org",

  "@type": "LocalBusiness",


  "name": "Aska Boru",


  "image":
    "https://www.askaboru.com/images/aska-giris-1.png",


  "url":
    "https://www.askaboru.com",


  "telephone":
    "+90 242 338 16 66",


  "email":
    "askaboru@gmail.com",



  "address": {

    "@type": "PostalAddress",

    "streetAddress":
      "Kızılarık, 2814. Sk. No:54/1",

    "addressLocality":
      "Muratpaşa",

    "addressRegion":
      "Antalya",

    "postalCode":
      "07310",

    "addressCountry":
      "TR",

  },



  "description":
    "Aska Boru, GF Hakan Plastik yetkili bayisi olarak PVC boru sistemleri, altyapı çözümleri, sessiz boru sistemleri, temiz su ve tesisat ürünlerinde profesyonel çözümler sunmaktadır.",



  "brand": {

    "@type": "Brand",

    "name":
      "GF Hakan Plastik",

  },


  "areaServed":
    "Türkiye",

};





export default function Home() {


  return (

    <>


      <script

        type="application/ld+json"

        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}

      />



      <RemembranceModal />

      <TopBar />


      <Header />



      <main>


        <Hero />




        <About />


        <Products />


        <References />


        <WhyUs />


        <Catalog />


        <Contact />


        <Map />


      </main>



      <Footer />



      <FloatingWhatsApp />


    </>

  );

}
