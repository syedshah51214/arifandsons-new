import { useLocation, useNavigate } from 'react-router-dom';

export function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - 72;
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  window.scrollTo({ top, behavior: reduce ? 'auto' : 'smooth' });
}

/** Scroll to a home-page section from any page. */
export function useGoToSection() {
  const location = useLocation();
  const navigate = useNavigate();
  return (id: string) => {
    if (location.pathname === '/') scrollToSection(id);
    else navigate('/', { state: { scrollTo: id } });
  };
}
