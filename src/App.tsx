import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Helmet } from './lib/helmetFallback';
import localInfo from './config/localInfo';
import Home from './pages/Home';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Featured from './pages/Featured';

function App() {
  const { pathname, state } = useLocation();
  // Each page opens at the top, unless we are heading to a home-page section.
  useEffect(() => {
    if (!(state as { scrollTo?: string } | null)?.scrollTo) window.scrollTo(0, 0);
  }, [pathname, state]);

  return (
    <>
      <Helmet>
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          name: localInfo.name,
          description: localInfo.description,
          telephone: localInfo.telephone,
          email: localInfo.email,
          url: localInfo.url,
          address: {
            '@type': 'PostalAddress',
            streetAddress: localInfo.address.streetAddress,
            addressLocality: localInfo.address.addressLocality,
            addressRegion: localInfo.address.addressRegion,
            postalCode: localInfo.address.postalCode,
            addressCountry: localInfo.address.addressCountry,
          },
          geo: {
            '@type': 'GeoCoordinates',
            latitude: localInfo.geo.latitude,
            longitude: localInfo.geo.longitude,
          },
          areaServed: localInfo.areasServed,
          openingHours: localInfo.openingHours,
        })}</script>
      </Helmet>

      <Routes>
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/featured" element={<Featured />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
