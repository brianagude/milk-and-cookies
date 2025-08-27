import Image from "next/image";
import { typography } from "@/styles/design-tokens";
import { urlFor } from "@/sanity/lib/image";
import { BlockContent } from "./inputs/PortableTextComponents";
import Button from "./inputs/Button";

export default function TextCallout(module) {
  const { backgroundImage, button, headline, subheadline} = module
  if (!headline && !subheadline && !button && !backgroundImage) return null;

  return (
    <section
      className="relative scroll-mt-2 max-w-[1728px] mx-auto border-4 border-b-0 p-4 sm:p-6 md:p-8 lg:p-20"
    >
      <div className="relative z-20 bg-white w-full flex items-center justify-center flex-col gap-12 border-4 px-4 py-16 sm:px-6 md:py-20 md:px-8">
        {(headline || subheadline) && 
          <div className="text-block w-full space-y-4 sm:space-y-6 lg:space-y-10">
            {headline && (
              <h2 className={`${typography.h3} sm:text-center`}>{headline}</h2>
            )}
            {subheadline && (
              <BlockContent
                value={subheadline}
                classes="sm:columns-2"
              />
            )}
          </div>
        }

        {button && <Button key={button._key} {...(button)} />}
      </div>

      {backgroundImage && (
        <div className="absolute inset-0 z-10">
          <Image
            src={urlFor(backgroundImage).url()}
            alt={backgroundImage.altText || "Crowd at Milk & Cookies Fest"}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/10" />
        </div>
      )}
    </section>
  );
}
