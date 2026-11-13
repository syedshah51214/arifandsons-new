import { useState } from 'react';
import { waLink } from '../../lib/contact';
import { WhatsAppIcon } from '../Icons';

const work = ['New house', 'Turnkey home', 'Commercial plaza', 'Flats', 'Finishing', 'Renovation', 'Woodwork'];
const sizes = ['3 marla', '5 marla', '7 marla', '10 marla', '1 kanal', 'Other'];
const floors = ['Single storey', 'Double storey', 'Three or more', 'Not sure yet'];

function Choice({ name, options, value, onChange }: { name: string; options: string[]; value: string; onChange: (v: string) => void }) {
  return (
    <div className="choice">
      {options.map((o) => (
        <label key={o}>
          <input type="radio" name={name} value={o} checked={value === o} onChange={() => onChange(o)} />
          <span>{o}</span>
        </label>
      ))}
    </div>
  );
}

export default function QuotePlanner() {
  const [type, setType] = useState(work[0]);
  const [size, setSize] = useState(sizes[1]);
  const [storeys, setStoreys] = useState(floors[1]);
  const [place, setPlace] = useState('');
  const [name, setName] = useState('');
  const [notes, setNotes] = useState('');

  const message = [
    `Hello Arif and Sons, I would like a quote.`,
    `Work: ${type}`,
    `Plot size: ${size}`,
    `Floors: ${storeys}`,
    place.trim() && `Location: ${place.trim()}`,
    name.trim() && `Name: ${name.trim()}`,
    notes.trim() && `Notes: ${notes.trim()}`,
  ]
    .filter(Boolean)
    .join('\n');

  return (
    <form className="planner" onSubmit={(e) => e.preventDefault()} aria-label="Plan your project">
      <fieldset>
        <legend>What do you need built?</legend>
        <Choice name="work" options={work} value={type} onChange={setType} />
      </fieldset>
      <fieldset>
        <legend>Plot size</legend>
        <Choice name="size" options={sizes} value={size} onChange={setSize} />
      </fieldset>
      <fieldset>
        <legend>Floors</legend>
        <Choice name="floors" options={floors} value={storeys} onChange={setStoreys} />
      </fieldset>
      <div className="planner__grid">
        <label className="field">
          <span>Where is the plot?</span>
          <input type="text" value={place} onChange={(e) => setPlace(e.target.value)} placeholder="e.g. Lake City, Block M" autoComplete="off" />
        </label>
        <label className="field">
          <span>Your name</span>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" />
        </label>
      </div>
      <label className="field">
        <span>Anything else we should know? (optional)</span>
        <textarea value={notes} onChange={(e) => setNotes(e.target.value)} />
      </label>
      <p className="planner__summary" aria-live="polite">
        {message}
      </p>
      <div className="planner__send">
        <a className="btn btn--wa" href={waLink(message)} target="_blank" rel="noopener noreferrer">
          <WhatsAppIcon size={20} />
          Send on WhatsApp
        </a>
        <small>Opens WhatsApp with this message ready to send. Nothing is stored on this site.</small>
      </div>
    </form>
  );
}
