import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { isAbsolute, join, relative, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const output = fileURLToPath(new URL('../dist/', import.meta.url));
const site = 'https://smcqueen2023.github.io';
const base = '/skills-github-pages';
const workSlugs = [
  'reporting-modernization', 'reconciliation-automation',
  'portfolio-governance-platform', 'sas-to-azure-migration',
  'enterprise-data-modeling', 'external-analytics-enablement',
];
const independentSlugs = [
  'finance-analytics-platform', 'everything-is-random', 'parqcel',
  'consultation-workflow-automation', 'gcp-analytics-engineering',
  'marketing-campaign-analysis', 'cloud-engineer-site',
];
const routes = [
  '/', '/about/', '/work/', '/projects/', '/experience/', '/certifications/', '/contact/',
  ...workSlugs.map((slug) => `/work/${slug}/`),
  ...workSlugs.map((slug) => `/projects/${slug}/`), // Preserve earlier public URLs.
  ...independentSlugs.map((slug) => `/projects/${slug}/`),
];
const redirects = new Map(workSlugs.map((slug) => [
  `/projects/${slug}/`, `${base}/work/${slug}/`,
]));

const errors = new Set();
const pages = new Map();
let localReferences = 0;
let fragments = 0;
const fail = (route, message) => errors.add(`${route}: ${message}`);
const resumePattern = /(?:^|[\/_.\s-])(?:r[ée]sum[ée]|curriculum[\s_-]*vitae|cv)(?=$|[\/_.\s-])/i;

function decodeEntities(value) {
  const named = { amp: '&', quot: '"', apos: "'", lt: '<', gt: '>', nbsp: ' ' };
  return value.replace(/&(#x[0-9a-f]+|#\d+|amp|quot|apos|lt|gt|nbsp);/gi, (_, entity) => {
    if (entity[0] !== '#') return named[entity.toLowerCase()];
    const code = entity[1].toLowerCase() === 'x'
      ? parseInt(entity.slice(2), 16) : parseInt(entity.slice(1), 10);
    return code > 0 && code <= 0x10ffff ? String.fromCodePoint(code) : '\uFFFD';
  });
}

function attributes(source) {
  const attrs = new Map();
  for (const match of source.matchAll(/([^\s=/>]+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+)))?/g)) {
    attrs.set(match[1].toLowerCase(), decodeEntities(match[2] ?? match[3] ?? match[4] ?? ''));
  }
  return attrs;
}

function readPage(file) {
  const html = readFileSync(file, 'utf8');
  // Scripts, styles, and comments may contain strings that resemble HTML tags.
  const markup = html.replace(/<!--[\s\S]*?-->|<(script|style)\b[^>]*>[\s\S]*?<\/\1\s*>/gi, '');
  const tags = [...markup.matchAll(/<([a-z][a-z0-9:-]*)\b([^>]*?)>/gi)]
    .map((match) => ({ name: match[1].toLowerCase(), attrs: attributes(match[2]) }));
  const ids = new Set();
  const route = '/' + relative(output, file).split(sep).join('/').replace(/index\.html$/, '');
  for (const tag of tags) {
    const id = tag.attrs.get('id');
    if (id) {
      if (ids.has(id)) fail(route, `duplicate id "${id}"`);
      ids.add(id);
    }
    if (tag.name === 'a' && tag.attrs.get('name')) ids.add(tag.attrs.get('name'));
  }
  const page = { file, route, url: new URL(base + route, site), markup, tags, ids };
  pages.set(resolve(file), page);
  return page;
}

function walk(dir) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const file = join(dir, entry.name);
    if (entry.isDirectory()) walk(file);
    else if (entry.name.endsWith('.html')) readPage(file);
  }
}

function parseUrl(value, page, label) {
  try { return new URL(value, page.url); }
  catch { fail(page.route, `invalid ${label}: ${value}`); return null; }
}

function isLocal(url) {
  return url.origin === site && (url.pathname === base || url.pathname.startsWith(base + '/'));
}

function checkReference(value, page, label = 'link') {
  if (!value.trim()) { fail(page.route, `empty ${label}`); return; }
  const url = parseUrl(value, page, label);
  if (!url) return;
  if (value.startsWith('/') && !value.startsWith('//') && !isLocal(url)) {
    fail(page.route, `root-relative path missing ${base}: ${value}`);
    return;
  }
  if (!isLocal(url)) return;
  localReferences += 1;

  let path;
  try { path = decodeURIComponent(url.pathname.slice(base.length)); }
  catch { fail(page.route, `invalid path encoding: ${value}`); return; }
  const targetPath = resolve(output, '.' + (path || '/'));
  const withinOutput = relative(output, targetPath);
  if (withinOutput === '..' || withinOutput.startsWith('..' + sep) || isAbsolute(withinOutput)) {
    fail(page.route, `path escapes build output: ${value}`);
    return;
  }
  const target = existsSync(targetPath) && statSync(targetPath).isDirectory()
    ? join(targetPath, 'index.html') : targetPath;
  if (!existsSync(target)) {
    fail(page.route, `unresolved ${label}: ${value}`);
    return;
  }

  if (url.hash && target.endsWith('.html')) {
    let fragment;
    try { fragment = decodeURIComponent(url.hash.slice(1).split(':~:text=')[0]); }
    catch { fail(page.route, `invalid fragment encoding: ${value}`); return; }
    if (fragment) {
      fragments += 1;
      const targetPage = pages.get(resolve(target));
      if (!targetPage?.ids.has(fragment)) fail(page.route, `missing fragment target: ${value}`);
    }
  }
}

function metadata(page, selector, value) {
  return page.tags.filter((tag) => tag.name === 'meta' && tag.attrs.get(selector) === value)
    .map((tag) => tag.attrs.get('content') ?? '');
}

function requireMeta(page, selector, key) {
  const values = metadata(page, selector, key);
  if (values.length !== 1 || !values[0].trim()) {
    fail(page.route, `expected one nonempty ${key} metadata value`);
    return null;
  }
  return values[0];
}

if (!existsSync(output)) {
  console.error('Build output is missing. Run npm run build before npm run verify.');
  process.exit(1);
}
walk(output);

for (const route of routes) {
  if (!existsSync(join(output, route, 'index.html'))) fail(route, 'missing expected route');
}

for (const page of pages.values()) {
  if (resumePattern.test(page.route)) fail(page.route, 'local résumé pages are not authorized; use LinkedIn requests');
  if (page.tags.filter((tag) => tag.name === 'h1').length !== 1) fail(page.route, 'expected exactly one H1');
  const title = page.markup.match(/<title\b[^>]*>([\s\S]*?)<\/title>/i)?.[1];
  if (!title?.trim()) fail(page.route, 'missing or empty page title');
  if (/Azure\s+Data\s+Engineer(?:\s+Associate)?/i.test(decodeEntities(page.markup.replace(/<[^>]*>/g, ' ')))) {
    fail(page.route, 'obsolete Azure Data Engineer credential; use Fabric Data Engineer Associate');
  }

  const destination = redirects.get(page.route);
  const expectedCanonical = new URL(destination ?? base + page.route, site).href;
  const canonicals = page.tags.filter((tag) => tag.name === 'link'
    && (tag.attrs.get('rel') ?? '').split(/\s+/).includes('canonical'));
  if (canonicals.length !== 1 || canonicals[0].attrs.get('href') !== expectedCanonical) {
    fail(page.route, `canonical URL must be ${expectedCanonical}`);
  }

  const socialImage = requireMeta(page, 'property', 'og:image');
  if (socialImage) {
    if (!/^https:\/\//.test(socialImage)) fail(page.route, 'social image must use an absolute HTTPS URL');
    checkReference(socialImage, page, 'social image');
  }
  if (destination) {
    const refresh = requireMeta(page, 'http-equiv', 'refresh');
    const refreshTarget = refresh?.match(/^\s*0\s*;\s*url\s*=\s*(.+?)\s*$/i)?.[1];
    if (refreshTarget !== destination) fail(page.route, `legacy route must immediately redirect to ${destination}`);
    if (!page.tags.some((tag) => tag.name === 'a' && tag.attrs.get('href') === destination)) {
      fail(page.route, 'legacy redirect needs a visible fallback link');
    }
    checkReference(destination, page, 'redirect');
  } else {
    requireMeta(page, 'name', 'description');
    requireMeta(page, 'property', 'og:title');
    requireMeta(page, 'property', 'og:description');
    const socialUrl = requireMeta(page, 'property', 'og:url');
    if (socialUrl && socialUrl !== expectedCanonical) fail(page.route, 'og:url must match canonical');
  }

  for (const tag of page.tags) {
    if (tag.name === 'img' && !tag.attrs.has('alt')) {
      fail(page.route, `image is missing alt text: ${tag.attrs.get('src') ?? '(no src)'}`);
    }
    for (const attribute of ['href', 'src', 'poster']) {
      if (tag.attrs.has(attribute)) checkReference(tag.attrs.get(attribute), page, attribute);
    }
  }
  for (const anchor of page.markup.matchAll(/<a\b([^>]*)>([\s\S]*?)<\/a>/gi)) {
    const attrs = attributes(anchor[1]);
    const href = attrs.get('href');
    if (!href) continue;
    const url = parseUrl(href, page, 'link');
    if (!url || !isLocal(url)) continue;
    const label = decodeEntities(anchor[2].replace(/<[^>]*>/g, ' '));
    let pathname = url.pathname;
    try { pathname = decodeURIComponent(pathname); } catch { /* Reported by checkReference. */ }
    if (resumePattern.test(pathname) || resumePattern.test(label)) {
      fail(page.route, `local résumé link/download is not authorized: ${href}; direct requests to LinkedIn`);
    }
  }
}

if (errors.size) {
  console.error([...errors].join('\n'));
  process.exitCode = 1;
} else {
  console.log(`Verified ${pages.size} pages and ${routes.length} expected routes, including legacy redirects.`);
  console.log(`Checked ${localReferences} local references and ${fragments} fragments, metadata, image alternatives, heading structure, credential copy, and résumé routing.`);
}
