// app/GlobalDataContext.tsx
"use client";

import { createContext, useContext } from "react";

const GlobalDataContext = createContext<any>(null);

export default function GlobalDataProvider({ value, children }: any) {
  return (
    <GlobalDataContext.Provider value={value}>
      {children}
    </GlobalDataContext.Provider>
  );
}

export function useGlobalData() {
  return useContext(GlobalDataContext);
}
