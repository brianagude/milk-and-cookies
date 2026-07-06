import { defineField, defineType } from "sanity";
import { buttonFields } from "../inputs/button";

export const landing = defineType({
	name: "landing",
	title: "Landing Page",
	type: "document",
	groups: [
		{ name: "content", title: "Content", default: true },
		{ name: "media", title: "Media" },
	],
	fields: [
		defineField({
			name: "hero",
			title: "Hero Section",
			description: "The main intro area for the landing page.",
			type: "object",
			group: "content",
			fields: [
				defineField({
					name: "backgroundImage",
					title: "Background Image",
					description: "Optional hero image shown behind the main message.",
					type: "image",
					group: "media",
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
				defineField({
					name: "backgroundVideo",
					title: "Background Video",
					description: "Optional fullscreen video for the hero area.",
					type: "mux.video",
					group: "media",
				}),
				defineField({
					name: "kicker",
					title: "Kicker",
					type: "string",
					group: "content",
				}),
				defineField({
					name: "headline1",
					title: "Headline 1",
					type: "string",
					group: "content",
				}),
				defineField({
					name: "headline2",
					title: "Headline 2",
					type: "string",
					group: "content",
				}),
				defineField({
					name: "subheadline",
					title: "Subheadline",
					type: "blockContent",
					group: "content",
				}),
				defineField({
					name: "buttons",
					title: "Buttons",
					type: "array",
					group: "content",
					validation: (Rule) => Rule.max(3),
					of: [
						defineField({
							name: "button",
							title: "Button",
							type: "object",
							fields: [...buttonFields],
						}),
					],
				}),
			],
		}),
		defineField({
			name: "countdown",
			title: "Countdown Section",
			description: "A launch countdown used to build anticipation.",
			type: "object",
			group: "content",
			fields: [
				defineField({
					name: "countdownText",
					title: "Countdown Text",
					type: "string",
					group: "content",
				}),
				defineField({
					name: "countdownDate",
					title: "Countdown Date",
					type: "date",
					group: "content",
					options: {
						dateFormat: "MMMM Do YYYY",
					},
				}),
			],
		}),
		defineField({
			name: "newsletter",
			title: "Newsletter Section",
			description: "Mailchimp-driven signup block for collecting subscribers.",
			type: "object",
			group: "content",
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
		}),

		defineField({
			name: "divider",
			title: "Divider",
			description: "A simple visual break between content sections.",
			type: "object",
			group: "content",
			fields: [
				defineField({
					name: "backgroundImage",
					title: "Background Image",
					description: "Optional image used as the divider graphic.",
					type: "image",
					group: "media",
					validation: (Rule) => Rule.required(),
				}),
			],
		}),

		defineField({
			name: "finalCallout",
			title: "Final Callout",
			description: "The closing promotional section that appears near the bottom of the page.",
			type: "object",
			group: "content",
			fields: [
				defineField({
					name: "backgroundImage",
					title: "Background Image",
					description: "Image shown behind the closing message.",
					type: "image",
					group: "media",
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
					name: "kicker",
					title: "Kicker",
					type: "string",
					group: "content",
				}),
				defineField({
					name: "title",
					title: "Title",
					type: "text",
					rows: 2,
					group: "content",
				}),
				defineField({
					name: "subtitle",
					title: "Subtitle",
					type: "text",
					rows: 2,
					group: "content",
				}),
				defineField({
					name: "body",
					title: "Body Text",
					type: "blockContent",
					group: "content",
				}),
			],
		}),
	],
	preview: {
		select: {
			title: "hero.headline1",
			media: "hero.backgroundImage",
		},
		prepare(selection) {
			const { title, media } = selection;
			return {
				title: title || "Landing Page",
				media,
			};
		},
	},
});
