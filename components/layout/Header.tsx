"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X, MessageCircle } from "lucide-react";
import Container from "./Container";


const leftMenu = [
  {
    title: "Anasayfa",
    href: "#",
  },
  {
    title: "Hakkımızda",
    href: "#hakkimizda",
  },
];


const rightMenu = [
  {
    title: "Ürünler",
    href: "#urunler",
  },
  {
    title: "İletişim",
    href: "#iletisim",
  },
];


export default function Header() {

  const [menuOpen, setMenuOpen] = useState(false);


  return (

    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white shadow-sm">


      <Container>


        <div className="relative flex h-28 items-center justify-center">



          {/* Sol Menü */}

          <nav className="absolute left-52 hidden items-center gap-6 lg:flex">

            {leftMenu.map((item) => (

              <a
                key={item.title}
                href={item.href}
                className="text-[16px] font-extrabold text-gray-800 transition hover:text-red-700"
              >
                {item.title}
              </a>

            ))}

          </nav>




          {/* Ortadaki Logo */}

          <a
            href="/"
            className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2"
          >

            <Image
              src="/logos/aska-logo-round.png"
              alt="Aska Boru"
              width={130}
              height={130}
              className="h-auto drop-shadow-lg"
              priority
            />

          </a>




          {/* Sağ Alan */}

          <div className="absolute right-0 hidden items-center gap-6 lg:flex">


            <nav className="mr-16 flex items-center gap-6">


              {rightMenu.map((item) => (

                <a
                  key={item.title}
                  href={item.href}
                  className="text-[16px] font-extrabold text-gray-800 transition hover:text-red-700"
                >
                  {item.title}
                </a>

              ))}


            </nav>




            {/* Teklif Al */}

            <a
              href="https://wa.me/905374198285?text=Merhaba%20Aska%20Boru%20ürünleriniz%20hakkında%20bilgi%20almak%20istiyorum."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-xl bg-green-500 px-6 py-3 font-extrabold text-white transition hover:bg-green-600"
            >

              <MessageCircle size={20} />

              TEKLİF AL

            </a>



          </div>





          {/* Mobil Menü Butonu */}

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="ml-auto rounded-xl border border-gray-300 p-3 lg:hidden"
          >

            {menuOpen ? <X size={24} /> : <Menu size={24} />}

          </button>



        </div>


      </Container>




      {/* Mobil Menü */}

      {menuOpen && (

        <div className="border-t border-gray-200 bg-white lg:hidden">


          <Container>


            <nav className="flex flex-col py-6">


              {[...leftMenu, ...rightMenu].map((item) => (

                <a
                  key={item.title}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="border-b border-gray-100 py-4 text-[16px] font-bold text-gray-800"
                >

                  {item.title}

                </a>

              ))}



              <a
                href="https://wa.me/905374198285?text=Merhaba%20Aska%20Boru%20ürünleriniz%20hakkında%20bilgi%20almak%20istiyorum."
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 flex items-center justify-center gap-2 rounded-xl bg-green-500 py-4 font-extrabold text-white"
              >

                <MessageCircle size={22} />

                TEKLİF AL

              </a>



            </nav>


          </Container>


        </div>

      )}



    </header>

  );

}