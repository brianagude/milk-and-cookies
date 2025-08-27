import { defineField, defineType } from "sanity";

export const events = defineType({
  name: "events",
  title: "Events",
  type: "object",
  fields: [
    defineField({
      name: "headline",
      title: "Headline",
      type: "string",
    }),
    defineField({
      name: "events",
      title: "Events",
      type: "array",
      validation: Rule => Rule.min(1),
      of: [
        defineField({
          name: "event",
          title: "Event",
          type: "object",
          fields: [
            defineField({
              name: "name",
              title: "Event Name",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "description",
              title: "Short description of this event",
              type: "text",
              rows: 3
            }),
            defineField({
              name: "date",
              title: "Event Date",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "location",
              title: "Event Location",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "tag",
              title: "Event Tag",
              description: "Tag to show at the top of the event card",
              type: "string",
            }),
            defineField({
              name: "link",
              title: "RSVP Link",
              type: "url",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "info",
              title: "Additional Information",
              description: "Additional info about this event to show in a pop up styled menu.",
              type: "object",
              fields: [
                defineField({
                  name: "subheadline",
                  title: "Subheadline",
                  type: "blockContent",
                }),
                defineField({
                  name: "details",
                  title: "Event Details",
                  type: "array",
                  of: [
                    defineField({
                      name: "item",
                      title: "Detail Item",
                      type: "object",
                      fields: [
                        defineField({
                          name: "caption",
                          title: "Caption",
                          type: "string",
                        }),
                        defineField({
                          name: "content",
                          title: "Text",
                          type: "blockContent",
                        }),
                        defineField({
                          name: "photo",
                          title: "Image",
                          type: "image",
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
                  ],
                }),
              ]
            }),
          ],
          preview: {
            select: {
              title: "name",
              subtitle: "date"
            },
            prepare({ title, subtitle }) {
              return {
                title,
                subtitle,
              };
            },
          },
        }),
      ]
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
