"use client";

import type { ImageCallout as ImageCalloutType } from "@types";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

export default function ImageCallout(props: ImageCalloutType) {
	const { backgroundImage, foregroundImage } = props;

	if (!foregroundImage) return null;

	return (
		<section className={`relative scroll-mt-2 ${backgroundImage?.asset?._ref ? "p-4 border-b-4 sm:p-6 md:p-8 lg:p-20" : ""}`}>
			<div className={`relative z-20 w-full ${backgroundImage?.asset?._ref ? "border-4" : "border-b-4"}`}>
				{foregroundImage && (
					<Image
						src={urlFor(foregroundImage).url()}
						alt={foregroundImage?.alt || "Callout image"}
						width={1600}
						height={1200}
						priority
						className="block h-auto w-full"
					/>
				)}
			</div>

			{backgroundImage && (
				<div className="absolute inset-0 z-10">
					<Image
						src={urlFor(backgroundImage).url()}
						alt={backgroundImage?.alt || "Background image"}
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
