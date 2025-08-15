// components/FinalCallout.jsx
"use client"
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image"
import { spacing } from "@/styles/design-tokens";
import { useGlobalData } from "./GlobalDataContext";
import { SanityImageAsset } from "@types"

interface FinalCalloutProps {
  kicker: string;
  subtitle?: string;
  title?: string;
  backgroundImage?: SanityImageAsset,
}

export default function FinalCallout({
  kicker,
  subtitle,
  title,
  backgroundImage,
}: FinalCalloutProps) {
  const { footer } = useGlobalData();
  const year = new Date().getFullYear()
  const logoUrl = footer.logo ? urlFor(footer.logo).url() : '/logo-footer.svg'

  return (
    <>
      <section className="relative scroll-mt-2 pt-28 max-w-[1728px] mx-auto border-l-4 border-r-4 sm:pt-40">
        <div className={`${spacing.container} flex-col items-center relative z-20 pb-10`}>
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
          <div className="text-cream text-center space-y-8 mt-40">
            <Image src={logoUrl} width={280} height={120} alt="milk and cookies logo" priority className="mx-auto" />
            <div className="space-y-3">
              {footer.subtext && <p className="sm:text-xl">{footer.subtext}</p>}
              {footer.email && <a href={`mailto:${footer.email}`} className="hover:text-blue sm:text-xl">{footer.email}</a>}
            </div>
          </div>
          { footer.socialLinks && footer.socialLinks.length > 0 &&
            <ul className="flex gap-4 items-center justify-center w-fit flex-wrap text-cream">
              {footer.socialLinks.map(
                ({ _key, url, platform }: { _key: string; url: string; platform: string }) => (
                  <li key={_key}>
                    <a href={url}>
                      <Image
                        src={`/${platform}.svg`}
                        alt={platform}
                        width={24}
                        height={24}
                      />
                    </a>
                  </li>
                )
              )}
            </ul>
          }
        </div>

        <Image
          src="/splash.png"
          width={1728}
          height={336}
          alt="milk and cookies logo"
          className="object-bottom-center object-cover relative z-20"
        />
        {backgroundImage && (
          <div className="absolute inset-0 z-10">
            <Image
              src={urlFor(backgroundImage).url()}
              alt={backgroundImage.altText || "Crowd at Milk & Cookies Fest"}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/20" />
          </div>
        )}
      </section>
      <footer className="py-3 bg-cream max-w-[1728px] border-4 border-t-0 mx-auto">
        <div className="w-full px-4 flex flex-col items-center justify-center text-center gap-3 sm:flex-row sm:justify-between">
          <p>&copy;{year} {footer.copyrightText && footer.copyrightText}</p>
          { footer.linkList && footer.linkList.length > 0 &&
            <ul className="flex gap-4 items-center justify-center w-fit flex-wrap">
              {footer.linkList.map(
                ({ _key, url, text }: { _key: string; url: string; text: string }) => (
                  <li key={_key}>
                    <a href={url}>
                      {text}
                    </a>
                  </li>
                )
              )}

            </ul>
          }
        </div>
      </footer>
    </>
  );
}
