import type { SchemaTypeDefinition } from "sanity";
import { home } from "./documents/home";
import { landing } from "./documents/landing";
import { settings } from "./documents/settings";
import { blockContent } from "./inputs/blockContent";
import { countdown } from "./components/countdown";
import { marquee } from "./components/marquee";
import { brandsCallout } from "./components/brandsCallout";
import { newsletter } from "./components/newsletter";
import { events } from "./components/events";
import { products } from "./components/products";
import { textCallout } from "./components/textCallout";

export const schema: { types: SchemaTypeDefinition[] } = {
	types: [
		settings,
		landing,
		home,
		blockContent,
		countdown,
		marquee,
		brandsCallout,
		newsletter,
		events,
		products,
		textCallout,
	],
};
