/** Prefix a root-relative path with the GitHub Pages project base path. */
export function sitePath(path = '/'): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const route = path.startsWith('/') ? path : `/${path}`;
  return `${base}${route}`;
}
