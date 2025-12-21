import { useNavigate } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
import logo from '../assets/logo.jpg';
import localInfo from '../config/localInfo';

export default function Footer() {
  const navigate = useNavigate();

  const handleScrollToSection = (sectionId: string) => {
    const location = window.location.hash;
    const isHome = location === '#/' || location === '';

    if (!isHome) {
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
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Arif & Sons - Construction company Lahore" className="h-10 w-auto object-contain" />
              <h3 className="text-xl font-bold text-white">Arif & Sons</h3>
            </div>
            <p className="text-gray-400 mb-4">Building Excellence Since 1995</p>
            <div className="space-y-2">
              <a href={`tel:${localInfo.telephone}`} className="flex items-center gap-2 text-gray-400 hover:text-amber-400 transition-colors">
                <Phone className="w-4 h-4" />
                <span>{localInfo.telephone}</span>
              </a>
              <a href={`mailto:${localInfo.email}`} className="flex items-center gap-2 text-gray-400 hover:text-amber-400 transition-colors">
                <Mail className="w-4 h-4" />
                <span>{localInfo.email}</span>
              </a>
              <div className="flex items-start gap-2 text-gray-400">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <div>
                  <div>{localInfo.address.streetAddress}</div>
                  <div>{localInfo.address.addressLocality}, {localInfo.address.addressRegion} {localInfo.address.postalCode}</div>
                </div>
              </div>

              {/* Reviews */}
              <div className="mt-4">
                <a href={localInfo.googleMapsSearchUrl} target="_blank" rel="noopener noreferrer" className="inline-block px-4 py-2 bg-amber-500 text-slate-900 rounded-lg font-semibold hover:bg-amber-400 transition-all">Leave a review on Google</a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <div className="space-y-2">
              <button onClick={() => navigate('/services')} className="block text-gray-400 hover:text-amber-400 transition-colors text-left">Services</button>
              <button onClick={() => handleScrollToSection('my-projects')} className="block text-gray-400 hover:text-amber-400 transition-colors text-left">Projects</button>
              <button onClick={() => handleScrollToSection('company-overview')} className="block text-gray-400 hover:text-amber-400 transition-colors text-left">About Us</button>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Our Services</h3>
            <div className="space-y-2">
              <button onClick={() => navigate('/services#residential')} className="block text-gray-400 hover:text-amber-400 transition-colors text-left">Residential Construction</button>
              <button onClick={() => navigate('/services#commercial')} className="block text-gray-400 hover:text-amber-400 transition-colors text-left">Commercial Projects</button>
              <button onClick={() => navigate('/services#renovation')} className="block text-gray-400 hover:text-amber-400 transition-colors text-left">Renovation</button>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="pt-8 mt-8 border-t border-gray-800 text-center">
          <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} Arif & Sons Construction Co. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}