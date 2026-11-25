"use client";
import { useState } from "react";
import Image from "next/image";
import { Menu, X, MessageCircle } from "lucide-react";
const links = [
  ["Anasayfa", "#anasayfa"],
  ["Kurumsal", "#hakkimizda"],
  ["Ürünlerimiz", "#urunler"],
  ["Katalog", "#katalog"],
  ["İletişim", "#iletisim"],
];
export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header
      className="site-header"
      onKeyDown={(event) => {
        if (event.key === "Escape") setOpen(false);
      }}
    >
      <div className="shell header-inner">
        <a
          href="#anasayfa"
          aria-label="Aska Boru anasayfa"
          className="brand-logo"
        >
          <Image
            src="/logos/aska-logo.png"
            alt="Aska Boru"
            width={620}
            height={288}
            priority
          />
        </a>
        <nav className="desktop-nav" aria-label="Ana menü">
          {links.map(([label, href]) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
        </nav>
        <a className="button button-blue header-quote" href="#iletisim">
          <MessageCircle size={18} /> Teklif alın
        </a>
        <button
          className="menu-toggle"
          aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav id="mobile-menu" className="mobile-nav" aria-label="Mobil menü">
          {links.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
          <a href="#iletisim" onClick={() => setOpen(false)}>
            Teklif alın
          </a>
        </nav>
      )}
    </header>
  );
}
