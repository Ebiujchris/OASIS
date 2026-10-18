import type { Metadata } from "next";
import { ArrowRight, BadgeCheck, PackageSearch } from "lucide-react";
import Link from "next/link";
import { ProductCard } from "@/components/product-card";
import { SectionHeading } from "@/components/section-heading";
import { WhatsAppCta } from "@/components/whatsapp-cta";
import { products } from "@/data/site";

export const metadata: Metadata = {
  title: "Drip Irrigation Products & Fittings",
  description:
    "Browse drip irrigation fittings, valves, accessories and water storage solutions from Oasis Irrigation Solutions.",
};

export default function ProductsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="page-width page-hero-inner">
          <div>
            <span className="eyebrow">Products / Irrigation essentials</span>
            <h1>Good systems start with the right components.</h1>
            <p>
              Browse a selection of irrigation products and ask us about
              availability, compatibility and pricing for your project.
            </p>
            <div className="page-hero-actions">
              <WhatsAppCta compact />
              <Link className="subtle-link" href="/contact/">
                Need help choosing? <ArrowRight size={15} aria-hidden="true" />
              </Link>
            </div>
          </div>
          <div className="page-hero-aside">
            <PackageSearch size={30} strokeWidth={1.4} aria-hidden="true" />
            <strong>Ask before you order.</strong>
            <span>Product ranges and availability may vary.</span>
          </div>
        </div>
      </section>
      <section className="section catalogue-section">
        <div className="page-width">
          <div className="catalogue-heading">
            <SectionHeading
              eyebrow="Browse the range"
              title="Irrigation products"
              description="Explore fittings, valves, pipe options and water storage equipment photographed for a closer look. Contact Oasis to confirm product details and current availability."
            />
            <span className="catalogue-count">
              {String(products.length).padStart(2, "0")} categories
            </span>
          </div>
          <div className="product-grid product-grid-all">
            {products.map((product) => (
              <ProductCard key={product.name} product={product} />
            ))}
          </div>
        </div>
      </section>
      <section className="catalogue-note">
        <div className="page-width catalogue-note-inner">
          <BadgeCheck size={21} aria-hidden="true" />
          <p>
            No prices or stock claims are listed here. Message Oasis to confirm
            the right product, price and availability.
          </p>
          <WhatsAppCta compact />
        </div>
      </section>
    </>
  );
}
