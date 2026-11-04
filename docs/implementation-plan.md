# First version implementation plan

Status: approved by the user on 4 November 2026. First version implemented for review.

## Assets reviewed

- Logo: `public/images/logos/Grape Logo with Purple Dot Cluster-PRO.png`.
- Beth portrait: `public/images/hosts/beth-cheerful-grape.png`.
- Manoj portrait: `public/images/hosts/manoj-cheerful-grape.png`.
- Primary design reference: `public/images/other/grape-pro-version-WarmCream.png`.

Keep original assets intact. Create separate edited portrait files with decorations removed and a consistent quiet background. Preserve the subjects' facial features, clothing and expressions. Inspect the edited images before using them.

## Page and components

- `src/pages/HomePage.tsx`: compose the complete homepage.
- `src/components/layout/Header.tsx`: supplied logo, anchor navigation and accessible mobile menu.
- `src/components/layout/Footer.tsx`: logo, tagline, section navigation and confirmed LinkedIn link when available.
- `src/components/home/Hero.tsx`: supplied headline and descriptions, session CTA, restrained lavender background treatment; no hero photography.
- `src/components/home/UpcomingSessions.tsx`: scannable rows on desktop, stacked rows on mobile, explicit unconfirmed status.
- `src/components/home/HowItWorks.tsx`: Register, Connect and Rotate steps using supplied copy.
- `src/components/home/Hosts.tsx`: Beth first, Manoj second, balanced professional portraits and supplied role descriptions.
- `src/components/home/ClosingCallToAction.tsx`: supplied closing headline and session CTA.
- `src/components/ui/`: shared button/link and simple decorative icons as needed.
- `src/content/`: session and host data kept separate from presentation.
- `src/styles/`: shared colour and typography tokens and responsive styles, integrated with Tailwind.

## Visual implementation

Follow the supplied full-page mockup: warm cream canvas, deep purple serif headings, clean sans-serif body text, generous whitespace, subtle dividers, restrained lavender accents and minimal shadows. Maintain section order: header, hero, sessions, how it works, hosts, closing CTA, footer. Adapt the narrow reference to spacious desktop layouts and comfortable mobile tap targets.

## Content requiring confirmation

- Public `https://grape.place` could not be fetched using the web tool. No Grape V1 repository was accessed. No confirmed 2027 schedule is present in this checkout.
- Use the six brief-supplied provisional themes, clearly labelled as provisional, with dates TBA and non-clickable Coming Soon statuses. Do not treat the mockup's months or 7–8 pm time as confirmed.
- The user confirmed the preferred display name is Manoj Vadavat. This supersedes Manoj Kumar in the attached brief and mockup.
- No verified Grape LinkedIn URL is supplied. Do not invent a destination.
- Tally is explicitly deferred. Contact should visibly indicate that the form is not yet available in this prototype, rather than link to an invented address or form.

## Validation and review preview

Run the production build and TypeScript checks. Test section links, mobile navigation, keyboard focus and layout at mobile, tablet and desktop widths, including horizontal overflow and portrait cropping. Start a local Vite preview and open it in Codex for review. Record any browser verification limits. No deployment, backend, accounts or production launch.
