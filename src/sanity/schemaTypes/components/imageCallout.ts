import { defineField, defineType } from "sanity";

export const imageCallout = defineType({
	name: "imageCallout",
	title: "Image Callout",
	type: "object",
	fields: [
		defineField({
			name: "headline",
			title: "Image Description",
			description: "What is this an image of?",
			type: "string",
		}),
		defineField({
			name: "foregroundImage",
			title: "Foreground Image",
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
				}),
			],
		}),
		defineField({
			name: "backgroundImage",
			title: "Background Image",
			type: "image",
			options: {
				hotspot: true,
			},
			fields: [
				defineField({
					name: "alt",
					title: "Alt Text",
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
