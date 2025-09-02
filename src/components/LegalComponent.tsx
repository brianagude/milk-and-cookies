"use client";

import { useGlobalData } from "./GlobalDataContext";
import { LegalBlockContent } from "./inputs/PortableTextComponents";

export default function LegalComponent() {
	const { privacy } = useGlobalData();

	return (
    <LegalBlockContent
      value={privacy}
      classes="flex flex-col text-left"
    />
	);
}
