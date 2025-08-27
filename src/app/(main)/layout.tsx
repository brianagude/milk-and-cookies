import { draftMode } from "next/headers";
import { VisualEditing } from "next-sanity";
import { DisableDraftMode } from "@/components/DisableDraftMode";
import GlobalDataProvider from "@/components/GlobalDataContext";
import Header from "@/components/Header";
import { TailwindHelper } from "@/components/TailwindHelper";
import { client } from "@/sanity/lib/client";

// ---------- GROQ Query ----------
const query = `*[_type == "settings"][0]{
  footer,
  header {
    logo
  }
}`;

// ---------- ISR / Revalidation options ----------
const options = { next: { revalidate: 30 } };

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const { isEnabled } = await draftMode();
	const settings = await client.fetch(query, {}, options);
	const footer = settings?.footer || [];

	return (
		<>
			<Header logo={settings?.header?.logo} />
			<GlobalDataProvider value={{ footer }}>
				<main className="z-40">{children}</main>
			</GlobalDataProvider>

			{isEnabled && (
				<>
					<VisualEditing />
					<DisableDraftMode />
				</>
			)}

			{process.env.NODE_ENV === "development" && <TailwindHelper />}
		</>
	);
}
