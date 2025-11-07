import { Building2, Phone, Mail, MapPin, Award, Users, Wrench, CheckCircle2, ArrowRight } from 'lucide-react';
import backgroundImage from './assets/background image/1.jpg';
import logo from './assets/logo.jpg';
import { useEffect } from 'react';
import marla1 from './assets/projects/my-projects/5 MARLA 1.jpg';
import marla2 from './assets/projects/my-projects/5 MARLA 2.jpg';
import marla3 from './assets/projects/my-projects/5 MARLA 3.jpg';
import marla4 from './assets/projects/my-projects/5 MARLA 4.jpg';
import marla5 from './assets/projects/my-projects/5 MARLA 5.jpg';
import marla6 from './assets/projects/my-projects/5 MARLA 6.jpg';
import marla7 from './assets/projects/my-projects/5 MARLA 7.jpg';
import marlaLakeCity1 from './assets/projects/my-projects/5 MARLA 2 LAKE CITY.jpg';
import marlaLakeCity2 from './assets/projects/my-projects/5 MARLA 2 LAKE CITY 2.jpg';
import marlaLakeCity3 from './assets/projects/my-projects/5 MARLA 2 LAKE CITY 3.jpg';
import marlaLakeCity4 from './assets/projects/my-projects/5 MARLA 2 LAKE CITY 4.jpg';
import marlaUnderConstruction from './assets/projects/my-projects/5 MARLA UNDER CONSTRUCTION.jpg';

function ScalePattern() {
  return (
    <svg className="absolute inset-0 w-full h-full opacity-5" preserveAspectRatio="none">
      <defs>
        <pattern id="scale" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
          <rect width="40" height="40" fill="none" stroke="#78350f" strokeWidth="1" />
          <line x1="0" y1="20" x2="40" y2="20" stroke="#78350f" strokeWidth="0.5" />
          <line x1="20" y1="0" x2="20" y2="40" stroke="#78350f" strokeWidth="0.5" />
          <circle cx="20" cy="20" r="2" fill="#78350f" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#scale)" />
    </svg>
  );
}

function animateCounter() {
  const counters = document.querySelectorAll('.counter');
  counters.forEach(counter => {
    const target = Number(counter.parentElement?.getAttribute('data-value') || 0);
    let current = 0;
    const increment = target / 100;
    const updateCounter = () => {
      if (current < target) {
        current += increment;
        counter.textContent = Math.floor(current).toString();
        setTimeout(() => requestAnimationFrame(updateCounter), 20);
      } else {
        counter.textContent = target.toString();
      }
    };
    updateCounter();
  });
}

function App() {
  useEffect(() => {
    animateCounter();
    
    const handleScroll = () => {
      const header = document.getElementById('main-header');
      if (header) {
        if (window.scrollY > 50) {
          header.classList.add('header-scrolled');
        } else {
          header.classList.remove('header-scrolled');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900">
      {/* WhatsApp chat button */}
      <a
        href="https://wa.me/923258579677?text=Hi%20Arif%20%26%20Sons,%20I%20need%20a%20quote"
        target="_blank"
        rel="noopener noreferrer"
        className="group fixed bottom-6 right-6 z-[90] flex items-center justify-center w-20 h-20 rounded-full bg-green-500 hover:bg-green-600 shadow-2xl transition-transform transform whatsapp-pulse whatsapp-bounce"
        aria-label="Chat with us on WhatsApp"
      >
        {/* Tooltip label shown on hover */}
        <span className="absolute -left-56 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-3 py-1.5 rounded-md shadow-lg opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-sm whitespace-nowrap">
          Chat with us on WhatsApp
        </span>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-9 h-9 text-white" fill="currentColor">
          <path d="M20.52 3.48A11.91 11.91 0 0 0 12 0C5.373 0 .01 5.373.01 12.002c0 2.115.55 4.188 1.596 6.01L0 24l6.225-1.59A11.94 11.94 0 0 0 12 24c6.627 0 12-5.373 12-11.998 0-3.203-1.25-6.21-3.48-8.522zM12 21.5c-1.8 0-3.54-.48-5.06-1.39l-.36-.22-3.69.94.98-3.59-.23-.37A9.467 9.467 0 0 1 2.5 12C2.5 6.21 6.71 2 12 2c5.29 0 9.5 4.21 9.5 10 0 5.79-4.21 9.5-9.5 9.5z" />
          <path d="M17.5 13.5c-.3-.15-1.77-.87-2.05-.97-.28-.1-.48-.15-.68.15s-.78.97-.96 1.17c-.18.2-.36.22-.66.07-.3-.15-1.26-.46-2.39-1.48-.88-.78-1.48-1.74-1.66-2.04-.18-.3-.02-.46.13-.61.13-.13.3-.36.45-.54.15-.18.2-.3.3-.5.1-.2 0-.37-.04-.52-.04-.15-.68-1.63-.93-2.24-.24-.58-.49-.5-.67-.51-.17-.01-.37-.01-.57-.01s-.52.07-.8.37c-.28.3-1.08 1.04-1.08 2.54 0 1.5 1.11 2.95 1.26 3.15.15.2 2.18 3.34 5.28 4.68 3.1 1.34 3.1.89 3.66.83.56-.06 1.77-.72 2.02-1.41.25-.69.25-1.28.17-1.41-.08-.13-.28-.2-.58-.35z" fill="#fff" />
        </svg>
      </a>

      <nav id="main-header" className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-sm border-b border-amber-500/10 shadow-lg z-50 transition-all duration-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24 transition-all duration-300 header-content">
            <div className="flex items-center gap-12">
              {/* Logo Section */}
              <div className="group">
                <div className="flex items-center gap-3">
                  <div className="relative flex items-center justify-center transform group-hover:scale-105 transition-all duration-300">
                    <div id="header-logo-container" className="w-20 h-20 transition-all duration-300 logo-container flex items-center justify-center bg-gray-800/95 backdrop-blur-sm rounded-xl border border-amber-500/20 hover:border-amber-500/40 shadow-lg overflow-hidden">
                      <img 
                        src="/src/assets/logo.jpg" 
                        alt="Arif & Sons Logo" 
                        className="w-full h-full object-contain p-2"
                      />
                    </div>
                  </div>
                  <div className="group-hover:translate-x-1 transition-transform duration-300">
                    <h1 className="text-3xl font-bold whitespace-nowrap">
                      <span className="text-amber-400">Arif</span>
                      <span className="text-gray-200">&</span>
                      <span className="text-amber-400">Sons</span>
                    </h1>
                    <div className="flex items-center gap-2">
                      <div className="h-0.5 w-3 bg-amber-500/50"></div>
                      <p className="text-sm text-gray-400 font-medium tracking-wider uppercase">Construction Co.</p>
                      <div className="h-0.5 w-3 bg-amber-500/50"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Navigation Links */}
              <div className="hidden md:flex items-center gap-6 lg:gap-8">
                <a href="#services" className="text-gray-300 hover:text-amber-400 transition-all duration-300 font-medium relative group">
                  <span>Services</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-500 group-hover:w-full transition-all duration-300"></span>
                </a>
                <a href="#about" className="text-gray-300 hover:text-amber-400 transition-all duration-300 font-medium relative group">
                  <span>About</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-500 group-hover:w-full transition-all duration-300"></span>
                </a>
                <a href="#projects" className="text-gray-300 hover:text-amber-400 transition-all duration-300 font-medium relative group">
                  <span>Projects</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-500 group-hover:w-full transition-all duration-300"></span>
                </a>
              </div>
            </div>
            
            {/* Mobile Menu Button */}
            <button className="md:hidden p-2 text-gray-400 hover:text-amber-400 transition-colors duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            
            {/* Call to Action Button */}
            <div className="hidden md:block">
              <a href="#contact" 
                className="relative inline-flex items-center justify-center px-6 py-2.5 lg:px-8 lg:py-3 font-medium overflow-hidden group bg-amber-500 rounded-xl hover:bg-amber-600 transition-all duration-300">
                <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-amber-700 rounded-full group-hover:w-56 group-hover:h-56"></span>
                <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-black"></span>
                <span className="relative text-gray-900 group-hover:text-white transition-colors duration-300 flex items-center gap-2">
                  Get Quote
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Background Image */}
      <section 
        className="relative min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden animate-number flex items-center" 
        style={{ 
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage})`,
          backgroundSize: 'cover', 
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}>
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/60 via-gray-900/50 to-gray-900/40"></div>
        <ScalePattern />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fadeIn">
              <div className="inline-flex items-center bg-gradient-to-r from-amber-400 to-amber-500 text-gray-900 px-4 py-2 rounded-full text-sm font-semibold shadow-lg mb-8 animate-slideUp">
                <span className="mr-2">⚡</span>
                <span>Building Excellence Since 1995</span>
              </div>
              <h2 className="text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight animate-slideUp">
                Building the Future with <span className="text-amber-400">Precision & Trust</span>
              </h2>
              <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl animate-slideUp delay-100">
                From residential dreams to commercial landmarks, we deliver turnkey construction solutions with uncompromising quality and safety standards.
              </p>
              <div className="flex flex-wrap gap-6 animate-slideUp delay-200">
                <a href="#contact" 
                   className="group bg-amber-500 text-gray-900 px-8 py-4 rounded-xl hover:bg-amber-400 transition-all duration-300 font-semibold shadow-lg hover:shadow-amber-500/20 hover:-translate-y-1 flex items-center gap-3 relative overflow-hidden">
                  <span className="relative z-10">Start Your Project</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-500 transform translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></div>
                </a>
                <a href="#services" 
                   className="group bg-gray-800/50 backdrop-blur-sm text-white px-8 py-4 rounded-xl hover:bg-gray-700/50 transition-all duration-300 font-semibold flex items-center gap-3 border border-amber-500/20 hover:border-amber-500/30 hover:-translate-y-1">
                  Our Services
                  <ArrowRight className="h-5 w-5 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-[-10px] group-hover:translate-x-0" />
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>
              <div className="flex gap-4 justify-center mt-8">
                {/* Stats Boxes */}
                <div className="bg-gray-900/90 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-amber-500/10 transition-all duration-300 text-center flex-1 max-w-[220px] border border-amber-500/20 hover:-translate-y-1">
                  <Award className="h-10 w-10 text-amber-400 mb-3 mx-auto" />
                  <h3 className="text-3xl font-bold text-white mb-2" data-value="500">
                    <span className="counter">0</span>+
                  </h3>
                  <p className="text-sm text-gray-300 font-medium">Projects</p>
                </div>
                <div className="bg-gray-900/90 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-amber-500/10 transition-all duration-300 text-center flex-1 max-w-[220px] border border-amber-500/20 hover:-translate-y-1">
                  <Users className="h-10 w-10 text-amber-400 mb-3 mx-auto" />
                  <h3 className="text-3xl font-bold text-white mb-2" data-value="200">
                    <span className="counter">0</span>+
                  </h3>
                  <p className="text-sm text-gray-300 font-medium">Experts</p>
                </div>
                <div className="bg-gray-900/90 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-amber-500/10 transition-all duration-300 text-center flex-1 max-w-[220px] border border-amber-500/20 hover:-translate-y-1">
                  <CheckCircle2 className="h-10 w-10 text-amber-400 mb-3 mx-auto" />
                  <h3 className="text-3xl font-bold text-white mb-2" data-value="98">
                    <span className="counter">0</span>%
                  </h3>
                  <p className="text-sm text-gray-300 font-medium">Satisfaction</p>
                </div>
                <div className="bg-gray-900/90 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-amber-500/10 transition-all duration-300 text-center flex-1 max-w-[220px] border border-amber-500/20 hover:-translate-y-1">
                  <Wrench className="h-10 w-10 text-amber-400 mb-3 mx-auto" />
                  <h3 className="text-3xl font-bold text-white mb-2" data-value="30">
                    <span className="counter">0</span>+
                  </h3>
                  <p className="text-sm text-gray-300 font-medium">Years</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 overflow-hidden">
        <ScalePattern />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Construction Services</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive construction solutions tailored to your needs
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Residential Construction', desc: 'Custom homes, villas, and housing complexes built to your vision', icon: Building2 },
              { title: 'Commercial Projects', desc: 'Offices, retail spaces, and business facilities designed for success', icon: Building2 },
              { title: 'High-Rise Buildings', desc: 'Multi-story structures with advanced engineering and safety', icon: Building2 },
              { title: 'Renovation & Remodeling', desc: 'Transform existing spaces with modern upgrades and repairs', icon: Wrench },
              { title: 'Turnkey Solutions', desc: 'End-to-end project management from design to completion', icon: CheckCircle2 },
              { title: 'Sustainable Building', desc: 'Eco-friendly construction with green materials and practices', icon: Award },
            ].map((service, idx) => (
              <div key={idx} className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-amber-500/30 hover:shadow-xl transition-all group">
                <service.icon className="h-12 w-12 text-amber-500 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 overflow-hidden">
        <ScalePattern />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Our Projects</h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">Browse our latest residential and commercial projects.</p>
          </div>

          {/* Featured Project */}
          <div className="mb-16 bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-amber-500/30 transition-all">
            <h3 className="text-2xl font-bold text-white mb-6">Featured Lake City Project</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="relative group aspect-video rounded-xl overflow-hidden bg-gray-900">
                <img src={marlaLakeCity1} alt="Lake City Project" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="inline-flex items-center bg-amber-500/90 backdrop-blur-sm text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">Lake City</span>
                </div>
              </div>
              <div className="relative group aspect-video rounded-xl overflow-hidden bg-gray-900">
                <img src={marlaLakeCity2} alt="Lake City Project" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
              </div>
              <div className="relative group aspect-video rounded-xl overflow-hidden bg-gray-900">
                <img src={marlaLakeCity3} alt="Lake City Project" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
              </div>
            </div>
          </div>

          {/* Other 5 Marla Projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[
              { img: marla1, title: 'Project 01', category: 'Residential' },
              { img: marla2, title: 'Project 02', category: 'Residential' },
              { img: marla3, title: 'Project 03', category: 'Residential' },
              { img: marla4, title: 'Project 04', category: 'Residential' },
              { img: marla5, title: 'Project 05', category: 'Residential' },
              { img: marla6, title: 'Project 06', category: 'Residential' },
              { img: marla7, title: 'Project 07', category: 'Residential' },
              { img: marlaUnderConstruction, title: 'Project 08 (Under Construction)', category: 'In Progress' },
            ].map((project, idx) => (
              <div key={idx} className="group bg-gray-800 rounded-xl border border-gray-700 shadow-sm overflow-hidden hover:shadow-xl transition-all hover:border-amber-500/30">
                <div className="aspect-video relative overflow-hidden bg-gray-900">
                  <img 
                    src={project.img} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
                  <div className="absolute bottom-4 left-4">
                    <span className="inline-flex items-center bg-amber-500/90 backdrop-blur-sm text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">{project.category}</span>
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="font-bold text-lg mb-2 text-white group-hover:text-amber-400 transition-colors">{project.title}</h4>
                  <a href="#" className="inline-flex items-center gap-2 text-amber-500 font-medium hover:text-amber-400 transition-colors">
                    View Details
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-amber-600 to-amber-700 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Why Choose Arif & Sons?</h2>
              <p className="text-xl text-amber-50 mb-8 leading-relaxed">
                With over three decades of experience, we've built our reputation on delivering exceptional quality, maintaining strict safety standards, and ensuring sustainable construction practices.
              </p>
              <div className="space-y-4">
                {[
                  'Certified engineers and skilled workforce',
                  'On-time project delivery guaranteed',
                  'Quality materials and advanced techniques',
                  'Transparent pricing and communication',
                  'Post-construction support and warranty',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-amber-200 flex-shrink-0 mt-0.5" />
                    <span className="text-lg text-amber-50">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
              <h3 className="text-2xl font-bold mb-6">Our Core Values</h3>
              <div className="space-y-6">
                {[
                  { title: 'Quality', desc: 'Uncompromising standards in every project' },
                  { title: 'Safety', desc: 'Zero-accident workplace culture' },
                  { title: 'Sustainability', desc: 'Environmentally responsible building' },
                  { title: 'Integrity', desc: 'Honest and transparent practices' },
                ].map((value, idx) => (
                  <div key={idx}>
                    <h4 className="text-lg font-semibold mb-1">{value.title}</h4>
                    <p className="text-amber-100">{value.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CEO Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/95 backdrop-blur-sm border-y border-amber-500/10 overflow-hidden">
        <ScalePattern />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Profile Image and Contact */}
            <div className="relative group">
              <div className="relative overflow-hidden rounded-2xl border-2 border-amber-500/20 group-hover:border-amber-500/40 transition-colors">
                <div className="aspect-[4/5] relative">
                  <img 
                    src="/src/assets/CEO.jpg" 
                    alt="Suleiman Arif Hussain - CEO of Arif & Sons Construction Co." 
                    className="absolute inset-0 w-full h-full object-cover object-center"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                  <div className="inline-flex items-center bg-amber-500/90 backdrop-blur-sm text-gray-900 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                    <span className="mr-2">👨‍💼</span>
                    <span>Chief Executive Officer</span>
                  </div>
                  <div className="flex justify-center gap-4 mb-4">
                    <a 
                      href="https://www.instagram.com/engineersuleiman05?utm_source=qr&igsh=bml4ZWs1Y3l2ODEx" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-gray-800/80 border border-amber-500/20 flex items-center justify-center text-amber-500 hover:bg-amber-500 hover:text-gray-900 transition-all"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                      </svg>
                    </a>
                    <a 
                      href="https://www.facebook.com/share/1CViwbx5Vb/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-gray-800/80 border border-amber-500/20 flex items-center justify-center text-amber-500 hover:bg-amber-500 hover:text-gray-900 transition-all"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                      </svg>
                    </a>
                    <a 
                      href="https://wa.me/923258579677" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-gray-800/80 border border-amber-500/20 flex items-center justify-center text-amber-500 hover:bg-amber-500 hover:text-gray-900 transition-all"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413"/>
                      </svg>
                    </a>
                  </div>
                  <a 
                    href="tel:+923258579677" 
                    className="inline-flex items-center gap-2 bg-gray-800/80 backdrop-blur-sm text-white px-4 py-2 rounded-lg border border-amber-500/20 hover:border-amber-500/40 transition-colors"
                  >
                    <Phone className="w-4 h-4 text-amber-500" />
                    <span>+92 325 8579677</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column - Info */}
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-2">Suleiman Arif Hussain</h2>
                <p className="text-xl text-amber-400 font-semibold">Professional Civil Engineer</p>
                <div className="mt-4 flex items-center gap-4">
                  <div className="h-1 w-20 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full"></div>
                  <span className="text-gray-400 text-sm uppercase tracking-wider">CEO & Founder</span>
                </div>
              </div>

              <div className="prose prose-invert prose-amber">
                <p className="text-gray-300 leading-relaxed">
                  A dedicated professional civil engineer with extensive experience in construction management 
                  and project execution. Leading Arif & Sons Construction Co. with a vision to deliver 
                  excellence in every project through innovation, quality, and sustainable practices.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Experience Highlights */}
                <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-amber-500/20">
                  <h3 className="text-lg font-semibold text-white mb-4">Experience Highlights</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">10+ Years in Construction Industry</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">500+ Projects Completed</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Expert in Residential & Commercial Construction</span>
                    </li>
                  </ul>
                </div>

                {/* Certifications & Education */}
                <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-amber-500/20">
                  <h3 className="text-lg font-semibold text-white mb-4">Professional Background</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Award className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Professional Civil Engineer</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Award className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Construction Management Expert</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Award className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Sustainable Building Practices Certified</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <a 
                  href="#contact" 
                  className="inline-flex items-center gap-2 bg-amber-500 text-gray-900 px-6 py-3 rounded-xl hover:bg-amber-400 transition-all font-semibold shadow-lg hover:shadow-amber-500/20 hover:-translate-y-0.5"
                >
                  <Mail className="w-5 h-5" />
                  <span>Contact Directly</span>
                </a>
                <a 
                  href="#projects" 
                  className="inline-flex items-center gap-2 bg-gray-800 text-white px-6 py-3 rounded-xl hover:bg-gray-700 transition-all font-semibold border border-amber-500/20 hover:border-amber-500/40"
                >
                  <Building2 className="w-5 h-5" />
                  <span>View Projects</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-16 px-4 sm:px-6 lg:px-8 border-t border-amber-500/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-8">
            {/* Company Info */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gray-800/80 rounded-lg flex items-center justify-center border border-amber-500/20 overflow-hidden">
                  <img 
                    src="/src/assets/logo.jpg" 
                    alt="Arif & Sons Logo" 
                    className="w-full h-full object-contain p-1"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Arif & Sons</h3>
                  <p className="text-sm text-gray-400">Construction Co.</p>
                </div>
              </div>
              <p className="text-gray-400 mb-4">Building the Future with Precision & Trust in Pakistan</p>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
              <div className="space-y-3">
                <a href="tel:+923258579677" className="flex items-center gap-3 text-gray-400 hover:text-amber-400 transition-colors">
                  <Phone className="h-5 w-5 text-amber-500" />
                  <span>+92 325 8579677</span>
                </a>
                <a href="mailto:contact@arifandsons.com" className="flex items-center gap-3 text-gray-400 hover:text-amber-400 transition-colors">
                  <Mail className="h-5 w-5 text-amber-500" />
                  <span>contact@arifandsons.com</span>
                </a>
                <div className="flex items-center gap-3 text-gray-400">
                  <MapPin className="h-5 w-5 text-amber-500 flex-shrink-0" />
                  <span>Lake City, Lahore, Pakistan</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
              <div className="space-y-3">
                <a href="#services" className="block text-gray-400 hover:text-amber-400 transition-colors">Services</a>
                <a href="#projects" className="block text-gray-400 hover:text-amber-400 transition-colors">Projects</a>
                <a href="#about" className="block text-gray-400 hover:text-amber-400 transition-colors">About Us</a>
                <a href="#contact" className="block text-gray-400 hover:text-amber-400 transition-colors">Contact</a>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Follow Us</h4>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="https://www.facebook.com/share/1CViwbx5Vb/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-10 h-10 rounded-lg bg-gray-800/80 border border-amber-500/20 flex items-center justify-center text-amber-500 hover:bg-amber-500 hover:text-gray-900 transition-all"
                  aria-label="Follow us on Facebook"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a 
                  href="https://www.instagram.com/engineersuleiman05?utm_source=qr&igsh=bml4ZWs1Y3l2ODEx" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-10 h-10 rounded-lg bg-gray-800/80 border border-amber-500/20 flex items-center justify-center text-amber-500 hover:bg-amber-500 hover:text-gray-900 transition-all"
                  aria-label="Follow us on Instagram"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
                <a 
                  href="https://www.tiktok.com/@arifandsons" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-10 h-10 rounded-lg bg-gray-800/80 border border-amber-500/20 flex items-center justify-center text-amber-500 hover:bg-amber-500 hover:text-gray-900 transition-all"
                  aria-label="Follow us on TikTok"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
                  </svg>
                </a>
                <a 
                  href="https://wa.me/923258579677" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-10 h-10 rounded-lg bg-gray-800/80 border border-amber-500/20 flex items-center justify-center text-amber-500 hover:bg-amber-500 hover:text-gray-900 transition-all"
                  aria-label="Contact us on WhatsApp"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </a>
              </div>
              <div className="mt-6">
                <a 
                  href="#contact" 
                  className="inline-flex items-center gap-2 bg-amber-500 text-gray-900 px-4 py-2 rounded-lg hover:bg-amber-400 transition-colors font-medium"
                >
                  <Mail className="w-4 h-4" />
                  <span>Get in Touch</span>
                </a>
              </div>
            </div>
          </div>
          
          {/* Copyright */}
          <div className="pt-8 border-t border-gray-800 text-center">
            <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} Arif & Sons Construction Co. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
