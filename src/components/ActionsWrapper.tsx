import type { SanityImageAsset } from "@types";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Countdown from "./Countdown";
import Events from "./Events";
import Products from "./Products";
import Video from "./inputs/Video";
import { spacing } from "@/styles/design-tokens";

export default function ActionsWrapper(module) {
  const { backgroundImage, sections, backgroundVideo } = module
  // console.log(module)

  return (
    <section className={spacing.section}>
      {/* <div className={`relative z-20 ${spacing.container}`}> */}
        {sections && (
          <div className={`${spacing.container} relative z-20 !space-y-16 md:!space-y-20`}>
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
      {/* </div> */}

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
