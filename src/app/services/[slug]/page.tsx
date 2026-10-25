import type { Metadata } from "next";
import { ArrowLeft, ArrowUpRight, Check, MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { HeroWaterEffects } from "@/components/hero-water-effects";
import { services, whatsappLink } from "@/data/site";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    return { title: "Service not found" };
  }

  return {
    title: `${service.title} | Oasis Irrigation Solutions`,
    description: service.detailIntro,
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <section className="page-hero service-page-hero">
        <HeroWaterEffects />
        <div className="page-width page-hero-inner">
          <div>
            <span className="eyebrow">
              <Link href="/services/">Services</Link> / {service.title}
            </span>
            <h1>{service.title}</h1>
            <p>{service.detailIntro}</p>
            <div className="page-hero-actions">
              <Link
                className="button button-small"
                href={whatsappLink(
                  `Hello Oasis, I would like to discuss ${service.title.toLowerCase()} for my farm.`
                )}
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle size={16} aria-hidden="true" />
                Enquire about this service
                <ArrowUpRight size={15} aria-hidden="true" />
              </Link>
            </div>
          </div>
          <div className="page-hero-image-card">
            <Image
              src={service.image}
              alt={service.alt}
              fill
              priority
              sizes="(max-width: 640px) 100vw, 40vw"
            />
            <span className="page-hero-image-shade" />
            <span className="page-hero-image-caption">{service.alt}</span>
          </div>
        </div>
      </section>
      <section className="section service-page-information">
        <div className="page-width service-page-information-inner">
          <div>
            <span className="eyebrow">What to consider</span>
            <h2>Planning around your farm and equipment.</h2>
            <ul className="service-page-points">
              {service.detailPoints.map((point) => (
                <li key={point}>
                  <Check size={17} aria-hidden="true" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
          <aside className="service-page-checklist">
            <span className="eyebrow">Helpful details to share</span>
            <h2>Start with what you know.</h2>
            <p>
              These details help make the conversation specific to your setup.
              If you are unsure, share what you have and ask us what else may be
              useful.
            </p>
            <ul>
              {service.detailChecklist.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <Link className="text-link" href="/services/">
              <ArrowLeft size={15} aria-hidden="true" />
              View all services
            </Link>
          </aside>
        </div>
      </section>
      <section className="section service-photo-section">
        <div className="page-width">
          <div className="service-photo-heading">
            <span className="eyebrow">From the field</span>
            <h2>More from {service.title.toLowerCase()}.</h2>
          </div>
          <div className="service-photo-grid">
            {service.detailPhotos.map((photo) => (
              <figure className="service-photo-card" key={photo.image}>
                <div className="service-photo-image">
                  <Image
                    src={photo.image}
                    alt={photo.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1050px) 50vw, 33vw"
                  />
                </div>
                <figcaption>{photo.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
