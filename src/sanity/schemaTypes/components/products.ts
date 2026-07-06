import { defineField, defineType } from "sanity";

export const products = defineType({
	name: "products",
	title: "Products",
	type: "object",
	fields: [
		defineField({
			name: "headline",
			title: "Headline",
			description: "Optional heading for the products section.",
			type: "string",
		}),
		defineField({
			name: "products",
			title: "Products",
			description: "Add one or more products to feature.",
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
							description: "The product name shown on the card.",
							type: "string",
							validation: (Rule) => Rule.required(),
						}),
						defineField({
							name: "description",
							title: "Short description of this product",
							description: "A brief summary shown beneath the product name.",
							type: "text",
							rows: 3,
						}),
						defineField({
							name: "price",
							title: "Product Price",
							description: "Optional price or label for the product.",
							type: "string",
						}),
						defineField({
							name: "image",
							title: "Image",
							description: "Optional product photo or graphic.",
							type: "image",
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
							title: "Ticket Link",
							description: "Where visitors should go to learn more or buy.",
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
