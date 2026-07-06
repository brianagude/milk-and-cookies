import { defineField, defineType } from "sanity";

export const imageCallout = defineType({
	name: "imageCallout",
	title: "Image Callout",
	type: "object",
	fields: [
		defineField({
			name: "headline",
			title: "Image Description",
			description: "What is this image meant to communicate?",
			type: "string",
		}),
		defineField({
			name: "foregroundImage",
			title: "Foreground Image",
			description: "The main image that appears in front of the background layer.",
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
			name: "backgroundImage",
			title: "Background Image",
			description: "Optional supporting image behind the foreground layer.",
			type: "image",
			options: {
				hotspot: true,
			},
			fields: [
				defineField({
					name: "alt",
					title: "Alt text (optional)",
					description: "Helpful for accessibility when the image carries meaning.",
					type: "string",
				}),
			],
		}),
	],
	preview: {
		select: {
			title: "headline",
			media: "foregroundImage",
		},
		prepare(selection) {
			const { title, media } = selection;
			return {
				title: title,
				subtitle: "Image Callout",
				media,
			};
		},
	},
});
