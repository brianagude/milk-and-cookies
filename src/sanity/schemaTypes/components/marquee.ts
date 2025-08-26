import { defineField, defineType } from "sanity";

export const marquee = defineType({
  name: "marquee",
  title: "Marquee",
  type: "object",
  fields: [
    defineField({
      name: "text",
      title: "Text",
      type: "string",
    }),
  ],
  preview: {
    select: {
      title: "text",
    },
    prepare(selection) {
      const { title } = selection;
      return {
        title: title, 
        subtitle: "Marquee",
      };
    },
  },
});
