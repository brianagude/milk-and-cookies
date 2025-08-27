import { PortableTextComponents } from "next-sanity";
import { PortableText } from "@portabletext/react";
import type { BlockContent as BlockContentType } from "@types";


const blockContentComponents: PortableTextComponents = {
  block: {
    h5: ({ children }) => (
      <h5 className="text-pretty max-w-[60ch] mx-auto text-stroke text-shadow-sm mt-2 text-olive font-bold leading-[1.33] tracking-wider uppercase font-sans text-xl sm:text-2xl xl:text-3xl">{children}</h5>
    ),
    h6: ({ children }) => (
      <h6 className="text-pretty max-w-[60ch] mx-auto text-stroke text-shadow-sm mt-2 text-cream font-bold leading-[1.33] tracking-wider uppercase font-sans text-lg sm:text-2xl xl:text-3xl">{children}</h6>
    ),
    normal: ({ children }) => (
      <p className="text-pretty max-w-[60ch] mx-auto text-lg sm:text-xl lg:text-2xl">{children}</p>
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
