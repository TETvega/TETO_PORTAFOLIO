# Portfolio Content and Icon Consistency Design

## Goal

Update the existing Astro portfolio so its bilingual content is accurate and cautious, add the IC_UPNFM and confidential technical-documentation projects, and make interface icons consistent and accessible without replacing official technology logos or changing the overall visual identity.

## Scope

- Preserve the current single-page Astro architecture, client-side language toggle, Tailwind styling, project carousel, and existing public assets.
- Add both new projects to the existing project data model and translations for Spanish and English.
- Use the existing images in `public/img/ic_upnfm/` only after verifying their paths. The confidential documentation project will intentionally have no screenshots or external links.
- Replace emojis and hand-written interface SVGs with one icon system. Use Lucide React in the existing React language selector and Lucide Astro in Astro components; keep third-party technology logos as they are.
- Repair encoding-corrupted user-facing copy and verified links where the repository provides enough evidence. Do not infer a new LinkedIn URL slug if it cannot be verified from existing data.
- Extend language application so translated attributes such as `alt`, `aria-label`, and document title can update with the selected language where applicable.

## Data and privacy rules

The IC_UPNFM project must be explicitly labeled personal and unofficial in both languages and described as an Astro learning experiment. Its technologies are limited to those visible in the repository. The documentation project must use generic naming, a confidentiality label, and no screenshots, private URLs, client/product names, exact duration, document counts, metrics, or unverified responsibilities.

## Component design

`src/components/Projects.astro` remains the single renderer for project cards. Project records gain a stable internal id, translated title/description/role/labels, optional images, optional links, and an optional icon name for image-free cards. The renderer will support a discreet placeholder panel when a project has no gallery and will keep the current responsive carousel behavior for image-backed projects.

`src/utils/i18n.ts` remains the translation source. New keys will be added in both `es` and `en`, including project labels, privacy notes, carousel controls, and accessibility text. Existing component literals that are user-visible and language-sensitive will be migrated to keys when touched.

Lucide icons will be imported from the existing `lucide-react` dependency for `LanguageSelector.tsx` and from `lucide-astro` for Astro-rendered controls. If the Astro package is not installed, add only `lucide-astro`; do not add another icon library. Decorative icons receive `aria-hidden="true"`; icon-only controls keep translated `aria-label` values.

## Validation

- Run `npm run build` and fix Astro/TypeScript errors.
- Verify no referenced project image path is missing and no new URL was invented.
- Search for remaining emoji interface icons and hand-written inline SVGs in the changed UI surface.
- Start the Astro dev server and inspect the home page at desktop and mobile widths. Check language switching, project expansion, carousel controls, mobile navigation, icon labels, and the no-image confidential card.
- Keep the pre-existing untracked `public/img/ic_upnfm/` assets intact.
