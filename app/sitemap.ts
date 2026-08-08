import type { MetadataRoute } from "next";


export default function sitemap(): MetadataRoute.Sitemap {


  return [

    {

      url:
        "https://www.askaboru.com",

      lastModified:
        new Date(),

    },


    {

      url:
        "https://www.askaboru.com/#urunler",

      lastModified:
        new Date(),

    },


    {

      url:
        "https://www.askaboru.com/#iletisim",

      lastModified:
        new Date(),

    },


  ];

}