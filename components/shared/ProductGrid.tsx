import Image from "next/image";
import { Layers } from "lucide-react";
import { products, type PipeProduct } from "@/lib/products";
export default function ProductGrid({
  items = products,
  headingLevel = "h3",
}: {
  items?: PipeProduct[];
  headingLevel?: "h2" | "h3";
}) {
  const Heading = headingLevel;
  return (
    <div className="product-grid">
      {items.map((p) => (
        <article className="product-card" key={p.slug}>
          <a
            className="product-image"
            href={`/urunler/${p.slug}`}
            aria-label={`${p.title} ürün bilgileri`}
          >
            <Image
              src={`/images/products/${p.image}.png`}
              alt={`GF Hakan Plastik ${p.title} boru ve ek parçaları`}
              fill
              sizes="(max-width:650px) 100vw, (max-width:1000px) 50vw, 33vw"
            />
          </a>
          <div className="product-content">
            <span className="product-category">{p.category}</span>
            <Heading className="product-title">
              <a href={`/urunler/${p.slug}`}>{p.title}</a>
            </Heading>
            <p>{p.text}</p>
            <a className="product-link" href={`/urunler/${p.slug}`}>
              <Layers size={17} /> Ürünü inceleyin
            </a>
          </div>
        </article>
      ))}
    </div>
  );
}
