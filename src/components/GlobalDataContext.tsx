// app/GlobalDataContext.tsx
"use client";

import { createContext, useContext } from "react";
import { Settings } from "@types"

interface GlobalData {
  value: Settings[];
  children: React.ReactNode;
}

const GlobalDataContext = createContext<Settings[] | null>(null);

export default function GlobalDataProvider({ value, children }: GlobalData) {
  return (
    <GlobalDataContext.Provider value={value}>
      {children}
    </GlobalDataContext.Provider>
  );
}

export function useGlobalData() {
  return useContext(GlobalDataContext);
}
