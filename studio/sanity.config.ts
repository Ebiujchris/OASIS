import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemaTypes";
import { structure } from "./structure";

export default defineConfig({
  name: "oasis",
  title: "Oasis Irrigation Solutions",
  projectId: process.env.SANITY_STUDIO_PROJECT_ID || "jnwipq1i",
  dataset: process.env.SANITY_STUDIO_DATASET || "production",
  plugins: [structureTool({ structure }), visionTool()],
  schema: { types: schemaTypes },
});
