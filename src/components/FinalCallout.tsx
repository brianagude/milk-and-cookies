// components/FinalCallout.jsx
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image"
import { spacing } from "@/styles/design-tokens";

export default function FinalCallout({
  kicker,
  subtitle,
  title,
  backgroundImage,
}) {

  return (
    <section className={spacing.section}>
      <div className={`${spacing.container} relative z-20`}>
        <div className="text-block w-full text-center space-y-6 md:space-y-9">
          {kicker && (
            <h6 className="text-stroke text-shadow-sm uppercase font-sans font-bold text-cream text-2xl sm:text-3xl md:text-4xl">
              {kicker}
            </h6>
          )}
          {title && (
            <h2 className="text-stroke text-shadow-lg uppercase font-display text-pink text-4xl sm:text-4xl lg:text-5xl xl:text-7xl">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="text-stroke text-shadow-sm uppercase font-sans font-bold text-blue text-2xl sm:text-3xl md:text-4xl">
              {subtitle}
            </p>
          )}
        </div>
        {/* <div className="absolute bottom-0 left-0 w-full z-10 h-20 sm:h-28 md:h-[336px]">
          <Image
            src="/splash.png"
            fill
            alt=""
            className="object-bottom-center object-cover"
          />
        </div> */}
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
{/* 
      <div className="absolute bottom-0 left-0 w-full z-10 h-20 sm:h-28 md:h-[336px]">
        <Image
          src="/splash.png"
          fill
          alt=""
          className="object-bottom-center object-cover"
        />
      </div> */}
    </section>
  );
}
