// components/HeroSection.jsx
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image"
import { spacing } from "@/styles/design-tokens";

export default function HeroSection({
  headline1,
  headline2,
  subheadline1,
  subheadline2,
  backgroundImage,
}) {
  // If no main content provided, render nothing
  if (!headline1 && !headline2 && !subheadline1 && !subheadline2) return null;

  return (
    <section className={`${spacing.section} min-h-svh !pt-28 sm:!pt-32 relative`}>
      <div className={`${spacing.container} relative z-20`}>
        <div className="text-block w-full flex flex-col items-center justify-center text-center">
          {headline1 && (
            <h1 className="text-stroke text-shadow-lg text-pink font-bold leading-[1.33] tracking-wider uppercase font-display rotate-2 text-4xl sm:text-5xl md:text-6xl xl:text-8xl">
              {headline1}
            </h1>
          )}
          {headline2 && (
            <h2 className="text-stroke text-shadow-lg text-olive font-bold leading-[1.33] tracking-wider uppercase font-display -rotate-2 text-4xl sm:text-5xl md:text-6xl xl:text-8xl">
              {headline2}
            </h2>
          )}
          {subheadline1 && (
            <h3 className="text-stroke text-shadow-sm mt-3 text-blue font-bold leading-[1.33] tracking-wider uppercase font-sans text-xl sm:text-3xl xl:text-5xl">
              {subheadline1}
            </h3>
          )}
          {subheadline2 && (
            <h4 className="text-stroke text-shadow-sm mt-2 text-cream font-bold leading-[1.33] tracking-wider uppercase font-sans text-lg sm:text-2xl xl:text-3xl">
              {subheadline2}
            </h4>
          )}
        </div>
      </div>

      {backgroundImage && (
        <div className="absolute inset-0 z-10">
          <Image
            src={urlFor(backgroundImage).url()}
            alt={backgroundImage.alt || "Crowd at Milk & Cookies Fest"}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/10" />
        </div>
      )}

      <div className="absolute bottom-0 left-0 w-full z-10 h-12 sm:h-20 md:h-24">
        <Image
          src="/wave.png"
          fill
          alt=""
          className="object-bottom-center object-cover"
        />
      </div>
    </section>
  );
}
