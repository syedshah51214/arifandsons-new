// Dynamically gather images from src/assets/Services and group them by folder.
// Uses Vite's import.meta.glob with eager: true so the URLs are available at runtime.
type ProjectsMap = Record<string, string[]>;

const modules = import.meta.glob('../assets/Services/**/*.{jpg,jpeg,png,webp}', { as: 'url', eager: true }) as Record<string, string>;

const groups: ProjectsMap = {};

const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/[()]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

for (const key in modules) {
  // key example: '../assets/Services/Commerical Project/img1.jpg'
  const parts = key.split('/');
  const folder = parts[parts.length - 2] || 'misc';
  const id = slugify(folder);
  groups[id] = groups[id] || [];
  groups[id].push(modules[key]);
}

export const arifServiceProjects = groups as Record<string, string[]>;

// Also export a mapping of id -> human-friendly folder name
export const arifServiceTitles: Record<string, string> = Object.keys(groups).reduce((acc, id) => {
  // try to recover original folder name from module keys
  const sampleKey = Object.keys(modules).find(k => k.includes(id.replace(/-/g, ' ')));
  acc[id] = sampleKey ? (sampleKey.split('/').slice(-2, -1)[0]) : id.replace(/-/g, ' ');
  return acc;
}, {} as Record<string, string>);

// If no images found, ensure at least an empty object

export default arifServiceProjects;
