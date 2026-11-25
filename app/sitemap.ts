import type { MetadataRoute } from "next";
import { products } from "@/lib/products";
import { site } from "@/lib/site";
export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/urunler", ...products.map((p) => `/urunler/${p.slug}`)].map(
    (path) => ({
      url: `${site.url}${path || "/"}`,
      lastModified: site.updated,
    }),
  );
}
