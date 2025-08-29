"use client";

import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { spacing } from "@/styles/design-tokens";
import Countdown from "./Countdown";
import Events from "./Events";
import Products from "./Products";
import type { Countdown as CountdownType } from "@types";
import type { Events as EventsType } from "@types";
import type { Products as ProductsType } from "@types";
import type { ExpandedSanityImage } from "@/sanity/lib/types";

// Extend types to include _key and make optional fields required for props
type CountdownSection = CountdownType & { _key: string; countdownDate: string };
type EventsSection = EventsType & { _key: string };
type ProductsSection = ProductsType & { _key: string };

type Section = CountdownSection | EventsSection | ProductsSection;

type ActionsWrapperType = {
  _type: "actionsWrapper";
  backgroundImage?: ExpandedSanityImage;
  sections?: Section[];
};

export default function ActionsWrapper({ backgroundImage, sections }: ActionsWrapperType) {
	if (!sections || sections.length === 0) return null;

	return (
		<section className={spacing.section}>
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

			{backgroundImage?.asset?._ref && (
				<div className="absolute inset-0 z-10">
					<Image
						src={urlFor(backgroundImage).url()}
						alt={backgroundImage.alt || "Background image"}
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
