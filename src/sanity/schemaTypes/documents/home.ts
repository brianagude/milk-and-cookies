import { defineArrayMember, defineField, defineType } from "sanity";

export const home = defineType({
  name: "home",
  title: "Home Page",
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
        }),
        defineField({
          name: "subheadline2",
          title: "Subheadline 2",
          type: "text",
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
          type: "string",
        }),
        defineField({
          name: "buttonText",
          title: "Button Text",
          type: "string",
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
          type: "string",
        }),
        defineField({
          name: "subtitle",
          title: "Subtitle",
          type: "text",
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
        title: title || "Home Page",
        media,
      };
    },
  },
});