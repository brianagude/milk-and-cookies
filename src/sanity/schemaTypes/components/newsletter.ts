import { defineField, defineType } from "sanity";

export const newsletter = defineType({
	name: "newsletter",
	title: "Newsletter",
	type: "object",
	fields: [
		defineField({
			name: "actionUrl",
			title: "Mailchimp Form URL",
			type: "string",
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "title",
			title: "Title",
			type: "text",
			rows: 2,
		}),
		defineField({
			name: "buttonText",
			title: "Button Text",
			type: "string",
		}),
		defineField({
			name: "backgroundColor",
			title: "Background Color",
			type: "string",
			options: {
				list: [
					{ title: "Cream", value: "cream" },
					{ title: "Blue", value: "blue" },
					{ title: "Olive", value: "olive" },
					{ title: "Scarlet", value: "scarlet" },
					{ title: "Gradient Blue Cream", value: "gradient-blue-cream" },
					{
						title: "Gradient Scarlet Cream",
						value: "gradient-scarlet-cream",
					},
					{ title: "Gradient Pink Cream", value: "gradient-pink-cream" },
					{ title: "Gradient Pink Blue", value: "gradient-pink-blue" },
					{
						title: "Gradient Scarlet Pink",
						value: "gradient-scarlet-pink",
					},
				],
			},
		}),
	],
	preview: {
		select: {
			title: "title",
		},
		prepare(selection) {
			const { title } = selection;
			return {
				title: title,
				subtitle: "Newsletter Section",
			};
		},
	},
});
