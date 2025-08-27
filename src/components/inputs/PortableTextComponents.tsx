import { PortableTextComponents } from "next-sanity";
import { PortableText } from "@portabletext/react";
import type { BlockContent as BlockContentType } from "@types";
import { typography } from "@/styles/design-tokens";


const blockContentComponents: PortableTextComponents = {
  block: {
    h5: ({ children }) => (
      <h5 className={`${typography.h5}`}>{children}</h5>
    ),
    h6: ({ children }) => (
      <h6 className={`${typography.h6}`}>{children}</h6>
    ),
    normal: ({ children }) => (
      <p className={`${typography.bodyLarge}`}>{children}</p>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="text-block-list list-disc w-full max-w-7xl">
        <span>{children}</span>
      </ul>
    ),
  },
  marks: {
    link: ({ children, value }) => (
      <a
        href={value?.href}
        className="underline hover:italic"
        target="_blank"
      >
        {children}
      </a>
    ),
    strong: ({ children }) => (
      <strong className="!font-bold">{children}</strong>
    ),
    em: ({ children }) => <em className="italic">{children}</em>,
  },
};

export const BlockContent = ({ value, classes }: { value: BlockContentType, classes: string}) => {
  return <div className={classes}><PortableText value={value} components={blockContentComponents} /></div>;
};

const chunkyBlockContentComponents: PortableTextComponents = {
  block: {
    h5: ({ children }) => (
      <h5 className={`${typography.h4} ${typography.blockSmall} text-blue`}>{children}</h5>
    ),
    h6: ({ children }) => (
      <h6 className={`${typography.h5} ${typography.blockSmall} text-olive`}>{children}</h6>
    ),
    normal: ({ children }) => (
      <p className={`${typography.h5} ${typography.blockSmall} text-cream`}>{children}</p>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="text-block-list list-disc w-full max-w-7xl">
        <span>{children}</span>
      </ul>
    ),
  },
  marks: {
    link: ({ children, value }) => (
      <a
        href={value?.href}
        className="underline hover:italic"
        target="_blank"
      >
        {children}
      </a>
    ),
    strong: ({ children }) => (
      <strong className="!font-bold">{children}</strong>
    ),
    em: ({ children }) => <em className="italic">{children}</em>,
  },
};

export const ChunkyBlockContent = ({ value, classes }: { value: BlockContentType, classes: string}) => {
  return <div className={classes}><PortableText value={value} components={chunkyBlockContentComponents} /></div>;
};
