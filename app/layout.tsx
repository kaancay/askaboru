import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";


const geist = Geist({
  subsets: ["latin"],
  display: "swap",
});



export const metadata: Metadata = {

  metadataBase: new URL(
    "https://www.askaboru.com"
  ),



  verification: {

    google:
      "dYUEUI_Gpo-b7nemWwKBB9iSUOvSuCPV0ds_aSPpmeg",

  },



  title: {

    default:
      "Aska Boru | GF Hakan Plastik Yetkili Bayi Antalya",

    template:
      "%s | Aska Boru",

  },



  description:
    "Aska Boru, Antalya'da GF Hakan Plastik yetkili bayisi olarak PVC boru sistemleri, temiz su, atık su, sessiz boru ve yerden ısıtma çözümleri sunmaktadır.",



  keywords: [

    "Aska Boru",

    "GF Hakan Plastik",

    "GF Hakan Plastik Yetkili Bayi",

    "Hakan Plastik Antalya",

    "PVC boru",

    "plastik boru sistemleri",

    "sessiz boru sistemleri",

    "Silenta",

    "Silenta 3A",

    "Silenta Premium",

    "Silenta FR",

    "PP-R boru",

    "Aquasystem",

    "yerden ısıtma",

    "Antalya tesisat malzemeleri",

  ],



  authors: [

    {
      name:
        "Aska Boru",
    },

  ],



  creator:
    "Aska Boru",


  publisher:
    "Aska Boru",




  robots: {

    index:
      true,

    follow:
      true,


    googleBot: {

      index:
        true,

      follow:
        true,

    },

  },





  openGraph: {


    title:
      "Aska Boru | GF Hakan Plastik Yetkili Bayi Antalya",



    description:
      "GF Hakan Plastik ürünleriyle altyapı ve üstyapı projeleri için profesyonel boru sistemleri çözümleri.",



    url:
      "https://www.askaboru.com",



    siteName:
      "Aska Boru",



    locale:
      "tr_TR",



    type:
      "website",



    images: [

      {

        url:
          "/images/aska-giris-1.png",

        width:
          1200,

        height:
          630,

        alt:
          "Aska Boru GF Hakan Plastik",

      },

    ],

  },






  twitter: {


    card:
      "summary_large_image",



    title:
      "Aska Boru | GF Hakan Plastik Yetkili Bayi Antalya",



    description:
      "Profesyonel plastik boru sistemleri ve altyapı çözümleri.",



    images:

      [
        "/images/aska-giris-1.png"
      ],


  },






  icons: {

    icon:
      "/logos/aska-logo-round.png",

    shortcut:
      "/logos/aska-logo-round.png",

    apple:
      "/logos/aska-logo-round.png",

  },


};






export default function RootLayout({

  children,

}: Readonly<{

  children: React.ReactNode;

}>) {


  return (

    <html lang="tr">


      <body

        className={`
        ${geist.className}
        bg-white
        text-neutral-900
        antialiased
        `}

      >


        {children}


      </body>


    </html>

  );

}