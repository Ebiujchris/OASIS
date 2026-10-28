import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/section-heading";
import { FieldGallery } from "@/components/field-gallery";
import { WhatsAppCta } from "@/components/whatsapp-cta";
import { HeroWaterEffects } from "@/components/hero-water-effects";
import { ServiceCatalogue } from "@/components/service-catalogue";
import { getSiteContent } from "@/sanity/site-content";

export const metadata: Metadata = {
  title: "Irrigation Planning, Installation & Farm Support",
  description:
    "Learn about irrigation planning, installation, water storage and product guidance from Oasis Irrigation Solutions.",
};

export default async function ServicesPage() {
  const { services, projectPhotos } = await getSiteContent();

  return (
    <>
      <section className="page-hero">
        <HeroWaterEffects />
        <div className="page-width page-hero-inner">
          <div>
            <span className="eyebrow">Services / Support for your setup</span>
            <h1>Practical help for every stage of irrigation.</h1>
            <p>
              Whether you’re planning a new system or figuring out which
              fittings you need, start with a conversation about your farm.
            </p>
            <WhatsAppCta compact />
          </div>
          <div className="page-hero-image-card">
            <Image
              src="/images/irrigation-installation-team.webp"
              alt="An irrigation technician assembling blue pipe connections in a field"
              fill
              priority
              sizes="(max-width: 640px) 100vw, 32vw"
            />
            <span className="page-hero-image-shade" />
            <span className="page-hero-image-caption">
              Irrigation pipework being installed
            </span>
          </div>
        </div>
      </section>
      <section className="section services-detail-section">
        <div className="page-width">
          <div className="services-list-block">
            <SectionHeading
              eyebrow="How we can help"
              title="Practical support for your water system."
              description="Explore the service areas below. Each farm is different, so share your water source, crops, site conditions and goals to discuss a suitable next step."
            />
            <ServiceCatalogue items={services} />
          </div>
        </div>
      </section>
      <FieldGallery interactivePhotos photos={projectPhotos} />
      <section className="section service-process-section">
        <div className="page-width service-process-inner">
          <SectionHeading
            eyebrow="Next step"
            title="Let’s talk about your farm."
            centered
          />
          <div className="service-process-steps">
            <article>
              <span>01</span>
              <div>
                <h3>Tell us about your farm</h3>
                <p>Share your crops, water source and needs.</p>
              </div>
            </article>
            <article>
              <span>02</span>
              <div>
                <h3>Discuss suitable options</h3>
                <p>Explore what may work for your setup.</p>
              </div>
            </article>
            <article>
              <span>03</span>
              <div>
                <h3>Plan a next step</h3>
                <p>Agree what to explore next.</p>
              </div>
            </article>
          </div>
          <WhatsAppCta />
        </div>
      </section>
    </>
  );
}
