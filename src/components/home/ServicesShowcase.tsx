import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { firstOf, urlByFile } from '../../data/projects';

const services = [
  {
    name: 'House construction',
    text: 'Grey structure for family homes: excavation, foundations, columns, slabs and brickwork.',
    img: firstOf('Residenial Construction (Park Avenue)', 0),
    caption: 'House construction, Park Avenue',
  },
  {
    name: 'Turnkey homes',
    text: 'One contract from drawings to keys. We build, finish and hand over a house that is ready to live in.',
    img: urlByFile('10 Marla Bahria TOWN'),
    caption: '10 marla turnkey home, Bahria Town',
  },
  {
    name: 'Commercial plazas',
    text: 'Multi-storey plazas and commercial buildings, including basements, frames and rooftop works.',
    img: firstOf('Plaza Construction(DHA LAHORE)', 1),
    caption: 'Plaza construction, DHA Lahore',
  },
  {
    name: 'Flats and apartments',
    text: 'Apartment blocks, from excavation and frame through to finished flats.',
    img: firstOf('Flats Construction (Bahria Town)', 4),
    caption: 'Flats construction, Bahria Town',
  },
  {
    name: 'Finishing',
    text: 'Plaster, false ceilings, flooring, tiling, paint and fittings for an existing grey structure.',
    img: firstOf('Residential Finishing (DHA LAHORE)', 1),
    caption: 'House finishing, DHA Lahore',
  },
  {
    name: 'Renovation and remodelling',
    text: 'Bathrooms, kitchens, floors and structural repairs for homes and commercial units.',
    img: firstOf('Washroom Renovation', 2),
    caption: 'Washroom renovation',
  },
  {
    name: 'Woodwork and interiors',
    text: 'Wardrobes, kitchen cabinets, media walls and doors, made to measure and fitted on site.',
    img: firstOf('Wood Work Renovation (Park Avenue)', 2),
    caption: 'Kitchen woodwork, Park Avenue',
  },
];

export default function ServicesShowcase() {
  const [active, setActive] = useState(0);
  return (
    <>
      <div className="services">
        <ul className="service-list">
          {services.map((s, i) => (
            <li key={s.name}>
              <button
                type="button"
                className={`service-row${i === active ? ' is-active' : ''}`}
                aria-pressed={i === active}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onClick={() => setActive(i)}
              >
                <h3>{s.name}</h3>
                <ArrowRight size={26} aria-hidden="true" />
                <p>{s.text}</p>
              </button>
            </li>
          ))}
        </ul>
        <figure className="service-preview" style={{ margin: 0 }}>
          {services.map((s, i) => (
            <img key={s.name} src={s.img} alt={i === active ? s.caption : ''} className={i === active ? 'is-active' : ''} loading="lazy" />
          ))}
          <figcaption>{services[active].caption}</figcaption>
        </figure>
      </div>
      <p style={{ marginTop: '2.5rem' }}>
        <Link className="text-link" to="/services">
          See the full list of 15 services
        </Link>
      </p>
    </>
  );
}
