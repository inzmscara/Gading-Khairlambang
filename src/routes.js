// Central route map: view name <-> clean URL path (no hashes).
export const VIEW_ORDER = ['home', 'about', 'work', 'path', 'contact'];

export const VIEW_PATHS = {
  home: '/',
  about: '/about',
  work: '/work',
  path: '/journey',
  contact: '/contact',
};

const PATH_VIEWS = Object.fromEntries(
  Object.entries(VIEW_PATHS).map(([view, path]) => [path, view])
);

export function viewFromPath(pathname) {
  const p = (pathname || '').replace(/\/+$/, '') || '/';
  return PATH_VIEWS[p] || 'home';
}
