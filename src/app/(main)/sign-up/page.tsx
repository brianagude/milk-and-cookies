import { client } from "@/sanity/lib/client";
import { notFound } from "next/navigation";
import HeroSection from "@/components/Hero"
import NewsletterSection from "@/components/Newsletter"
import FinalCallout from "@/components/FinalCallout"
import Divider from "@/components/Divider"

const query = `*[_type == "landing"][0]{
  ...
}`;

const options = { next: { revalidate: 30 } };

export default async function IndexPage() {
  const data = await client.fetch(
    query, 
    {}, 
    options,
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