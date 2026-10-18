import type { Metadata } from "next";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Droplets,
  Leaf,
  Ruler,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FieldGallery } from "@/components/field-gallery";
import { ProductCard } from "@/components/product-card";
import { SectionHeading } from "@/components/section-heading";
import { WhatsAppCta } from "@/components/whatsapp-cta";
import { company, fieldPhotos, products, services } from "@/data/site";

export const metadata: Metadata = {
  title: "Irrigation Products & Farm Solutions in Uganda",
  description:
    "Discover practical drip irrigation products, installation and farm support from Oasis Irrigation Solutions.",
};

const reasons = [
  {
    icon: Droplets,
    title: "Water-wise thinking",
    text: "Explore irrigation options that make considered use of the water available to your farm.",
  },
  {
    icon: Ruler,
    title: "Advice for your setup",
    text: "Talk through your crops, water source and project before choosing system components.",
  },
  {
    icon: BadgeCheck,
    title: "Help beyond the product",
    text: "Get practical support as you plan, select and set up irrigation equipment.",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="hero-section">
        <div className="hero-inner page-width">
          <div className="hero-copy">
            <span className="eyebrow">
              <span className="eyebrow-mark" /> Irrigation solutions in Uganda
            </span>
            <h1>
              Grow more with <span>smarter irrigation.</span>
            </h1>
            <p>
              Practical irrigation products and farm support to help you make
              better use of water and care for every crop.
            </p>
            <div className="hero-actions">
              <WhatsAppCta />
              <Link className="button button-outline" href="/products/">
                Explore products <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
            <div className="hero-note">
              <span className="hero-note-icon">
                <Leaf size={16} aria-hidden="true" />
              </span>
              <span>
                <strong>Smart irrigation. Better harvests.</strong>
                <small>Thoughtful solutions for growing farms.</small>
              </span>
            </div>
          </div>
          <div className="hero-visual">
            <Image
              className="hero-image"
              src="/images/farm-irrigation.jpg"
              alt="Watering crops on a farm with an irrigation hose"
              fill
              priority
              sizes="(max-width: 800px) 100vw, 52vw"
            />
            <div className="hero-image-shade" />
            <div className="hero-photo-caption">
              <span className="caption-dot" />
              Water where your crops need it
            </div>
            <div className="hero-image-card">
              <span className="image-card-icon">
                <Droplets size={19} aria-hidden="true" />
              </span>
              <span>
                <strong>Every farm is different.</strong>
                <small>Start with a conversation.</small>
              </span>
              <ArrowUpRight size={18} aria-hidden="true" />
            </div>
            <span className="hero-side-label">OASIS / IRRIGATION SOLUTIONS</span>
          </div>
        </div>
        <div className="hero-bottom-rule" />
      </section>

      <section className="trust-strip" aria-label="Oasis service highlights">
        <div className="trust-inner page-width">
          <span className="trust-label">A better way to grow</span>
          <span><Droplets size={17} aria-hidden="true" /> Water-conscious solutions</span>
          <span><Ruler size={17} aria-hidden="true" /> Practical system support</span>
          <span><Leaf size={17} aria-hidden="true" /> Made for growing farms</span>
        </div>
      </section>

      <section className="section products-section">
        <div className="page-width">
          <div className="section-topline">
            <SectionHeading
              eyebrow="What we offer"
              title="Find the right pieces for your farm."
              description="Explore irrigation components and solutions, then get in touch to check what suits your setup."
            />
            <Link className="text-link section-top-link" href="/products/">
              Browse all products <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          </div>
          <div className="product-grid">
            {products.slice(0, 3).map((product) => (
              <ProductCard key={product.name} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="section service-feature-section">
        <div className="service-feature page-width">
          <div className="service-feature-image">
            <Image
              src="/images/solar-water-system.jpg"
              alt="Solar-powered water system set up beside a farm"
              fill
              sizes="(max-width: 800px) 100vw, 48vw"
            />
            <div className="service-image-label">
              <span>01 / 03</span>
              Water systems &amp; farm projects
            </div>
          </div>
          <div className="service-feature-copy">
            <SectionHeading
              eyebrow="More than equipment"
              title="The right support makes the difference."
              description="From understanding your water source to selecting and setting up equipment, we help make irrigation feel more straightforward."
            />
            <div className="service-list">
              {services.slice(0, 3).map((service) => (
                <div className="service-list-item" key={service.number}>
                  <span>{service.number}</span>
                  <strong>{service.title}</strong>
                  <ArrowUpRight size={17} aria-hidden="true" />
                </div>
              ))}
            </div>
            <Link className="text-link" href="/services/">
              Explore our services <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className="section why-section">
        <div className="page-width">
          <div className="why-heading">
            <SectionHeading
              eyebrow="The Oasis approach"
              title="Good irrigation starts with good questions."
              description="Your crops, water source and farm layout all matter. We help you think through the details before you choose a solution."
            />
            <span className="why-decoration" aria-hidden="true">
              <Droplets size={44} strokeWidth={1.2} />
            </span>
          </div>
          <div className="reason-grid">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <article className="reason-card" key={reason.title}>
                  <div className="reason-card-top">
                    <span className="reason-icon">
                      <Icon size={20} aria-hidden="true" />
                    </span>
                    <span>0{index + 1}</span>
                  </div>
                  <h3>{reason.title}</h3>
                  <p>{reason.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <FieldGallery compact photos={fieldPhotos} />

      <section className="section process-section">
        <div className="page-width process-layout">
          <div className="process-intro">
            <SectionHeading
              eyebrow="Getting started"
              title="From first question to flowing water."
              description="A simple path to help you move from an irrigation idea to a setup that works for your farm."
            />
            <Link className="text-link" href="/contact/">
              Tell us about your farm <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          </div>
          <div className="process-steps">
            <article>
              <span>01</span>
              <div>
                <h3>Share your needs</h3>
                <p>Tell us about your crops, water source and farm.</p>
              </div>
              <ArrowDownRight size={19} aria-hidden="true" />
            </article>
            <article>
              <span>02</span>
              <div>
                <h3>Explore your options</h3>
                <p>Discuss suitable products and an approach for your setup.</p>
              </div>
              <ArrowDownRight size={19} aria-hidden="true" />
            </article>
            <article>
              <span>03</span>
              <div>
                <h3>Plan the next step</h3>
                <p>Arrange supply or installation support for your project.</p>
              </div>
              <ArrowRight size={19} aria-hidden="true" />
            </article>
          </div>
        </div>
      </section>

      <section className="contact-banner">
        <div className="contact-banner-inner page-width">
          <div>
            <span className="eyebrow eyebrow-light">Let’s talk irrigation</span>
            <h2>Ready to make every drop count?</h2>
            <p>Tell us what you’re growing and what you need help with.</p>
          </div>
          <WhatsAppCta />
        </div>
        <span className="banner-watermark" aria-hidden="true">
          <Droplets />
        </span>
      </section>

      <section className="home-location-note page-width">
        <span><span className="caption-dot" /> Here to help growers</span>
        <p>Connect with Oasis in {company.locations.join(" or ")}.</p>
        <Link className="text-link" href="/contact/">
          Find contact details <ArrowUpRight size={15} aria-hidden="true" />
        </Link>
      </section>
    </>
  );
}
