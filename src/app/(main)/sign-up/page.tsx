import { notFound } from "next/navigation";
import Divider from "@/components/Divider";
import FinalCallout from "@/components/FinalCallout";
import HeroSection from "@/components/Hero";
import NewsletterSection from "@/components/Newsletter";
import Countdown from "@/components/Countdown";
import { client } from "@/sanity/lib/client";

const query = `*[_type == "landing"][0]{
  hero,
	newsletter,
	divider,
	finalCallout,
	countdown
}`;

const options = { next: { revalidate: 30 } };

export default async function IndexPage() {
	const data = await client.fetch(query, {}, options);

	if (!data) return notFound();

	const { hero, newsletter, divider, finalCallout, countdown } = data || {};
	console.log('countdown: ',countdown )
	

	return (
		<>
			{hero && <HeroSection {...hero} />}
			{countdown && <Countdown {...countdown} style="landing" />}
			{newsletter && <NewsletterSection {...newsletter} />}
			{divider && <Divider {...divider} />}
			{finalCallout && <FinalCallout {...finalCallout} />}
		</>
	);
}
