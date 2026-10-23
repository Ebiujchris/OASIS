import type { Metadata } from "next";
import {
  ArrowUpRight,
  BadgeCheck,
  Check,
  Droplets,
  Ruler,
  Sprout,
  Wrench,
  MessageCircle,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/section-heading";
import { FieldGallery } from "@/components/field-gallery";
import { WhatsAppCta } from "@/components/whatsapp-cta";
import { projectPhotos, services, whatsappLink } from "@/data/site";

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
            <div className="service-detail-list">
              {services.map((service, index) => {
                const Icon = icons[index];
                return (
                  <article
                    className="service-detail-item"
                    id={service.slug}
                    key={service.number}
                  >
                    <div className="service-detail-image">
                      <Image
                        src={service.image}
                        alt={service.alt}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1050px) 50vw, 33vw"
                      />
                      <span className="service-detail-number">
                        {service.number}
                      </span>
                    </div>
                    <div className="service-detail-content">
                      <span className="service-detail-icon">
                        <Icon size={18} aria-hidden="true" />
                      </span>
                      <h3>
                        <Link href={`/services/${service.slug}/`}>
                          {service.title}
                        </Link>
                      </h3>
                      <p>{service.description}</p>
                      <Link
                        className="service-detail-link"
                        href={whatsappLink(
                          `Hello Oasis, I would like to enquire about ${service.title.toLowerCase()} for my farm.`
                        )}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <MessageCircle size={15} aria-hidden="true" />
                        Enquire about this service
                        <ArrowUpRight size={15} aria-hidden="true" />
                      </Link>
                    </div>
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
