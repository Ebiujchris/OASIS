import type { Metadata } from "next";
import {
  ArrowRight,
  ArrowUpRight,
  ClipboardList,
  Droplets,
  Leaf,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sun,
  Truck,
  Wrench,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { company, whatsappLink } from "@/data/site";
import { getSiteContent } from "@/sanity/site-content";

const defaultMetadata: Metadata = {
  title: "Oasis Irrigation Solutions | Smart Irrigation for Uganda",
  description:
    "Practical drip irrigation products, expert installation and farm support for growers across Uganda. Offices in Kampala and Gulu.",
};

export async function generateMetadata(): Promise<Metadata> {
  const { homePage } = await getSiteContent();
  return {
    title: homePage?.metaTitle || defaultMetadata.title,
    description: homePage?.metaDescription || defaultMetadata.description,
  };
}

const howItWorks = [
  {
    icon: ClipboardList,
    step: "01",
    title: "Tell us about your farm",
    body: "Share your crop type, water source, field size and what you need help with. No technical knowledge required.",
  },
  {
    icon: Wrench,
    step: "02",
    title: "We plan the right system",
    body: "Our team reviews the details and recommends suitable equipment, pipe routes and installation support.",
  },
  {
    icon: Truck,
    step: "03",
    title: "We deliver & install",
    body: "Equipment is sourced and our team installs it on-site. We stay available for maintenance and follow-up support.",
  },
];

const frequentlyAskedQuestions = [
  {
    question: "What should I share when I first contact Oasis?",
    answer:
      "Tell us what you grow, your farm location, available water source and the area you want to irrigate. If you are unsure about any detail, just share what you know.",
  },
  {
    question: "Can you help me choose an irrigation system?",
    answer:
      "Yes. We start by understanding your crops, field layout and water source, then discuss suitable products, planning and installation support.",
  },
  {
    question: "Do you support farms outside Kampala and Gulu?",
    answer:
      "Oasis serves growers throughout Uganda. Contact the team with your location and project details to discuss the support available for your farm.",
  },
  {
    question: "Can I ask about one product or service?",
    answer:
      "Absolutely. You can enquire about a specific product or service, or describe your project if you are still deciding what you need.",
  },
];

const pillars = [
  {
    icon: Droplets,
    label: "Drip Systems",
    text: "Precision water delivery directly to root zones — less waste, more yield.",
  },
  {
    icon: Sun,
    label: "Solar Pumping",
    text: "Off-grid solar water pumps for farms away from the mains grid.",
  },
  {
    icon: Wrench,
    label: "Installation",
    text: "Full on-site planning, pipe laying and system commissioning.",
  },
  {
    icon: ShieldCheck,
    label: "Maintenance",
    text: "Ongoing repairs, part replacements and system health checks.",
  },
  {
    icon: Droplets,
    label: "Water Storage",
    text: "Tanks and storage options to help manage water for farm use.",
  },
  {
    icon: Leaf,
    label: "Boreholes & Water Supply",
    text: "Water supply from boreholes and other sources connected to tanks, pumps and irrigation.",
  },
];

const tickerItems = [
  "Drip Irrigation",
  "Solar Pumps",
  "Boreholes",
  "Water Storage",
  "Pipe Fittings",
  "Valves & Fittings",
  "Installation",
  "Repairs",
];

export default async function HomePage() {
  const content = await getSiteContent();
  const homePage = content.homePage;
  const featuredProducts = content.products.filter((product) => product.featured);
  const homepageTickerItems = homePage?.tickerItems ?? tickerItems;
  const homepagePillars = homePage?.pillars ?? pillars;
  const homepageSteps = homePage?.processSteps ?? howItWorks;
  const homepageFaqs = homePage?.faqs ?? frequentlyAskedQuestions;
  const heroPhone =
    homePage?.heroPhoneDisplay?.replace(/[^\d+]/g, "") || company.phone;
  const approachPoints = homePage?.approachPoints ?? [
    "Crop type, spacing and field size",
    "Water source — borehole, pond or mains",
    "Budget and phasing of installation",
    "Long-term maintenance support",
  ];

  return (
    <div className="hp">

      {/* ══════════════════════════════════════════
          HERO
      ══════════════════════════════════════════ */}
      <section className="hp-hero">
        <div className="hp-water-effects" aria-hidden="true">
          <span className="hp-water-ripple hp-water-ripple--one" />
          <span className="hp-water-ripple hp-water-ripple--two" />
          <svg className="hp-water-drop hp-water-drop--one" viewBox="0 0 24 24" fill="none">
            <path d="M12 22a7 7 0 0 0 7-7c0-5-7-13-7-13S5 10 5 15a7 7 0 0 0 7 7Z" />
          </svg>
          <svg className="hp-water-drop hp-water-drop--two" viewBox="0 0 24 24" fill="none">
            <path d="M12 22a7 7 0 0 0 7-7c0-5-7-13-7-13S5 10 5 15a7 7 0 0 0 7 7Z" />
          </svg>
          <svg className="hp-water-drop hp-water-drop--three" viewBox="0 0 24 24" fill="none">
            <path d="M12 22a7 7 0 0 0 7-7c0-5-7-13-7-13S5 10 5 15a7 7 0 0 0 7 7Z" />
          </svg>
          <svg className="hp-water-drop hp-water-drop--four" viewBox="0 0 24 24" fill="none">
            <path d="M12 22a7 7 0 0 0 7-7c0-5-7-13-7-13S5 10 5 15a7 7 0 0 0 7 7Z" />
          </svg>
        </div>
        <div className="hp-leaf-drips" aria-hidden="true">
          <svg className="hp-leaf-drip hp-leaf-drip--one" viewBox="0 0 24 24" fill="none">
            <path d="M12 22a7 7 0 0 0 7-7c0-5-7-13-7-13S5 10 5 15a7 7 0 0 0 7 7Z" />
          </svg>
          <svg className="hp-leaf-drip hp-leaf-drip--two" viewBox="0 0 24 24" fill="none">
            <path d="M12 22a7 7 0 0 0 7-7c0-5-7-13-7-13S5 10 5 15a7 7 0 0 0 7 7Z" />
          </svg>
          <svg className="hp-leaf-drip hp-leaf-drip--three" viewBox="0 0 24 24" fill="none">
            <path d="M12 22a7 7 0 0 0 7-7c0-5-7-13-7-13S5 10 5 15a7 7 0 0 0 7 7Z" />
          </svg>
        </div>
        <div className="hp-hero__body page-width">
          <div className="hp-hero__copy">
            <span className="hp-chip">
              <span className="hp-chip__dot" />
              {homePage?.heroEyebrow || "Irrigation solutions across Uganda"}
            </span>
            <h1 className="hp-hero__h1">
              {homePage?.heroTitle || (
                <>
                  Water your crops<br />
                  <span className="hp-hero__accent">the smart way.</span>
                </>
              )}
            </h1>
            <p className="hp-hero__lead">
              {homePage?.heroLead ||
                "Drip irrigation, boreholes, solar pumps and full installation support for farms in Kampala, Gulu and across Uganda."}
            </p>
            <div className="hp-hero__ctas">
              <Link
                href={whatsappLink(homePage?.heroWhatsappMessage || "Hello Oasis, I'd like a free quote for my farm.")}
                target="_blank" rel="noreferrer"
                className="hp-cta-btn hp-cta-btn--primary"
              >
                <MessageCircle size={18} /> {homePage?.heroPrimaryCta || "Get a free quote"}
              </Link>
              <Link href="/products/" className="hp-cta-btn hp-cta-btn--outline">
                {homePage?.heroSecondaryCta || "Explore products"} <ArrowRight size={17} />
              </Link>
            </div>
            <div className="hp-hero__meta">
              <span><MapPin size={13} /> {homePage?.heroLocations || "Kampala & Gulu"}</span>
              <span className="hp-hero__meta-sep" />
              <a href={`tel:${heroPhone}`}><Phone size={13} /> {homePage?.heroPhoneDisplay || company.phoneDisplay}</a>
            </div>
          </div>

          <figure className="hp-hero__visual">
            <Image
              src={homePage?.heroImage?.url || "/images/farm-irrigation.webp"}
              alt={
                homePage?.heroImage?.alt ||
                "A grower watering crops in a farm field"
              }
              fill
              priority
              className="hp-hero__photo"
              sizes="(max-width: 768px) 100vw, (max-width: 1100px) 45vw, 50vw"
            />
            <div className="hp-hero__photo-shade" aria-hidden="true" />
            <figcaption>
              <span className="hp-hero__photo-icon">
                <Droplets size={18} aria-hidden="true" />
              </span>
              <span>
                <strong>{homePage?.heroImageCaption || "Watering crops in the field"}</strong>
                <small>{homePage?.heroImageNote || "Practical irrigation support across Uganda"}</small>
              </span>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          TICKER / TRUST BAR
      ══════════════════════════════════════════ */}
      <div className="hp-ticker">
        <div className="hp-ticker__track">
          {[...homepageTickerItems, ...homepageTickerItems].map((t, i) => (
            <span key={i} className="hp-ticker__item">
              <Droplets size={12} />
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* ══════════════════════════════════════════
          PILLARS — what we cover
      ══════════════════════════════════════════ */}
      <section className="hp-section hp-pillars">
        <div className="page-width">
          <div className="hp-sec-head">
            <p className="hp-label">{homePage?.pillarsEyebrow || "What we cover"}</p>
            <h2>{homePage?.pillarsHeading || "Everything your farm needs."}</h2>
          </div>
          <div className="hp-pillars__grid">
            {homepagePillars.map((p, i) => {
              const Icon = pillars[i % pillars.length].icon;
              return (
                <div
                  key={`pillar-${i}`}
                  className="hp-pillar"
                  style={{ "--i": i } as React.CSSProperties}
                >
                  <span className="hp-pillar__icon"><Icon size={22} /></span>
                  <strong>{p.label}</strong>
                  <p>{p.text}</p>
                </div>
              );
            })}
          </div>
          <div className="hp-coverage-note">
            <MapPin size={21} aria-hidden="true" />
            <div>
              <strong>{homePage?.coverageTitle || "Serving growers throughout Uganda"}</strong>
              <span>{homePage?.coverageDescription || "Our offices are in Kampala and Gulu."}</span>
            </div>
            <Link href="/contact/">
              {homePage?.coverageLinkLabel || "Talk to our team"} <ArrowRight size={15} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          HOW IT WORKS
      ══════════════════════════════════════════ */}
      <section className="hp-section hp-how">
        <div className="page-width">
          <div className="hp-how__layout">
            <div className="hp-how__process">
              <div className="hp-how__heading">
                <p className="hp-label">{homePage?.processEyebrow || "Simple process"}</p>
                <h2>{homePage?.processHeading || "From first message to working system."}</h2>
              </div>
              <div className="hp-how__grid">
                {homepageSteps.map((step, i) => {
                  const Icon = howItWorks[i % howItWorks.length].icon;
                  return (
                    <div key={`${step.step}-${i}`} className="hp-how__card" style={{ "--i": i } as React.CSSProperties}>
                      <span className="hp-how__num">{step.step}</span>
                      <span className="hp-how__icon"><Icon size={20} /></span>
                      <h3>{step.title}</h3>
                      <p>{step.body}</p>
                      {i < homepageSteps.length - 1 && (
                        <span className="hp-how__arrow" aria-hidden="true" />
                      )}
                    </div>
                  );
                })}
              </div>
              <div className="hp-how__cta">
                <Link
                  href={whatsappLink(homePage?.processWhatsappMessage || "Hello Oasis, I'd like to discuss an irrigation system for my farm.")}
                  target="_blank" rel="noreferrer"
                  className="hp-cta-btn hp-cta-btn--primary"
                >
                  <MessageCircle size={18} /> {homePage?.processCtaLabel || "Start the conversation"}
                </Link>
              </div>
            </div>
            <div className="hp-faq">
              <div className="hp-how__heading">
                <p className="hp-label">{homePage?.faqEyebrow || "Quick answers"}</p>
                <h2>{homePage?.faqHeading || "Frequently asked questions."}</h2>
              </div>
              <div className="hp-faq__list">
                {homepageFaqs.map((item, index) => (
                  <details className="hp-faq__item" key={`${item.question}-${index}`}>
                    <summary>
                      <span className="hp-faq__question">{item.question}</span>
                      <span className="hp-faq__toggle" aria-hidden="true" />
                    </summary>
                    <p className="hp-faq__answer">
                      <span style={{ "--typing-steps": item.answer.length } as React.CSSProperties}>
                        {item.answer}
                      </span>
                    </p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          PRODUCTS
      ══════════════════════════════════════════ */}
      <section className="hp-section hp-products">
        <div className="page-width">
          <div className="hp-sec-head hp-sec-head--row">
            <div>
              <p className="hp-label">{homePage?.productsEyebrow || "Products"}</p>
              <h2>{homePage?.productsHeading || "Quality equipment for every farm."}</h2>
            </div>
            <Link href="/products/" className="hp-text-link">
              {homePage?.productsLinkLabel || "View all products"} <ArrowUpRight size={15} />
            </Link>
          </div>
          <div className="hp-products__grid">
            {(featuredProducts.length ? featuredProducts : content.products)
              .slice(0, 6)
              .map((p, i) => (
              <article
                key={p.name}
                className="hp-prod-card"
                style={{ "--i": i } as React.CSSProperties}
              >
                <div className="hp-prod-card__img">
                  <Image src={p.image} alt={p.alt} fill
                    sizes="(max-width:600px) 100vw,(max-width:1024px) 50vw,33vw" />
                  <div className="hp-prod-card__overlay" />
                </div>
                <div className="hp-prod-card__body">
                  <span className="hp-badge">{p.detail}</span>
                  <h3>{p.name}</h3>
                  <p>{p.description}</p>
                  <Link
                    href={whatsappLink(`Hello Oasis, I'd like to ask about: ${p.name}`)}
                    target="_blank" rel="noreferrer"
                    className="hp-text-link hp-text-link--sm"
                  >
                    {homePage?.productsCardLinkLabel || "Ask about this"} <ArrowUpRight size={13} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          FEATURE SPLIT — solar water system image
      ══════════════════════════════════════════ */}
      <section className="hp-split">
        <div className="hp-split__img">
          <Image
            src={
              homePage?.approachImage?.url || "/images/solar-water-system.jpg"
            }
            alt={
              homePage?.approachImage?.alt ||
              "Solar-powered water system at a Ugandan farm"
            }
            fill
            sizes="55vw"
            className="hp-split__photo"
          />
          <div className="hp-split__photo-label">
            <span>{homePage?.approachImageCaption || "Solar water system · Uganda"}</span>
          </div>
        </div>
        <div className="hp-split__copy">
          <p className="hp-label">{homePage?.approachEyebrow || "The Oasis approach"}</p>
          <h2>{homePage?.approachHeading || "Good irrigation starts with good questions."}</h2>
          <p>
            {homePage?.approachBody ||
              "Your crops, water source and field layout all shape the right system. We start every project by understanding your farm before recommending any equipment."}
          </p>
          <ul className="hp-split__list">
            {approachPoints.map((point, index) => (
              <li key={`${point}-${index}`}><span />{point}</li>
            ))}
          </ul>
          <div className="hp-split__ctas">
            <Link href="/contact/" className="hp-cta-btn hp-cta-btn--primary">
              {homePage?.approachPrimaryCta || "Start a conversation"} <ArrowUpRight size={17} />
            </Link>
            <Link href="/services/" className="hp-cta-btn hp-cta-btn--text">
              {homePage?.approachSecondaryCta || "Our services"} <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SERVICES
      ══════════════════════════════════════════ */}
      <section className="hp-section hp-services">
        <div className="page-width">
          <div className="hp-sec-head hp-sec-head--row">
            <div>
              <p className="hp-label">{homePage?.servicesEyebrow || "Services"}</p>
              <h2>{homePage?.servicesHeading || "Complete irrigation support."}</h2>
            </div>
            <Link href="/services/" className="hp-text-link">
              {homePage?.servicesLinkLabel || "All services"} <ArrowUpRight size={15} />
            </Link>
          </div>
          <div className="hp-svc-grid">
            {content.services.map((s, i) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}/`}
                className="hp-svc-card"
                style={{ "--i": i } as React.CSSProperties}
              >
                <div className="hp-svc-card__img">
                  <Image src={s.image} alt={s.alt} fill sizes="400px" />
                  <div className="hp-svc-card__dim" />
                </div>
                <div className="hp-svc-card__body">
                  <span className="hp-svc-card__num">{s.number}</span>
                  <h3>{s.title}</h3>
                  <p>{s.description}</p>
                  <span className="hp-svc-card__arrow">
                    <ArrowUpRight size={18} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          GALLERY
      ══════════════════════════════════════════ */}
      <section className="hp-section hp-gallery">
        <div className="page-width">
          <div className="hp-sec-head hp-sec-head--row">
            <div>
              <p className="hp-label">{homePage?.galleryEyebrow || "Field work"}</p>
              <h2>{homePage?.galleryHeading || "Projects across Uganda."}</h2>
            </div>
            <Link href="/projects/" className="hp-text-link">
              {homePage?.galleryLinkLabel || "See all projects"} <ArrowUpRight size={15} />
            </Link>
          </div>
          <div className="hp-gallery__grid">
            {content.fieldPhotos.slice(0, 7).map((ph, i) => (
              <figure
                key={ph.image}
                className={`hp-gallery__item${i === 0 ? " hp-gallery__item--hero" : ""}`}
                style={{ "--i": i } as React.CSSProperties}
              >
                <Image src={ph.image} alt={ph.alt} fill sizes="(max-width:600px) 100vw, 50vw" />
                <div className="hp-gallery__shade" />
                <figcaption>
                  <span>{ph.type}</span>
                  <strong>{ph.caption}</strong>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          FINAL CTA
      ══════════════════════════════════════════ */}
      <section className="hp-final-cta">
        <div className="page-width hp-final-cta__inner">
          <div className="hp-final-cta__body">
            <p className="hp-label">{homePage?.ctaEyebrow || "Let’s plan your next step"}</p>
            <h2>{homePage?.ctaHeading || "Ready to make every drop count?"}</h2>
            <p className="hp-final-cta__lead">
              {homePage?.ctaLead ||
                "Tell us about your farm and water source. We’ll help you explore an irrigation approach that fits your needs."}
            </p>
            <div className="hp-final-cta__actions">
              <Link
                href={whatsappLink(homePage?.ctaWhatsappMessage || "Hello Oasis, I'd like to discuss an irrigation project for my farm.")}
                target="_blank" rel="noreferrer"
                className="hp-cta-btn hp-cta-btn--primary"
              >
                <MessageCircle size={18} /> {homePage?.ctaPrimaryCta || "Chat on WhatsApp"}
              </Link>
              <Link href="/contact/" className="hp-cta-btn hp-cta-btn--outline">
                {homePage?.ctaSecondaryCta || "Contact us"} <ArrowRight size={17} />
              </Link>
            </div>
            <div className="hp-final-cta__locations">
              <MapPin size={15} aria-hidden="true" />
              <span>{homePage?.ctaLocationsLabel || "Serving growers throughout Uganda · Offices in Kampala and Gulu"}</span>
            </div>
          </div>
          <figure className="hp-final-cta__visual">
            <Image
              src={
                homePage?.ctaImage?.url ||
                "/images/irrigation-installation-team.jpg"
              }
              alt={
                homePage?.ctaImage?.alt ||
                "Oasis team installing water pipes at a farm"
              }
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <figcaption>
              <span>{homePage?.ctaImageCaption || "From planning to installation"}</span>
              <strong>{homePage?.ctaImageNote || "Practical support, built around your farm."}</strong>
            </figcaption>
          </figure>
        </div>
      </section>

    </div>
  );
}
