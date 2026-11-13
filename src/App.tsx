import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Featured from './pages/Featured';
import { applySeo } from './seo';

function App() {
  const { pathname, state } = useLocation();

  // Each page opens at the top, unless we are heading to a home-page section.
  useEffect(() => {
    if (!(state as { scrollTo?: string } | null)?.scrollTo) window.scrollTo(0, 0);
  }, [pathname, state]);

  useEffect(() => applySeo(pathname), [pathname]);

  return (
    <Routes>
      <Route path="/services" element={<Services />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/featured" element={<Featured />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
}

export default App;
