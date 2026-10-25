import type { Metadata } from "next";
import Image from "next/image";
import { FieldGallery } from "@/components/field-gallery";
import { WhatsAppCta } from "@/components/whatsapp-cta";
import { HeroWaterEffects } from "@/components/hero-water-effects";
import { fieldVideos, projectGalleryPhotos } from "@/data/site";

export const metadata: Metadata = {
  title: "Projects & Field Work",
  description:
    "See field photos of irrigation, water supply, solar equipment and storage systems featured by Oasis Irrigation Solutions.",
};

export default function ProjectsPage() {
  return (
    <>
      <section className="page-hero">
        <HeroWaterEffects />
        <div className="page-width page-hero-inner">
          <div>
            <span className="eyebrow">Projects / From the field</span>
            <h1>Water systems at work in the field.</h1>
            <p>
              Explore photos of irrigation pipework, water supply, solar
              equipment and storage. Contact Oasis to discuss your needs and
              confirm the right support for your project.
            </p>
            <WhatsAppCta compact />
          </div>
          <div className="page-hero-image-card">
            <Image
              src="/images/bolted-water-storage-tank.webp"
              alt="A large bolted water storage tank inside a fenced compound"
              fill
              priority
              sizes="(max-width: 640px) 100vw, 40vw"
            />
            <span className="page-hero-image-shade" />
            <span className="page-hero-image-caption">
              Water storage at a project site
            </span>
          </div>
        </div>
      </section>
      <FieldGallery photos={projectGalleryPhotos} videos={fieldVideos} />
    </>
  );
}
