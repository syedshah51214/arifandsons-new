import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Phone, ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
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

  const handleDropdownHover = (menu: string) => {
    setActiveDropdown(menu);
  };

  const handleDropdownLeave = () => {
    setActiveDropdown(null);
  };

  const handleScrollToSection = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    // If not on home page, navigate to home first then scroll
    if (!isHomePage) {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const headerOffset = 100;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
      }, 100);
    } else {
      // Already on home page, just scroll
      const element = document.getElementById(sectionId);
      if (element) {
        const headerOffset = 100;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-lg border-b border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold text-amber-500">Arif & Sons</span>
          </Link>
          
          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            <Link to="/" onClick={handleHomeClick} className="text-gray-300 hover:text-amber-400 transition-all duration-300 font-medium relative group">
              <span>Home</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-500 group-hover:w-full transition-all duration-300"></span>
            </Link>

            {/* About Us Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => handleDropdownHover('about')}
              onMouseLeave={handleDropdownLeave}
            >
              <button className="text-gray-300 hover:text-amber-400 transition-all duration-300 font-medium flex items-center gap-1">
                <span>About Us</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className={`absolute top-full left-0 mt-2 w-48 bg-gray-900/95 backdrop-blur-lg border border-gray-800 rounded-lg shadow-xl transition-all duration-200 ${activeDropdown === 'about' ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                <Link to="/" onClick={(e) => handleScrollToSection(e, 'company-overview')} className="block px-4 py-2 text-gray-300 hover:text-amber-400 hover:bg-gray-800/50">Company Overview</Link>
                <Link to="/" onClick={(e) => handleScrollToSection(e, 'our-team')} className="block px-4 py-2 text-gray-300 hover:text-amber-400 hover:bg-gray-800/50">Our Team</Link>
                <Link to="/" onClick={(e) => handleScrollToSection(e, 'vision-mission')} className="block px-4 py-2 text-gray-300 hover:text-amber-400 hover:bg-gray-800/50">Vision & Mission</Link>
                <Link to="/" onClick={(e) => handleScrollToSection(e, 'why-choose')} className="block px-4 py-2 text-gray-300 hover:text-amber-400 hover:bg-gray-800/50">Why Choose Us</Link>
              </div>
            </div>

            <div 
              className="relative group"
              onMouseEnter={() => handleDropdownHover('services')}
              onMouseLeave={handleDropdownLeave}
            >
              <Link to="/services" className="text-gray-300 hover:text-amber-400 transition-all duration-300 font-medium flex items-center gap-1">
                <span>Services</span>
                <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
              </Link>
              <div className={`absolute top-full left-0 mt-2 w-48 bg-gray-900/95 backdrop-blur-lg border border-gray-800 rounded-lg shadow-xl transition-all duration-200 ${activeDropdown === 'services' ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                <Link to="/services" onClick={(e) => { handleScrollToSection(e, 'residential'); navigate('/services'); }} className="block px-4 py-2 text-gray-300 hover:text-amber-400 hover:bg-gray-800/50">Residential Construction</Link>
                <Link to="/services" onClick={(e) => { handleScrollToSection(e, 'commercial'); navigate('/services'); }} className="block px-4 py-2 text-gray-300 hover:text-amber-400 hover:bg-gray-800/50">Commercial Projects</Link>
                <Link to="/services" onClick={(e) => { handleScrollToSection(e, 'high-rise'); navigate('/services'); }} className="block px-4 py-2 text-gray-300 hover:text-amber-400 hover:bg-gray-800/50">High-Rise Buildings</Link>
                <Link to="/services" onClick={(e) => { handleScrollToSection(e, 'renovation'); navigate('/services'); }} className="block px-4 py-2 text-gray-300 hover:text-amber-400 hover:bg-gray-800/50">Renovation & Remodeling</Link>
                <Link to="/services" onClick={(e) => { handleScrollToSection(e, 'turnkey'); navigate('/services'); }} className="block px-4 py-2 text-gray-300 hover:text-amber-400 hover:bg-gray-800/50">Turnkey Solutions</Link>
                <Link to="/services" onClick={(e) => { handleScrollToSection(e, 'sustainable'); navigate('/services'); }} className="block px-4 py-2 text-gray-300 hover:text-amber-400 hover:bg-gray-800/50">Sustainable Building</Link>
              </div>
            </div>

            {/* Projects Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => handleDropdownHover('projects')}
              onMouseLeave={handleDropdownLeave}
            >
              <button className="text-gray-300 hover:text-amber-400 transition-all duration-300 font-medium flex items-center gap-1">
                <span>Projects</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className={`absolute top-full left-0 mt-2 w-48 bg-gray-900/95 backdrop-blur-lg border border-gray-800 rounded-lg shadow-xl transition-all duration-200 ${activeDropdown === 'projects' ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                <Link to="/" onClick={(e) => handleScrollToSection(e, 'my-projects')} className="block px-4 py-2 text-gray-300 hover:text-amber-400 hover:bg-gray-800/50">My Projects</Link>
              </div>
            </div>

            <Link to="/" onClick={(e) => handleScrollToSection(e, 'clients')} className="text-gray-300 hover:text-amber-400 transition-all duration-300 font-medium relative group">
              <span>Clients</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
            
          </div>
          
          {/* Contact Us Button */}
          <div className="hidden md:block">
            <Link to="/" onClick={(e) => handleScrollToSection(e, 'contact')}
               className="inline-flex items-center gap-2 bg-amber-500 text-gray-900 px-4 py-2 rounded-lg hover:bg-amber-400 transition-colors font-medium"
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

  {/* Mobile Menu Overlay */}
  <div className={`md:hidden fixed inset-0 z-60 transform transition-transform duration-300 ${mobileOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="bg-gray-900/95 backdrop-blur-lg h-full w-full p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="text-2xl font-bold text-amber-500">Arif & Sons</div>
            <button onClick={() => setMobileOpen(false)} aria-label="Close menu" className="p-2 text-gray-300 hover:text-amber-400">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <nav className="flex flex-col gap-4">
            <a href="#" onClick={(e) => { e.preventDefault(); handleHomeClick(e as any); setMobileOpen(false); }} className="text-lg text-gray-200">Home</a>
            <button onClick={(e) => { handleScrollToSection(e as any, 'company-overview'); setMobileOpen(false); }} className="text-left text-lg text-gray-200">Company Overview</button>
            <button onClick={(e) => { handleScrollToSection(e as any, 'our-team'); setMobileOpen(false); }} className="text-left text-lg text-gray-200">Our Team</button>
            <button onClick={() => { navigate('/services'); setMobileOpen(false); }} className="text-left text-lg text-gray-200">Services</button>
            <button onClick={(e) => { handleScrollToSection(e as any, 'my-projects'); setMobileOpen(false); }} className="text-left text-lg text-gray-200">Projects</button>
            <button onClick={(e) => { handleScrollToSection(e as any, 'clients'); setMobileOpen(false); }} className="text-left text-lg text-gray-200">Clients</button>
            <button onClick={(e) => { handleScrollToSection(e as any, 'contact'); setMobileOpen(false); }} className="text-left text-lg text-amber-400 font-semibold">Contact Us</button>
          </nav>
        </div>
      </div>
    </header>
  );
}