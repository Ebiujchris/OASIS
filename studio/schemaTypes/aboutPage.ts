import { defineArrayMember, defineField, defineType } from "sanity";

const imageField = (name: string, title: string) =>
  defineField({
    name,
    title,
    type: "image",
    options: { hotspot: true },
    fields: [
      defineField({
        name: "alt",
        title: "Alternative text",
        type: "string",
        validation: (rule) => rule.required(),
      }),
    ],
  });

export const aboutPage = defineType({
  name: "aboutPage",
  title: "About page",
  type: "document",
  fields: [
    defineField({ name: "metaTitle", title: "Page title", type: "string" }),
    defineField({
      name: "metaDescription",
      title: "Search description",
      type: "text",
      rows: 2,
    }),
    defineField({ name: "heroEyebrow", title: "Hero label", type: "string" }),
    defineField({
      name: "heroTitle",
      title: "Hero heading",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "heroLead",
      title: "Hero introduction",
      type: "text",
      rows: 3,
    }),
    imageField("heroImage", "Hero image"),
    defineField({
      name: "heroImageCaption",
      title: "Hero image caption",
      type: "string",
    }),
    defineField({ name: "storyEyebrow", title: "Story label", type: "string" }),
    defineField({
      name: "storyTitle",
      title: "Story heading",
      type: "string",
    }),
    defineField({
      name: "storyDescription",
      title: "Story introduction",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "storyParagraphs",
      title: "Story paragraphs",
      type: "array",
      of: [defineArrayMember({ type: "text", rows: 3 })],
    }),
    imageField("storyImageLarge", "Main story image"),
    imageField("storyImageSmall", "Secondary story image"),
    defineField({
      name: "storyImageLabel",
      title: "Main story image label",
      type: "string",
    }),
    defineField({
      name: "storyImageNote",
      title: "Story image note",
      type: "string",
    }),
    defineField({
      name: "journeyEyebrow",
      title: "Water journey label",
      type: "string",
    }),
    defineField({
      name: "journeyTitle",
      title: "Water journey heading",
      type: "string",
    }),
    defineField({
      name: "journeyDescription",
      title: "Water journey introduction",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "journeySteps",
      title: "Water journey steps",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "title", title: "Step title", type: "string" }),
            defineField({
              name: "description",
              title: "Step description",
              type: "text",
              rows: 2,
            }),
          ],
          preview: { select: { title: "title" } },
        }),
      ],
    }),
    defineField({
      name: "journeyNote",
      title: "Water journey note",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "journeyLink",
      title: "Water journey link text",
      type: "string",
    }),
    defineField({
      name: "servicesEyebrow",
      title: "Services label",
      type: "string",
    }),
    defineField({
      name: "servicesTitle",
      title: "Services heading",
      type: "string",
    }),
    defineField({
      name: "servicesDescription",
      title: "Services introduction",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "servicesLink",
      title: "Services link text",
      type: "string",
    }),
    defineField({
      name: "coverageTitle",
      title: "Coverage heading",
      type: "string",
    }),
    defineField({
      name: "coverageDescription",
      title: "Coverage description",
      type: "string",
    }),
    defineField({
      name: "coverageLink",
      title: "Coverage link text",
      type: "string",
    }),
    defineField({
      name: "valuesEyebrow",
      title: "Values label",
      type: "string",
    }),
    defineField({
      name: "valuesTitle",
      title: "Values heading",
      type: "string",
    }),
    defineField({
      name: "values",
      title: "Values",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "title", title: "Value", type: "string" }),
            defineField({
              name: "description",
              title: "Description",
              type: "text",
              rows: 2,
            }),
          ],
          preview: { select: { title: "title" } },
        }),
      ],
    }),
    defineField({
      name: "ctaEyebrow",
      title: "Closing section label",
      type: "string",
    }),
    defineField({
      name: "ctaTitle",
      title: "Closing section heading",
      type: "string",
    }),
    defineField({
      name: "ctaDescription",
      title: "Closing section text",
      type: "text",
      rows: 2,
    }),
  ],
});
