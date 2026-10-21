import type { Metadata } from "next";
import { FieldGallery } from "@/components/field-gallery";
import { WhatsAppCta } from "@/components/whatsapp-cta";
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
        </div>
      </section>
      <FieldGallery photos={projectGalleryPhotos} videos={fieldVideos} />
    </>
  );
}
