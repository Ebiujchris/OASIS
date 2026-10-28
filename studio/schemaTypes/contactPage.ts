import { defineArrayMember, defineField, defineType } from "sanity";

export const contactPage = defineType({
  name: "contactPage",
  title: "Contact page",
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
          validation: (rule) => rule.required(),
        }),
      ],
    }),
    defineField({
      name: "heroImageCaption",
      title: "Hero image caption",
      type: "string",
    }),
    defineField({
      name: "formTitle",
      title: "Enquiry form heading",
      type: "string",
    }),
    defineField({
      name: "formDescription",
      title: "Enquiry form introduction",
      type: "string",
    }),
    defineField({
      name: "formPrivacyNote",
      title: "Enquiry form privacy note",
      type: "string",
    }),
    defineField({
      name: "contactEyebrow",
      title: "Contact details label",
      type: "string",
    }),
    defineField({
      name: "contactTitle",
      title: "Contact details heading",
      type: "string",
    }),
    defineField({
      name: "contactDescription",
      title: "Contact details introduction",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "phoneDisplay",
      title: "Phone number as displayed",
      type: "string",
    }),
    defineField({
      name: "phone",
      title: "Phone number for calling",
      type: "string",
    }),
    defineField({
      name: "whatsapp",
      title: "WhatsApp number (international format, digits only)",
      type: "string",
    }),
    defineField({
      name: "locationsTitle",
      title: "Office locations heading",
      type: "string",
    }),
    defineField({
      name: "locationsDescription",
      title: "Office locations description",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "locations",
      title: "Office locations",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
    }),
    defineField({
      name: "servicesLink",
      title: "Services link text",
      type: "string",
    }),
  ],
});
