import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";
import { BlockContent } from "./inputs/PortableTextComponents";
import Button from "./inputs/Button";
import { typography } from "@/styles/design-tokens";

export default function BrandsCallout(module) {
  const { backgroundImage, button, headline, subheadline, brands} = module
  if (!headline && !subheadline && !button && !backgroundImage && !brands) return null;

  return (
    <section
      className="relative scroll-mt-2 max-w-[1728px] mx-auto border-4 border-b-0 p-4 sm:p-6 md:p-8 lg:p-20"
      id="brands-callout"
    >
      <div className="relative z-20 bg-white w-full flex items-center justify-center flex-col gap-12 border-4 px-4 py-16 sm:px-6 md:py-20 md:px-8">
        {(headline || subheadline) && 
          <div className="text-block w-full space-y-4 sm:text-center sm:space-y-6">
            {headline && (
              <h2 className={typography.h3}>{headline}</h2>
            )}
            {subheadline && (
              <BlockContent
                value={subheadline}
                classes=""
              />
            )}
          </div>
        }

        {Array.isArray(brands) && brands.length > 0 && (
          <div className="flex flex-wrap items-center justify-center gap-8 max-w-5xl mx-auto md:gap-12">
            {brands.map((brand) => {
              const content = <>
                <Image src={urlFor(brand.logo).url()} alt={brand.logo.alt} width={250} height={40} className="h-10 w-auto"/>
              </>
              return (
                brand.link ? <Link key={brand._key} href={brand.link}>{content}</Link> : <div key={brand._key}>{content}</div>
              );
            })}
          </div>
        )}

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
