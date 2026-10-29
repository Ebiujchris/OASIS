import { getCliClient } from "sanity/cli";
import { homepageDefaults } from "./homepage-defaults";

const projectId = process.env.SANITY_STUDIO_PROJECT_ID || "jnwipq1i";
const dataset = process.env.SANITY_STUDIO_DATASET || "production";
const client = getCliClient({
  apiVersion: "2025-02-19",
  projectId,
  dataset,
});

await client.createIfNotExists({
  _id: "homePage",
  _type: "homePage",
  ...homepageDefaults,
});

await client.patch("homePage").setIfMissing(homepageDefaults).commit();

console.log(
  `Added missing homepage content fields to ${projectId}/${dataset}; existing edits were preserved.`,
);
