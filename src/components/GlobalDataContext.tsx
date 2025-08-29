// app/GlobalDataContext.tsx
"use client";

import type { Settings } from "@types";
import { createContext, useContext } from "react";

type Footer = NonNullable<Settings["footer"]>;
type Privacy = NonNullable<Settings["privacy"]>;
interface GlobalData {
	footer: Footer;
	privacy: Privacy;
}
interface GlobalDataProviderProps {
	value: GlobalData;
	children: React.ReactNode;
}

const GlobalDataContext = createContext<GlobalData | null>(null);

export default function GlobalDataProvider({
	value,
	children,
}: GlobalDataProviderProps) {
	return (
		<GlobalDataContext.Provider value={value}>
			{children}
		</GlobalDataContext.Provider>
	);
}

export function useGlobalData(): GlobalData {
	const context = useContext(GlobalDataContext);
	if (!context) {
		throw new Error("useGlobalData must be used within a GlobalDataProvider");
	}
	return context;
}
