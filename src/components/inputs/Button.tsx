"use client";
import Link from "next/link";
import { buttons } from "@/styles/design-tokens";
import { ReactNode } from "react";
import clsx from "clsx";

interface ButtonProps {
  text?: string;
  url: string;
  style?: "primary" | "secondary" | "gradient";
  children?: ReactNode;
  classes?: string;
}

export default function Button({ text, url, style = "primary", children, classes }: ButtonProps) {
  // Bail only if we have no content OR no url
  if ((!text && !children) || !url) return null;

  const styles = {
    primary: buttons.primary,
    secondary: buttons.secondary,
    gradient: buttons.gradient,
  };

  const className = clsx(styles[style], classes);
  const content = children ?? text;

  // Internal link
  if (url.startsWith("/")) {
    return (
      <Link href={url} className={className}>
        {content}
      </Link>
    );
  }

  // Anchor link
  if (url.startsWith("#")) {
    return (
      <a href={url} className={className}>
        {content}
      </a>
    );
  }

  // Email link
  if (url.startsWith("mailto:") || url.includes("@")) {
    const email = url.startsWith("mailto:") ? url : `mailto:${url}`;
    return (
      <a href={email} className={className}>
        {content}
      </a>
    );
  }

  // Telephone link
  if (url.startsWith("tel:")) {
    return (
      <a href={url} className={className}>
        {content}
      </a>
    );
  }

  // External link
  if (url.startsWith("http")) {
    return (
      <a href={url} target="_blank" rel="noopener noreferrer" className={className}>
        {content}
      </a>
    );
  }

  // Fallback: just render a span (invalid URL)
  return <span className={className}>{content}</span>;
}
