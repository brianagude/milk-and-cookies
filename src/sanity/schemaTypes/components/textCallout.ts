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
			description: "Image that sits behind the copy block.",
			type: "image",
			options: {
				hotspot: true,
			},
			validation: (Rule) => Rule.required(),
			fields: [
				defineField({
					name: "alt",
					title: "Alt text (optional)",
					description: "Helpful for accessibility when the image carries meaning.",
					type: "string",
				}),
			],
		}),
		defineField({
			name: "headline",
			title: "Headline",
			description: "The main title for the text block.",
			type: "string",
		}),
		defineField({
			name: "subheadline",
			title: "Subheadline",
			description: "Supporting text shown beneath the headline.",
			type: "blockContent",
		}),
		defineField({
			name: "button",
			title: "Button",
			description: "Optional action link for the section.",
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
