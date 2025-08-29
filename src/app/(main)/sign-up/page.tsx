import { notFound } from "next/navigation";
import Countdown from "@/components/Countdown";
import Divider from "@/components/Divider";
import FinalCallout from "@/components/FinalCallout";
import HeroSection from "@/components/Hero";
import NewsletterSection from "@/components/Newsletter";
import { client } from "@/sanity/lib/client";
import { draftMode } from "next/headers";

const query = `*[_type == "landing"][0]{
  hero {
  ...,
	"backgroundImage": backgroundImage{
    alt,
    crop,
    hotspot,
    asset->{
      _id,
      url,
      metadata {
        lqip,
        dimensions
      }
    }
  },
  "playbackId": backgroundVideo.asset->playbackId,
  },
	newsletter,
	divider,
	finalCallout,
	countdown
}`;

export default async function SignUp({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { isEnabled } = await draftMode();
  const data = await client.fetch(
    query,
    { slug },
    isEnabled
      ? {
          perspective: "previewDrafts",
          useCdn: false,
          stega: true,
        }
      : undefined
  );

	if (!data) return notFound();

	const { hero, newsletter, divider, finalCallout, countdown } = data || {};

	return (
		<>
			{hero && <HeroSection {...hero} style="landing" />}
			{countdown && <Countdown {...countdown} style="landing" />}
			{newsletter && <NewsletterSection {...newsletter} />}
			{divider && <Divider {...divider} />}
			{finalCallout && <FinalCallout {...finalCallout} />}
		</>
	);
}
