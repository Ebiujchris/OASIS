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
  const enquiry = whatsappLink(
    `Hello Oasis, I would like to ask about ${product.name}. Please share current availability and pricing.`,
  );

  return (
    <article className="product-card">
      <a
        className="product-image-link"
        href={enquiry}
        target="_blank"
        rel="noreferrer"
        aria-label={`Ask Oasis about ${product.name}`}
      >
        <Image
          className="product-image"
          src={product.image}
          alt={product.alt}
          width={560}
          height={420}
          sizes="(max-width: 700px) 90vw, (max-width: 1050px) 45vw, 25vw"
        />
        <span className="product-image-arrow" aria-hidden="true">
          <ArrowUpRight size={18} />
        </span>
      </a>
      <div className="product-card-content">
        <span className="product-detail">{product.detail}</span>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <a className="text-link" href={enquiry} target="_blank" rel="noreferrer">
          Enquire on WhatsApp <ArrowUpRight size={15} aria-hidden="true" />
        </a>
      </div>
    </article>
  );
}
