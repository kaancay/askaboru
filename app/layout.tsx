import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://askaboru.com"),

  title: {
    default: "Aska Boru | Hakan Plastik Yetkili Satış Noktası",
    template: "%s | Aska Boru",
  },

  description:
    "Aska Boru, 2016 yılından bu yana Antalya merkezli olarak Hakan Plastik ürünleriyle PVC boru, temiz su, atık su, sessiz boru ve yerden ısıtma sistemlerinde Türkiye geneline hizmet vermektedir.",

  keywords: [
    "Aska Boru",
    "Hakan Plastik",
    "Antalya Boru",
    "PVC Boru",
    "Temiz Su Borusu",
    "Atık Su Sistemleri",
    "Sessiz Boru",
    "Yerden Isıtma",
    "Antalya Yapı Malzemeleri",
    "Plastik Boru",
  ],

  authors: [
    {
      name: "Aska Boru",
    },
  ],

  creator: "Aska Boru",

  publisher: "Aska Boru",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Aska Boru",
    description:
      "Hakan Plastik yetkili satış noktası. Antalya merkezli, Türkiye geneline profesyonel plastik boru çözümleri.",
    url: "https://askaboru.com",
    siteName: "Aska Boru",
    locale: "tr_TR",
    type: "website",
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={`${geist.className} bg-white text-neutral-900 antialiased`}>
        {children}
      </body>
    </html>
  );
}