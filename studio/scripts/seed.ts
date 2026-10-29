import { createReadStream, existsSync } from "node:fs";
import path from "node:path";
import { getCliClient } from "sanity/cli";
import {
  fieldPhotos,
  products,
  projectGalleryPhotos,
  services,
} from "../../src/data/site";
import { homepageDefaults } from "./homepage-defaults";

const projectId = process.env.SANITY_STUDIO_PROJECT_ID || "jnwipq1i";
const dataset = process.env.SANITY_STUDIO_DATASET || "production";
const client = getCliClient({
  apiVersion: "2025-02-19",
  projectId,
  dataset,
});

const imageAssets = new Map<string, string>();

function contentTypeFor(filename: string) {
  switch (path.extname(filename).toLowerCase()) {
    case ".jpg":
    case ".jpeg":
      return "image/jpeg";
    case ".png":
      return "image/png";
    case ".webp":
      return "image/webp";
    case ".gif":
      return "image/gif";
    default:
      throw new Error(`Unsupported image format: ${filename}`);
  }
}

async function imageValue(src: string, alt: string) {
  const cachedAsset = imageAssets.get(src);
  if (cachedAsset) {
    return {
      _type: "image",
      asset: { _type: "reference", _ref: cachedAsset },
      alt,
    };
  }

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
  imageAssets.set(src, asset._id);

  return {
    _type: "image",
    asset: { _type: "reference", _ref: asset._id },
    alt,
  };
}

const homePage = {
  _id: "homePage",
  _type: "homePage",
  ...homepageDefaults,
};

const docs: { _id: string; _type: string; [key: string]: unknown }[] = [
  {
    ...homePage,
    heroImage: await imageValue(
      "/images/farm-irrigation.webp",
      "A grower watering crops in a farm field",
    ),
    approachImage: await imageValue(
      "/images/solar-water-system.jpg",
      "Solar-powered water system at a Ugandan farm",
    ),
    ctaImage: await imageValue(
      "/images/irrigation-installation-team.jpg",
      "Oasis team installing water pipes at a farm",
    ),
  },
];

for (const [index, product] of products.entries()) {
  const slug = product.name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
  docs.push({
    _id: `product-${slug}`,
    _type: "product",
    name: product.name,
    slug: { _type: "slug", current: slug },
    description: product.description,
    image: await imageValue(product.image, product.alt),
    detail: product.detail,
    category: product.category,
    featured: index < 6,
    sortOrder: index,
  });
}

for (const [index, service] of services.entries()) {
  docs.push({
    _id: `service-${service.slug}`,
    _type: "service",
    number: service.number,
    title: service.title,
    slug: { _type: "slug", current: service.slug },
    category: service.category,
    description: service.description,
    detailIntro: service.detailIntro,
    detailPoints: service.detailPoints,
    detailChecklist: service.detailChecklist,
    detailPhotos: await Promise.all(
      service.detailPhotos.map(async (photo) => ({
        _type: "servicePhoto",
        image: await imageValue(photo.image, photo.alt),
        alt: photo.alt,
        caption: photo.caption,
      })),
    ),
    image: await imageValue(service.image, service.alt),
    sortOrder: index,
  });
}

const photos = [
  ...fieldPhotos.map((photo, index) => ({
    photo,
    placement: "homepage",
    sortOrder: index,
  })),
  ...projectGalleryPhotos.map((photo, index) => ({
    photo,
    placement: "projects",
    sortOrder: index,
  })),
];

for (const { photo, placement, sortOrder } of photos) {
  const filename = path.basename(photo.image);
  docs.push({
    _id: `sitePhoto-${placement}-${filename.replace(/\W+/g, "-")}-${sortOrder}`,
    _type: "sitePhoto",
    caption: photo.caption,
    image: await imageValue(photo.image, photo.alt),
    type: photo.type,
    category: photo.category,
    placement,
    sortOrder,
  });
}

const transaction = client.transaction();
for (const doc of docs) {
  transaction.createIfNotExists(doc);
}
await transaction.commit();

console.log(
  `Imported missing content into ${projectId}/${dataset}; existing documents were left unchanged.`,
);
