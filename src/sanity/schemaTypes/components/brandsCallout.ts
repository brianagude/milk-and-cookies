import { defineField, defineType } from "sanity";
import { buttonFields } from "../inputs/button"

export const brandsCallout = defineType({
  name: "brandsCallout",
  title: "Brands Callout",
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
      name: "headline",
      title: "Headline",
      type: "string",
    }),
    defineField({
      name: "subheadline",
      title: "Subheadline",
      type: "blockContent",
    }),
    defineField({
      name: "button",
      title: "Button",
      type: "object",
      fields: [...buttonFields]
    }),
    defineField({
  name: "brands",
  title: "Brands",
  type: "array",
  of: [
    defineField({
      name: "brand",
      title: "Brand",
      type: "object",
      fields: [
        defineField({
          name: "logo",
          title: "Logo",
          type: "image",
          validation: (Rule) => Rule.required(),
          fields: [
            defineField({
              name: "alt",
              title: "Brand Name",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
          ],
        }),
        defineField({
          name: "link",
          title: "Link to article",
          type: "url",
        }),
      ],
      preview: {
        select: {
          title: "logo.alt",
          media: "logo",
        },
        prepare({ title, media }) {
          return {
            title,
            media,
          };
        },
      },
    }),
  ],
}),

  ],
  preview: {
    select: {
      title: "headline",
      media: "backgroundImage"
    },
    prepare(selection) {
      const { title, media } = selection;
      return {
        title: title,
        subtitle: "Text Callout",
        media
      };
    },
  },
});
