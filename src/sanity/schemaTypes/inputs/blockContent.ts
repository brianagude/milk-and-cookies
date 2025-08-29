import { defineType, defineArrayMember } from "sanity";

export const blockContent = defineType({
	title: "Block Content",
	name: "blockContent",
	type: "array",
	of: [
		defineArrayMember({
			title: "Block",
			type: "block",
			styles: [
				{ title: "Normal", value: "normal" },
				{ title: "H5", value: "h5" },
				{ title: "H6", value: "h6" },
			],
			lists: [{ title: "Bullet", value: "bullet" }],
			marks: {
				decorators: [
					{ title: "Bold", value: "strong" },
					{ title: "Italic", value: "em" },
				],
				annotations: [
					{
						title: "Link",
						name: "link",
						type: "object",
						fields: [
							{
								title: "Href",
								name: "href",
								type: "string",
								description: "Can be a URL (https://...), email (mailto:...), or phone (tel:...)",
								validation: (Rule) => Rule.uri({
									allowRelative: false,
									scheme: ['http', 'https', 'mailto', 'tel']
								})
							}
						]
					}
				],
			},
		}),
	],
});
