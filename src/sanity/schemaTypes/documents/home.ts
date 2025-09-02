import { defineField, defineType } from "sanity";
import { buttonFields } from "../inputs/button";

export const home = defineType({
	name: "home",
	title: "Home Page",
	type: "document",
	fields: [
		// Hero Section
		defineField({
			name: "hero",
			title: "Hero Section",
			type: "object",
			fields: [
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
							validation: (Rule) => Rule.required(),
						}),
					],
				}),
				defineField({
					name: "backgroundVideo",
					title: "Background Video",
					type: "mux.video",
				}),
				defineField({
					name: "kicker",
					title: "Kicker",
					type: "string",
				}),
				defineField({
					name: "headline1",
					title: "Headline 1",
					type: "string",
				}),
				defineField({
					name: "headline2",
					title: "Headline 2",
					type: "string",
				}),
				defineField({
					name: "subheadline",
					title: "Subheadline",
					type: "blockContent",
				}),
				defineField({
					name: "buttons",
					title: "Buttons",
					type: "array",
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

		// Sections
		defineField({
			name: "sections",
			title: "Page Sections",
			type: "array",
			of: [
				defineField({
					name: "actionsWrapper",
					title: "Actions Wrapper",
					type: "object",
					fields: [
						defineField({
							name: "backgroundImage",
							title: "Background Image",
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
									validation: (Rule) => Rule.required(),
								}),
							],
						}),
						defineField({
							name: "sections",
							title: "Body",
							type: "array",
							of: [
								{ type: "countdown" },
								{ type: "events" },
								{ type: "products" },
							],
						}),
					],
					preview: {
						select: {
							media: "backgroundImage",
						},
						prepare(selection) {
							const { media } = selection;
							return {
								title: "Actions Wrapper",
								media,
							};
						},
					},
				}),
				{ type: "brandsCallout" },
				{ type: "countdown" },
				{ type: "events" },
				{ type: "marquee" },
				{ type: "newsletter" },
				{ type: "products" },
				{ type: "textCallout" },
			],
		}),
		// Divider
		defineField({
			name: "divider",
			title: "Divider",
			type: "object",
			fields: [
				defineField({
					name: "backgroundImage",
					title: "Background Image",
					type: "image",
					validation: (Rule) => Rule.required(),
				}),
			],
		}),

		// Final Callout
		defineField({
			name: "finalCallout",
			title: "Final Callout",
			type: "object",
			fields: [
				defineField({
					name: "backgroundImage",
					title: "Background Image",
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
							validation: (Rule) => Rule.required(),
						}),
					],
				}),
				defineField({
					name: "kicker",
					title: "Kicker",
					type: "string",
				}),
				defineField({
					name: "headline",
					title: "Headline",
					type: "text",
					rows: 2,
				}),
				defineField({
					name: "body",
					title: "Body Text",
					type: "blockContent",
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
				title: title || "Home Page",
				media,
			};
		},
	},
});
