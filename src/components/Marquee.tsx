import FastScroll from "react-fast-marquee";
import { typography } from "@/styles/design-tokens";
import type { Marquee as MarqueeType } from "@types"

export default function Marquee(props: MarqueeType) {
	if (!props.text) return null;
	const textClass = `${typography.h3} ${typography.blockLarge} text-cream px-4`;

	return (
		<FastScroll
			speed={60}
			autoFill={true}
			className="bg-olive py-6 flex items-center border-b-4"
		>
			<span className={textClass}>{props.text}</span>
			<span className={textClass}>*</span>
		</FastScroll>
	);
}
