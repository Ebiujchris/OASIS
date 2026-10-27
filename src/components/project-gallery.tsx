"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Maximize2, X } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import {
  projectCategories,
  projectGalleryPhotos,
  fieldVideos,
} from "@/data/site";
import type { ProjectCategory } from "@/data/site";

export function ProjectGallery() {
  const [activeCategory, setActiveCategory] =
    useState<(typeof projectCategories)[number]>("All projects");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  const visiblePhotos =
    activeCategory === "All projects"
      ? projectGalleryPhotos
      : projectGalleryPhotos.filter(
          (photo) => photo.category === activeCategory,
        );
  const selectedPhoto =
    selectedIndex === null ? null : visiblePhotos[selectedIndex] ?? null;

  useEffect(() => {
    if (selectedIndex !== null && dialogRef.current && !dialogRef.current.open) {
      dialogRef.current.showModal();
    }
  }, [selectedIndex]);

  function getCategoryCount(category: ProjectCategory | "All projects") {
    return category === "All projects"
      ? projectGalleryPhotos.length
      : projectGalleryPhotos.filter((photo) => photo.category === category)
          .length;
  }

  function changePhoto(direction: -1 | 1) {
    setSelectedIndex((current) => {
      if (current === null || visiblePhotos.length === 0) return current;
      return (
        (current + direction + visiblePhotos.length) % visiblePhotos.length
      );
    });
  }

  return (
    <section className="section field-gallery-section project-gallery-section">
      <div className="page-width">
        <div className="section-topline">
          <SectionHeading
            eyebrow="From the field"
            title="A closer look at water systems in action."
            description="Filter the field photos by the kind of work you want to explore. Select a photo to view it larger."
          />
          <span className="field-gallery-note">Projects &amp; field work</span>
        </div>

        <div
          className="project-gallery-filters"
          role="group"
          aria-label="Filter project photos by category"
        >
          {projectCategories.map((category) => (
            <button
              key={category}
              className="project-gallery-filter"
              type="button"
              aria-pressed={activeCategory === category}
              onClick={() => {
                setSelectedIndex(null);
                setActiveCategory(category);
              }}
            >
              {category}
              <span>{getCategoryCount(category)}</span>
            </button>
          ))}
        </div>

        <p className="project-gallery-results" role="status" aria-live="polite">
          Showing {visiblePhotos.length}{" "}
          {visiblePhotos.length === 1 ? "photo" : "photos"}
          {activeCategory !== "All projects" ? ` in ${activeCategory}` : ""}
        </p>

        <div className="field-photo-grid project-photo-grid" id="project-photos">
          {visiblePhotos.map((photo, index) => (
            <figure
              className={`field-photo-card project-photo-card${index === 0 ? " field-photo-featured" : ""}`}
              key={`${photo.image}-${photo.caption}`}
            >
              <button
                className="project-photo-trigger"
                type="button"
                aria-label={`View photo: ${photo.caption}`}
                onClick={() => setSelectedIndex(index)}
              >
                <Image
                  src={photo.image}
                  alt={photo.alt}
                  fill
                  sizes={
                    index === 0
                      ? "(max-width: 640px) 90vw, (max-width: 1050px) 48vw, 48vw"
                      : "(max-width: 640px) 90vw, (max-width: 1050px) 48vw, 24vw"
                  }
                />
                <span className="field-photo-shade" aria-hidden="true" />
                <span className="project-photo-expand" aria-hidden="true">
                  <Maximize2 size={17} />
                </span>
              </button>
              <figcaption>
                <span>{photo.category}</span>
                <strong>{photo.caption}</strong>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="project-video-heading">
          <h2>More from the field</h2>
          <p>Short videos from field activities and growing spaces.</p>
        </div>
        <div className="project-video-grid">
          {fieldVideos.map((video) => (
            <figure className="field-video-card" key={video.src}>
              <video
                aria-label={video.alt}
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
        <p className="field-gallery-disclaimer">
          Photos and videos show irrigation products and water-system field
          activities. Ask Oasis about products, availability and project
          details.
        </p>
      </div>

      <dialog
        className="project-lightbox"
        ref={dialogRef}
        aria-label="Project photo viewer"
        onClose={() => setSelectedIndex(null)}
        onClick={(event) => {
          if (event.target === event.currentTarget) dialogRef.current?.close();
        }}
        onKeyDown={(event) => {
          if (event.key === "ArrowLeft") {
            event.preventDefault();
            changePhoto(-1);
          } else if (event.key === "ArrowRight") {
            event.preventDefault();
            changePhoto(1);
          }
        }}
      >
        {selectedPhoto && selectedIndex !== null && (
          <div className="project-lightbox__content">
            <div className="project-lightbox__top">
              <p>
                {selectedPhoto.category} · {selectedIndex + 1} of{" "}
                {visiblePhotos.length}
              </p>
              <button
                className="project-lightbox__close"
                type="button"
                aria-label="Close photo viewer"
                autoFocus
                onClick={() => dialogRef.current?.close()}
              >
                <X size={21} />
              </button>
            </div>
            <div className="project-lightbox__image">
              <Image
                src={selectedPhoto.image}
                alt={selectedPhoto.alt}
                fill
                sizes="(max-width: 760px) 96vw, 88vw"
              />
              <button
                className="project-lightbox__nav project-lightbox__nav--previous"
                type="button"
                aria-label="Previous photo"
                onClick={() => changePhoto(-1)}
              >
                <ArrowLeft size={20} />
              </button>
              <button
                className="project-lightbox__nav project-lightbox__nav--next"
                type="button"
                aria-label="Next photo"
                onClick={() => changePhoto(1)}
              >
                <ArrowRight size={20} />
              </button>
            </div>
            <div className="project-lightbox__caption">
              <span>{selectedPhoto.type}</span>
              <h2>{selectedPhoto.caption}</h2>
              <p>{selectedPhoto.alt}</p>
            </div>
          </div>
        )}
      </dialog>
    </section>
  );
}
