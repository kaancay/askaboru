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

export default function Home() {
  return (
    <>
      <TopBar />

      <Header />

      <main>
        <Hero />

        <About />

        <Products />

        <WhyUs />

        <References />

        <Catalog />

        <Contact />

        <Map />
      </main>

      <Footer />

      <FloatingWhatsApp />
    </>
  );
}