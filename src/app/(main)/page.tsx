import { notFound } from "next/navigation";
import ActionsWrapper from "@/components/ActionsWrapper";
import BrandsCallout from "@/components/BrandsCallout";
import Divider from "@/components/Divider";
import FinalCallout from "@/components/FinalCallout";
import HeroSection from "@/components/Hero";
import Marquee from "@/components/Marquee";
import NewsletterSection from "@/components/Newsletter";
import TextCallout from "@/components/TextCallout";
import { client } from "@/sanity/lib/client";
import type { Home } from "@types";

const query = `*[_type == "home"][0]{
	hero {
		...,
		"playbackId": backgroundVideo.asset->playbackId,
  },
	divider,
	finalCallout,
	sections[]{
    ...
  }
}`;

const options = { next: { revalidate: 30 } };

export default async function Home() {
	const data = await client.fetch<Home>(query, {}, options);
	if (!data) return notFound();
	const { hero, sections, divider, finalCallout } = data || {};
	

	return (
		<>
			{hero && <HeroSection {...hero} style="home" />}
			{sections && (
				<div className="section-wrapper">
					{sections.map((module) => {
						switch (module._type) {
							case "marquee":
								return <Marquee {...module} key={module._key} />;
							case "textCallout":
								return <TextCallout {...module} key={module._key} />;
							case "actionsWrapper":
								return <ActionsWrapper {...module} key={module._key} />;
							case "brandsCallout":
								return <BrandsCallout {...module} key={module._key} />;
							case "newsletter":
								return <NewsletterSection {...module} key={module._key} />;
							default:
								return null;
						}
					})}
				</div>
			)}
			{divider && <Divider {...divider} />}
			{finalCallout && <FinalCallout {...finalCallout} />}
		</>
	);
}
