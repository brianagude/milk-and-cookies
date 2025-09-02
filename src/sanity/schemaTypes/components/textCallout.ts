import { defineField, defineType } from "sanity";
import { buttonFields } from "../inputs/button";

export const textCallout = defineType({
	name: "textCallout",
	title: "Text Callout",
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
			fields: [...buttonFields],
		}),
	],
	preview: {
		select: {
			title: "headline",
			media: "backgroundImage",
		},
		prepare(selection) {
			const { title, media } = selection;
			return {
				title: title,
				subtitle: "Text Callout",
				media,
			};
		},
	},
});
