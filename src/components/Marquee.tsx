import FastScroll from "react-fast-marquee";
import { typography } from "@/styles/design-tokens";

export default function Marquee(module) {
  if (!module.text) return null
  const textClass = `${typography.h3} ${typography.blockLarge} text-cream max-w-[1728px] mx-auto px-4`

  return (
    <FastScroll speed={60} autoFill={true} className="bg-olive border-4 border-b-0 py-6 flex items-center">
      <span className={textClass}>{module.text}</span>
      <span className={textClass}>*</span>
    </FastScroll>
  );
}
