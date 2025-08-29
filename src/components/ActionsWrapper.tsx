import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { spacing } from "@/styles/design-tokens";
import Countdown from "./Countdown";
import Events from "./Events";
import Products from "./Products";

export default function ActionsWrapper(module) {
	const { backgroundImage, sections } = module;

	return (
		<section className={spacing.section}>
			{sections && (
				<div
					className={`${spacing.container} relative z-20 !space-y-16 md:!space-y-20`}
				>
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
