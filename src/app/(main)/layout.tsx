import GlobalDataProvider from "@/components/GlobalDataContext";
import Header from "@/components/Header";
import { TailwindHelper } from "@/components/TailwindHelper";
import { client } from "@/sanity/lib/client";
import { VisualEditing } from "next-sanity";
import { draftMode } from "next/headers";
import { DisableDraftMode } from "@/components/DisableDraftMode";

// ---------- GROQ Query ----------
const query = `*[_type == "settings"][0]{
  footer,
  header {
    logo
  },
	privacy
}`;

// ---------- ISR / Revalidation options ----------
const options = { next: { revalidate: 30 } };

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const settings = await client.fetch(query, {}, options);
	const footer = settings?.footer || [];
	const privacy = settings?.privacy || [];

	return (
		<>
			<Header logo={settings?.header?.logo} />
			<GlobalDataProvider value={{ footer, privacy }}>
				<main className="max-w-[1728px] mx-auto border-l-4 border-r-4">
					{children}
				</main>
			</GlobalDataProvider>
			{process.env.NODE_ENV === "development" && <TailwindHelper />}
			{(await draftMode()).isEnabled && (
				<>
					<VisualEditing />
					<DisableDraftMode />
				</>
			)}
		</>
	);
}
