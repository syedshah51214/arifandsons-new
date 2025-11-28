import { useState } from 'react';
import { Building2, Wrench, CheckCircle2, Award, ArrowRight, MessageCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import marla1 from '../assets/projects/my-projects/5 MARLA 1.jpg';
import marla2 from '../assets/projects/my-projects/5 MARLA 2.jpg';
import marla3 from '../assets/projects/my-projects/5 MARLA 3.jpg';
import marla4 from '../assets/projects/my-projects/5 MARLA 4.jpg';
import marla5 from '../assets/projects/my-projects/5 MARLA 5.jpg';
import marla6 from '../assets/projects/my-projects/5 MARLA 6.jpg';
import marla7 from '../assets/projects/my-projects/5 MARLA 7.jpg';
import marlaUnderConstruction from '../assets/projects/my-projects/5 MARLA UNDER CONSTRUCTION.jpg';
import marlaLakeCity1 from '../assets/projects/my-projects/5 MARLA 2 LAKE CITY.jpg';
import marlaLakeCity2 from '../assets/projects/my-projects/5 MARLA 2 LAKE CITY 2.jpg';
import marlaLakeCity3 from '../assets/projects/my-projects/5 MARLA 2 LAKE CITY 3.jpg';

import Header from '../components/Header';
import Footer from '../components/Footer';
import AIchatbot from '../components/AIchatbot';

export default function Services() {
  const navigate = useNavigate();
  const [expandedService, setExpandedService] = useState<string | null>(null);

  const services = [
    { id: 'residential', title: 'Residential Construction', desc: 'Custom homes, villas, and housing complexes built to your vision', icon: Building2 },
    { id: 'commercial', title: 'Commercial Projects', desc: 'Offices, retail spaces, and business facilities designed for success', icon: Building2 },
    { id: 'high-rise', title: 'High-Rise Buildings', desc: 'Multi-story structures with advanced engineering and safety', icon: Building2 },
    { id: 'renovation', title: 'Renovation & Remodeling', desc: 'Transform existing spaces with modern upgrades and repairs', icon: Wrench },
    { id: 'turnkey', title: 'Turnkey Solutions', desc: 'End-to-end project management from design to completion', icon: CheckCircle2 },
    { id: 'sustainable', title: 'Sustainable Building', desc: 'Eco-friendly construction with green materials and practices', icon: Award },
  ];

  const projects = [
    { img: marla1, title: 'Project 01', category: 'Residential' },
    { img: marla2, title: 'Project 02', category: 'Residential' },
    { img: marla3, title: 'Project 03', category: 'Residential' },
    { img: marla4, title: 'Project 04', category: 'Residential' },
    { img: marla5, title: 'Project 05', category: 'Residential' },
    { img: marla6, title: 'Project 06', category: 'Residential' },
    { img: marla7, title: 'Project 07', category: 'Residential' },
    { img: marlaUnderConstruction, title: 'Project 08 (Under Construction)', category: 'In Progress' },
    { img: marlaLakeCity1, title: 'Lake City 1', category: 'Lake City' },
    { img: marlaLakeCity2, title: 'Lake City 2', category: 'Lake City' },
    { img: marlaLakeCity3, title: 'Lake City 3', category: 'Lake City' },
  ];

  // Dummy projects for each service
  const serviceProjects = {
    residential: projects,
    commercial: [
      { img: marla1, title: 'Commercial Office Building', category: 'Commercial' },
      { img: marla2, title: 'Retail Complex', category: 'Commercial' },
      { img: marla3, title: 'Business Hub', category: 'Commercial' },
      { img: marla4, title: 'Shopping Mall', category: 'Commercial' },
    ],
    'high-rise': [
      { img: marla5, title: 'High-Rise Tower - Phase 1', category: 'High-Rise' },
      { img: marla6, title: 'Multi-Story Complex', category: 'High-Rise' },
      { img: marla7, title: 'Luxury Apartments', category: 'High-Rise' },
      { img: marlaUnderConstruction, title: 'Skyscraper Project', category: 'High-Rise' },
    ],
    renovation: [
      { img: marlaLakeCity1, title: 'Heritage Building Renovation', category: 'Renovation' },
      { img: marlaLakeCity2, title: 'Home Remodeling Project', category: 'Renovation' },
      { img: marlaLakeCity3, title: 'Commercial Space Upgrade', category: 'Renovation' },
      { img: marla1, title: 'Modern Interior Renovation', category: 'Renovation' },
    ],
    turnkey: [
      { img: marla2, title: 'Complete Project Delivery - Phase 1', category: 'Turnkey' },
      { img: marla3, title: 'Full Development Project', category: 'Turnkey' },
      { img: marla4, title: 'Integrated Solution Package', category: 'Turnkey' },
      { img: marla5, title: 'End-to-End Construction', category: 'Turnkey' },
    ],
    sustainable: [
      { img: marla6, title: 'Green Building Project', category: 'Sustainable' },
      { img: marla7, title: 'Eco-Friendly Complex', category: 'Sustainable' },
      { img: marlaUnderConstruction, title: 'Sustainable Housing', category: 'Sustainable' },
      { img: marlaLakeCity1, title: 'Energy-Efficient Building', category: 'Sustainable' },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
      <Header />
      <AIchatbot />

      {/* Header Section */}
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <button 
          onClick={() => navigate('/')} 
          className="text-amber-400 hover:text-amber-300 mb-6 flex items-center gap-2"
        >
          <ArrowRight className="rotate-180" size={20} /> Back to Home
        </button>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
        <p className="text-gray-400 text-base md:text-lg">Comprehensive construction solutions tailored to your needs</p>
      </div>

      {/* Services as Detailed Sections */}
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8 sm:space-y-12 mb-20">
        {services.map(service => {
          const IconComponent = service.icon;
          const isExpanded = expandedService === service.id;
          return (
            <div key={service.id}>
              <section
                id={service.id}
                className="bg-gradient-to-r from-slate-800 via-slate-800 to-slate-900 rounded-2xl p-6 sm:p-8 border border-amber-500/30 hover:border-amber-500/60 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/20"
              >
                <div className="flex flex-col md:flex-row items-start gap-6 md:gap-8">
                  <div className="flex-shrink-0">
                    <IconComponent className="h-12 w-12 md:h-16 md:w-16 text-amber-400" />
                  </div>
                  <div className="flex-grow">
                    <h2 className="text-2xl md:text-3xl font-bold mb-2 md:mb-3">{service.title}</h2>
                    <p className="text-gray-300 text-base md:text-lg mb-4 md:mb-6 leading-relaxed">{service.desc}</p>
                    <button 
                      onClick={() => setExpandedService(isExpanded ? null : service.id)}
                      className="px-4 py-2 sm:px-6 sm:py-3 bg-amber-500 text-slate-900 rounded-lg font-semibold hover:bg-amber-400 transition-all inline-flex items-center gap-2"
                    >
                      {isExpanded ? 'Hide Projects' : 'View Projects'} <MessageCircle size={20} />
                    </button>
                  </div>
                </div>
              </section>

              {/* Expandable Projects Section */}
              {isExpanded && (
                <div className="mt-6 mb-8 bg-gradient-to-b from-slate-800/50 to-slate-900/50 rounded-2xl p-6 sm:p-8 border border-amber-500/20">
                  <h3 className="text-2xl font-bold mb-6 text-amber-400">Related Projects</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {serviceProjects[service.id as keyof typeof serviceProjects].map((project, idx) => (
                      <div key={idx} className="group rounded-lg overflow-hidden border border-gray-700 hover:border-amber-500 transition-all hover:shadow-lg hover:shadow-amber-500/20">
                        <div className="relative overflow-hidden aspect-video bg-gray-800">
                          <img src={project.img} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                        </div>
                        <div className="bg-slate-800 p-4">
                          <h4 className="font-bold text-white group-hover:text-amber-400 transition-colors break-words">{project.title}</h4>
                          <p className="text-gray-400 text-sm mt-1">{project.category}</p>
                          <button 
                            onClick={() => {
                              const whatsappUrl = `https://wa.me/923021234567?text=Hello%20Arif%20and%20Sons%2C%20I%20am%20interested%20in%20${encodeURIComponent(project.title)}`;
                              window.open(whatsappUrl, '_blank');
                            }}
                            className="mt-3 text-amber-400 hover:text-amber-300 text-sm font-semibold inline-flex items-center gap-1"
                          >
                            <MessageCircle size={16} /> Get Quote
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <Footer />
    </div>
  );
}
