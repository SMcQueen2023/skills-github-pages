# skills-github-pages

GitHub Pages portfolio site for Scott McQueen.

## Public site

- Home: `index.md`
- About: `about.md`
- Projects: `projects.md`
- Experience: `experience.md`
- Certifications: `certifications.md`
- Contact: `contact.md`

## Build and deploy

- Jekyll configuration lives in `_config.yml`.
- A GitHub Actions workflow in `.github/workflows/pages.yml` builds and deploys the site on pushes to `main`.
- For project-site pathing, the configured base URL is `/skills-github-pages`.

## Private source material

The folders `about-me/`, `project-descriptions/`, and `site-planning/` are private working context and should not be published. They are ignored by `.gitignore` and excluded from Jekyll output.

## Local preview

If Ruby and Bundler are available locally:

```bash
bundle exec jekyll serve --baseurl '/skills-github-pages'
```

If Jekyll is not installed locally, use Docker:

```bash
docker build -t skills-github-pages .
docker run --rm -p 4000:4000 skills-github-pages
```

The local preview will be available at `http://localhost:4000/skills-github-pages/`.

If you want the container to reflect local file edits without rebuilding the image each time, run it with a bind mount instead:

```bash
docker run --rm -p 4000:4000 -v "${PWD}:/srv/jekyll" skills-github-pages
```

For the shortest local preview workflow, use Docker Compose:

```bash
docker compose up --build
```

The compose setup mounts the repo into the container so content and CSS edits are reflected without rebuilding the image each time.

The Docker image uses the official GitHub Pages Jekyll runtime so the local preview stays aligned with the deployment build.
