import { useCallback, useEffect, useMemo, useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { kinds, photos, type ProjectKind, type ProjectPhoto } from '../../data/projects';

export type GalleryFilter = 'All' | ProjectKind;
const SHOWN = 11;

// For "All", take photos from each project folder in turn so one large folder does not fill the grid.
function mixed(): ProjectPhoto[] {
  const byFolder = new Map<string, ProjectPhoto[]>();
  photos.forEach((p) => byFolder.set(p.folder, [...(byFolder.get(p.folder) ?? []), p]));
  const order = ['Tunkey Solution', ...[...byFolder.keys()].filter((f) => f !== 'Tunkey Solution')];
  const out: ProjectPhoto[] = [];
  for (let i = 0; out.length < photos.length; i++) {
    let added = false;
    order.forEach((f) => {
      const item = byFolder.get(f)?.[i];
      if (item) {
        out.push(item);
        added = true;
      }
    });
    if (!added) break;
  }
  return out;
}

interface Props {
  filter: GalleryFilter;
  onFilter: (f: GalleryFilter) => void;
}

export default function ProjectGallery({ filter, onFilter }: Props) {
  const all = useMemo(mixed, []);
  const list = useMemo(() => (filter === 'All' ? all : all.filter((p) => p.kind === filter)), [all, filter]);
  const shown = list.slice(0, SHOWN);
  const [open, setOpen] = useState<number | null>(null);

  const step = useCallback(
    (d: number) => setOpen((i) => (i === null ? i : (i + d + list.length) % list.length)),
    [list.length]
  );

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(null);
      if (e.key === 'ArrowRight') step(1);
      if (e.key === 'ArrowLeft') step(-1);
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, step]);

  const current = open === null ? null : list[open];

  return (
    <>
      <div className="filters" role="group" aria-label="Filter projects by type">
        {(['All', ...kinds] as GalleryFilter[]).map((f) => (
          <button key={f} type="button" aria-pressed={filter === f} onClick={() => onFilter(f)}>
            {f}
          </button>
        ))}
      </div>

      <div className="gallery">
        {shown.map((p, i) => (
          <button key={p.src} type="button" className="gallery__item" onClick={() => setOpen(i)} aria-label={`Open photo: ${p.title}, ${p.location}`}>
            <img src={p.src} alt="" loading="lazy" />
            <span>
              {p.title}
              <small>{p.location}</small>
            </span>
          </button>
        ))}
      </div>

      <div className="gallery-foot">
        <span>
          Showing {shown.length} of {list.length} photos
        </span>
        <Link className="btn btn--ghost" to="/projects">
          Browse all project photos
        </Link>
      </div>

      {current && open !== null && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={`${current.title}, ${current.location}`}>
          <div className="lightbox__bar">
            <span>
              {current.title}, {current.location}
            </span>
            <button type="button" className="icon-btn" onClick={() => setOpen(null)} aria-label="Close photo" autoFocus>
              <X size={22} />
            </button>
          </div>
          <div className="lightbox__stage" onClick={() => setOpen(null)}>
            <img src={current.src} alt={`${current.title}, ${current.location}`} onClick={(e) => e.stopPropagation()} />
          </div>
          <div className="lightbox__nav">
            <button type="button" className="icon-btn" onClick={() => step(-1)} aria-label="Previous photo">
              <ChevronLeft size={22} />
            </button>
            <span style={{ alignSelf: 'center', minWidth: '5ch', textAlign: 'center' }}>
              {open + 1} / {list.length}
            </span>
            <button type="button" className="icon-btn" onClick={() => step(1)} aria-label="Next photo">
              <ChevronRight size={22} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
