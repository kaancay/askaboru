"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import Container from "./Container";

const menuItems = [
  {
    title: "Anasayfa",
    href: "#",
  },
  {
    title: "Hakkımızda",
    href: "#hakkimizda",
  },
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
        <div className="flex h-20 items-center justify-between">

          {/* Logo */}

          <a href="/" className="flex items-center">
            <Image
              src="/logos/aska-logo.png"
              alt="Aska Boru"
              width={180}
              height={60}
              priority
            />
          </a>

          {/* Desktop Menü */}

          <nav className="hidden items-center gap-10 lg:flex">
            {menuItems.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="text-[15px] font-semibold text-gray-700 transition duration-300 hover:text-red-700"
              >
                {item.title}
              </a>
            ))}
          </nav>

          {/* Sağ Alan */}

          <div className="flex items-center gap-4">

            <a
              href="https://wa.me/90XXXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden rounded-xl bg-red-700 px-6 py-3 font-semibold text-white transition duration-300 hover:bg-red-800 lg:block"
            >
              WhatsApp
            </a>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="rounded-xl border border-gray-300 p-3 lg:hidden"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

          </div>

        </div>
      </Container>

      {/* Mobil Menü */}

      {menuOpen && (
        <div className="border-t border-gray-200 bg-white lg:hidden">
          <Container>

            <nav className="flex flex-col py-6">

              {menuItems.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="border-b border-gray-100 py-4 font-semibold text-gray-700"
                >
                  {item.title}
                </a>
              ))}

              <a
                href="https://wa.me/90XXXXXXXXXX"
                className="mt-6 rounded-xl bg-red-700 py-4 text-center font-semibold text-white"
              >
                WhatsApp
              </a>

            </nav>

          </Container>
        </div>
      )}
    </header>
  );
}