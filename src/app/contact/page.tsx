import type { Metadata } from "next";
import { ArrowUpRight, MapPin, MessageCircle, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ContactForm } from "./contact-form";
import { company, whatsappLink } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact & Request a Quote",
  description:
    "Contact Oasis Irrigation Solutions by phone or WhatsApp for irrigation products and project support throughout Uganda. Offices in Kampala and Gulu.",
};

export default function ContactPage() {
  return (
    <>
      <section className="page-hero contact-page-hero">
        <div className="page-width page-hero-inner">
          <div>
            <span className="eyebrow">Contact / Let’s talk</span>
            <h1>Tell us what you’re growing.</h1>
            <p>
              Whether you need a product, have a system in mind or are just
              getting started, we’d be happy to hear about your project.
            </p>
          </div>
          <div className="page-hero-image-card">
            <Image
              src="/images/farm-water-point-team.jpg"
              alt="People collecting water at an outdoor water point"
              fill
              sizes="(max-width: 640px) 100vw, 32vw"
            />
            <span className="page-hero-image-shade" />
            <span className="page-hero-image-caption">
              Talk with Oasis about your water needs
            </span>
          </div>
        </div>
      </section>
      <section className="section contact-section">
        <div className="page-width contact-layout">
          <ContactForm />
          <aside className="contact-sidebar">
            <span className="eyebrow">Other ways to reach us</span>
            <h2>We’re only a message away.</h2>
            <p>
              Contact us with your location and project details so we can point
              you in the right direction.
            </p>
            <a className="contact-detail-card" href={`tel:${company.phone}`}>
              <span className="contact-detail-icon"><Phone size={18} aria-hidden="true" /></span>
              <span>
                <small>Call Oasis</small>
                <strong>{company.phoneDisplay}</strong>
              </span>
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
            <a
              className="contact-detail-card"
              href={whatsappLink("Hello Oasis, I would like to ask about irrigation solutions.")}
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
              <h3><MapPin size={17} aria-hidden="true" /> Offices in Kampala &amp; Gulu</h3>
              <p>
                Oasis serves customers throughout Uganda. Contact us for
                office directions and confirm the exact address before visiting.
              </p>
              <div className="location-pills">
                {company.locations.map((location) => (
                  <span key={location}>{location}</span>
                ))}
              </div>
            </div>
            <Link className="text-link" href="/services/">
              See how we can help <ArrowUpRight size={15} aria-hidden="true" />
            </Link>
          </aside>
        </div>
      </section>
    </>
  );
}
