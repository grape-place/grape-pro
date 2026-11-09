# First version — 4 November 2026

## Scope and content

Built the complete homepage in React and TypeScript, using Vite and Tailwind. The supplied WarmCream mockup guides the colour palette, typography, section order, event icons, portraits and closing call to action. System fonts avoid third-party font requests. Shared React components separate page composition from content and styling.

The user approved the implementation plan and confirmed **Manoj Vadavat**. Beth Croft appears first. Roles and main copy come from the supplied brief. No biographies, registration URLs, dates or session times have been invented.

The six 2027 themes remain provisional, explicitly labelled as such. Every date is TBA, and Coming Soon is a non-clickable status. Tally integration is deferred; Contact opens a keyboard-accessible dialog explaining that the form is coming soon. LinkedIn is labelled Coming Soon until a verified profile URL is supplied. No other social platforms are included.

No Grape V1 repository access, Git remote changes, deployment configuration or deployment was performed. The local Vite preview is for review on this computer. The production output is static `dist/`, suitable for later static hosting. `noindex, nofollow` metadata is included for the review prototype.

## Assets

Original uploaded assets remain untouched. The header and footer use `public/images/logos/small-g-grape-logo.png`. The homepage uses these optimised portrait derivatives:

- `public/images/hosts/beth-professional.jpg`
- `public/images/hosts/manoj-professional.jpg`

Portrait editing used the built-in image generation tool in edit mode, followed by JPEG resizing and compression using macOS `sips`. No new people or photography were generated. Both edited portraits were visually inspected against their originals for recognisability and removal of party decorations. Please review the portraits as part of co-founder approval.

### Exact portrait prompts

Beth:

> Use case: precise-object-edit. Edit target: supplied Beth Croft photograph. For a professional website portrait, remove ALL decorative party graphics, speech bubbles, marks, squiggles, stars and the pink shape behind the person. Replace the entire background with a uniform muted warm lavender-grey #E6DFE3. Preserve the photographed woman exactly: same face, facial features, expression, skin texture, hair, pose, body, black shirt and gold necklace. Do not beautify, redraw or change her identity. Keep original framing and photographic lighting. No added objects or text. Only edit the background.

Manoj:

> Use case: precise-object-edit. Edit target: supplied Manoj Vadavat photograph. For a professional website portrait, remove ALL decorative party graphics, speech bubbles, marks, squiggles, stars and the purple shape behind the person. Replace the entire background with a uniform muted warm lavender-grey #E6DFE3. Preserve the photographed man exactly: same face, facial features, expression, skin texture, hair, glasses, pose, body and navy sweater. Do not beautify, redraw or change his identity. Keep original framing and photographic lighting. No added objects or text. Only edit the background.

## Validation

- Production build includes TypeScript checks (`npm run build`).
- Browser review at 320, 390, 768 and 1440 pixel widths. No document horizontal overflow observed. Small-phone event titles and host names fit their containers.
- Verified all page images load, section anchor navigation, mobile menu open/close and closing on section selection.
- Contact dialog opens, receives focus, closes with Escape and restores focus to the Contact control.
- Browser console had no warnings or errors during the inspected session.
- Skip link, visible keyboard focus, reduced-motion support and semantic headings are included. This is a targeted browser check, not a formal accessibility audit or cross-browser certification.

## Pending final content

- Confirm 2027 themes, dates, times, timezones and registration destinations.
- Supply Tally configuration and the verified Grape LinkedIn URL.
- Approve design and edited portraits before any production launch.
