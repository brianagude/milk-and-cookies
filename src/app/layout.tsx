import type { Metadata } from "next";
import { catalpa, itc } from "@/styles/fonts";
import "@/styles/globals.css";

// ---------- Metadata for the application ----------
export const metadata: Metadata = {
	title: "Milk + Cookies Festival | Taste the Music",
	description:
		"Milk + Cookies Festival is a global celebration of music, culture, food, and community. From Atlanta to South Africa, experience unforgettable performances, curated travel packages, and vibrant cultural moments.",
	keywords: [
		"Milk and Cookies Festival",
		"music festival",
		"ATL festival",
		"Cape Town festival",
		"Johannesburg festival",
		"global music events",
		"Black culture events",
		"festival travel packages",
		"live music",
		"music, food, and culture",
	],
	authors: [
		{ name: "Briana Gude", url: "https://www.brianagude.com" },
		{
			name: "Milk + Cookies Festival",
			url: "https://milkandcookiesfestival.com",
		},
	],
	creator: "Milk + Cookies Festival",
	openGraph: {
		title: "Milk + Cookies Festival | Taste the Music",
		description:
			"Founded in 2009, Milk + Cookies Festival is a celebration of global sounds, food, art, and community — with events in ATL, Cape Town, Johannesburg, and beyond.",
		url: "https://milkandcookiesfestival.com",
		siteName: "Milk + Cookies Festival",
		locale: "en_US",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Milk + Cookies Festival | Taste the Music",
		description:
			"From Atlanta to South Africa, Milk + Cookies Festival blends music, culture, and community for an unforgettable experience.",
	},
	category: "music",
};

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			lang="en"
			className={`${catalpa.variable} ${itc.variable} antialiased`}
		>
			<body>{children}</body>
			
		</html>
	);
}
