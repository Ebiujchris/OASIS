import type { Metadata } from "next";
import {
  ArrowUpRight,
  ClipboardList,
  Droplets,
  Leaf,
  MapPin,
  Sprout,
  Sun,
  Waves,
  Wrench,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/section-heading";
import { WhatsAppCta } from "@/components/whatsapp-cta";
import { HeroWaterEffects } from "@/components/hero-water-effects";
import { WaterJourney } from "@/components/water-journey";
import { company } from "@/data/site";
import { getSiteContent } from "@/sanity/site-content";

export async function generateMetadata(): Promise<Metadata> {
  const { aboutPage } = await getSiteContent();
  return {
    title: aboutPage?.metaTitle || "About Oasis Irrigation Solutions",
    description:
      aboutPage?.metaDescription ||
      "Get to know Oasis Irrigation Solutions, an irrigation products and farm support business serving Uganda.",
  };
}

const serviceIcons = [Droplets, MapPin, Waves, Sun, Wrench, ClipboardList];

export default async function AboutPage() {
  const { aboutPage, contactPage, services } = await getSiteContent();
  const journeySteps =
    aboutPage?.journeySteps?.length
      ? aboutPage.journeySteps
      : [
          {
            title: "Water source",
            description: "Start with the water available on your farm.",
          },
          {
            title: "Pump & storage",
            description: "Plan how water can be moved and stored for use.",
          },
          {
            title: "Irrigation lines",
            description: "Carry water through pipes and irrigation lines.",
          },
          {
            title: "Growing crops",
            description: "Deliver water to the areas where crops are growing.",
          },
        ];
  const values = aboutPage?.values?.length
    ? aboutPage.values
    : [
        {
          title: "Water-conscious",
          description: "Consider the water source and the needs of each farm.",
        },
        {
          title: "Grower-focused",
          description: "Start with what you grow and how your farm works.",
        },
        {
          title: "Clear and practical",
          description:
            "Make product choices and next steps easier to understand.",
        },
      ];

  return (
    <>
      <section className="page-hero about-page-hero">
        <HeroWaterEffects />
        <div className="page-width page-hero-inner">
          <div>
            <span className="eyebrow">
              {aboutPage?.heroEyebrow || "About Oasis / Our approach"}
            </span>
            <h1>
              {aboutPage?.heroTitle ||
                "Helping farms grow with water used wisely."}
            </h1>
            <p>
              {aboutPage?.heroLead ||
                "Oasis Irrigation Solutions brings together irrigation products and practical support to help growers make confident choices for their farms."}
            </p>
          </div>
          <div className="page-hero-image-card">
            <Image
              src={
                aboutPage?.heroImage?.url ||
                "/images/solar-installation-team.webp"
              }
              alt={
                aboutPage?.heroImage?.alt ||
                "A team carrying a large solar panel at a farm site"
              }
              fill
              priority
              sizes="(max-width: 640px) 100vw, 32vw"
            />
            <span className="page-hero-image-shade" />
            <span className="page-hero-image-caption">
              {aboutPage?.heroImageCaption ||
                "Solar installation for farm water systems"}
            </span>
          </div>
        </div>
      </section>
      <section className="section about-story-section">
        <div className="page-width about-story">
          <div className="about-copy">
            <SectionHeading
              eyebrow={aboutPage?.storyEyebrow || "Who we are"}
              title={
                aboutPage?.storyTitle ||
                "Irrigation should make sense for the people using it."
              }
              description={
                aboutPage?.storyDescription ||
                "From fittings and drip irrigation components to system planning and installation support, our focus is on helping you find a practical next step."
              }
            />
            {(aboutPage?.storyParagraphs?.length
              ? aboutPage.storyParagraphs
              : [
                  "We believe choosing irrigation equipment should feel clear, not complicated. That means asking about the farm, understanding the water available and helping you explore options that fit the project.",
                  "Every setup has its own requirements. Crop type, field layout, water source and existing equipment all help shape a useful conversation about products, planning and installation support.",
                ]
            ).map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <WhatsAppCta compact whatsappNumber={contactPage?.whatsapp} />
          </div>
          <div className="about-photo-stack">
            <div className="about-photo about-photo-large">
              <Image
                src={
                  aboutPage?.storyImageLarge?.url || "/images/farm-watering.jpg"
                }
                alt={
                  aboutPage?.storyImageLarge?.alt ||
                  "A farm irrigation hose watering crops between rows"
                }
                fill
                sizes="(max-width: 800px) 90vw, 36vw"
              />
              <span className="about-photo-label">
                <Droplets size={15} aria-hidden="true" />{" "}
                {aboutPage?.storyImageLabel || "Water for growing"}
              </span>
            </div>
            <div className="about-photo about-photo-small">
              <Image
                src={
                  aboutPage?.storyImageSmall?.url ||
                  "/images/water-infrastructure.jpg"
                }
                alt={
                  aboutPage?.storyImageSmall?.alt ||
                  "Irrigation water infrastructure on a farm"
                }
                fill
                sizes="(max-width: 800px) 70vw, 22vw"
              />
            </div>
            <span className="about-photo-note">
              {aboutPage?.storyImageNote || "SMART IRRIGATION · BETTER HARVESTS"}
            </span>
          </div>
        </div>
      </section>
      <WaterJourney
        eyebrow={aboutPage?.journeyEyebrow}
        title={aboutPage?.journeyTitle}
        description={aboutPage?.journeyDescription}
        steps={journeySteps}
        note={aboutPage?.journeyNote}
        linkText={aboutPage?.journeyLink}
      />
      <section className="section about-services-section">
        <div className="page-width">
          <div className="about-services-heading">
            <SectionHeading
              eyebrow={aboutPage?.servicesEyebrow || "How we can help"}
              title={
                aboutPage?.servicesTitle ||
                "Support for the whole water journey."
              }
              description={
                aboutPage?.servicesDescription ||
                "Explore the areas Oasis can help you discuss, from planning an irrigation layout to choosing components and maintaining a system."
              }
            />
            <Link className="about-services-all" href="/services/">
              {aboutPage?.servicesLink || "Explore all services"}{" "}
              <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          </div>
          <div className="about-services-grid">
            {services.map((service, index) => {
              const Icon = serviceIcons[index] ?? Droplets;
              return (
                <Link
                  className="about-service-card"
                  href={`/services/${service.slug}/`}
                  key={service.slug}
                  style={{ animationDelay: `${index * 70}ms` }}
                >
                  <span className="about-service-card__number">{service.number}</span>
                  <span className="about-service-card__icon">
                    <Icon size={20} aria-hidden="true" />
                  </span>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <span className="about-service-card__link">
                    Learn more <ArrowUpRight size={15} aria-hidden="true" />
                  </span>
                </Link>
              );
            })}
          </div>
          <div className="about-coverage">
            <MapPin size={19} aria-hidden="true" />
            <p>
              <strong>
                {aboutPage?.coverageTitle ||
                  "Serving growers throughout Uganda"}
              </strong>
              <span>
                {aboutPage?.coverageDescription ||
                  `Oasis has offices in ${(contactPage?.locations?.length ? contactPage.locations : company.locations).join(" and ")}.`}
              </span>
            </p>
            <Link href="/contact/">
              {aboutPage?.coverageLink || "Get in touch"}{" "}
              <ArrowUpRight size={15} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
      <section className="section values-section">
        <div className="page-width">
          <SectionHeading
            eyebrow={aboutPage?.valuesEyebrow || "What guides us"}
            title={
              aboutPage?.valuesTitle ||
              "A practical approach to every project."
            }
            centered
          />
          <div className="values-grid">
            {values.map((value, index) => {
              const icons = [Droplets, Sprout, Leaf];
              const Icon = icons[index % icons.length];
              return (
                <article key={value.title}>
                  <span><Icon size={21} aria-hidden="true" /></span>
                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>
      <section className="contact-banner">
        <div className="contact-banner-inner page-width">
          <div>
            <span className="eyebrow eyebrow-light">
              {aboutPage?.ctaEyebrow || "Let’s grow together"}
            </span>
            <h2>{aboutPage?.ctaTitle || "Tell us what your farm needs."}</h2>
            <p>
              {aboutPage?.ctaDescription ||
                "Oasis is here to talk through your irrigation project."}
            </p>
          </div>
          <WhatsAppCta whatsappNumber={contactPage?.whatsapp} />
        </div>
        <span className="banner-watermark" aria-hidden="true"><ArrowUpRight /></span>
      </section>
    </>
  );
}
