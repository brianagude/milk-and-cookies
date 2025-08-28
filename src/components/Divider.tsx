// components/HeroSection.jsx

import type { SanityImageAsset } from "@types";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

interface DividerProps {
	backgroundImage?: SanityImageAsset;
}

export default function Divider({ backgroundImage }: DividerProps) {
	// If no main content provided, render nothing
	if (!backgroundImage) return null;

	return (
		// <div className="w-full z-10 h-12 sm:h-20 md:h-24">
		<Image
			src={urlFor(backgroundImage).url()}
			width={1728}
			height={176}
			alt="decorative banner"
			className="object-cover border-b-4 border-black"
		/>
		// </div>
	);
}
