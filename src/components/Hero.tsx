// components/HeroSection.jsx

import type { SanityImageAsset } from "@types";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { spacing, typography } from "@/styles/design-tokens";
import { ChunkyBlockContent } from "./inputs/PortableTextComponents";
import Button from "./inputs/Button";
import Video from "./inputs/Video";

export type SimpleBlockContent = Array<{
	children?: Array<{
		marks?: Array<string>;
		text?: string;
		_type: "span";
		_key: string;
	}>;
	style?: "normal" | "k1" | "k2" | "large" | "small";
	listItem?: "bullet" | "number";
	markDefs?: Array<{
		href?: string;
		_type: "link";
		_key: string;
	}>;
	level?: number;
	_type: "block";
	_key: string;
}>;

interface HeroSectionProps {
	style?: string;
	headline1: string;
	headline2?: string;
	subheadline?: string;
	body?: SimpleBlockContent;
	backgroundImage?: SanityImageAsset;
}

export default function HeroSection({
	headline1,
	headline2,
	subheadline,
	backgroundImage,
	buttons,
	style,
	playbackId,
	kicker
}: HeroSectionProps) {
	if (!headline1 && !headline2 && !backgroundImage && !playbackId) return null;

	return (
		<section className={`${spacing.section} ${style === "landing" ? "" : "flex flex-col items-center justify-center"} min-h-svh relative !pt-28 sm:!pt-40`}>
			<div className={`${spacing.container} relative z-20`}>
				<div className="text-block w-full flex flex-col items-center justify-center text-center">
					{kicker && (
						<h6 
							className={`${typography.h4}  ${typography.blockLarge} text-cream mb-4`}>
							{kicker}
						</h6>
					)}
					{headline1 && (
						<h1 
							className={`
								${style === "landing" ? `${typography.h2} rotate-2 text-pink` : `${typography.h2} text-blue`}  ${typography.blockLarge} 
						`}>
							{headline1}
						</h1>
					)}
					{headline2 && (
						<h2 
							className={`
								${style === "landing" ? `${typography.h2} -rotate-2` : typography.h2} ${typography.blockLarge} text-olive
							`}>
							{headline2}
						</h2>
					)}
					{subheadline && (
						<ChunkyBlockContent
							value={subheadline}
							classes="mt-6 space-y-2"
						/>
					)}
				</div>

				{Array.isArray(buttons) && buttons.length > 0 && (
					<div className="flex flex-col gap-4 items-center justify-center md:flex-row md:flex-wrap">
						{buttons.map((btn) => (<Button key={btn._key} {...(btn)} />))}
					</div>
				)}
			</div>

			{backgroundImage && !playbackId && (
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

			{
				playbackId && 
				<Video
					playbackId={playbackId}
					alt="Reel of some of our favorite projects"
					classes="absolute inset-0 z-10"
				/>
			}

			{style === "landing" && 
				<div className="absolute bottom-0 left-0 w-full z-10 h-12 sm:h-20 md:h-24">
					<Image
						src="/wave.png"
						fill
						alt=""
						className="object-bottom-center object-cover"
					/>
				</div>
			}
		</section>
	);
}
