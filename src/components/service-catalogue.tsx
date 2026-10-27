"use client";

import { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  Droplets,
  Maximize2,
  MessageCircle,
  Ruler,
  Sprout,
  Wrench,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { serviceCategories, services, whatsappLink } from "@/data/site";

function getServiceIcon(slug: string) {
  switch (slug) {
    case "irrigation":
      return Ruler;
    case "boreholes":
    case "water-pumps":
      return Droplets;
    case "solar-equipment":
      return Sprout;
    case "repairs-maintenance":
      return Wrench;
    case "product-guidance":
      return BadgeCheck;
    default:
      return Droplets;
  }
}

export function ServiceCatalogue() {
  const [activeCategory, setActiveCategory] =
    useState<(typeof serviceCategories)[number]>("All services");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const visibleServices =
    activeCategory === "All services"
      ? services
      : services.filter((service) => service.category === activeCategory);
  const selectedService =
    selectedIndex === null ? null : visibleServices[selectedIndex] ?? null;

  useEffect(() => {
    if (selectedIndex !== null && dialogRef.current && !dialogRef.current.open) {
      dialogRef.current.showModal();
    }
  }, [selectedIndex]);

  function getCategoryCount(
    category: (typeof serviceCategories)[number],
  ) {
    return category === "All services"
      ? services.length
      : services.filter((service) => service.category === category).length;
  }

  function changePhoto(direction: -1 | 1) {
    setSelectedIndex((current) => {
      if (current === null || visibleServices.length === 0) return current;
      return (current + direction + visibleServices.length) % visibleServices.length;
    });
  }

  return (
    <>
      <div
        className="service-filters"
        role="group"
        aria-label="Filter services by category"
      >
        {serviceCategories.map((category) => (
          <button
            key={category}
            className="service-filter"
            type="button"
            aria-pressed={activeCategory === category}
            onClick={() => {
              if (dialogRef.current?.open) dialogRef.current.close();
              setSelectedIndex(null);
              setActiveCategory(category);
            }}
          >
            {category}
            <span>{getCategoryCount(category)}</span>
          </button>
        ))}
      </div>
      <p className="service-filter-results" role="status" aria-live="polite">
        Showing {visibleServices.length}{" "}
        {visibleServices.length === 1 ? "service" : "services"}
        {activeCategory !== "All services" ? ` in ${activeCategory}` : ""}
      </p>
      <div className="service-detail-list">
        {visibleServices.map((service) => {
          const Icon = getServiceIcon(service.slug);

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
                <button
                  className="service-image-expand"
                  type="button"
                  aria-label={`View larger image: ${service.title}`}
                  onClick={() => setSelectedIndex(visibleServices.indexOf(service))}
                >
                  <Maximize2 size={17} aria-hidden="true" />
                </button>
                <span className="service-detail-number">{service.number}</span>
              </div>
              <div className="service-detail-content">
                <span className="service-detail-icon">
                  <Icon size={18} aria-hidden="true" />
                </span>
                <span className="service-category-label">{service.category}</span>
                <h3>
                  <Link href={`/services/${service.slug}/`}>{service.title}</Link>
                </h3>
                <p>{service.description}</p>
                <div className="service-detail-actions">
                  <Link
                    className="service-detail-link"
                    href={`/services/${service.slug}/`}
                  >
                    Learn about this service
                    <ArrowUpRight size={15} aria-hidden="true" />
                  </Link>
                  <Link
                    className="service-detail-enquiry"
                    href={whatsappLink(
                      `Hello Oasis, I would like to enquire about ${service.title.toLowerCase()} for my farm.`,
                    )}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Enquire about ${service.title} on WhatsApp`}
                  >
                    <MessageCircle size={17} aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </article>
          );
        })}
      </div>
      <dialog
        className="project-lightbox service-lightbox"
        ref={dialogRef}
        aria-label="Service photo viewer"
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
        {selectedService && selectedIndex !== null && (
          <div className="project-lightbox__content">
            <div className="project-lightbox__top">
              <p>
                {selectedService.category} · {selectedIndex + 1} of{" "}
                {visibleServices.length}
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
                src={selectedService.image}
                alt={selectedService.alt}
                fill
                sizes="(max-width: 760px) 96vw, 88vw"
              />
              <button
                className="project-lightbox__nav project-lightbox__nav--previous"
                type="button"
                aria-label="Previous service photo"
                onClick={() => changePhoto(-1)}
              >
                <ArrowLeft size={20} aria-hidden="true" />
              </button>
              <button
                className="project-lightbox__nav project-lightbox__nav--next"
                type="button"
                aria-label="Next service photo"
                onClick={() => changePhoto(1)}
              >
                <ArrowRight size={20} aria-hidden="true" />
              </button>
            </div>
            <div className="project-lightbox__caption">
              <span>{selectedService.category}</span>
              <h2>{selectedService.title}</h2>
              <p>{selectedService.alt}</p>
            </div>
          </div>
        )}
      </dialog>
    </>
  );
}
