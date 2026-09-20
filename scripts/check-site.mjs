import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const output = new URL('../dist/', import.meta.url).pathname.replace(/^\/(?=[A-Za-z]:\/)/, '');
const base = '/skills-github-pages';
const workSlugs = [
  'reporting-modernization', 'reconciliation-automation',
  'portfolio-governance-platform', 'sas-to-azure-migration',
  'enterprise-data-modeling', 'external-analytics-enablement',
];
const independentSlugs = [
  'everything-is-random', 'parqcel', 'consultation-workflow-automation',
  'gcp-analytics-engineering', 'marketing-campaign-analysis', 'cloud-engineer-site',
];
const routes = [
  '/', '/about/', '/work/', '/projects/', '/experience/', '/certifications/', '/contact/',
  ...workSlugs.map((slug) => `/work/${slug}/`),
  ...workSlugs.map((slug) => `/projects/${slug}/`), // Previous public URLs.
  ...independentSlugs.map((slug) => `/projects/${slug}/`),
];

const errors = [];
const htmlFiles = [];
function walk(dir) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const file = join(dir, entry.name);
    if (entry.isDirectory()) walk(file);
    else if (entry.name.endsWith('.html')) htmlFiles.push(file);
  }
}

for (const route of routes) {
  const file = join(output, route, 'index.html');
  if (!existsSync(file)) errors.push(`Missing route: ${route}`);
}
for (const slug of workSlugs) {
  const file = join(output, 'projects', slug, 'index.html');
  if (!existsSync(file)) continue;
  const html = readFileSync(file, 'utf8');
  if (!html.includes(`http-equiv="refresh" content="0; url=${base}/work/${slug}/"`)) {
    errors.push(`Old work URL does not redirect to its new route: ${slug}`);
  }
}
walk(output);

for (const file of htmlFiles) {
  const html = readFileSync(file, 'utf8');
  if ((html.match(/<h1(?:\s|>)/g) ?? []).length !== 1) errors.push(`Expected one H1: ${file}`);
  if (!html.includes('rel="canonical"')) errors.push(`Missing canonical URL: ${file}`);
  if (!html.includes('property="og:image"')) errors.push(`Missing social image: ${file}`);

  for (const match of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
    const url = match[1].replaceAll('&amp;', '&');
    if (/^(?:https?:|mailto:|tel:|#|data:)/.test(url)) continue;
    if (!url.startsWith(`${base}/`)) {
      errors.push(`Path missing base in ${file}: ${url}`);
      continue;
    }
    const pathname = url.split(/[?#]/, 1)[0].slice(base.length);
    const target = join(output, pathname, pathname.endsWith('/') ? 'index.html' : '');
    if (!existsSync(target)) errors.push(`Unresolved path in ${file}: ${url}`);
  }
}

if (errors.length) {
  console.error(errors.join('\n'));
  process.exitCode = 1;
} else {
  console.log(`Verified ${htmlFiles.length} pages, ${routes.length} expected routes, metadata, and local links.`);
}
