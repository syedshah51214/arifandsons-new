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
    <div className="overflow-hidden">
      <div className="relative">
        <div className="marquee flex items-center gap-8 whitespace-nowrap">
          {displayClients.map((c, idx) => (
            <div key={`c-${idx}`} className="inline-flex flex-col items-center justify-center w-40 p-4 bg-gray-800/50 rounded-lg border border-amber-500/20 hover:border-amber-500/40 transition-all">
              <img 
                src={c.logo} 
                alt={c.name} 
                className="w-24 h-24 object-contain rounded-lg mb-2 bg-gray-700/50 p-2"
              />
              <div className="text-sm text-gray-300 text-center font-medium">{c.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
