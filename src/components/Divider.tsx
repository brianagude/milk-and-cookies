// components/HeroSection.jsx

import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

interface DividerProps {
	backgroundImage?: SanityImageSource;
}

export default function Divider({ backgroundImage }: DividerProps) {
	// If no main content provided, render nothing
	if (!backgroundImage) return null;

	return (
		<Image
			src={urlFor(backgroundImage).url()}
			width={1728}
			height={176}
			alt="decorative banner"
			className="object-cover border-b-4 border-black"
		/>
	);
}
