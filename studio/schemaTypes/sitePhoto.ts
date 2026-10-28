import { defineField, defineType } from "sanity";

export const sitePhoto = defineType({
  name: "sitePhoto",
  title: "Field & project photos",
  type: "document",
  fields: [
    defineField({
      name: "caption",
      title: "Caption",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "image",
      title: "Photo",
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
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "type",
      title: "Photo label",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          "Irrigation",
          "Water storage",
          "Solar",
          "Water supply",
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "placement",
      title: "Show in",
      type: "string",
      options: {
        list: [
          { title: "Homepage field work", value: "homepage" },
          { title: "Projects page", value: "projects" },
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "sortOrder",
      title: "Display order",
      type: "number",
      validation: (rule) => rule.required(),
    }),
  ],
  orderings: [
    {
      title: "Display order",
      name: "sortOrder",
      by: [{ field: "sortOrder", direction: "asc" }],
    },
  ],
  preview: {
    select: { title: "caption", subtitle: "placement", media: "image" },
  },
});
