import { ControlsIcon, DocumentTextIcon, HomeIcon } from "@sanity/icons";
import type { StructureResolver } from "sanity/structure";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
	S.list()
		.title("Content")
		.items([
			S.listItem()
				.id("home")
				.schemaType("home")
				.title("Home Page")
				.icon(HomeIcon)
				.child(
					S.document()
						.id("home")
						.schemaType("home")
						.documentId("home")
						.title("Home Page"),
				),
			S.listItem()
				.id("landing")
				.schemaType("landing")
				.title("Landing Page")
				.icon(DocumentTextIcon)
				.child(
					S.document()
						.id("landing")
						.schemaType("landing")
						.documentId("landing")
						.title("Landing Page"),
				),
			S.listItem()
				.id("settings")
				.schemaType("settings")
				.title("Site Settings")
				.icon(ControlsIcon)
				.child(
					S.document()
						.id("settings")
						.schemaType("settings")
						.documentId("settings")
						.title("Site Settings"),
				),
			...S.documentTypeListItems().filter(
				(item) =>
					![
						"media.tag",
						"mux.videoAsset",
						"home",
						"landing",
						"settings",
					].includes(item.getId() || ""),
			),
		]);
