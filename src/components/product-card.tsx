import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { whatsappLink } from "@/data/site";

type Product = {
  name: string;
  description: string;
  image: string;
  alt: string;
  detail: string;
};

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="product-card">
      <div className="product-image-frame">
        <Image
          className="product-image"
          src={product.image}
          alt={product.alt}
          width={560}
          height={420}
          sizes="(max-width: 700px) 90vw, (max-width: 1050px) 45vw, 25vw"
        />
      </div>
      <div className="product-card-content">
        <span className="product-detail">{product.detail}</span>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <a
          className="product-enquiry-link"
          href={whatsappLink(`Hello Oasis, I would like to ask about ${product.name}.`)}
          target="_blank"
          rel="noreferrer"
        >
          Ask about this product <ArrowUpRight size={16} aria-hidden="true" />
        </a>
      </div>
    </article>
  );
}
