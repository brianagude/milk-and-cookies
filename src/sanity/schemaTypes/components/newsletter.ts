import { defineField, defineType } from "sanity";

export const newsletter = defineType({
	name: "newsletter",
	title: "Newsletter",
	type: "object",
	fields: [
		defineField({
			name: "actionUrl",
			title: "Mailchimp Form URL",
			description: "The form endpoint used to submit the signup.",
			type: "string",
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "title",
			title: "Title",
			description: "Headline or intro copy for the signup block.",
			type: "text",
			rows: 2,
		}),
		defineField({
			name: "buttonText",
			title: "Button Text",
			description: "Text shown on the submit button.",
			type: "string",
		}),
		defineField({
			name: "backgroundColor",
			title: "Background Color",
			description: "Choose the visual treatment for this block.",
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
