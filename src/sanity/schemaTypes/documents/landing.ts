import { defineField, defineType } from "sanity";

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
          name: "actionUrl",
          title: "Mailchimp Form URL",
          type: "string",
        }),
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
              { title: "Cream", value: "cream" },
              { title: "Blue", value: "blue" },
              { title: "Olive", value: "olive" },
              { title: "Scarlet", value: "scarlet" },
              { title: "Gradient Blue Cream", value: "gradient-blue-cream" },
              { title: "Gradient Scarlet Cream", value: "gradient-scarlet-cream" },
              { title: "Gradient Pink Cream", value: "gradient-pink-cream" },
              { title: "Gradient Pink Blue", value: "gradient-pink-blue" },
              { title: "Gradient Scarlet Pink", value: "gradient-scarlet-pink" },
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
     // SEO Settings
    defineField({
      name: "seo",
      title: "SEO",
      type: "object",
      fields: [
        defineField({
          name: "title",
          title: "Default Title",
          type: "string",
          description: "Default title for pages without specific SEO title",
        }),
        defineField({
          name: "text",
          title: "Default Description",
          type: "text",
          rows: 3,
          description: "Default meta description for pages without specific SEO description",
        }),
        defineField({
          name: "image",
          title: "Default OG Image",
          type: "image",
          description: "Default Open Graph image for social media sharing",
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