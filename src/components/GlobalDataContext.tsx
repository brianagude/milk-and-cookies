// app/GlobalDataContext.tsx
"use client";

import { createContext, useContext } from "react";
import { Settings } from "@types"

interface GlobalData {
  footer: Settings[];
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

export function useGlobalData() {
  return useContext(GlobalDataContext);
}
