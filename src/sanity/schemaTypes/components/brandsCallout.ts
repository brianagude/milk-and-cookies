import { defineField, defineType } from "sanity";
import { buttonFields } from "../inputs/button";

export const brandsCallout = defineType({
	name: "brandsCallout",
	title: "Brands Callout",
	type: "object",
	fields: [
		defineField({
			name: "backgroundImage",
			title: "Background Image",
			description: "Image that sits behind the brand section content.",
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
			description: "Short heading for the brands block.",
			type: "string",
		}),
		defineField({
			name: "subheadline",
			title: "Subheadline",
			description: "Support copy shown below the headline.",
			type: "blockContent",
		}),
		defineField({
			name: "button",
			title: "Button",
			description: "Optional call to action for the section.",
			type: "object",
			fields: [...buttonFields],
		}),
		defineField({
			name: "brands",
			title: "Brands",
			description: "Add each brand or partner logo to feature.",
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
							description: "Upload the brand or partner logo.",
							type: "image",
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
							name: "link",
							title: "Link to article",
							description: "Optional destination for this brand card.",
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
