"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Maximize2, X } from "lucide-react";

type FieldPhoto = {
  image: string;
  alt: string;
  caption: string;
  type: string;
};

type FieldPhotoGalleryProps = {
  photos: FieldPhoto[];
  videos: {
    src: string;
    alt: string;
    caption: string;
    type: string;
  }[];
};

export function FieldPhotoGallery({
  photos,
  videos,
}: FieldPhotoGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const selectedPhoto =
    selectedIndex === null ? null : photos[selectedIndex] ?? null;

  useEffect(() => {
    if (selectedIndex !== null && dialogRef.current && !dialogRef.current.open) {
      dialogRef.current.showModal();
    }
  }, [selectedIndex]);

  function changePhoto(direction: -1 | 1) {
    setSelectedIndex((current) => {
      if (current === null || photos.length === 0) return current;
      return (current + direction + photos.length) % photos.length;
    });
  }

  return (
    <>
      <div className="field-photo-grid project-photo-grid">
        {photos.map((photo, index) => (
          <figure
            className={`field-photo-card project-photo-card${index === 0 ? " field-photo-featured" : ""}`}
            key={photo.image}
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
                    : "(max-width: 640px) 44vw, (max-width: 1050px) 30vw, 24vw"
                }
              />
              <span className="field-photo-shade" aria-hidden="true" />
              <span className="project-photo-expand" aria-hidden="true">
                <Maximize2 size={17} />
              </span>
            </button>
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
      <dialog
        className="project-lightbox"
        ref={dialogRef}
        aria-label="Field photo viewer"
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
                {selectedPhoto.type} · {selectedIndex + 1} of {photos.length}
              </p>
              <button
                className="project-lightbox__close"
                type="button"
                aria-label="Close photo viewer"
                autoFocus
                onClick={() => dialogRef.current?.close()}
              >
                <X size={21} aria-hidden="true" />
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
                <ArrowLeft size={20} aria-hidden="true" />
              </button>
              <button
                className="project-lightbox__nav project-lightbox__nav--next"
                type="button"
                aria-label="Next photo"
                onClick={() => changePhoto(1)}
              >
                <ArrowRight size={20} aria-hidden="true" />
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
    </>
  );
}
