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
