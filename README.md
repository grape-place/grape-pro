# Grape Pro

A separate React + Vite + Tailwind CSS project for a professional, minimalist alternative design for the existing Grape website.

This repository contains the first homepage prototype for co-founder review, following the supplied Warm Editorial Minimalism mockup. It is not approved for production launch. No deployment is configured.

The homepage includes the supplied branding and copy, provisional 2027 session themes, the three networking steps, Beth Croft and Manoj Vadavat, and responsive navigation. Original portraits are preserved alongside separate professional edits. Tally integration and a verified LinkedIn destination are pending. Contact currently opens an accessible Coming Soon dialog; session registration statuses are non-clickable.

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
    home/            Homepage sections
    layout/          Header and footer
    ui/              Shared icons, session CTA and contact dialog
  content/           Host data and explicitly provisional session themes
  hooks/             Future reusable React hooks
  lib/               Future shared utilities and integrations
  pages/             Homepage composition
  styles/            Tailwind entry, design tokens and responsive styles
  types/             Future shared TypeScript types
```

Empty directories contain `.gitkeep` files so Git retains them. Use descriptive filenames for supplied assets; no particular filenames are required yet. Files in `public/` will be served as public assets. Files in `references/` and `docs/` are project resources and are not included in the website build.

The supplied brief, approved implementation plan and development notes are in `docs/`. Manoj Vadavat is the user-confirmed name, superseding Manoj Kumar in the original brief. Do not add unapproved website copy or placeholder imagery.

The existing Grape V1 repository is outside this project's scope. Preserve this repository's Git history and remote configuration. Do not configure or deploy to Netlify without a new instruction. This prototype includes `noindex, nofollow` metadata; revisit it only when a production launch is approved.
