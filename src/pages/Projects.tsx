import { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { Helmet } from '../lib/helmetFallback';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AIchatbot from '../components/AIchatbot';

interface ProjectImage {
  id: string;
  src: string;
  alt: string;
  category: string;
}

export default function Projects() {
  const [projects, setProjects] = useState<ProjectImage[]>([]);
  const [selectedProject, setSelectedProject] = useState<ProjectImage | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState<string>('Featured');
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    // SEO handled by react-helmet-async in the page render (allows server-safe metadata)
    // Description and keywords are provided via Helmet below.

    // Load images from Services folder using dynamic imports
    const loadProjects = async () => {
      const imageModules = import.meta.glob<{ default: string }>(
        '../assets/Services/**/*.{jpg,jpeg,png,webp}',
        { eager: true }
      );

      const projectList: ProjectImage[] = Object.entries(imageModules).map(
        ([path, module], idx) => {
          const pathParts = path.split('/');
          const categoryRaw = pathParts[pathParts.length - 2] || 'Other';
          let filename = pathParts[pathParts.length - 1] || `Project ${idx}`;

          // Remove image extensions
          filename = filename.replace(/\.[^/.]+$/, '');

          // Clean category name
          let category = categoryRaw
            .replace(/[_-]/g, ' ')
            .replace(/\([^)]*\)/g, '') // Remove parentheses content
            .trim()
            .replace(/\s+/g, ' '); // Clean multiple spaces

          // Mark 5 MARLA projects as Featured
          if (filename.toLowerCase().includes('marla') && !filename.toLowerCase().includes('under')) {
            category = 'Featured';
          }

          return {
            id: `${idx}`,
            src: module.default,
            alt: `${category} - ${filename} — construction project in Lahore`,
            category: category,
          };
        }
      );

      setProjects(projectList);

      // Get unique categories - Featured first, then others
      const uniqueCats = Array.from(new Set(projectList.map(p => p.category)));
      const sortedCategories = [
        ...uniqueCats.filter(c => c !== 'Featured'),
        'Featured'
      ];
      
      setCategories(sortedCategories);
    };

    loadProjects();
  }, []);

  // Filter projects by selected category
  const filteredProjects = projects.filter(p => p.category === selectedCategory);

  const handleNext = () => {
    if (filteredProjects.length > 0) {
      setCurrentIndex((prev) => (prev + 1) % filteredProjects.length);
    }
  };

  const handlePrev = () => {
    if (filteredProjects.length > 0) {
      setCurrentIndex((prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length);
    }
  };

  const handleImageClick = (project: ProjectImage) => {
    setSelectedProject(project);
    const index = filteredProjects.findIndex((p) => p.id === project.id);
    setCurrentIndex(index);
  };

  const handleClose = () => {
    setSelectedProject(null);
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (!selectedProject) return;
    if (e.key === 'ArrowRight') handleNext();
    if (e.key === 'ArrowLeft') handlePrev();
    if (e.key === 'Escape') handleClose();
  };

  useEffect(() => {
    if (selectedProject) {
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }
  }, [selectedProject, filteredProjects]);

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
      <Header />
      <AIchatbot />
      <Helmet>
        <title>Our Projects — Arif & Sons</title>
        <meta name="description" content="View our completed construction projects in Lahore. Residential, commercial, renovation projects and more." />
        <meta name="keywords" content="construction projects Lahore, completed projects, residential construction, commercial projects, renovation Lahore" />
        <link rel="canonical" href={`${typeof window !== 'undefined' ? window.location.origin : ''}/projects`} />
      </Helmet>

      {/* Header Section */}
      <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <nav aria-label="Breadcrumb" className="mb-4">
          <ol className="flex items-center gap-2 text-sm text-gray-400">
            <li>
              <a href="/" className="hover:underline text-gray-300">
                Home
              </a>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-amber-400" aria-current="page">
              Projects
            </li>
          </ol>
        </nav>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          Our Projects
        </h1>
        <p className="text-gray-400 text-base md:text-lg max-w-3xl">
          Explore our diverse portfolio of construction projects across Lahore. From residential renovations to commercial complexes, view our quality craftsmanship and completed work.
        </p>
      </header>

      {/* Category Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap gap-2 sm:gap-4 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                setCurrentIndex(0);
              }}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold transition-all duration-300 whitespace-nowrap ${
                selectedCategory === cat
                  ? 'bg-amber-500 text-gray-900'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700 border border-amber-500/20 hover:border-amber-500/60'
              }`}
            >
              {cat}
              <span className="ml-2 text-sm opacity-75">
                ({projects.filter(p => cat === 'All' ? true : p.category === cat).length})
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 mb-20">
        {filteredProjects.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-400">No projects found in this category.</p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  onClick={() => handleImageClick(project)}
                  className="group relative overflow-hidden rounded-lg cursor-pointer aspect-video bg-gray-800 border border-amber-500/20 hover:border-amber-500/60 transition-all duration-300"
                >
                  <img
                    src={project.src}
                    alt={project.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <div className="w-full">
                      <p className="text-sm text-gray-300 truncate">{project.category}</p>
                      <h3 className="text-lg font-bold text-white truncate">
                        {project.alt.split(' - ')[1] || 'Project'}
                      </h3>
                    </div>
                  </div>

                  {/* Icon overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-amber-500 text-gray-900 rounded-full p-3">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Project Count */}
            <div className="mt-12 text-center">
              <p className="text-gray-400">
                Showing <span className="text-amber-400 font-semibold">{filteredProjects.length}</span> projects in <span className="text-amber-400 font-semibold">{selectedCategory}</span>
              </p>
            </div>
          </>
        )}
      </main>

      {/* Modal Lightbox */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 z-50 bg-amber-500 hover:bg-amber-400 text-gray-900 rounded-full p-2 transition-all"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Image Container */}
          <div className="flex flex-col items-center justify-center max-w-4xl w-full gap-4">
            {/* Main Image */}
            <img
              src={filteredProjects[currentIndex]?.src}
              alt={filteredProjects[currentIndex]?.alt}
              className="w-full h-auto max-h-[70vh] object-contain rounded-lg"
            />

            {/* Info */}
            <div className="text-center w-full">
              <p className="text-sm text-gray-400 uppercase tracking-wide">
                {filteredProjects[currentIndex]?.category}
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mt-2">
                {filteredProjects[currentIndex]?.alt.split(' - ')[1] || 'Project'}
              </h2>
            </div>

            {/* Navigation Controls */}
            <div className="flex gap-4 items-center justify-center w-full mt-4 flex-wrap">
              <button
                onClick={handlePrev}
                className="px-6 py-2 bg-amber-500 hover:bg-amber-400 text-gray-900 rounded-lg font-semibold transition-all"
                aria-label="Previous project"
              >
                ← Previous
              </button>

              <span className="text-gray-300">
                {currentIndex + 1} / {filteredProjects.length}
              </span>

              <button
                onClick={handleNext}
                className="px-6 py-2 bg-amber-500 hover:bg-amber-400 text-gray-900 rounded-lg font-semibold transition-all"
                aria-label="Next project"
              >
                Next →
              </button>
            </div>

            {/* Keyboard Navigation Info */}
            <p className="text-xs text-gray-500 mt-4">
              Use arrow keys or buttons to navigate. Press ESC to close.
            </p>
          </div>
        </div>
      )}

      {/* Social Media Links Section */}
      <section className="mt-20 mb-12 py-12 px-4 sm:px-6 lg:px-8 bg-gray-800/50 rounded-lg">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-amber-500 mb-4">Connect With Us</h2>
          <p className="text-gray-300 mb-8">Follow us on social media to see more of our latest projects and updates</p>
          <div className="flex justify-center gap-6">
            <a href="https://facebook.com/arifandsonsconstruction" target="_blank" rel="noopener noreferrer" className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full transition-all transform hover:scale-110" aria-label="Facebook">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="https://www.instagram.com/engineersuleiman05/" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 text-white p-4 rounded-full transition-all transform hover:scale-110" aria-label="Instagram">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.299.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.299 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.299-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.299-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"/>
              </svg>
            </a>
            <a href="https://www.tiktok.com/@engineersalman05" target="_blank" rel="noopener noreferrer" className="bg-gray-700 hover:bg-gray-600 text-white p-4 rounded-full transition-all transform hover:scale-110" aria-label="TikTok">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 11-5.77-1.39 2.93 2.93 0 011.59-2.68V9.01a6.35 6.35 0 00-1.25.12 6.72 6.72 0 00-5.94 6.67c0 3.71 3.01 6.72 6.72 6.72 3.71 0 6.72-3.01 6.72-6.72v-2.04a6.76 6.76 0 003.77 1.13V11.2c-.49-.1-.96-.27-1.41-.51z"/>
              </svg>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
