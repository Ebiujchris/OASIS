import { createReadStream, existsSync } from "node:fs";
import path from "node:path";
import { getCliClient } from "sanity/cli";
import { company } from "../../src/data/site";

const projectId = process.env.SANITY_STUDIO_PROJECT_ID || "jnwipq1i";
const dataset = process.env.SANITY_STUDIO_DATASET || "production";
const client = getCliClient({
  apiVersion: "2025-02-19",
  projectId,
  dataset,
});

function contentTypeFor(filename: string) {
  switch (path.extname(filename).toLowerCase()) {
    case ".jpg":
    case ".jpeg":
      return "image/jpeg";
    case ".png":
      return "image/png";
    case ".webp":
      return "image/webp";
    default:
      throw new Error(`Unsupported image format: ${filename}`);
  }
}

async function imageValue(src: string, alt: string) {
  const filename = path.basename(src);
  const imagePath = path.resolve(process.cwd(), "..", "public", "images", filename);
  if (!existsSync(imagePath)) {
    throw new Error(`Cannot find image referenced by site content: ${imagePath}`);
  }

  const asset = await client.assets.upload(
    "image",
    createReadStream(imagePath),
    { filename, contentType: contentTypeFor(filename) },
  );
  return {
    _type: "image",
    asset: { _type: "reference", _ref: asset._id },
    alt,
  };
}

const existingIds = new Set(
  await client.fetch<string[]>("*[_id in $ids]._id", {
    ids: ["aboutPage", "contactPage"],
  }),
);
const docs: { _id: string; _type: string; [key: string]: unknown }[] = [];

if (!existingIds.has("aboutPage")) {
  docs.push({
    _id: "aboutPage",
    _type: "aboutPage",
    metaTitle: "About Oasis Irrigation Solutions",
    metaDescription:
      "Get to know Oasis Irrigation Solutions, an irrigation products and farm support business serving Uganda.",
    heroEyebrow: "About Oasis / Our approach",
    heroTitle: "Helping farms grow with water used wisely.",
    heroLead:
      "Oasis Irrigation Solutions brings together irrigation products and practical support to help growers make confident choices for their farms.",
    heroImage: await imageValue(
      "/images/solar-installation-team.webp",
      "A team carrying a large solar panel at a farm site",
    ),
    heroImageCaption: "Solar installation for farm water systems",
    storyEyebrow: "Who we are",
    storyTitle: "Irrigation should make sense for the people using it.",
    storyDescription:
      "From fittings and drip irrigation components to system planning and installation support, our focus is on helping you find a practical next step.",
    storyParagraphs: [
      "We believe choosing irrigation equipment should feel clear, not complicated. That means asking about the farm, understanding the water available and helping you explore options that fit the project.",
      "Every setup has its own requirements. Crop type, field layout, water source and existing equipment all help shape a useful conversation about products, planning and installation support.",
    ],
    storyImageLarge: await imageValue(
      "/images/farm-watering.jpg",
      "A farm irrigation hose watering crops between rows",
    ),
    storyImageSmall: await imageValue(
      "/images/water-infrastructure.jpg",
      "Irrigation water infrastructure on a farm",
    ),
    storyImageLabel: "Water for growing",
    storyImageNote: "SMART IRRIGATION · BETTER HARVESTS",
    journeyEyebrow: "From source to field",
    journeyTitle: "How water reaches your crops.",
    journeyDescription:
      "A farm water system connects a source to the places water is needed. The right setup depends on your farm, water source and crops.",
    journeySteps: [
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
    ],
    journeyNote:
      "Every farm is different. Oasis can help you explore the products and support that fit your setup.",
    journeyLink: "Explore how we can help",
    servicesEyebrow: "How we can help",
    servicesTitle: "Support for the whole water journey.",
    servicesDescription:
      "Explore the areas Oasis can help you discuss, from planning an irrigation layout to choosing components and maintaining a system.",
    servicesLink: "Explore all services",
    coverageTitle: "Serving growers throughout Uganda",
    coverageDescription: `Oasis has offices in ${company.locations.join(" and ")}.`,
    coverageLink: "Get in touch",
    valuesEyebrow: "What guides us",
    valuesTitle: "A practical approach to every project.",
    values: [
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
    ],
    ctaEyebrow: "Let’s grow together",
    ctaTitle: "Tell us what your farm needs.",
    ctaDescription: "Oasis is here to talk through your irrigation project.",
  });
}

if (!existingIds.has("contactPage")) {
  docs.push({
    _id: "contactPage",
    _type: "contactPage",
    metaTitle: "Contact & Request a Quote",
    metaDescription:
      "Contact Oasis Irrigation Solutions by phone or WhatsApp for irrigation products and project support throughout Uganda. Offices in Kampala and Gulu.",
    heroEyebrow: "Contact / Let’s talk",
    heroTitle: "Tell us what you’re growing.",
    heroLead:
      "Whether you need a product, have a system in mind or are just getting started, we’d be happy to hear about your project.",
    heroImage: await imageValue(
      "/images/farm-water-point-team.webp",
      "People collecting water at an outdoor water point",
    ),
    heroImageCaption: "Talk with Oasis about your water needs",
    formTitle: "Tell us about your project",
    formDescription: "Choose a topic, then share only the details you know.",
    formPrivacyNote: "Your details are not stored on this website.",
    contactEyebrow: "Other ways to reach us",
    contactTitle: "We’re only a message away.",
    contactDescription:
      "Contact us with your location and project details so we can point you in the right direction.",
    phoneDisplay: company.phoneDisplay,
    phone: company.phone,
    whatsapp: company.whatsapp,
    locationsTitle: `Offices in ${company.locations.join(" & ")}`,
    locationsDescription:
      "Oasis serves customers throughout Uganda. Contact us for office directions and confirm the exact address before visiting.",
    locations: company.locations,
    servicesLink: "See how we can help",
  });
}

if (docs.length > 0) {
  const transaction = client.transaction();
  for (const doc of docs) {
    transaction.createIfNotExists(doc);
  }
  await transaction.commit();
}

console.log(
  `Imported missing About and Contact pages into ${projectId}/${dataset}; existing documents were left unchanged.`,
);
