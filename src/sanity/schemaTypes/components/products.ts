import { defineField, defineType } from "sanity";

export const products = defineType({
	name: "products",
	title: "Products",
	type: "object",
	fields: [
		defineField({
			name: "headline",
			title: "Headline",
			type: "string",
		}),
		defineField({
			name: "products",
			title: "Products",
			type: "array",
			validation: (Rule) => Rule.min(1),
			of: [
				defineField({
					name: "product",
					title: "Product",
					type: "object",
					fields: [
						defineField({
							name: "name",
							title: "Product Name",
							type: "string",
							validation: (Rule) => Rule.required(),
						}),
						defineField({
							name: "description",
							title: "Short description of this product",
							type: "text",
							rows: 3,
						}),
						defineField({
							name: "price",
							title: "Product Price",
							type: "string",
						}),
						defineField({
							name: "image",
							title: "Image",
							type: "image",
						}),
						defineField({
							name: "link",
							title: "Ticket Link",
							type: "url",
							validation: (Rule) => Rule.required(),
						}),
					],
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
