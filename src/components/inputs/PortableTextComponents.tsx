import { PortableText } from "@portabletext/react";
import type { BlockContent as BlockContentType } from "@types";
import type { PortableTextComponents } from "next-sanity";
import { typography } from "@/styles/design-tokens";

const blockContentComponents: PortableTextComponents = {
	block: {
		h5: ({ children }) => <h5 className={`${typography.h5}`}>{children}</h5>,
		h6: ({ children }) => <h6 className={`${typography.h6}`}>{children}</h6>,
		normal: ({ children }) => (
			<p className={`${typography.bodyLarge}`}>{children}</p>
		),
	},
	list: {
		bullet: ({ children }) => (
			<ul className={`${typography.bodyLarge} text-block-list list-disc w-full max-w-7xl pl-5 space-y-1 mt-2`}>
				<span>{children}</span>
			</ul>
		),
	},
	marks: {
		link: ({ children, value }) => (
			<a href={value?.href} className={typography.link} target="_blank">
				{children}
			</a>
		),
		strong: ({ children }) => (
			<strong className="!font-bold">{children}</strong>
		),
		em: ({ children }) => <em className="italic">{children}</em>,
	},
};

export const BlockContent = ({
	value,
	classes,
}: {
	value: BlockContentType;
	classes?: string;
}) => {
	return (
		<div className={`space-y-3 ${classes}`}>
			<PortableText value={value} components={blockContentComponents} />
		</div>
	);
};

const chunkyBlockContentComponents: PortableTextComponents = {
	block: {
		h5: ({ children }) => (
			<h5 className={`${typography.h4} ${typography.blockSmall} text-blue mt-4`}>
				{children}
			</h5>
		),
		h6: ({ children }) => (
			<h6 className={`${typography.h5} ${typography.blockSmall} text-olive mt-4`}>
				{children}
			</h6>
		),
		normal: ({ children }) => (
			<p className={`${typography.h5} ${typography.blockSmall} text-cream`}>
				{children}
			</p>
		),
	},
	list: {
		bullet: ({ children }) => (
			<ul className={`${typography.body} text-block-list list-disc w-full max-w-7xl pl-5 space-y-1 mt-2`}>
				<span>{children}</span>
			</ul>
		),
	},
	marks: {
		link: ({ children, value }) => (
			<a href={value?.href} className={typography.link} target="_blank">
				{children}
			</a>
		),
		strong: ({ children }) => (
			<strong className="!font-bold">{children}</strong>
		),
		em: ({ children }) => <em className="italic">{children}</em>,
	},
};

export const ChunkyBlockContent = ({
	value,
	classes,
}: {
	value: BlockContentType;
	classes: string;
}) => {
	return (
		<div className={`space-y-3 ${classes}`}>
			<PortableText value={value} components={chunkyBlockContentComponents} />
		</div>
	);
};

const legalBlockContentComponents: PortableTextComponents = {
	block: {
		h5: ({ children }) => <h5 className={`${typography.h5} mt-4`}>{children}</h5>,
		h6: ({ children }) => <h6 className={`${typography.h6} mt-4`}>{children}</h6>,
		normal: ({ children }) => (
			<p className={`${typography.bodySmall}`}>{children}</p>
		),
	},
	list: {
		bullet: ({ children }) => (
			<ul className={`${typography.bodySmall} text-block-list list-disc w-full max-w-7xl pl-5 space-y-1 mt-2`}>
				{children}
			</ul>
		),
	},
	marks: {
		link: ({ children, value }) => (
			<a href={value?.href} className={typography.link} target="_blank">
				{children}
			</a>
		),
		strong: ({ children }) => (
			<strong className="!font-bold">{children}</strong>
		),
		em: ({ children }) => <em className="italic">{children}</em>,
	},
};

export const LegalBlockContent = ({
	value,
	classes,
}: {
	value: BlockContentType;
	classes?: string;
}) => {
	return (
		<div className={`space-y-3 max-w-2xl mx-auto ${classes}`}>
			<PortableText value={value} components={legalBlockContentComponents} />
		</div>
	);
};
