import { useEffect, useState } from 'react';
import { Mail, Phone } from 'lucide-react';
import localInfo from '../../config/localInfo';
import { countByKind, kinds, photos, urlByFile, type ProjectKind } from '../../data/projects';
import { EMAIL, PHONE_DISPLAY, PHONE_TEL, QUOTE_LINK } from '../../lib/contact';
import { useSeen } from '../../lib/useSeen';
import { WhatsAppIcon } from '../Icons';

const stats = [
  { value: 30, suffix: '+', label: 'Years building in Lahore' },
  { value: 500, suffix: '+', label: 'Projects completed' },
  { value: 200, suffix: '+', label: 'People on our teams' },
  { value: 98, suffix: '%', label: 'Client satisfaction' },
];

function Count({ to, run }: { to: number; run: boolean }) {
  // The page's saved HTML carries the real figure; the count-up starts from zero once the page is live.
  const [n, setN] = useState(to);
  useEffect(() => {
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) setN(0);
  }, []);
  useEffect(() => {
    if (!run) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setN(to);
      return;
    }
    const start = performance.now();
    const dur = 1400;
    let frame = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / dur);
      setN(Math.round(to * (1 - Math.pow(1 - t, 3))));
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [run, to]);
  return <>{n}</>;
}

// Office hours, Lahore time. Index 0 is Sunday.
const week: Array<[number, number] | null> = [[8, 18], [8, 18], [8, 18], [8, 18], [8, 18], null, [8, 18]];
const rows = [
  { label: 'Sat to Thu', hours: '8 am to 6 pm', days: [6, 0, 1, 2, 3, 4] },
  { label: 'Friday', hours: 'Closed', days: [5] },
];

function lahoreNow() {
  const parts = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Asia/Karachi',
    weekday: 'short',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  }).formatToParts(new Date());
  const get = (t: string) => parts.find((p) => p.type === t)?.value ?? '';
  const day = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].indexOf(get('weekday'));
  const hour = (Number(get('hour')) % 24) + Number(get('minute')) / 60;
  return { day, hour };
}

export default function SiteBoard({ onPickKind }: { onPickKind: (k: ProjectKind) => void }) {
  const [statsRef, statsSeen] = useSeen<HTMLDListElement>(0.4);
  const [barsRef, barsSeen] = useSeen<HTMLUListElement>(0.4);
  // Worked out in the browser only, so the saved HTML never shows a stale "open now".
  const [now, setNow] = useState<{ day: number; hour: number } | null>(null);

  useEffect(() => {
    setNow(lahoreNow());
    const id = window.setInterval(() => setNow(lahoreNow()), 60000);
    return () => window.clearInterval(id);
  }, []);

  const today = now ? week[now.day] : null;
  const open = !!now && !!today && now.hour >= today[0] && now.hour < today[1];
  const max = Math.max(...kinds.map(countByKind));

  return (
    <div className="board">
      <section className="tile tile--dark tile--stats" aria-label="Company figures">
        <dl className="stats" ref={statsRef}>
          {stats.map((s) => (
            <div key={s.label}>
              <dt>{s.label}</dt>
              <dd>
                <Count to={s.value} run={statsSeen} />
                <span>{s.suffix}</span>
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="tile tile--live" aria-label="From the site">
        <img src={urlByFile('5 MARLA UNDER CONSTRUCTION')} alt="A 5 marla house under construction" loading="lazy" />
        <div className="tile__body">
          <span className="status status--build">Under construction</span>
          <h3 className="h-display h-md" style={{ marginTop: '0.8rem' }}>
            5 marla house, grey structure stage
          </h3>
          <p>One of our turnkey homes, photographed on site before finishing began.</p>
        </div>
      </section>

      <section className="tile tile--hours">
        <h3 className="tile__title">
          Office hours
          {now && <span className={`status${open ? ' status--on' : ''}`}>{open ? 'Open now' : 'Closed now'}</span>}
        </h3>
        <ul className="hours">
          {rows.map((r) => (
            <li key={r.label} className={now && r.days.includes(now.day) ? 'is-today' : ''}>
              <span>{r.label}</span>
              <span>{r.hours}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="tile tile--areas">
        <h3 className="tile__title">Areas we serve</h3>
        <ul className="chips">
          {localInfo.areasServed.map((a) => (
            <li key={a}>{a.replace(', Lahore', '').replace(' Lahore', '')}</li>
          ))}
        </ul>
      </section>

      <section className="tile tile--gallery">
        <h3 className="tile__title">
          Site photos by type of work
          <span>{photos.length} photos</span>
        </h3>
        <ul className={`bars${barsSeen ? ' is-seen' : ''}`} ref={barsRef}>
          {kinds.map((k) => {
            const n = countByKind(k);
            return (
              <li key={k}>
                <button type="button" onClick={() => onPickKind(k)} aria-label={`Show ${k} photos (${n})`}>
                  <span className="bars__label">{k}</span>
                  <span className="bars__bar">
                    <i style={{ width: `${(n / max) * 100}%` }} />
                  </span>
                  <span className="bars__n">{n}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </section>

      <section className="tile tile--reach">
        <h3 className="tile__title">Talk to us</h3>
        <div className="reach">
          <a className="btn btn--wa btn--sm" href={QUOTE_LINK} target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon size={18} />
            WhatsApp
          </a>
          <a className="btn btn--ink btn--sm" href={`tel:${PHONE_TEL}`}>
            <Phone size={17} />
            {PHONE_DISPLAY}
          </a>
          <a className="btn btn--outline-ink btn--sm" href={`mailto:${EMAIL}`}>
            <Mail size={17} />
            Email us
          </a>
        </div>
      </section>
    </div>
  );
}
