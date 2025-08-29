"use client";

import type { TextCallout as TextCalloutType } from "@types";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { typography } from "@/styles/design-tokens";
import Button from "./inputs/Button";
import { BlockContent } from "./inputs/PortableTextComponents";

export default function TextCallout(props: TextCalloutType) {
	const { backgroundImage, button, headline, subheadline } = props;

	// Nothing to render
	if (!headline && !subheadline && !button && !backgroundImage) return null;

	return (
		<section className="relative scroll-mt-2 p-4 border-b-4 sm:p-6 md:p-8 lg:p-20">
			<div className="relative z-20 bg-white w-full flex items-center justify-center flex-col gap-12 border-4 px-4 py-16 sm:px-6 md:py-20 md:px-8">
				{(headline || subheadline) && (
					<div className="text-block w-full space-y-4 sm:space-y-6 lg:space-y-10">
						{headline && (
							<h2 className={`${typography.h3} sm:text-center`}>{headline}</h2>
						)}
						{subheadline && subheadline.length > 0 && (
							<BlockContent value={subheadline} classes="lg:columns-2" />
						)}
					</div>
				)}

				{button?.text && button?.url && (
					<Button
						text={button.text}
						url={button.url}
						style={button.style || "primary"}
					/>
				)}
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
