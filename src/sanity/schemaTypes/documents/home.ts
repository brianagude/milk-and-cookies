import { defineField, defineType } from "sanity";
import { buttonFields } from "../inputs/button";

export const home = defineType({
	name: "home",
	title: "Home Page",
	type: "document",
	groups: [
		{ name: "content", title: "Content", default: true },
		{ name: "media", title: "Media" },
	],
	fields: [
		defineField({
			name: "hero",
			title: "Hero Section",
			description: "The main intro area for the homepage.",
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
			name: "sections",
			title: "Page Sections",
			description: "Add and reorder the content modules that appear below the hero.",
			type: "array",
			group: "content",
			of: [
				defineField({
					name: "actionsWrapper",
					title: "Actions Wrapper",
					description: "A collection of promotional blocks shown together.",
					type: "object",
					fields: [
						defineField({
							name: "backgroundImage",
							title: "Background Image",
							description: "Image that sits behind the wrapped content area.",
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
							name: "sections",
							title: "Body",
							description: "Choose the individual modules to appear inside this wrapper.",
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
				{ type: "imageCallout" },
				{ type: "textCallout" },
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
					name: "headline",
					title: "Headline",
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
				title: title || "Home Page",
				media,
			};
		},
	},
});
