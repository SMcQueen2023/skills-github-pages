# Scott McQueen — Decision File

Personal site for Scott McQueen's business intelligence, reporting modernization, automation, and technical delivery work. It is built with [Astro](https://astro.build/) as a static site and deployed to GitHub Pages.

## Run locally

Install Node.js 22.12 or newer, then run:

```bash
npm ci
npm run dev
```

The development server uses the project base path at `/skills-github-pages/`. For a production check:

```bash
npm run build
npm run verify
npm run preview
```

The build writes `dist/`. The verify script checks route parity, metadata, and local links. The GitHub Actions workflow in `.github/workflows/pages.yml` runs both steps and deploys that directory on pushes to `main`.

## Source structure

- `src/pages/work/` — professional delivery cases and the Work index.
- `src/pages/projects/` — independent Projects index, case pages, and legacy Work redirects.
- `src/data/projects.ts` — professional case content and Work route slugs.
- `src/data/standaloneProjects.ts` — independent project content, led by Everything is Random.
- `src/layouts/Base.astro` — shared navigation, footer, and metadata.
- `src/styles/global.css` — visual system and responsive layout.
- `public/assets/illustrations/` — original, sanitized process schematics.

The public site remains at `https://smcqueen2023.github.io/skills-github-pages/`. Preserve the `/skills-github-pages` base. Professional cases live at `/work/{slug}/`; independent builds live at `/projects/{slug}/`. Former professional `/projects/{slug}/` URLs have static redirect pages so existing links still reach the cases.

## Content boundaries

`about-me/`, `project-descriptions/`, and `site-planning/` contain private working material. They are ignored by Git and are outside Astro's public build inputs. Publish only reviewed copy and sanitized visuals under `src/` and `public/`.
