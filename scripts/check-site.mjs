import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const output = new URL('../dist/', import.meta.url).pathname.replace(/^\/(?=[A-Za-z]:\/)/, '');
const base = '/skills-github-pages';
const routes = [
  '/', '/about/', '/projects/', '/experience/', '/certifications/', '/contact/',
  '/projects/reporting-modernization/', '/projects/reconciliation-automation/',
  '/projects/portfolio-governance-platform/', '/projects/enterprise-data-modeling/',
  '/projects/external-analytics-enablement/', '/projects/consultation-workflow-automation/',
  '/projects/gcp-analytics-engineering/', '/projects/parqcel/',
  '/projects/marketing-campaign-analysis/', '/projects/cloud-engineer-site/',
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
  console.log(`Verified ${htmlFiles.length} pages, ${routes.length} legacy routes, metadata, and local links.`);
}
