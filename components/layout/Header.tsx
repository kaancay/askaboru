"use client";
import { useState } from "react";
import Image from "next/image";
import { Menu, X, MessageCircle } from "lucide-react";
const leftLinks = [
  ["Anasayfa", "/#anasayfa"],
  ["Kurumsal", "/#hakkimizda"],
];
const rightLinks = [
  ["Ürünlerimiz", "/urunler"],
  ["İletişim", "/#iletisim"],
];
export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header
      className="site-header centered-header"
      onKeyDown={(event) => {
        if (event.key === "Escape") setOpen(false);
      }}
    >
      <div className="shell header-inner">
        <nav className="desktop-nav nav-left" aria-label="Ana menü">
          {leftLinks.map(([label, href]) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
        </nav>
        <button
          className="menu-toggle"
          aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
        <a
          href="/#anasayfa"
          aria-label="Aska Boru anasayfa"
          className="brand-logo"
        >
          <Image
            src="/logos/aska-logo-round.png"
            alt="Aska Boru"
            width={1254}
            height={1254}
            sizes="(max-width:900px) 76px, 100px"
            preload
          />
        </a>
        <div className="header-right">
          <nav
            className="desktop-nav nav-right"
            aria-label="Ürünler ve iletişim"
          >
            {rightLinks.map(([label, href]) => (
              <a key={href} href={href}>
                {label}
              </a>
            ))}
          </nav>
          <a className="button header-quote" href="/#iletisim">
            <MessageCircle size={18} aria-hidden="true" /> Teklif alın
          </a>
        </div>
      </div>
      {open && (
        <nav id="mobile-menu" className="mobile-nav" aria-label="Mobil menü">
          {[...leftLinks, ...rightLinks].map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
