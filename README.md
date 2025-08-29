# Milk + Cookies Festival – Monorepo (Next.js + Sanity)

A modern, fully typed marketing site powered by Next.js App Router, Sanity CMS, Tailwind CSS v4, and React 19.

- **Framework**: Next.js 15 (App Router)
- **UI**: React 19, Tailwind CSS v4
- **CMS**: Sanity v4 with custom structure and Visual Editing
- **Media**: Sanity Images, Mux video via `sanity-plugin-mux-input`
- **DX**: TypeScript, ESLint, Turbopack dev server

## Quickstart

```bash
# Install deps (pnpm preferred)
pnpm install

# Run dev server
pnpm dev
# App: http://localhost:3000
# Sanity Studio: http://localhost:3000/admin
```

## Required environment variables

These are read by `src/sanity/env.ts`, `sanity.config.ts`, and API routes. Create `.env.local` with:

```bash
# Sanity project configuration
NEXT_PUBLIC_SANITY_PROJECT_ID=xxxxxxxx
NEXT_PUBLIC_SANITY_DATASET=production
# Optional – defaults to latest set in code
NEXT_PUBLIC_SANITY_API_VERSION=2025-08-13

# For Visual Editing & Draft Mode (viewer token with read permissions)
SANITY_VIEWER_TOKEN=xxxxxxxx
NEXT_PUBLIC_SANITY_STUDIO_URL=http://localhost:3000/admin
SANITY_STUDIO_PREVIEW_ORIGIN=http://localhost:3000

# Revalidation webhook secret (used by next-sanity parseBody)
NEXT_SANITY_WEBHOOK_SECRET=xxxxxxxx
```

If any of the required values are missing, `src/sanity/env.ts` will throw at startup with a helpful message.

## Scripts

```json
{
  "dev": "next dev --turbopack",
  "build": "next build",
  "start": "next start",
  "lint": "next lint"
}
```

Use `pnpm` for all commands (e.g., `pnpm dev`).

## Biome (format, lint, organize imports)

The project uses Biome (see `biome.json`) as the single tool to format, lint, and organize imports.

```bash
# Check all files (no writes)
pnpm exec biome check .

# Check and automatically fix issues (format, lint, imports)
pnpm exec biome check --write .

# Check a specific file or directory
pnpm exec biome check src/components/Hero.tsx
pnpm exec biome check --write src/

# Optional: format-only or lint-only
pnpm exec biome format .
pnpm exec biome lint .
```

## Project structure

```
src/
  app/
    (main)/               # Public-facing site shell, data fetch, and pages
      layout.tsx          # Fetches global settings, provides context, Visual Editing
      page.tsx            # Home page rendering modules fetched from Sanity
    api/
      draft-mode/enable/route.ts  # Enables Next.js draft mode (requires viewer token)
      revalidate/route.ts         # Revalidate tags on Sanity webhook events
    admin/[[...tool]]/page.tsx    # Sanity Studio routed at /admin
    layout.tsx            # Root HTML, fonts, global CSS
  components/             # Presentational + module components (Hero, Marquee, etc.)
  sanity/
    env.ts                # Strongly-typed env access with assertions
    lib/                  # Sanity client, image builder, live content helpers
    schemaTypes/          # Sanity document + object schemas
    structure.ts          # Custom Studio structure (Home, Landing, Settings pinned)
  styles/                 # Tailwind v4 theme tokens, fonts, globals
```

Other notable files:

- `next.config.ts`: Remote image allowlist for `cdn.sanity.io` and `image.mux.com`.
- `sanity.config.ts`: Studio configuration, plugins (Vision, Media, Mux), Presentation/Preview.
- `sanity.cli.ts`: Enables `sanity` CLI commands in this directory.

## Data flow & rendering

- Pages fetch content from Sanity using `next-sanity`:
  - `src/app/(main)/layout.tsx` fetches `settings` (header/footer), wraps children with `GlobalDataProvider`, renders `Header`, and conditionally renders Visual Editing + a draft-mode exit action.
  - `src/app/(main)/page.tsx` fetches the `home` singleton and renders modular sections: `Hero`, `Marquee`, `TextCallout`, `ActionsWrapper`, `BrandsCallout`, `Newsletter`, etc.
  - Both use ISR via `{ next: { revalidate: 30 } }` for light caching.
- The Sanity client is configured in `src/sanity/lib/client.ts` and reads from `NEXT_PUBLIC_SANITY_*` env vars. It supports Stega/Visual Editing via `stega.studioUrl`.
- Images: `src/sanity/lib/image.ts` provides a typed URL builder. Next Image domains are set in `next.config.ts`.

## Sanity Studio

- Studio is embedded at `/admin` via `sanity.config.ts` and `src/app/admin/[[...tool]]/page.tsx`.
- Custom Structure pins three singletons at the top: `Home Page`, `Landing Page`, `Site Settings`. All other document types appear below, excluding system types such as `media.tag` and `mux.videoAsset`.
- Plugins: `visionTool` (dev only), `presentationTool` (Visual Editing), `sanity-plugin-media`, and `sanity-plugin-mux-input`.

## Content model (high level)

- Documents
  - `settings`: header (logo), footer (links/blocks)
  - `home`: hero, divider, finalCallout, `sections[]` of modular blocks
  - `landing`: simple landing content
- Components / Objects
  - `marquee`, `textCallout`, `brandsCallout`, `newsletter`, `events`, `products`, `countdown`
- Rich text blocks use `blockContent` with `@portabletext/react` in components where needed.

The generated TypeScript types for Sanity live in `sanity.types.ts` (do not edit directly). Prefer those types in components; extend locally if needed.

## Visual Editing, Draft Mode, and Live Content

- Visual Editing is enabled in `(main)/layout.tsx` with `<VisualEditing />` and the `next-sanity` Presentation Tool.
- Draft Mode endpoint: `src/app/api/draft-mode/enable/route.ts` uses `defineEnableDraftMode` with `SANITY_VIEWER_TOKEN` to securely enable previews.
- To test locally:
  1. Ensure `.env.local` has a valid `SANITY_VIEWER_TOKEN` with read access.
  2. Open Studio at `/admin`, enable preview via Presentation Tool, or hit `/api/draft-mode/enable` from the tool.
  3. While draft mode is enabled, unpublished changes render immediately; an on-screen control allows exiting draft mode.
- Live Content API is scaffolded in `src/sanity/lib/live.ts` via `defineLive`. You can opt-in by rendering `<SanityLive />` and switching queries to `sanityFetch` as needed.

## Revalidation Webhook

- Endpoint: `POST /api/revalidate`
- Validates payload signature via `next-sanity` `parseBody`, which reads `process.env.NEXT_SANITY_WEBHOOK_SECRET`.
- On valid payload, it revalidates cache tags for the document type and optional slug.
- In Sanity Manage → API → Webhooks, configure:
  - URL: `https://<your-domain>/api/revalidate`
  - Secret: the same `NEXT_SANITY_WEBHOOK_SECRET`
  - Filter: send for published/unpublished events of relevant types

## Styling & fonts

- Tailwind CSS v4 with theme tokens in `src/styles/globals.css` and additional tokens in `src/styles/design-tokens.ts`.
- Custom fonts configured in `src/styles/fonts.ts` and applied in the root layout.

## Deployment

- Recommended: Vercel
- Ensure all env vars above are configured in your hosting provider.
- Add the Studio preview origin and public Studio URL in env for production (e.g., `SANITY_STUDIO_PREVIEW_ORIGIN=https://your-site.com`, `NEXT_PUBLIC_SANITY_STUDIO_URL=https://your-site.com/admin`).
- Keep `image` domains in `next.config.ts` synced with all external sources used (Sanity CDN, Mux).

## Common tasks

- Add a new homepage section:

  1. Create/extend a schema in `src/sanity/schemaTypes/components/`.
  2. Add rendering in `src/app/(main)/page.tsx` `switch` block.
  3. Update/extend types in your component using `sanity.types.ts` types.

- Add a new singleton document:
  1. Create document schema in `schemaTypes/documents/`.
  2. Pin it in `src/sanity/structure.ts` if desired.
  3. Fetch in the relevant layout/page via GROQ and render.

## Troubleshooting

- Missing Sanity env vars: dev server will throw with `assertValue(...)` messages. Add the missing keys to `.env.local`.
- Draft mode not enabling: verify `SANITY_VIEWER_TOKEN` is set and has read access; check the Studio Presentation Tool configuration.
- Webhook not revalidating: confirm `NEXT_SANITY_WEBHOOK_SECRET` matches in Sanity webhook settings and your environment.

## License

Private project. All rights reserved.
