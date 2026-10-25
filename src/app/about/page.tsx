import type { Metadata } from "next";
import {
  ArrowUpRight,
  ClipboardList,
  Droplets,
  Leaf,
  MapPin,
  Sprout,
  Sun,
  Waves,
  Wrench,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/section-heading";
import { WhatsAppCta } from "@/components/whatsapp-cta";
import { HeroWaterEffects } from "@/components/hero-water-effects";
import { company, services } from "@/data/site";

export const metadata: Metadata = {
  title: "About Oasis Irrigation Solutions",
  description:
    "Get to know Oasis Irrigation Solutions, an irrigation products and farm support business serving Uganda.",
};

const serviceIcons = [Droplets, MapPin, Waves, Sun, Wrench, ClipboardList];

export default function AboutPage() {
  return (
    <>
      <section className="page-hero about-page-hero">
        <HeroWaterEffects />
        <div className="page-width page-hero-inner">
          <div>
            <span className="eyebrow">About Oasis / Our approach</span>
            <h1>Helping farms grow with water used wisely.</h1>
            <p>
              Oasis Irrigation Solutions brings together irrigation products
              and practical support to help growers make confident choices for
              their farms.
            </p>
          </div>
          <div className="page-hero-image-card">
            <Image
              src="/images/solar-installation-team.webp"
              alt="A team carrying a large solar panel at a farm site"
              fill
              priority
              sizes="(max-width: 640px) 100vw, 32vw"
            />
            <span className="page-hero-image-shade" />
            <span className="page-hero-image-caption">
              Solar installation for farm water systems
            </span>
          </div>
        </div>
      </section>
      <section className="section about-story-section">
        <div className="page-width about-story">
          <div className="about-copy">
            <SectionHeading
              eyebrow="Who we are"
              title="Irrigation should make sense for the people using it."
              description="From fittings and drip irrigation components to system planning and installation support, our focus is on helping you find a practical next step."
            />
            <p>
              We believe choosing irrigation equipment should feel clear, not
              complicated. That means asking about the farm, understanding the
              water available and helping you explore options that fit the
              project.
            </p>
            <p>
              Every setup has its own requirements. Crop type, field layout,
              water source and existing equipment all help shape a useful
              conversation about products, planning and installation support.
            </p>
            <WhatsAppCta compact />
          </div>
          <div className="about-photo-stack">
            <div className="about-photo about-photo-large">
              <Image
                src="/images/farm-watering.jpg"
                alt="A farm irrigation hose watering crops between rows"
                fill
                sizes="(max-width: 800px) 90vw, 36vw"
              />
              <span className="about-photo-label"><Droplets size={15} aria-hidden="true" /> Water for growing</span>
            </div>
            <div className="about-photo about-photo-small">
              <Image
                src="/images/water-infrastructure.jpg"
                alt="Irrigation water infrastructure on a farm"
                fill
                sizes="(max-width: 800px) 70vw, 22vw"
              />
            </div>
            <span className="about-photo-note">SMART IRRIGATION · BETTER HARVESTS</span>
          </div>
        </div>
      </section>
      <section className="section about-services-section">
        <div className="page-width">
          <div className="about-services-heading">
            <SectionHeading
              eyebrow="How we can help"
              title="Support for the whole water journey."
              description="Explore the areas Oasis can help you discuss, from planning an irrigation layout to choosing components and maintaining a system."
            />
            <Link className="about-services-all" href="/services/">
              Explore all services <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          </div>
          <div className="about-services-grid">
            {services.map((service, index) => {
              const Icon = serviceIcons[index] ?? Droplets;
              return (
                <Link
                  className="about-service-card"
                  href={`/services/${service.slug}/`}
                  key={service.slug}
                  style={{ animationDelay: `${index * 70}ms` }}
                >
                  <span className="about-service-card__number">{service.number}</span>
                  <span className="about-service-card__icon">
                    <Icon size={20} aria-hidden="true" />
                  </span>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <span className="about-service-card__link">
                    Learn more <ArrowUpRight size={15} aria-hidden="true" />
                  </span>
                </Link>
              );
            })}
          </div>
          <div className="about-coverage">
            <MapPin size={19} aria-hidden="true" />
            <p>
              <strong>Serving growers throughout Uganda</strong>
              <span>Oasis has offices in {company.locations.join(" and ")}.</span>
            </p>
            <Link href="/contact/">Get in touch <ArrowUpRight size={15} aria-hidden="true" /></Link>
          </div>
        </div>
      </section>
      <section className="section values-section">
        <div className="page-width">
          <SectionHeading
            eyebrow="What guides us"
            title="A practical approach to every project."
            centered
          />
          <div className="values-grid">
            <article>
              <span><Droplets size={21} aria-hidden="true" /></span>
              <h3>Water-conscious</h3>
              <p>Consider the water source and the needs of each farm.</p>
            </article>
            <article>
              <span><Sprout size={21} aria-hidden="true" /></span>
              <h3>Grower-focused</h3>
              <p>Start with what you grow and how your farm works.</p>
            </article>
            <article>
              <span><Leaf size={21} aria-hidden="true" /></span>
              <h3>Clear and practical</h3>
              <p>Make product choices and next steps easier to understand.</p>
            </article>
          </div>
        </div>
      </section>
      <section className="contact-banner">
        <div className="contact-banner-inner page-width">
          <div>
            <span className="eyebrow eyebrow-light">Let’s grow together</span>
            <h2>Tell us what your farm needs.</h2>
            <p>Oasis is here to talk through your irrigation project.</p>
          </div>
          <WhatsAppCta />
        </div>
        <span className="banner-watermark" aria-hidden="true"><ArrowUpRight /></span>
      </section>
    </>
  );
}
