import type { Metadata } from "next";
import { ArrowUpRight, MapPin, MessageCircle, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ContactForm } from "./contact-form";
import { HeroWaterEffects } from "@/components/hero-water-effects";
import { company, whatsappLinkForNumber } from "@/data/site";
import { getSiteContent } from "@/sanity/site-content";

export async function generateMetadata(): Promise<Metadata> {
  const { contactPage } = await getSiteContent();
  return {
    title: contactPage?.metaTitle || "Contact & Request a Quote",
    description:
      contactPage?.metaDescription ||
      "Contact Oasis Irrigation Solutions by phone or WhatsApp for irrigation products and project support throughout Uganda. Offices in Kampala and Gulu.",
  };
}

export default async function ContactPage() {
  const { contactPage } = await getSiteContent();
  const phone = contactPage?.phone || company.phone;
  const phoneDisplay = contactPage?.phoneDisplay || company.phoneDisplay;
  const whatsapp = contactPage?.whatsapp || company.whatsapp;
  const locations =
    contactPage?.locations?.length ? contactPage.locations : company.locations;

  return (
    <>
      <section className="page-hero contact-page-hero">
        <HeroWaterEffects />
        <div className="page-width page-hero-inner">
          <div>
            <span className="eyebrow">
              {contactPage?.heroEyebrow || "Contact / Let’s talk"}
            </span>
            <h1>{contactPage?.heroTitle || "Tell us what you’re growing."}</h1>
            <p>
              {contactPage?.heroLead ||
                "Whether you need a product, have a system in mind or are just getting started, we’d be happy to hear about your project."}
            </p>
          </div>
          <div className="page-hero-image-card">
            <Image
              src={
                contactPage?.heroImage?.url ||
                "/images/farm-water-point-team.webp"
              }
              alt={
                contactPage?.heroImage?.alt ||
                "People collecting water at an outdoor water point"
              }
              fill
              priority
              sizes="(max-width: 640px) 100vw, 32vw"
            />
            <span className="page-hero-image-shade" />
            <span className="page-hero-image-caption">
              {contactPage?.heroImageCaption ||
                "Talk with Oasis about your water needs"}
            </span>
          </div>
        </div>
      </section>
      <section className="section contact-section">
        <div className="page-width contact-layout">
          <ContactForm
            whatsappNumber={whatsapp}
            title={contactPage?.formTitle}
            description={contactPage?.formDescription}
            privacyNote={contactPage?.formPrivacyNote}
          />
          <aside className="contact-sidebar">
            <span className="eyebrow">
              {contactPage?.contactEyebrow || "Other ways to reach us"}
            </span>
            <h2>
              {contactPage?.contactTitle || "We’re only a message away."}
            </h2>
            <p>
              {contactPage?.contactDescription ||
                "Contact us with your location and project details so we can point you in the right direction."}
            </p>
            <a className="contact-detail-card" href={`tel:${phone}`}>
              <span className="contact-detail-icon"><Phone size={18} aria-hidden="true" /></span>
              <span>
                <small>Call Oasis</small>
                <strong>{phoneDisplay}</strong>
              </span>
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
            <a
              className="contact-detail-card"
              href={whatsappLinkForNumber(
                whatsapp,
                "Hello Oasis, I would like to ask about irrigation solutions.",
              )}
              target="_blank"
              rel="noreferrer"
            >
              <span className="contact-detail-icon"><MessageCircle size={18} aria-hidden="true" /></span>
              <span>
                <small>WhatsApp</small>
                <strong>Send us a message</strong>
              </span>
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
            <div className="contact-locations">
              <h3>
                <MapPin size={17} aria-hidden="true" />{" "}
                {contactPage?.locationsTitle ||
                  `Offices in ${locations.join(" & ")}`}
              </h3>
              <p>
                {contactPage?.locationsDescription ||
                  "Oasis serves customers throughout Uganda. Contact us for office directions and confirm the exact address before visiting."}
              </p>
              <div className="location-pills">
                {locations.map((location) => (
                  <span key={location}>{location}</span>
                ))}
              </div>
            </div>
            <Link className="text-link" href="/services/">
              {contactPage?.servicesLink || "See how we can help"}{" "}
              <ArrowUpRight size={15} aria-hidden="true" />
            </Link>
          </aside>
        </div>
      </section>
    </>
  );
}
