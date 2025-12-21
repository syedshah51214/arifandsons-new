// Import all client logos from the Our Clients folder
import alKabirTown from '../assets/Our Clients/Al Kabir Town.jpeg';
import bahriaTown from '../assets/Our Clients/Bahria Town.png';
import dhaLahore from '../assets/Our Clients/DHA LAHORE.jpeg';
import etihadTown from '../assets/Our Clients/Etihad Town.png';
import islampura from '../assets/Our Clients/Islampura.jpeg';
import khayabanEAmin from '../assets/Our Clients/khayaban e Amin.jpeg';
import lakeCity from '../assets/Our Clients/Lake City.png';
import paragonCity from '../assets/Our Clients/paragon city.png';
import parkAvenue from '../assets/Our Clients/Park Avenue.png';
import punjabSociety from '../assets/Our Clients/punjab society.jpeg';

type ClientItem = { name: string; logo: string; rating?: number };

// Assign ratings (default 4, highlighted partners 5)
const clients: ClientItem[] = [
  { name: 'Al Kabir Town', logo: alKabirTown, rating: 4 },
  { name: 'Bahria Town', logo: bahriaTown, rating: 5 },
  { name: 'DHA LAHORE', logo: dhaLahore, rating: 5 },
  { name: 'Etihad Town', logo: etihadTown, rating: 4 },
  { name: 'Islampura', logo: islampura, rating: 4 },
  { name: 'Khayaban e Amin', logo: khayabanEAmin, rating: 4 },
  { name: 'Lake City', logo: lakeCity, rating: 5 },
  { name: 'Paragon City', logo: paragonCity, rating: 5 },
  { name: 'Park Avenue', logo: parkAvenue, rating: 5 },
  { name: 'Punjab Society', logo: punjabSociety, rating: 4 },
];

export default function ClientsSlider(): JSX.Element {
  // Duplicate for infinite marquee
  const displayClients = clients.concat(clients);

  return (
    <div className="w-full overflow-hidden px-4 sm:px-6 lg:px-0 max-w-full overflow-x-hidden">
      <div className="relative w-full">
        <style>{`
          @keyframes scroll-marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .marquee-animated {
            animation: scroll-marquee 30s linear infinite;
            will-change: transform;
          }
          .marquee-animated:hover {
            animation-play-state: paused;
          }
          @media (max-width: 768px) {
            @keyframes scroll-marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .marquee-animated {
              animation: scroll-marquee 20s linear infinite;
            }
          }
        `}</style>
        <div className="marquee-animated flex items-center gap-4 sm:gap-6 lg:gap-8 whitespace-nowrap w-max">
          {displayClients.map((c, idx) => (
            <div 
              key={`c-${idx}`} 
              className="group relative inline-flex flex-shrink-0 flex-col items-center justify-center w-32 sm:w-36 lg:w-40 p-3 sm:p-4 bg-gray-800/50 rounded-lg border border-amber-500/20 hover:border-amber-500/40 transition-all duration-300"
            >
              <img 
                src={c.logo} 
                alt={`${c.name} - client of Arif & Sons`} 
                className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 object-contain rounded-lg mb-2 bg-gray-700/50 p-2"
              />
              <div className="text-xs sm:text-sm lg:text-sm text-gray-300 text-center font-medium line-clamp-2">{c.name}</div>

              {/* Review overlay shown on hover */}
              <div className="absolute inset-0 bg-black/80 rounded-lg flex flex-col items-center justify-center opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-200">
                <div className="flex items-center gap-1 mb-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} className={`w-4 h-4 ${i < (c.rating || 4) ? 'text-amber-400' : 'text-gray-600'}`} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h4.173c.969 0 1.371 1.24.588 1.81l-3.35 2.432a1 1 0 00-.364 1.118l1.286 3.966c.3.921-.755 1.688-1.54 1.118L10 13.347l-3.88 2.62c-.784.57-1.84-.197-1.54-1.118l1.286-3.966a1 1 0 00-.364-1.118L2.172 9.393c-.783-.57-.38-1.81.588-1.81h4.173a1 1 0 00.95-.69L9.05 2.927z" />
                    </svg>
                  ))}
                </div>
                <div className="text-sm text-gray-200 font-medium">{(c.rating || 4)}.0 average rating</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
