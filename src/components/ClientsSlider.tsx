// Import all client logos from the Our Clients folder
import alKabirTown from '../assets/Our Clients/Al Kabir Town.webp';
import bahriaTown from '../assets/Our Clients/Bahria Town.webp';
import dhaLahore from '../assets/Our Clients/DHA LAHORE.webp';
import etihadTown from '../assets/Our Clients/Etihad Town.webp';
import islampura from '../assets/Our Clients/Islampura.webp';
import khayabanEAmin from '../assets/Our Clients/khayaban e Amin.webp';
import lakeCity from '../assets/Our Clients/Lake City.webp';
import paragonCity from '../assets/Our Clients/paragon city.webp';
import parkAvenue from '../assets/Our Clients/Park Avenue.webp';
import punjabSociety from '../assets/Our Clients/punjab society.webp';

type ClientItem = { name: string; logo: string };

const clients: ClientItem[] = [
  { name: 'Al Kabir Town', logo: alKabirTown },
  { name: 'Bahria Town', logo: bahriaTown },
  { name: 'DHA Lahore', logo: dhaLahore },
  { name: 'Etihad Town', logo: etihadTown },
  { name: 'Islampura', logo: islampura },
  { name: 'Khayaban e Amin', logo: khayabanEAmin },
  { name: 'Lake City', logo: lakeCity },
  { name: 'Paragon City', logo: paragonCity },
  { name: 'Park Avenue', logo: parkAvenue },
  { name: 'Punjab Society', logo: punjabSociety },
];

export default function ClientsSlider(): JSX.Element {
  const group = (hidden: boolean) => (
    <ul className="clients__group" aria-hidden={hidden || undefined}>
      {clients.map((c) => (
        <li key={c.name}>
          <img src={c.logo} alt={hidden ? '' : `${c.name} logo`} loading="lazy" />
          {c.name}
        </li>
      ))}
    </ul>
  );
  return (
    <div className="clients">
      <div className="clients__track">
        {group(false)}
        {group(true)}
      </div>
    </div>
  );
}
