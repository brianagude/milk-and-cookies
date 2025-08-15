import { VisualEditing } from "next-sanity";
import { draftMode } from "next/headers";
import { DisableDraftMode } from "@/components/DisableDraftMode";
import { client } from "@/sanity/lib/client";
import { TailwindHelper } from "@/components/TailwindHelper";
import Header from "@/components/Header";
import GlobalDataProvider from "@/components/GlobalDataContext";

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
        {children}
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
