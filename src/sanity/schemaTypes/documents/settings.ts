import { defineArrayMember, defineField, defineType } from "sanity";

export const settings = defineType({
	name: "settings",
	title: "Settings",
	type: "document",
	fields: [
		// Header Settings
		defineField({
			name: "header",
			title: "Header",
			type: "object",
			fields: [
				defineField({
					name: "logo",
					title: "Logo",
					type: "image",
				}),
				defineField({
					name: "button",
					title: "Button",
					type: "object",
					fields: [
						defineField({
							name: "text",
							title: "Button Text",
							type: "string",
							validation: (Rule) => Rule.required(),
						}),
						defineField({
							name: "link",
							title: "Button Link",
							type: "url",
							validation: (Rule) => Rule.required(),
						}),
					],
				}),
			],
		}),

		// Footer Settings
		defineField({
			name: "footer",
			title: "Footer",
			type: "object",
			fields: [
				defineField({
					name: "logo",
					title: "Logo",
					type: "image",
				}),
				defineField({
					name: "subtext",
					title: "Logo Subtext",
					type: "text",
					rows: 3,
				}),
				defineField({
					name: "email",
					title: "Email",
					type: "string",
					validation: (Rule) => Rule.email(),
				}),
				defineField({
					name: "socialLinks",
					title: "Social Links",
					type: "array",
					of: [
						defineArrayMember({
							type: "object",
							fields: [
								defineField({
									name: "platform",
									title: "Platform",
									type: "string",
									options: {
										list: [
											{ title: "Instagram", value: "instagram" },
											{ title: "Vimeo", value: "vimeo" },
											{ title: "Facebook", value: "facebook" },
											{ title: "Twitter", value: "twitter" },
											{ title: "LinkedIn", value: "linkedin" },
											{ title: "YouTube", value: "youtube" },
											{ title: "TikTok", value: "tiktok" },
										],
									},
									validation: (Rule) => Rule.required(),
								}),
								defineField({
									name: "url",
									title: "URL",
									type: "url",
									validation: (Rule) => Rule.required(),
								}),
							],
							preview: {
								select: {
									title: "platform",
									subtitle: "url",
								},
							},
						}),
					],
				}),
				defineField({
					name: "linkList",
					title: "Link List",
					type: "array",
					of: [
						defineArrayMember({
							type: "object",
							fields: [
								defineField({
									name: "text",
									title: "Link Text",
									type: "string",
									validation: (Rule) => Rule.required(),
								}),
								defineField({
									name: "url",
									title: "URL",
									type: "url",
									validation: (Rule) => Rule.required(),
								}),
							],
							preview: {
								select: {
									title: "text",
									subtitle: "url",
								},
							},
						}),
					],
				}),
				defineField({
					name: "copyrightText",
					title: "Copyright Text",
					type: "string",
				}),
			],
		}),
		defineField({
			name: "privacy",
			title: "Privacy Policy",
			type: "blockContent",
			validation: (Rule) => Rule.required(),
		})
	],
	preview: {
		select: {
			title: "title",
		},
		prepare() {
			return {
				title: "Site Settings",
			};
		},
	},
});
