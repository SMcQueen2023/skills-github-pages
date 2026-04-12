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

If Jekyll is not installed locally, use GitHub Actions or GitHub Pages to validate the rendered site.
