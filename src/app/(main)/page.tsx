import { notFound } from "next/navigation";
import Divider from "@/components/Divider";
import FinalCallout from "@/components/FinalCallout";
import HeroSection from "@/components/Hero";
import NewsletterSection from "@/components/Newsletter";
import Marquee from "@/components/Marquee";
import TextCallout from "@/components/TextCallout";
import ActionsWrapper from "@/components/ActionsWrapper";
import BrandsCallout from "@/components/BrandsCallout";
import { client } from "@/sanity/lib/client";

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
	const data = await client.fetch(query, {}, options);
	if (!data) return notFound();
	const { hero, sections, divider, finalCallout } = data || {};
  // console.log('sections: ', sections)

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
