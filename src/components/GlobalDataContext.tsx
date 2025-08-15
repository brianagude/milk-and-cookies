// app/GlobalDataContext.tsx
"use client";

import { createContext, useContext } from "react";
import { Settings } from "@types"

type Footer = NonNullable<Settings["footer"]>;
interface GlobalData {
  footer: Footer;
}
interface GlobalDataProviderProps {
  value: GlobalData;
  children: React.ReactNode;
}

const GlobalDataContext = createContext<GlobalData | null>(null);

export default function GlobalDataProvider({ value, children }: GlobalDataProviderProps) {
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

