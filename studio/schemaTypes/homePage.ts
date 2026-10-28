import { defineField, defineType } from "sanity";

export const homePage = defineType({
  name: "homePage",
  title: "Homepage content",
  type: "document",
  fields: [
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
    defineField({
      name: "heroImage",
      title: "Hero image",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Alternative text",
          type: "string",
        }),
      ],
    }),
    defineField({
      name: "productsHeading",
      title: "Products section heading",
      type: "string",
    }),
    defineField({
      name: "approachHeading",
      title: "Approach section heading",
      type: "string",
    }),
    defineField({
      name: "approachBody",
      title: "Approach section introduction",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "approachImage",
      title: "Approach section image",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Alternative text",
          type: "string",
        }),
      ],
    }),
    defineField({
      name: "servicesHeading",
      title: "Services section heading",
      type: "string",
    }),
    defineField({
      name: "galleryHeading",
      title: "Field work section heading",
      type: "string",
    }),
    defineField({
      name: "ctaHeading",
      title: "Final call-to-action heading",
      type: "string",
    }),
    defineField({
      name: "ctaLead",
      title: "Final call-to-action introduction",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "ctaImage",
      title: "Final call-to-action image",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Alternative text",
          type: "string",
        }),
      ],
    }),
  ],
});
