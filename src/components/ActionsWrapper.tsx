import type { SanityImageAsset } from "@types";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Countdown from "./Countdown";
import Events from "./Events";
import Products from "./Products";

export default function ActionsWrapper(module) {
  const {backgroundImage, sections} = module

  return (
    <section className="relative scroll-mt-2 max-w-[1728px] mx-auto border-4 border-b-0">
      <div className="relative z-20">
        {sections && (
          <div className="section-wrapper">
            {sections.map((section) => {
              switch (section._type) {
                case "countdown":
                  return <Countdown {...section} key={section._key} />;
                case "events":
                  return <Events {...section} key={section._key} />;
                case "products":
                  return <Products {...section} key={section._key} />;
                default:
                  return null;
              }
            })}
          </div>
        )}
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
