import { defineQuery } from "next-sanity";
import { draftMode } from "next/headers";
import { client } from "@/sanity/lib/client";
import { notFound } from "next/navigation";
import { type SanityDocument } from "next-sanity";
import HeroSection from "@/components/Hero"
import NewsletterSection from "@/components/Newsletter"
import FinalCallout from "@/components/FinalCallout"
import Divider from "@/components/Divider"

const query = `*[_type == "landing"][0]{
  ...
}`;

const options = { next: { revalidate: 30 } };

export default async function IndexPage() {
  const { isEnabled } = await draftMode();
  const data = await client.fetch(
    query, 
    {}, 
    options,
    // isEnabled
    //   ? {
    //       perspective: "previewDrafts",
    //       useCdn: false,
    //       stega: true,
    //     }
    //   : undefined
  );

  if (!data) return notFound()

  const { hero, newsletter, divider, finalCallout } = data || {}

  return (
    <>
      {hero && <HeroSection {...hero} />}
      {newsletter && <NewsletterSection {...newsletter} />}
      {divider && <Divider {...divider} />}
      {finalCallout && <FinalCallout {...finalCallout} />}
    </>
  );
}