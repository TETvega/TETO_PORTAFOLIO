# Portfolio Content and Icon Consistency Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add the two bilingual projects, make icon usage consistent and accessible, repair verified encoding issues, and validate the existing Astro portfolio without changing its architecture.

**Architecture:** Keep the single-page Astro renderer and client-side translation dictionary. Extend the existing project data model in `Projects.astro`, use Lucide icons for interface/decorative UI, and add translation metadata for text and accessibility attributes. Preserve existing technology logos and public assets.

**Tech Stack:** Astro 6, TypeScript, React 19, Tailwind CSS 4, `lucide-react`, `lucide-astro`, npm.

## Global Constraints

- Do not invent dates, names, URLs, metrics, technologies, repositories, or images.
- IC_UPNFM must be labeled personal and unofficial in Spanish and English.
- The documentation project must remain generic and confidential, with no screenshots, links, client names, product names, exact duration, metrics, or internal details.
- Preserve the existing bilingual toggle and all existing portfolio sections.
- Keep official technology logos unchanged.
- Keep `public/img/ic_upnfm/` assets intact.
- Verify with `npm run build`; do not claim success without command output.
- Do not mass-upgrade dependencies.

### Task 1: Add the Astro icon dependency and translation keys

**Files:**
- Modify: `package.json`
- Modify: `package-lock.json`
- Modify: `src/utils/i18n.ts`

**Interfaces:**
- Produces translation keys consumed by `Projects.astro`, `Layout.astro`, and `LanguageSelector.tsx`.

- [ ] **Step 1: Add only `lucide-astro` to the dependency list and install the lockfile entry**

Run:
`npm install lucide-astro`

Expected: `package.json` and `package-lock.json` gain `lucide-astro` without unrelated dependency upgrades.

- [ ] **Step 2: Add Spanish and English keys for both new projects**

Add keys for:
`proj.ic_upnfm.title`, `proj.ic_upnfm.role`, `proj.ic_upnfm.short`, `proj.ic_upnfm.long`, `proj.ic_upnfm.label`, `proj.docs.title`, `proj.docs.role`, `proj.docs.short`, `proj.docs.long`, `proj.docs.label`, `proj.docs.note`, `proj.personal.note`, `proj.carousel.previous`, `proj.carousel.next`, and translated profile/accessibility labels needed by touched components.

- [ ] **Step 3: Run the build to catch translation syntax errors**

Run: `npm run build`

Expected: Build either passes or reports only implementation errors from the not-yet-updated consumers.

### Task 2: Refactor project records and render the new projects

**Files:**
- Modify: `src/components/Projects.astro`
- Modify: `src/utils/i18n.ts`

**Interfaces:**
- Consumes the translation keys from Task 1.
- Produces project cards for `IC_UPNFM` and `technical-documentation` with optional gallery behavior, no fabricated links, and translated labels.

- [ ] **Step 1: Verify exact IC_UPNFM asset filenames**

Run:
`Get-ChildItem public/img/ic_upnfm -File | Select-Object -ExpandProperty Name`

Expected: Use only the listed filenames; do not rename or create image files.

- [ ] **Step 2: Add the IC_UPNFM project record**

Use id `IC_UPNFM`, the existing images from `public/img/ic_upnfm/`, only verifiable technologies found in the repository (`Astro`, `HTML`, `CSS`, and JavaScript where the implementation supports it), no invented URLs, and a translated personal/unofficial label.

- [ ] **Step 3: Add the confidential documentation project record**

Use a generic id such as `technical-documentation`, no images, no links, translated Docusaurus/Markdown/MDX/documentation/information-architecture tags, and a discreet confidentiality label.

- [ ] **Step 4: Extend the renderer for image-free cards and translated labels**

Render the existing carousel only for image-backed projects. For image-free projects render a stable-height documentation placeholder with a Lucide file/book icon and translated accessible text. Render personal/unofficial and confidential labels without overloading the card.

- [ ] **Step 5: Preserve carousel behavior and add translated control labels**

Replace hard-coded previous/next and slide labels with translation-backed `aria-label` values. Keep counters and expansion behavior intact.

- [ ] **Step 6: Run the build**

Run: `npm run build`

Expected: PASS with no Astro template or TypeScript errors.

### Task 3: Replace interface emojis and manual SVG icons

**Files:**
- Modify: `src/pages/index.astro`
- Modify: `src/layouts/Layout.astro`
- Modify: `src/components/Courses.astro`
- Modify: `src/components/Education.astro`
- Modify: `src/components/Softskills.astro`
- Modify: `src/components/Volunteering.astro`
- Modify: `src/components/Awards.astro`
- Modify: `src/components/Projects.astro`
- Modify: `src/components/LanguageSelector.tsx`

**Interfaces:**
- Consumes Lucide dependencies and translation/accessibility keys.
- Produces consistent decorative icons with `aria-hidden="true"` and labeled icon-only controls.

- [ ] **Step 1: Replace manual interface SVGs in Astro components with Lucide Astro imports**

Use GitHub, Linkedin, LockKeyhole, ChevronLeft, ChevronRight, ChevronDown, FileText, Menu, and other exact Lucide icons as needed. Keep the favicon SVG and official technology logos unchanged.

- [ ] **Step 2: Replace emoji-only decorative data with icon components or icon names**

Use stable Lucide icons for education, courses, soft skills, volunteering, awards, and project placeholders. Ensure all decorative icons have `aria-hidden="true"`.

- [ ] **Step 3: Make language selector accessible without emoji flags**

Use a Lucide Languages icon, a translated button `aria-label`, and visible ES/EN text. Keep the existing React hydration and language event behavior.

- [ ] **Step 4: Update icon-only controls and links with translated labels**

Ensure carousel buttons, mobile menu button, social links, and external-link controls have accessible names and `rel="noopener noreferrer"` where appropriate.

- [ ] **Step 5: Run build and search the changed UI surface**

Run: `npm run build`
Run: `rg -n '(🎓|📚|💬|🔍|🔄|🎄|<svg|aria-label=)' src`

Expected: No user-facing emoji icon data or unnecessary hand-written interface SVGs remain in changed components; favicon and technology logos remain allowed.

### Task 4: Repair verified encoding and bilingual attribute updates

**Files:**
- Modify: `src/pages/index.astro`
- Modify: `src/layouts/Layout.astro`
- Modify: `src/utils/i18n.ts`
- Modify: `src/components/LanguageSelector.tsx`
- Modify: touched project/section components where corrupted visible copy remains

**Interfaces:**
- Keeps current `data-i18n` event flow.
- Adds `data-i18n-attr` or an equivalent small mapping for attributes that must change with language.

- [ ] **Step 1: Replace mojibake in touched user-visible strings with correct UTF-8 text**

Repair names, headings, descriptions, labels, and verified links only where the intended text is clear from the repository or CV filenames.

- [ ] **Step 2: Add bilingual updates for document title, image alt text, and icon-only labels**

Keep fallback Spanish values rendered server-side, then update attributes in `applyLang` when the selected language changes.

- [ ] **Step 3: Verify language switching keeps both project cards complete**

Use the browser or local dev page to toggle ES/EN and confirm no Spanish-only text remains in the new English project content and no missing translation keys appear.

### Task 5: Validate responsive behavior and final quality

**Files:**
- Modify: only files required by validation findings.

- [ ] **Step 1: Run available static checks**

Run:
`npm run build`
`npx astro check`

Expected: Both commands pass, or any unavailable script is reported explicitly.

- [ ] **Step 2: Check referenced image paths**

Run a PowerShell check that resolves every project image path under `public`.

Expected: No missing project asset path.

- [ ] **Step 3: Start the dev server and inspect desktop/mobile**

Run: `npm run dev -- --host 127.0.0.1`

Inspect the home page at desktop and mobile widths. Check the project carousel, expanded descriptions, IC_UPNFM gallery, documentation placeholder, language toggle, mobile navigation, focus states, and console errors.

- [ ] **Step 4: Fix issues found during visual QA**

Apply only scoped fixes for overlap, wrapping, missing labels, broken images, or incorrect language updates.

- [ ] **Step 5: Review final diff and status**

Run:
`git diff --stat`
`git status --short`

Expected: Only scoped portfolio files and dependency metadata changed; pre-existing `public/img/ic_upnfm/` remains intact.

