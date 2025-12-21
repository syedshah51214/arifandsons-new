import { Building2, MessageCircle } from 'lucide-react';
import { Helmet } from '../lib/helmetFallback';

import Header from '../components/Header';
import Footer from '../components/Footer';
import AIchatbot from '../components/AIchatbot';
import logo from '../assets/logo.jpg';

export default function Services() {
  // static service list requested by user
  const serviceItems = [
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
  ];

  // SEO metadata (server-safe via react-helmet-async)
  const ld = {
    '@context': 'https://schema.org',
    '@type': 'ConstructionCompany',
    name: 'Arif & Sons',
    url: typeof window !== 'undefined' ? window.location.origin : 'https://arifandsons.com',
    telephone: '+923258579677',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Lahore',
      addressCountry: 'PK',
    },
    areaServed: 'Lahore',
    description: 'Construction services in Lahore including renovation, building construction, foundations and civil engineering consulting.',
  };


  return (
    <div className="services-page min-h-screen bg-gray-900 text-white overflow-x-hidden relative">
      <Header />
      <AIchatbot />
      <Helmet>
        <title>Construction Services Lahore — Arif & Sons</title>
        <meta name="description" content="Arif & Sons delivers expert construction services in Lahore: home renovation, building construction, bathroom remodeling, concrete foundation installation, and civil engineering consulting." />
        <meta name="keywords" content="construction services Lahore, home renovation Lahore, building construction, bathroom remodeling, concrete foundation installation, civil engineering consulting, turnkey construction Lahore, residential construction Lahore" />
        <link rel="canonical" href={`${typeof window !== 'undefined' ? window.location.origin : ''}/services`} />
        <script type="application/ld+json">{JSON.stringify(ld)}</script>
      </Helmet>

      {/* Decorative blurred logo background */}
      <div aria-hidden className="absolute inset-0 -z-10 flex items-center justify-center">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url(${logo})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: '60%',
            opacity: 0.06,
            filter: 'blur(36px)'
          }}
        />
      </div>

      <header className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <nav aria-label="Breadcrumb" className="mb-4">
          <ol className="flex items-center gap-2 text-sm text-gray-400">
            <li><a href="/" className="hover:underline text-gray-300">Home</a></li>
            <li aria-hidden="true">/</li>
            <li className="text-amber-400" aria-current="page">Services</li>
          </ol>
        </nav>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Construction Services in Lahore — Our Services</h1>
        <p className="text-gray-400 text-base md:text-lg">Comprehensive construction solutions in Lahore: home renovation, building construction, concrete foundation installation, and civil engineering consulting.</p>
      </header>

      <main id="main-content" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 mb-20">
        <section aria-labelledby="services-offered" className="mb-8">
          <h2 id="services-offered" className="text-2xl font-semibold text-amber-400 mb-4">Services Offered</h2>
          <p className="text-gray-300 mb-6">We provide the following specialised construction services across Lahore. Click "Get Quote" to contact us via WhatsApp with your selected service.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceItems.map((item, idx) => (
              <article key={idx} aria-labelledby={`svc-${idx}`} className="flex items-center justify-between gap-4 bg-gradient-to-r from-slate-800 via-slate-800 to-slate-900 rounded-2xl p-4 border border-amber-500/20 hover:border-amber-500/60 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/20">
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 bg-slate-800/60 p-2 rounded-md" aria-hidden="true">
                    <Building2 className="h-7 w-7 text-amber-400" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 id={`svc-${idx}`} className="text-lg font-bold text-white">{item}</h3>
                    <p className="sr-only">{item} — construction services in Lahore</p>
                  </div>
                </div>

                <div>
                  <a
                    href={`https://wa.me/923258579677?text=${encodeURIComponent(`Hello Arif and Sons, I am interested in ${item}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-tracking="get-quote"
                    data-service={item}
                    className="px-4 py-2 sm:px-6 sm:py-3 bg-amber-500 text-slate-900 rounded-lg font-semibold hover:bg-amber-400 transition-all inline-flex items-center gap-2"
                    aria-label={`Get quote for ${item}`}
                  >
                    Get Quote <MessageCircle size={18} aria-hidden="true" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section aria-labelledby="why-choose" className="mb-8">
          <h2 id="why-choose" className="text-2xl font-semibold text-amber-400 mb-4">Why Choose Arif & Sons</h2>
          <p className="text-gray-300">Experienced construction company in Lahore offering licensed civil engineers, quality workmanship, and full project management from excavation to finishing. We specialise in home renovations, bathroom remodelling, foundation installations, and commercial construction.</p>
        </section>

        <nav aria-label="Internal links" className="mt-6">
          <h3 className="text-sm font-semibold text-gray-300 mb-2">Explore</h3>
          <ul className="flex flex-wrap gap-3">
            <li><a href="/" className="text-gray-400 hover:text-amber-400">Home</a></li>
            <li><a href="/services" className="text-gray-400 hover:text-amber-400">Services</a></li>
            <li><a href="#contact" className="text-gray-400 hover:text-amber-400">Contact</a></li>
          </ul>
        </nav>

        {/* Social Media Links */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <h3 className="text-lg font-bold text-amber-400 mb-6 text-center">Follow Us</h3>
          <div className="flex justify-center gap-4">
            <a href="https://facebook.com/arifandsonsconstruction" target="_blank" rel="noopener noreferrer" className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full transition-all transform hover:scale-110" aria-label="Facebook">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="https://www.instagram.com/engineersuleiman05/" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 text-white p-3 rounded-full transition-all transform hover:scale-110" aria-label="Instagram">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.299.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.299 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.299-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.299-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"/>
              </svg>
            </a>
            <a href="https://www.tiktok.com/@engineersalman05" target="_blank" rel="noopener noreferrer" className="bg-gray-700 hover:bg-gray-600 text-white p-3 rounded-full transition-all transform hover:scale-110" aria-label="TikTok">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 11-5.77-1.39 2.93 2.93 0 011.59-2.68V9.01a6.35 6.35 0 00-1.25.12 6.72 6.72 0 00-5.94 6.67c0 3.71 3.01 6.72 6.72 6.72 3.71 0 6.72-3.01 6.72-6.72v-2.04a6.76 6.76 0 003.77 1.13V11.2c-.49-.1-.96-.27-1.41-.51z"/>
              </svg>
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
