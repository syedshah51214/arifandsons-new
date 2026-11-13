import { Link } from 'react-router-dom';
import localInfo from '../config/localInfo';
import { EMAIL, PHONE_DISPLAY, PHONE_TEL, SOCIALS } from '../lib/contact';
import { useGoToSection } from '../lib/useGoToSection';

export default function Footer() {
  const goTo = useGoToSection();
  const link = (id: string, label: string) => (
    <li>
      <button type="button" className="linklike" onClick={() => goTo(id)}>
        {label}
      </button>
    </li>
  );

  return (
    <footer className="site-footer">
      <div className="wrap">
        <p className="site-footer__big" aria-hidden="true">
          Arif and Sons
        </p>
        <div className="site-footer__grid">
          <div>
            <h3>Arif and Sons Construction Co.</h3>
            <p style={{ margin: 0, maxWidth: '34ch' }}>
              Houses, plazas and interiors across Lahore. Building since 1995.
            </p>
          </div>
          <div>
            <h3>Company</h3>
            <ul>
              {link('about', 'About')}
              {link('process', 'How we work')}
              {link('team', 'Team')}
              {link('clients', 'Where we build')}
              {link('questions', 'Questions')}
            </ul>
          </div>
          <div>
            <h3>Work</h3>
            <ul>
              {link('services', 'Services')}
              <li><Link to="/services">Full service list</Link></li>
              <li><Link to="/featured">Featured homes</Link></li>
              <li><Link to="/projects">All project photos</Link></li>
            </ul>
          </div>
          <div>
            <h3>Contact</h3>
            <ul>
              <li><a href={`tel:${PHONE_TEL}`}>{PHONE_DISPLAY}</a></li>
              <li><a href={`mailto:${EMAIL}`}>{EMAIL}</a></li>
              <li>{localInfo.addressLine}</li>
              <li>
                <a href={localInfo.googleMapsSearchUrl} target="_blank" rel="noopener noreferrer">
                  Find us on Google Maps
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="site-footer__legal">
          <span>© {new Date().getFullYear()} Arif and Sons Construction Co. All rights reserved.</span>
          <span style={{ display: 'flex', gap: '0.4rem 1.25rem', flexWrap: 'wrap' }}>
            {SOCIALS.map((s) => (
              <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer">
                {s.name}
              </a>
            ))}
          </span>
        </div>
      </div>
    </footer>
  );
}
