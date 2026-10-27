import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { FieldPhotoGallery } from "@/components/field-photo-gallery";

type FieldGalleryProps = {
  compact?: boolean;
  interactivePhotos?: boolean;
  moreLink?: { href: string; label: string };
  photos: {
    image: string;
    alt: string;
    caption: string;
    type: string;
  }[];
  videos?: {
    src: string;
    alt: string;
    caption: string;
    type: string;
  }[];
};

export function FieldGallery({
  compact = false,
  interactivePhotos = false,
  moreLink,
  photos,
  videos = [],
}: FieldGalleryProps) {
  return (
    <section
      className={`section field-gallery-section${compact ? " field-gallery-compact" : ""}`}
    >
      <div className="page-width">
        <div className="section-topline">
          <SectionHeading
            eyebrow="From the field"
            title={compact ? "People, farms & water at work." : "A closer look at water systems in action."}
            description={
              compact
                ? "A glimpse of the people and water systems featured in Oasis field photos."
                : "Browse more photos of crop watering, irrigation pipe, fittings and water storage activities."
            }
          />
          {moreLink ? (
            <Link className="text-link section-top-link" href={moreLink.href}>
              {moreLink.label} <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          ) : (
            <span className="field-gallery-note">
              Products &amp; field activities
            </span>
          )}
        </div>
        {interactivePhotos ? (
          <FieldPhotoGallery photos={photos} videos={videos} />
        ) : (
          <div className="field-photo-grid">
            {photos.map((photo, index) => (
              <figure
                className={`field-photo-card${index === 0 ? " field-photo-featured" : ""}`}
                key={photo.image}
              >
                <Image
                  src={photo.image}
                  alt={photo.alt}
                  fill
                  sizes={
                    index === 0
                      ? "(max-width: 640px) 90vw, (max-width: 1050px) 48vw, 48vw"
                      : "(max-width: 640px) 44vw, (max-width: 1050px) 30vw, 24vw"
                  }
                />
                <div className="field-photo-shade" />
                <figcaption>
                  <span>{photo.type}</span>
                  <strong>{photo.caption}</strong>
                </figcaption>
              </figure>
            ))}
            {videos.map((video) => (
              <figure className="field-video-card" key={video.src}>
                <video
                  aria-label={video.alt}
                  autoPlay
                  controls
                  loop
                  muted
                  playsInline
                  preload="metadata"
                >
                  <source src={video.src} type="video/mp4" />
                  Your browser does not support the video element.
                </video>
                <figcaption>
                  <span>{video.type}</span>
                  <strong>{video.caption}</strong>
                </figcaption>
              </figure>
            ))}
          </div>
        )}
        <p className="field-gallery-disclaimer">
          Photos and videos show irrigation products and water-system field activities.
          Ask Oasis about products, availability and project details.
        </p>
      </div>
    </section>
  );
}
