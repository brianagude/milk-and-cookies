import { defineArrayMember, defineField, defineType } from "sanity";

export const landing = defineType({
  name: "landing",
  title: "Landing Page",
  type: "document",
  fields: [
    // Hero Section
    defineField({
      name: "hero",
      title: "Hero Section",
      type: "object",
      fields: [
        defineField({
          name: "backgroundImage",
          title: "Background Image",
          type: "image",
          options: {
            hotspot: true,
          },
          validation: (Rule) => Rule.required(),
          fields: [
            defineField({
              name: "alt",
              title: "Alt Text",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
          ],
        }),
        defineField({
          name: "kicker",
          title: "Kicker",
          type: "string",
        }),
        defineField({
          name: "headline1",
          title: "Headline 1",
          type: "string",
        }),
        defineField({
          name: "headline2",
          title: "Headline 2",
          type: "string",
        }),
        defineField({
          name: "subheadline1",
          title: "Subheadline 1",
          type: "text",
          rows: 2
        }),
        defineField({
          name: "subheadline2",
          title: "Subheadline 2",
          type: "text",
          rows: 2
        }),
      ],
    }),
    
    // Newsletter Section
    defineField({
      name: "newsletter",
      title: "Newsletter Section",
      type: "object",
      fields: [
        defineField({
          name: "title",
          title: "Title",
          type: "text",
          rows: 2
        }),
        defineField({
          name: "buttonText",
          title: "Button Text",
          type: "string",
        }),
        defineField({
          name: "backgroundColor",
          title: "Background Color",
          type: "string",
          options: {
            list: [
              { title: "Cream", value: "bg-cream" },
              { title: "Blue", value: "bg-blue" },
              { title: "Olive", value: "bg-olive" },
              { title: "Scarlet", value: "bg-scarlet" },
              { title: "Gradient Blue Cream", value: "bg-gradient-blue-cream" },
              { title: "Gradient Scarlet Cream", value: "bg-gradient-scarlet-cream" },
              { title: "Gradient Pink Cream", value: "bg-gradient-pink-cream" },
              { title: "Gradient Pink Blue", value: "bg-gradient-pink-blue" },
              { title: "Gradient Scarlet Pink", value: "bg-gradient-scarlet-pink" },
            ],
          },
        }),
      ],
    }),
    
    // Divider
    defineField({
      name: "divider",
      title: "Divider",
      type: "object",
      fields: [
        defineField({
          name: "backgroundImage",
          title: "Background Image",
          type: "image",
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
    
    // Final Callout
    defineField({
      name: "finalCallout",
      title: "Final Callout",
      type: "object",
      fields: [
        defineField({
          name: "backgroundImage",
          title: "Background Image",
          type: "image",
          options: {
            hotspot: true,
          },
          validation: (Rule) => Rule.required(),
          fields: [
            defineField({
              name: "alt",
              title: "Alt Text",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
          ],
        }),
        defineField({
          name: "kicker",
          title: "Kicker",
          type: "string",
        }),
        defineField({
          name: "title",
          title: "Title",
          type: "text",
          rows: 2
        }),
        defineField({
          name: "subtitle",
          title: "Subtitle",
          type: "text",
          rows: 2
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: "hero.headline1",
      media: "hero.backgroundImage",
    },
    prepare(selection) {
      const { title, media } = selection;
      return {
        title: title || "Landing Page",
        media,
      };
    },
  },
});