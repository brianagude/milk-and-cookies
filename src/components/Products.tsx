"use client";

import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { useCallback } from "react";
import { urlFor } from "@/sanity/lib/image";
import { typography } from "@/styles/design-tokens";
import Button from "./inputs/Button";
import type { Products as ProductsType } from "@types";

type ProductType = NonNullable<ProductsType["products"]>[number];

export default function Products(props: ProductsType) {
	const { headline, products = [] } = props;

	const [emblaRef, emblaApi] = useEmblaCarousel({
		loop: true,
		align: "center",
	});

	const scrollPrev = useCallback(() => {
		if (emblaApi) emblaApi.scrollPrev();
	}, [emblaApi]);

	const scrollNext = useCallback(() => {
		if (emblaApi) emblaApi.scrollNext();
	}, [emblaApi]);

	if (!products.length) return null;

	const productWrapperClass =
		products.length === 1
			? "max-w-xl"
			: products.length === 2
				? "max-w-6xl sm:grid-cols-2"
				: "sm:grid-cols-2 xl:grid-cols-3";

	return (
		<section id="products">
			<div className="space-y-12 md:space-y-16">
				{headline && (
					<h2 className={`${typography.h3} text-center`}>{headline}</h2>
				)}

				{/* If less than 4 products → Grid */}
				{products.length < 4 ? (
					<div className={`grid mx-auto ${productWrapperClass} gap-6 md:gap-8`}>
						{products.map((product) => (
							<ProductCard key={product._key} product={product} />
						))}
					</div>
				) : (
					// If 4 or more products → Carousel
					<div className="relative">
						<div className="overflow-hidden" ref={emblaRef}>
							<div className="flex">
								{products.map((product) => (
									<div
										key={product._key}
										className="flex-[0_0_100%] px-4 sm:flex-[0_0_60%] lg:flex-[0_0_50%] 2xl:flex-[0_0_40%]"
									>
										<ProductCard product={product} />
									</div>
								))}
							</div>
						</div>

						<div>
							<button
								type="button"
								onClick={scrollPrev}
								className="absolute left-6 top-1/4 -translate-y-1/2 cursor-pointer flex items-center justify-center w-10 h-10 p-2 border-4 transition-colors bg-gradient-to-tr from-blue to-blue hover:to-cream sm:w-12 sm:h-12 md:top-1/2 md:w-20 md:h-20"
							>
								<Image
									src="/arrow.svg"
									width={40}
									height={40}
									alt="left arrow"
								/>
							</button>
							<button
								type="button"
								onClick={scrollNext}
								className="absolute right-6 top-1/4 -translate-y-1/2 cursor-pointer flex items-center justify-center w-10 h-10 p-2 border-4 transition-colors bg-gradient-to-tr from-blue to-blue hover:to-cream sm:w-12 sm:h-12 md:top-1/2 md:w-20 md:h-20"
							>
								<Image
									src="/arrow.svg"
									width={40}
									height={40}
									alt="right arrow"
									className="rotate-180"
								/>
							</button>
						</div>
					</div>
				)}
			</div>
		</section>
	);
}

// Strongly typed ProductCard
function ProductCard({ product }: { product: ProductType }) {
	return (
		<div className="border-4 block">
			{product.image?.asset?._ref && (
				<Image
					src={urlFor(product.image).url()}
					alt={product.name || ""}
					width={768}
					height={600}
					className="aspect-[4/3] w-full h-auto object-cover"
				/>
			)}

			<div className="px-4 py-6 border-t-4 bg-white sm:px-6 sm:py-8">
				<h4 className={typography.h5}>{product.name}</h4>
				{product.description && (
					<p className={`${typography.body} mt-3`}>{product.description}</p>
				)}
				{product.link && (
					<Button
						url={product.link}
						style="secondary"
						classes="flex flex-wrap gap-3 items-center justify-between !w-full mt-5 xl:mt-8"
					>
						Purchase
						{product.price && <span>{product.price}</span>}
					</Button>
				)}
			</div>
		</div>
	);
}
