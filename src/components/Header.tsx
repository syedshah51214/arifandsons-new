import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Phone, ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';
import logo from '../assets/logo.jpg';

export default function Header() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const [mobileOpen, setMobileOpen] = useState(false);

  const navigate = useNavigate();

  const handleHomeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isHomePage) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
      setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100);
    }
  };

  // Dropdowns use CSS group-hover for stable hover behavior (prevents accidental flicker when moving pointer)


  const handleScrollToSection = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    // If not on home page, navigate to home first then scroll
    if (!isHomePage) {
      navigate('/');
      // Wait for navigation to complete
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          setTimeout(() => {
            const headerOffset = 100;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
          }, 100);
        }
      }, 300);
    } else {
      // Already on home page, just scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const headerOffset = 100;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
      }, 50);
    }
  };

  // Development-only: header-only overflow detector to find small overflows
  useEffect(() => {
    if (process.env.NODE_ENV === 'production') return;

    const ensureStyle = () => {
      if (!document.getElementById('overflow-offender-style')) {
        const s = document.createElement('style');
        s.id = 'overflow-offender-style';
        s.innerHTML = `
          .overflow-offender-dev{ outline: 3px solid rgba(255,0,0,0.95) !important; box-shadow: inset 0 0 0 3px rgba(255,0,0,0.2), 0 0 12px rgba(255,0,0,0.15) !important; z-index: 99999 !important; }
        `;
        document.head.appendChild(s);
      }
    };

    const detectHeaderOverflow = () => {
      ensureStyle();
      const w = window.innerWidth;
      const headerEl = document.querySelector('header') || document.querySelector('#main-header');
      if (!headerEl) return;

      const offenders: HTMLElement[] = [];
      headerEl.querySelectorAll('*').forEach((el) => {
        if (!(el instanceof HTMLElement)) return;
        const rect = el.getBoundingClientRect();
        if (rect.right > w + 1 || rect.left < -1) offenders.push(el);
      });

      // clear previous
      headerEl.querySelectorAll('.overflow-offender-dev').forEach((el) => el.classList.remove('overflow-offender-dev'));

      if (offenders.length > 0) {
        console.warn('Header overflow offenders detected:');
        offenders.forEach((el) => {
          el.classList.add('overflow-offender-dev');
          console.warn(`${el.tagName.toLowerCase()}${el.id ? '#' + el.id : ''}${el.className ? '.' + el.className.split(' ').filter(Boolean).join('.') : ''}`, el.getBoundingClientRect());
        });
      }
    };

    // Run once and slightly delayed after route state changes so layout settles
    const timeout = setTimeout(detectHeaderOverflow, 75);
    window.addEventListener('resize', detectHeaderOverflow);
    return () => {
      clearTimeout(timeout);
      window.removeEventListener('resize', detectHeaderOverflow);
    };
  }, [location.pathname, mobileOpen]);

  return (
    <nav id="main-header" className="fixed top-0 w-full box-border bg-gray-900/95 backdrop-blur-sm border-b border-amber-500/10 shadow-lg z-50 overflow-x-hidden" style={{ left: 0, right: 0, width: '100%' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="Arif & Sons - Construction company Lahore" className="h-8 sm:h-10 w-auto object-contain" />
            <span className="hidden sm:inline text-lg font-semibold text-amber-500">Arif & Sons</span>
          </Link>
          
          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            <Link to="/" onClick={handleHomeClick} className="text-gray-300 hover:text-amber-400 transition-all duration-300 font-medium relative group">
              <span>Home</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-500 group-hover:w-full transition-all duration-300"></span>
            </Link>

            {/* About Us Dropdown */}
            <div className="relative group">
              <button className="text-gray-300 hover:text-amber-400 transition-all duration-300 font-medium flex items-center gap-1 group">
                <span>About Us</span>
                <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
              </button>
              <div className="absolute top-full left-0 mt-0 min-w-[200px] w-56 bg-gray-900/95 backdrop-blur-lg border border-gray-800 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:pointer-events-auto group-focus-within:opacity-100 group-focus-within:visible group-focus-within:pointer-events-auto transition-all duration-150">
                <Link to="/" onClick={(e) => handleScrollToSection(e, 'company-overview')} className="block px-5 py-3 text-gray-300 hover:text-amber-400 hover:bg-gray-800/50 whitespace-normal">Company Overview</Link>
                <Link to="/" onClick={(e) => handleScrollToSection(e, 'our-team')} className="block px-5 py-3 text-gray-300 hover:text-amber-400 hover:bg-gray-800/50 whitespace-normal">Our Team</Link>
                <Link to="/" onClick={(e) => handleScrollToSection(e, 'vision-mission')} className="block px-5 py-3 text-gray-300 hover:text-amber-400 hover:bg-gray-800/50 whitespace-normal">Vision & Mission</Link>
                <Link to="/" onClick={(e) => handleScrollToSection(e, 'why-choose')} className="block px-5 py-3 text-gray-300 hover:text-amber-400 hover:bg-gray-800/50 whitespace-normal">Why Choose Us</Link>
              </div>
            </div>

            <div className="relative group">
              <button className="text-gray-300 hover:text-amber-400 transition-all duration-300 font-medium flex items-center gap-1 group">
                <span>Services</span>
                <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
              </button>
              <div className="absolute top-full left-0 mt-0 min-w-[220px] w-64 bg-gray-900/95 backdrop-blur-lg border border-gray-800 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:pointer-events-auto group-focus-within:opacity-100 group-focus-within:visible group-focus-within:pointer-events-auto transition-all duration-150">
                {/* Service items that open WhatsApp with prefilled message */}
                {[
                  'Accessory building construction',
                  'Basement waterproofing',
                  'Bathroom remodelling',
                  'Building construction',
                  'Civil engineering consulting',
                  'Concrete construction',
                  'Construction management',
                  'Construction site excavation',
                  'Exterior structural repairs',
                  'Foundation installation',
                  'Home building',
                  'Home renovations',
                  'Floor fitting',
                  'Interior structural repairs',
                  'Exterior painting',
                ].map((svc) => (
                  <a
                    key={svc}
                    href={`https://wa.me/923258579677?text=${encodeURIComponent(`Hello Arif and Sons, I am interested in ${svc}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-5 py-3 text-gray-300 hover:text-amber-400 hover:bg-gray-800/50 whitespace-normal"
                  >
                    {svc}
                  </a>
                ))}
              </div>
            </div>

            {/* Projects Dropdown */}
            <div className="relative group">
              <Link to="/projects" className="text-gray-300 hover:text-amber-400 transition-all duration-300 font-medium flex items-center gap-1 group">
                <span>Projects</span>
                <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
              </Link>
              <div className="absolute top-full left-0 mt-0 min-w-[200px] w-48 bg-gray-900/95 backdrop-blur-lg border border-gray-800 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:pointer-events-auto group-focus-within:opacity-100 group-focus-within:visible group-focus-within:pointer-events-auto transition-all duration-150">
                <Link to="/featured" className="block px-5 py-3 text-gray-300 hover:text-amber-400 hover:bg-gray-800/50 whitespace-normal">Featured Projects</Link>
                <Link to="/projects" className="block px-5 py-3 text-gray-300 hover:text-amber-400 hover:bg-gray-800/50 whitespace-normal">All Projects</Link>
              </div>
            </div>

            <Link to="/" onClick={(e) => handleScrollToSection(e, 'clients')} className="text-gray-300 hover:text-amber-400 font-medium">
              <span>Clients</span>
            </Link>
            
          </div>
          
          {/* Social Media + Contact Us Buttons */}
          <div className="hidden md:flex items-center gap-3">
            {/* Social Media Links */}
            <div className="flex gap-2">
              <a href="https://facebook.com/arifandsonsconstruction" target="_blank" rel="noopener noreferrer" className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full" aria-label="Facebook">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/engineersuleiman05/" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 text-white p-2 rounded-full" aria-label="Instagram">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.299.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.299 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.299-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.299-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"/>
                </svg>
              </a>
              <a href="https://www.tiktok.com/@engineersalman05" target="_blank" rel="noopener noreferrer" className="bg-gray-700 hover:bg-gray-600 text-white p-2 rounded-full" aria-label="TikTok">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 11-5.77-1.39 2.93 2.93 0 011.59-2.68V9.01a6.35 6.35 0 00-1.25.12 6.72 6.72 0 00-5.94 6.67c0 3.71 3.01 6.72 6.72 6.72 3.71 0 6.72-3.01 6.72-6.72v-2.04a6.76 6.76 0 003.77 1.13V11.2c-.49-.1-.96-.27-1.41-.51z"/>
                </svg>
              </a>
            </div>
            
            {/* Call to Action Button (same as homepage) */}
            <div className="hidden lg:block">
              <a href="https://wa.me/923258579677?text=Hello%20Arif%20%26%20Sons%2C%20I%20need%20a%20quote" target="_blank" rel="noopener noreferrer"
                className="relative inline-flex items-center justify-center px-6 py-2.5 lg:px-8 lg:py-3 font-medium overflow-hidden group bg-amber-500 rounded-xl hover:bg-amber-600 transition-all duration-300 mr-4">
                <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-0 h-0 pointer-events-none transition-all duration-500 ease-out bg-amber-700 rounded-full group-hover:w-56 group-hover:h-56"></span>
                <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-black"></span>
                <span className="relative text-gray-900 group-hover:text-white transition-colors duration-300 flex items-center gap-2">
                  Get Quote
                </span>
              </a>
            </div>

            {/* Contact Us Button */}
            <Link to="/" onClick={(e) => handleScrollToSection(e, 'contact')}
               className="inline-flex items-center gap-2 bg-amber-500 text-gray-900 px-4 py-2 rounded-lg hover:bg-amber-400 font-medium"
            >
              <Phone className="w-4 h-4" />
              <span>Contact Us</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu" className="p-2 rounded-md text-gray-300 hover:text-amber-400 focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

  {/* Mobile Menu Dropdown */}
  {mobileOpen && (
    <div className="md:hidden bg-gray-800/95 backdrop-blur-lg border-t border-gray-700 absolute top-20 left-0 right-0 z-40">
      <nav className="flex flex-col p-4">
        <a href="#" onClick={(e) => { e.preventDefault(); handleHomeClick(e as any); navigate('/'); setMobileOpen(false); }} className="text-base text-gray-200 hover:text-amber-400 transition-colors py-2 px-3 rounded">Home</a>
        <button onClick={(e) => { handleScrollToSection(e as any, 'company-overview'); setMobileOpen(false); }} className="text-left text-base text-gray-200 hover:text-amber-400 transition-colors py-2 px-3 rounded">Company Overview</button>
        <button onClick={(e) => { handleScrollToSection(e as any, 'our-team'); setMobileOpen(false); }} className="text-left text-base text-gray-200 hover:text-amber-400 transition-colors py-2 px-3 rounded">Our Team</button>
        <a href="#" onClick={(e) => { e.preventDefault(); navigate('/services'); setMobileOpen(false); }} className="text-left text-base text-gray-200 hover:text-amber-400 transition-colors py-2 px-3 rounded">Services</a>
        <a href="#" onClick={(e) => { e.preventDefault(); navigate('/featured'); setMobileOpen(false); }} className="text-left text-base text-gray-200 hover:text-amber-400 transition-colors py-2 px-3 rounded">Featured Projects</a>
        <a href="#" onClick={(e) => { e.preventDefault(); navigate('/projects'); setMobileOpen(false); }} className="text-left text-base text-gray-200 hover:text-amber-400 transition-colors py-2 px-3 rounded">All Projects</a>
        <button onClick={(e) => { handleScrollToSection(e as any, 'clients'); setMobileOpen(false); }} className="text-left text-base text-gray-200 hover:text-amber-400 transition-colors py-2 px-3 rounded">Clients</button>
        <button onClick={(e) => { handleScrollToSection(e as any, 'contact'); setMobileOpen(false); }} className="text-left text-base text-amber-400 font-semibold py-2 px-3 rounded">Contact Us</button>
      </nav>
    </div>
  )}
    </nav>
  );
}