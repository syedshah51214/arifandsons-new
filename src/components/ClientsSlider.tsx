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

type ClientItem = { name: string; logo: string };

const clients: ClientItem[] = [
  { name: 'Al Kabir Town', logo: alKabirTown },
  { name: 'Bahria Town', logo: bahriaTown },
  { name: 'DHA LAHORE', logo: dhaLahore },
  { name: 'Etihad Town', logo: etihadTown },
  { name: 'Islampura', logo: islampura },
  { name: 'Khayaban e Amin', logo: khayabanEAmin },
  { name: 'Lake City', logo: lakeCity },
  { name: 'Paragon City', logo: paragonCity },
  { name: 'Park Avenue', logo: parkAvenue },
  { name: 'Punjab Society', logo: punjabSociety },
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
              className="inline-flex flex-shrink-0 flex-col items-center justify-center w-32 sm:w-36 lg:w-40 p-3 sm:p-4 bg-gray-800/50 rounded-lg border border-amber-500/20 hover:border-amber-500/40 transition-all duration-300"
            >
              <img 
                src={c.logo} 
                alt={c.name} 
                className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 object-contain rounded-lg mb-2 bg-gray-700/50 p-2"
              />
              <div className="text-xs sm:text-sm lg:text-sm text-gray-300 text-center font-medium line-clamp-2">{c.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
