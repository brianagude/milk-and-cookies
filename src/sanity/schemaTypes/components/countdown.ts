import { defineField, defineType } from "sanity";

export const countdown = defineType({
	name: "countdown",
	title: "Countdown",
	type: "object",
	fields: [
		defineField({
			name: "countdownText",
			title: "Countdown Text",
			description: "The short message shown above the date.",
			type: "string",
		}),
		defineField({
			name: "countdownDate",
			title: "Countdown Date",
			description: "The date the countdown should reach zero.",
			type: "date",
			validation: (Rule) => Rule.required(),
			options: {
				dateFormat: "MMMM Do YYYY",
			},
		}),
	],
	preview: {
		select: {
			title: "countdownText",
			subtitle: "countdownDate",
		},
		prepare(selection) {
			const { title, subtitle } = selection;
			return {
				title: `${title} ${subtitle}`,
				subtitle: "Countdown Timer",
			};
		},
	},
});
