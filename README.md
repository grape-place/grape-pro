# Grape Pro

A separate React + Vite + Tailwind CSS project for a professional, minimalist alternative design for the existing Grape website.

This repository currently contains project structure only. The app intentionally renders a blank page. Website design, homepage development and content entry must wait for approval. No deployment is configured.

## Local development

Use Node.js 22.12 or newer (Vite also supports Node 20.19+). With nvm, run `nvm use` to select the version in `.nvmrc`.

```sh
npm ci
npm run dev
```

`npm run build` checks TypeScript and creates a production build in `dist/`. `npm run preview` serves that build locally. `npm run typecheck` checks TypeScript alone.

## Structure

```text
public/images/
  logos/             Logo files
  hosts/             The two founders' photographs
  other/             Other approved image assets
references/mockups/  Full-page reference mockup and design references
docs/                Design brief, approved content and development notes
src/
  app/               App entry and future application configuration
  components/
    layout/          Future shared layout components
    ui/              Future reusable interface components
  content/           Future approved structured website content
  hooks/             Future reusable React hooks
  lib/               Future shared utilities and integrations
  pages/             Future page components (no homepage implemented)
  styles/            Tailwind entry and future shared styles
  types/             Future shared TypeScript types
```

Empty directories contain `.gitkeep` files so Git retains them. Use descriptive filenames for supplied assets; no particular filenames are required yet. Files in `public/` will be served as public assets. Files in `references/` and `docs/` are project resources and are not included in the website build.

Place the design brief, approved copy and development notes in `docs/` as they become available. Do not add unapproved website copy or placeholder imagery.

The existing Grape V1 repository is outside this project's scope. Preserve this repository's Git history and remote configuration. Do not configure or deploy to Netlify during this preparation phase.
