// components/FinalCallout.jsx
"use client";

import type { SanityImageAsset } from "@types";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { spacing, typography } from "@/styles/design-tokens";
import { useGlobalData } from "./GlobalDataContext";

interface FinalCalloutProps {
	kicker?: string;
	subtitle?: string;
	title?: string;
	backgroundImage?: SanityImageAsset;
}

export default function FinalCallout({
	kicker,
	subtitle,
	title,
	backgroundImage,
}: FinalCalloutProps) {
	const { footer } = useGlobalData();
	const year = new Date().getFullYear();
	const logoUrl = footer.logo ? urlFor(footer.logo).url() : "/logo-footer.svg";

	return (
		<>
			<section className="relative scroll-mt-2 pt-28 sm:pt-40">
				<div
					className={`${spacing.container} flex-col items-center relative z-20 pb-10`}
				>
					{(kicker || title || subtitle) && (
						<div className="text-block w-full text-center space-y-6 mb-40 md:space-y-9">
							{kicker && (
								<h4
									className={`${typography.h4} ${typography.blockSmall} text-cream`}
								>
									{kicker}
								</h4>
							)}
							{title && (
								<h2
									className={`${typography.h2} ${typography.blockLarge} text-pink`}
								>
									{title}
								</h2>
							)}
							{subtitle && (
								<p
									className={`${typography.h4} ${typography.blockSmall} text-blue`}
								>
									{subtitle}
								</p>
							)}
						</div>
					)}

					{(logoUrl || footer) && (
						<div className="text-cream text-center space-y-8">
							<Image
								src={logoUrl}
								width={280}
								height={120}
								alt="milk and cookies logo"
								priority
								className="mx-auto"
							/>

							{(footer.subtext || footer.email) && (
								<div className="space-y-3">
									{footer.subtext && (
										<p className={typography.body}>{footer.subtext}</p>
									)}
									{footer.email && (
										<a
											href={`mailto:${footer.email}`}
											className={`${typography.body} hover:text-pink underline hyphens-auto`}
										>
											{footer.email}
										</a>
									)}
								</div>
							)}
						</div>
					)}

					{footer.socialLinks && footer.socialLinks.length > 0 && (
						<ul className="flex gap-4 items-center justify-center w-fit flex-wrap text-cream">
							{footer.socialLinks.map(({ _key, url, platform }) => (
								<li key={_key}>
									<a href={url}>
										<Image
											src={`/${platform}.svg`}
											alt={platform || "social icon"}
											width={24}
											height={24}
											className="hover:-translate-y-1 transition-transform"
										/>
									</a>
								</li>
							))}
						</ul>
					)}
				</div>

				<Image
					src="/splash.png"
					width={1728}
					height={336}
					alt="milk and cookies logo"
					className="object-bottom-center object-cover relative z-20"
				/>
				{backgroundImage && (
					<div className="absolute inset-0 z-10">
						<Image
							src={urlFor(backgroundImage).url()}
							alt={backgroundImage.altText || "Crowd at Milk & Cookies Fest"}
							fill
							className="object-cover"
							priority
						/>
						<div className="absolute inset-0 bg-black/50" />
					</div>
				)}
			</section>
			<footer className="py-3 bg-cream">
				<div className="w-full px-4 flex flex-col items-center justify-center text-center gap-3 sm:flex-row sm:justify-between">
					<p className={`${typography.body} sm:ml-0`}>
						&copy;{year} {footer.copyrightText && footer.copyrightText}
					</p>
					{footer.linkList && footer.linkList.length > 0 && (
						<ul className="flex gap-4 items-center justify-center w-fit flex-wrap">
							{footer.linkList.map(({ _key, url, text }) => (
								<li key={_key}>
									<a
										href={url}
										className={`${typography.body} hyphens-auto hover:text-pink underline`}
									>
										{text}
									</a>
								</li>
							))}
						</ul>
					)}
				</div>
			</footer>
		</>
	);
}
