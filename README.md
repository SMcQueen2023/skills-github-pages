# Scott McQueen — Analytics delivery portfolio

A hiring-focused portfolio connecting analytics leadership, technical delivery, and hands-on engineering evidence. Built with [Astro](https://astro.build/) as a static site and deployed to GitHub Pages.

## Run locally

Use Node.js 22.12 or newer:

```bash
npm ci
npm run dev
```

The development server uses the project base path at `/skills-github-pages/`. Check the production output with:

```bash
npm run build
npm run verify
npm run preview
```

The build writes `dist/`. The GitHub Actions workflow in `.github/workflows/pages.yml` builds, verifies, and deploys that directory on pushes to `main`.

## Source structure

- `src/pages/index.astro` — positioning, selected evidence, featured cases, and contact actions.
- `src/pages/work/` — professional cases and paths into leadership, delivery, and engineering evidence.
- `src/pages/projects/` — independent projects and legacy professional-case redirects.
- `src/data/projects.ts` — professional cases: contribution, project role, status, collaboration, delivery responsibilities, technical decisions, validation, and outcome.
- `src/data/standaloneProjects.ts` — independent-project context, status, engineering detail, and captioned links to specific repository artifacts.
- `src/data/profile.ts` — profile links and credential records, including the Fabric credential date and verification URL.
- `src/components/CaseCard.astro` — shared professional-case summaries.
- `src/layouts/Base.astro` and `src/styles/global.css` — navigation, metadata, typography, and responsive presentation.
- `public/assets/` — reviewed public images, social previews, and sanitized explanatory diagrams.

The public site is `https://smcqueen2023.github.io/skills-github-pages/`. Preserve its base path. Professional cases use `/work/{slug}/`; independent projects use `/projects/{slug}/`. Earlier professional `/projects/{slug}/` links redirect to their authoritative case. Case anchors support direct links to decisions, delivery, collaboration, engineering, validation, and outcomes.

Résumé requests go directly to LinkedIn, as requested by the site owner. There is no local résumé page or download.

## Verification

`npm run verify` checks all built HTML and the 26 expected routes, including legacy redirects. It verifies internal link and asset targets, fragment anchors, canonical and social metadata, one H1 per page, explicit image alternatives, current credential terminology, and résumé routing. Empty image alternatives are allowed for decorative images.

The script checks local output; it does not verify remote URLs or replace a browser review. Before publishing, review mobile and desktop layouts, keyboard navigation, readable contrast, external evidence links, and the accuracy of contribution and project-status claims.

## Content boundaries

`about-me/`, `project-descriptions/`, and `site-planning/` contain private working material, are ignored by Git, and are outside Astro's public build inputs. The local `site-planning/portfolio-evidence-map.md` records source support, claim boundaries, and unresolved evidence gaps; its contents are not published.

Keep project responsibilities distinct from employment titles, completed outcomes distinct from plans, and independent work distinct from professional production experience. Publish only reviewed copy and sanitized artifacts under `src/` and `public/`. Label reconstructed diagrams and synthetic examples at the point of use.
