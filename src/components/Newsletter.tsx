// components/NewsletterSection.jsx
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image"
import { spacing } from "@/styles/design-tokens";

export default function NewsletterSection({
  backgroundColor,
  title,
  buttonText
}) {

  return (
    <section className={`${spacing.section} ${backgroundColor ? backgroundColor : 'bg-gradient-blue-cream'}`}>
      <div className={spacing.container}>
        {title && (
          <p className="font-display uppercase text-left text-2xl sm:text-center sm:text-3xl md:text-4xl xl:text-5xl">
            {title}
          </p>
        )}
      </div>
    </section>
  );
}
