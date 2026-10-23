import type { Metadata } from "next";
import Image from "next/image";
import { FieldGallery } from "@/components/field-gallery";
import { WhatsAppCta } from "@/components/whatsapp-cta";

export const metadata: Metadata = {
  title: "Our Team",
  description:
    "Meet the people featured in Oasis Irrigation Solutions' field and installation work.",
};

const teamPhotos = [
  {
    image: "/images/irrigation-installation-team.jpg",
    alt: "A technician assembling irrigation pipe connections in a field",
    caption: "Preparing irrigation pipework",
    type: "Installation work",
  },
  {
    image: "/images/solar-installation-team.jpg",
    alt: "Team members carrying a solar panel at a farm site",
    caption: "Moving solar equipment into position",
    type: "Solar equipment",
  },
  {
    image: "/images/farm-water-point-team.jpg",
    alt: "People working together at an outdoor water point",
    caption: "Working at a farm water point",
    type: "Water supply",
  },
];

export default function TeamPage() {
  return (
    <>
      <section className="page-hero">
        <div className="page-width page-hero-inner">
          <div>
            <span className="eyebrow">About Oasis / Our Team</span>
            <h1>People working together on practical water solutions.</h1>
            <p>
              Our field photos show people involved in irrigation, solar and
              water-supply activities. Get in touch with Oasis to discuss your
              project and the support you need.
            </p>
            <WhatsAppCta compact />
          </div>
          <div className="page-hero-image-card">
            <Image
              src="/images/solar-installation-team.webp"
              alt="Team members carrying a solar panel at a farm site"
              fill
              priority
              sizes="(max-width: 640px) 100vw, 40vw"
            />
            <span className="page-hero-image-shade" />
            <span className="page-hero-image-caption">
              Team members working with solar equipment
            </span>
          </div>
        </div>
      </section>
      <FieldGallery compact photos={teamPhotos} />
    </>
  );
}
