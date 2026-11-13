import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import mark from '../assets/brand/logo-mark-sm.webp';
import { QUOTE_LINK } from '../lib/contact';
import { useGoToSection } from '../lib/useGoToSection';
import { WhatsAppIcon } from './Icons';

const sections = [
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'projects', label: 'Projects' },
  { id: 'team', label: 'Team' },
  { id: 'contact', label: 'Contact' },
];

export default function Header({ hidden = false }: { hidden?: boolean }) {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const goTo = useGoToSection();

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const go = (id: string) => {
    setOpen(false);
    goTo(id);
  };

  return (
    <>
      <header id="main-header" className={`site-header${hidden && !open ? ' is-hidden' : ''}`}>
        <div className="wrap site-header__row">
          <Link to="/" className="brand" aria-label="Arif and Sons Construction Co., home" onClick={() => pathname === '/' && window.scrollTo({ top: 0 })}>
            <img src={mark} alt="" width={46} height={32} />
            <span className="brand__name">
              Arif and Sons
              <small>Construction Co.</small>
            </span>
          </Link>

          <nav className="nav" aria-label="Main">
            {sections.map((s) => (
              <button key={s.id} type="button" onClick={() => go(s.id)}>
                {s.label}
              </button>
            ))}
            <Link to="/projects" className={pathname === '/projects' ? 'is-active' : ''}>
              All photos
            </Link>
          </nav>

          <a className="btn btn--brick btn--sm site-header__cta" href={QUOTE_LINK} target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon size={18} />
            Get a quote
          </a>

          <button type="button" className="menu-btn" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)}>
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {open && (
        <nav className="mobile-menu" aria-label="Mobile">
          {sections.map((s) => (
            <button key={s.id} type="button" className="mobile-menu__link" onClick={() => go(s.id)}>
              {s.label}
            </button>
          ))}
          <Link to="/services">Service list</Link>
          <Link to="/projects">All photos</Link>
          <a className="btn btn--brick" href={QUOTE_LINK} target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon size={18} />
            Get a quote on WhatsApp
          </a>
        </nav>
      )}
    </>
  );
}
