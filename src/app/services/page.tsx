import type { Metadata } from "next";
import {
  ArrowUpRight,
  BadgeCheck,
  Check,
  Droplets,
  Ruler,
  Sprout,
  Wrench,
} from "lucide-react";
import Image from "next/image";
import { SectionHeading } from "@/components/section-heading";
import { FieldGallery } from "@/components/field-gallery";
import { WhatsAppCta } from "@/components/whatsapp-cta";
import { projectPhotos, services } from "@/data/site";

export const metadata: Metadata = {
  title: "Irrigation Planning, Installation & Farm Support",
  description:
    "Learn about irrigation planning, installation, water storage and product guidance from Oasis Irrigation Solutions.",
};

const icons = [Ruler, Droplets, Droplets, Sprout, Wrench, BadgeCheck];

export default function ServicesPage() {
  return (
    <>
      <section className="page-hero">
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
              src="/images/irrigation-installation-team.jpg"
              alt="An irrigation technician assembling blue pipe connections in a field"
              fill
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
        <div className="page-width services-detail-layout">
          <div className="services-photo">
            <Image
              src="/images/solar-water-system.jpg"
              alt="Solar-powered irrigation equipment installed beside a farm"
              fill
              sizes="(max-width: 800px) 100vw, 43vw"
            />
            <div className="services-photo-caption">
              <span>OASIS FIELD NOTES</span>
              <strong>Water systems, planned with purpose.</strong>
            </div>
          </div>
          <div className="services-list-block">
            <SectionHeading
              eyebrow="How we can help"
              title="Support that starts with listening."
              description="Every farm has different conditions. Tell us what you are working with and we can discuss the next practical step."
            />
            <div className="service-detail-list">
              {services.map((service, index) => {
                const Icon = icons[index];
                return (
                  <article
                    className="service-detail-item"
                    id={service.slug}
                    key={service.number}
                  >
                    <span className="service-detail-icon">
                      <Icon size={19} aria-hidden="true" />
                    </span>
                    <div>
                      <span className="service-detail-number">{service.number}</span>
                      <h3>{service.title}</h3>
                      <p>{service.description}</p>
                    </div>
                    <ArrowUpRight size={17} aria-hidden="true" />
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <FieldGallery photos={projectPhotos} />
      <section className="section service-process-section">
        <div className="page-width service-process-inner">
          <SectionHeading
            eyebrow="A clear way forward"
            title="Start with the details that matter."
            description="A few details help us understand what kind of support may be useful."
            centered
          />
          <div className="service-checks">
            {["What are you growing?", "Where does your water come from?", "What area are you irrigating?", "What would you like help with?"].map((item) => (
              <span key={item}><Check size={16} aria-hidden="true" /> {item}</span>
            ))}
          </div>
          <WhatsAppCta />
        </div>
      </section>
    </>
  );
}
