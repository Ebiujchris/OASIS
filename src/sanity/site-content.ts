import {
  fieldPhotos,
  products as defaultProducts,
  projectGalleryPhotos,
  services as defaultServices,
} from "@/data/site";
import type { Product, ProjectPhoto, Service } from "@/data/site";

type SanityImage = {
  url?: string | null;
  alt?: string | null;
};

type SanityProduct = Omit<Product, "image" | "alt"> & {
  slug: { current: string };
  image?: SanityImage;
};

type SanityService = Omit<
  Service,
  "image" | "alt" | "detailPhotos" | "slug"
> & {
  slug: { current: string };
  image?: SanityImage;
  detailPhotos?: {
    image?: SanityImage;
    alt?: string;
    caption?: string;
  }[];
};

type SanityPhoto = Omit<ProjectPhoto, "image" | "alt"> & {
  image?: SanityImage;
};

export type HomePageContent = {
  metaTitle?: string;
  metaDescription?: string;
  heroEyebrow?: string;
  heroTitle?: string;
  heroLead?: string;
  heroImage?: SanityImage;
  heroImageCaption?: string;
  heroImageNote?: string;
  heroPrimaryCta?: string;
  heroSecondaryCta?: string;
  heroWhatsappMessage?: string;
  heroLocations?: string;
  heroPhoneDisplay?: string;
  tickerItems?: string[];
  pillarsEyebrow?: string;
  pillarsHeading?: string;
  pillars?: { label: string; text: string }[];
  coverageTitle?: string;
  coverageDescription?: string;
  coverageLinkLabel?: string;
  processEyebrow?: string;
  processHeading?: string;
  processSteps?: { step: string; title: string; body: string }[];
  processCtaLabel?: string;
  processWhatsappMessage?: string;
  faqEyebrow?: string;
  faqHeading?: string;
  faqs?: { question: string; answer: string }[];
  productsEyebrow?: string;
  productsHeading?: string;
  productsLinkLabel?: string;
  productsCardLinkLabel?: string;
  approachEyebrow?: string;
  approachHeading?: string;
  approachBody?: string;
  approachImage?: SanityImage;
  approachImageCaption?: string;
  approachPoints?: string[];
  approachPrimaryCta?: string;
  approachSecondaryCta?: string;
  servicesEyebrow?: string;
  servicesLinkLabel?: string;
  servicesHeading?: string;
  galleryEyebrow?: string;
  galleryHeading?: string;
  galleryLinkLabel?: string;
  ctaEyebrow?: string;
  ctaHeading?: string;
  ctaLead?: string;
  ctaImage?: SanityImage;
  ctaImageCaption?: string;
  ctaImageNote?: string;
  ctaPrimaryCta?: string;
  ctaSecondaryCta?: string;
  ctaWhatsappMessage?: string;
  ctaLocationsLabel?: string;
};

export type AboutPageContent = {
  metaTitle?: string;
  metaDescription?: string;
  heroEyebrow?: string;
  heroTitle?: string;
  heroLead?: string;
  heroImage?: SanityImage;
  heroImageCaption?: string;
  storyEyebrow?: string;
  storyTitle?: string;
  storyDescription?: string;
  storyParagraphs?: string[];
  storyImageLarge?: SanityImage;
  storyImageSmall?: SanityImage;
  storyImageLabel?: string;
  storyImageNote?: string;
  journeyEyebrow?: string;
  journeyTitle?: string;
  journeyDescription?: string;
  journeySteps?: { title: string; description: string }[];
  journeyNote?: string;
  journeyLink?: string;
  servicesEyebrow?: string;
  servicesTitle?: string;
  servicesDescription?: string;
  servicesLink?: string;
  coverageTitle?: string;
  coverageDescription?: string;
  coverageLink?: string;
  valuesEyebrow?: string;
  valuesTitle?: string;
  values?: { title: string; description: string }[];
  ctaEyebrow?: string;
  ctaTitle?: string;
  ctaDescription?: string;
};

export type ContactPageContent = {
  metaTitle?: string;
  metaDescription?: string;
  heroEyebrow?: string;
  heroTitle?: string;
  heroLead?: string;
  heroImage?: SanityImage;
  heroImageCaption?: string;
  formTitle?: string;
  formDescription?: string;
  formPrivacyNote?: string;
  contactEyebrow?: string;
  contactTitle?: string;
  contactDescription?: string;
  phoneDisplay?: string;
  phone?: string;
  whatsapp?: string;
  locationsTitle?: string;
  locationsDescription?: string;
  locations?: string[];
  servicesLink?: string;
};

type SanitySiteContent = {
  homePage: HomePageContent | null;
  aboutPage: AboutPageContent | null;
  contactPage: ContactPageContent | null;
  products: SanityProduct[];
  services: SanityService[];
  fieldPhotos: SanityPhoto[];
  projectPhotos: SanityPhoto[];
};

const projectId =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "jnwipq1i";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

const siteContentQuery = `{
  "homePage": *[_type == "homePage" && _id == "homePage"][0]{
    metaTitle, metaDescription, heroEyebrow, heroTitle, heroLead,
    heroImageCaption, heroImageNote, heroPrimaryCta, heroSecondaryCta,
    heroWhatsappMessage, heroLocations, heroPhoneDisplay, tickerItems,
    pillarsEyebrow, pillarsHeading, pillars[]{label, text},
    coverageTitle, coverageDescription, coverageLinkLabel,
    processEyebrow, processHeading, processSteps[]{step, title, body},
    processCtaLabel, processWhatsappMessage, faqEyebrow, faqHeading,
    faqs[]{question, answer}, productsEyebrow, productsHeading, productsLinkLabel,
    productsCardLinkLabel,
    approachEyebrow, approachHeading, approachBody, approachImageCaption,
    approachPoints, approachPrimaryCta, approachSecondaryCta,
    servicesEyebrow, servicesHeading, servicesLinkLabel,
    galleryEyebrow, galleryHeading, galleryLinkLabel,
    ctaEyebrow, ctaHeading, ctaLead, ctaImageCaption, ctaImageNote,
    ctaPrimaryCta, ctaSecondaryCta, ctaWhatsappMessage, ctaLocationsLabel,
    "heroImage": {"url": heroImage.asset->url, "alt": heroImage.alt},
    "approachImage": {"url": approachImage.asset->url, "alt": approachImage.alt},
    "ctaImage": {"url": ctaImage.asset->url, "alt": ctaImage.alt}
  },
  "aboutPage": *[_type == "aboutPage" && _id == "aboutPage"][0]{
    metaTitle, metaDescription, heroEyebrow, heroTitle, heroLead,
    heroImageCaption, storyEyebrow, storyTitle, storyDescription,
    storyParagraphs, storyImageLabel, storyImageNote,
    journeyEyebrow, journeyTitle, journeyDescription, journeySteps[]{title, description},
    journeyNote, journeyLink, servicesEyebrow, servicesTitle, servicesDescription,
    servicesLink, coverageTitle, coverageDescription, coverageLink,
    valuesEyebrow, valuesTitle, values[]{title, description},
    ctaEyebrow, ctaTitle, ctaDescription,
    "heroImage": {"url": heroImage.asset->url, "alt": heroImage.alt},
    "storyImageLarge": {"url": storyImageLarge.asset->url, "alt": storyImageLarge.alt},
    "storyImageSmall": {"url": storyImageSmall.asset->url, "alt": storyImageSmall.alt}
  },
  "contactPage": *[_type == "contactPage" && _id == "contactPage"][0]{
    metaTitle, metaDescription, heroEyebrow, heroTitle, heroLead,
    heroImageCaption, formTitle, formDescription, formPrivacyNote,
    contactEyebrow, contactTitle, contactDescription, phoneDisplay, phone, whatsapp,
    locationsTitle, locationsDescription, locations, servicesLink,
    "heroImage": {"url": heroImage.asset->url, "alt": heroImage.alt}
  },
  "products": *[_type == "product"] | order(sortOrder asc){
    name, description, detail, category, sortOrder, featured,
    slug,
    "image": {"url": image.asset->url, "alt": image.alt}
  },
  "services": *[_type == "service"] | order(sortOrder asc){
    number, title, description, category, detailIntro, detailPoints,
    detailChecklist, sortOrder, slug,
    "image": {"url": image.asset->url, "alt": image.alt},
    detailPhotos[]{caption, alt, "image": {"url": image.asset->url, "alt": image.alt}}
  },
  "fieldPhotos": *[_type == "sitePhoto" && placement == "homepage"] | order(sortOrder asc){
    caption, type, category, "image": {"url": image.asset->url, "alt": image.alt}
  },
  "projectPhotos": *[_type == "sitePhoto" && placement == "projects"] | order(sortOrder asc){
    caption, type, category, "image": {"url": image.asset->url, "alt": image.alt}
  }
}`;

async function fetchSanityContent(): Promise<SanitySiteContent> {
  const endpoint = new URL(
    `https://${projectId}.api.sanity.io/v2025-02-19/data/query/${dataset}`,
  );
  endpoint.searchParams.set("query", siteContentQuery);

  const response = await fetch(endpoint, { cache: "force-cache" });
  if (!response.ok) {
    throw new Error(
      `Sanity content request failed (${response.status} ${response.statusText}).`,
    );
  }

  const payload = (await response.json()) as {
    result?: Partial<SanitySiteContent>;
  };
  if (!payload.result) {
    throw new Error("Sanity returned an empty content response.");
  }

  return {
    homePage: payload.result.homePage ?? null,
    aboutPage: payload.result.aboutPage ?? null,
    contactPage: payload.result.contactPage ?? null,
    products: payload.result.products ?? [],
    services: payload.result.services ?? [],
    fieldPhotos: payload.result.fieldPhotos ?? [],
    projectPhotos: payload.result.projectPhotos ?? [],
  };
}

function requireImage(image: SanityImage | undefined, label: string) {
  if (!image?.url) {
    throw new Error(`Sanity content "${label}" is missing its image.`);
  }
  return { image: image.url, alt: image.alt || label };
}

function mapProducts(content: SanityProduct[]): Product[] {
  return content.map((product) => ({
    name: product.name,
    description: product.description,
    detail: product.detail,
    category: product.category,
    featured: product.featured,
    ...requireImage(product.image, product.name),
  }));
}

function mapServices(content: SanityService[]): Service[] {
  return content.map((service) => ({
    number: service.number,
    slug: service.slug.current,
    title: service.title,
    category: service.category,
    description: service.description,
    detailIntro: service.detailIntro,
    detailPoints: service.detailPoints ?? [],
    detailChecklist: service.detailChecklist ?? [],
    detailPhotos: (service.detailPhotos ?? []).map((photo) => ({
      ...requireImage(
        photo.image,
        photo.alt || photo.caption || service.title,
      ),
      alt: photo.alt || photo.image?.alt || photo.caption || service.title,
      caption: photo.caption || "",
    })),
    ...requireImage(service.image, service.title),
  }));
}

function mapPhotos(content: SanityPhoto[]): ProjectPhoto[] {
  return content.map((photo) => ({
    caption: photo.caption,
    type: photo.type,
    category: photo.category,
    ...requireImage(photo.image, photo.caption),
  }));
}

export async function getSiteContent() {
  const content = await fetchSanityContent();
  const resolvedProducts = content.products.length
    ? mapProducts(content.products)
    : defaultProducts.map((product, index) => ({
        ...product,
        featured: index < 6,
      }));
  return {
    homePage: content.homePage,
    aboutPage: content.aboutPage,
    contactPage: content.contactPage,
    products: resolvedProducts,
    services: content.services.length
      ? mapServices(content.services)
      : defaultServices,
    fieldPhotos: content.fieldPhotos.length
      ? mapPhotos(content.fieldPhotos)
      : fieldPhotos,
    projectPhotos: content.projectPhotos.length
      ? mapPhotos(content.projectPhotos)
      : projectGalleryPhotos,
  };
}
