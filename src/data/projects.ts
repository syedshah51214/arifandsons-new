// Site photos, grouped by the folders in src/assets/Services.
// To add a project: drop its photos into a new folder there and add one entry to `folders` below.
export type ProjectKind = 'Residential' | 'Commercial' | 'Turnkey' | 'Finishing and renovation';

export interface ProjectPhoto {
  /** Full-size photo, for the lightbox. */
  src: string;
  /** Small copy, for grids. Made by scripts/optimize_images.py. */
  thumb: string;
  title: string;
  location: string;
  kind: ProjectKind;
  folder: string;
}

const folders: Record<string, { title: string; location: string; kind: ProjectKind }> = {
  'Commerical Flats Renovation (Johar Town)': { title: 'Commercial flats renovation', location: 'Johar Town', kind: 'Finishing and renovation' },
  'Commerical Plaza Construction (Bahria Town Lahore)': { title: 'Commercial plaza construction', location: 'Bahria Town', kind: 'Commercial' },
  'Commerical Plaza Roof Top (Lake city)': { title: 'Plaza rooftop works', location: 'Lake City', kind: 'Commercial' },
  'Flats Construction (Bahria Town)': { title: 'Flats construction', location: 'Bahria Town', kind: 'Residential' },
  'Plaza Construction(DHA LAHORE)': { title: 'Plaza construction', location: 'DHA Lahore', kind: 'Commercial' },
  'Residenial Construction (Park Avenue)': { title: 'House construction', location: 'Park Avenue', kind: 'Residential' },
  'Residential Finishing (DHA LAHORE)': { title: 'House finishing', location: 'DHA Lahore', kind: 'Finishing and renovation' },
  'Tunkey Solution': { title: 'Turnkey home', location: 'Lahore', kind: 'Turnkey' },
  'Washroom Renovation': { title: 'Washroom renovation', location: 'Lahore', kind: 'Finishing and renovation' },
  'Wood Work Renovation (Park Avenue)': { title: 'Woodwork and interiors', location: 'Park Avenue', kind: 'Finishing and renovation' },
};

const modules = import.meta.glob('../assets/Services/**/*.{jpg,jpeg,png,webp}', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>;

const thumbModules = import.meta.glob('../assets/thumbs/Services/**/*.webp', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>;

const thumbFor = (path: string) =>
  thumbModules[path.replace('/assets/Services/', '/assets/thumbs/Services/').replace(/\.[^.]+$/, '.webp')] ?? modules[path];

// Turnkey photos carry their own description in the file name, e.g. "10 Marla Bahria TOWN.jpg"
const titleCase = (s: string) =>
  s.toLowerCase().replace(/\b[a-z]/g, (c) => c.toUpperCase()).replace(/\bDha\b/, 'DHA');

function turnkeyLabel(file: string) {
  const name = file.replace(/\.[^.]+$/, '').replace(/\(\d+\)/g, '').trim();
  const m = name.match(/^(\d+)\s*marla\s*(.*)$/i);
  if (!m) return { title: 'Turnkey home', location: 'Lahore' };
  const rest = m[2].replace(/\b\d+\b/g, '').replace(/under construction/i, '').trim();
  const building = /under construction/i.test(name);
  return {
    title: `${m[1]} marla house${building ? ', under construction' : ''}`,
    location: rest ? titleCase(rest) : 'Lahore',
  };
}

export const photos: ProjectPhoto[] = Object.keys(modules)
  .sort()
  .map((path) => {
    const parts = path.split('/');
    const folder = parts[parts.length - 2];
    const file = parts[parts.length - 1];
    const meta = folders[folder] ?? { title: folder, location: 'Lahore', kind: 'Residential' as ProjectKind };
    const label = folder === 'Tunkey Solution' ? turnkeyLabel(file) : meta;
    return { src: modules[path], thumb: thumbFor(path), title: label.title, location: label.location, kind: meta.kind, folder };
  });

export const kinds: ProjectKind[] = ['Turnkey', 'Residential', 'Commercial', 'Finishing and renovation'];

export const countByKind = (kind: ProjectKind) => photos.filter((p) => p.kind === kind).length;

export const firstOf = (folder: string, index = 0) =>
  photos.filter((p) => p.folder === folder)[index]?.src ?? photos[0]?.src ?? '';

export const findByFile = (needle: string) =>
  Object.keys(modules).find((k) => k.toLowerCase().includes(needle.toLowerCase()));

export const urlByFile = (needle: string) => {
  const k = findByFile(needle);
  return k ? modules[k] : photos[0]?.src ?? '';
};

/** Full-size URL -> small copy, for pages that only know the full URL. */
export const thumbOf: Record<string, string> = Object.fromEntries(photos.map((p) => [p.src, p.thumb]));
