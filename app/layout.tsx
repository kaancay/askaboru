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
    "Aska Boru, Antalya merkezli Hakan Plastik ve GF Hakan Plastik ürünleriyle PVC boru, temiz su, atık su, sessiz boru ve yerden ısıtma sistemlerinde profesyonel çözümler sunmaktadır.",

  keywords: [
    "Aska Boru",
    "Hakan Plastik",
    "GF Hakan Plastik",
    "Antalya boru",
    "PVC boru",
    "temiz su sistemleri",
    "atık su sistemleri",
    "sessiz boru",
    "yerden ısıtma",
    "plastik boru sistemleri",
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
    googleBot: {
      index: true,
      follow: true,
    },
  },

  openGraph: {
    title: "Aska Boru | Hakan Plastik Yetkili Satış Noktası",
    description:
      "Antalya merkezli profesyonel plastik boru ve altyapı çözümleri.",
    url: "https://askaboru.com",
    siteName: "Aska Boru",
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: "/logos/aska-logo.png",
        width: 800,
        height: 600,
        alt: "Aska Boru Logo",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Aska Boru",
    description:
      "Hakan Plastik ürünleriyle profesyonel boru sistemleri.",
    images: ["/logos/aska-logo.png"],
  },

  icons: {
    icon: "/logos/aska-logo-round.png",
    shortcut: "/logos/aska-logo-round.png",
    apple: "/logos/aska-logo-round.png",
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