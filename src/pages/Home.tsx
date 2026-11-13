import { useCallback, useEffect, useState } from 'react';
import { Award, Check, Mail, MapPin, Phone } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import AIchatbot from '../components/AIchatbot';
import ClientsSlider from '../components/ClientsSlider';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { WhatsAppIcon, socialIcon } from '../components/Icons';
import HeroStage from '../components/home/HeroStage';
import ProjectGallery, { type GalleryFilter } from '../components/home/ProjectGallery';
import QuotePlanner from '../components/home/QuotePlanner';
import ServicesShowcase from '../components/home/ServicesShowcase';
import SiteBoard from '../components/home/SiteBoard';
import teamMembers from '../components/teamData';
import CEO from '../assets/CEO.webp';
import localInfo from '../config/localInfo';
import { EMAIL, PHONE_DISPLAY, PHONE_TEL, QUOTE_LINK, SOCIALS } from '../lib/contact';
import { scrollToSection } from '../lib/useGoToSection';
import { faqs } from '../seo';

const ticker = [
  'House construction',
  'Turnkey homes',
  'Commercial plazas',
  'Flats',
  'Finishing',
  'Renovation',
  'Woodwork',
  'Civil engineering consulting',
];

const steps = [
  { title: 'Site visit and brief', text: 'We visit the plot, listen to what you need and note the constraints of the site.' },
  { title: 'Drawings and estimate', text: 'You get a clear scope of work and a written estimate before anything is built.' },
  { title: 'Grey structure', text: 'Excavation, foundations, columns, slabs and brickwork, supervised by our engineers.' },
  { title: 'Finishing', text: 'Plaster, flooring, woodwork, paint, electrical and plumbing fittings.' },
  { title: 'Handover and support', text: 'We walk the finished building with you and stay available after you move in.' },
];

const reasons = [
  'Certified engineers and skilled workforce',
  'On-time project delivery',
  'Quality materials and advanced techniques',
  'Transparent pricing and communication',
  'Post-construction support and warranty',
];

const values = [
  { title: 'Quality', desc: 'Uncompromising standards in every project.' },
  { title: 'Safety', desc: 'A zero-accident workplace culture.' },
  { title: 'Sustainability', desc: 'Environmentally responsible building.' },
  { title: 'Integrity', desc: 'Honest and transparent practices.' },
];

export default function Home() {
  const location = useLocation();
  const target = (location.state as { scrollTo?: string } | null)?.scrollTo;
  const [headerHidden, setHeaderHidden] = useState(true);
  const [filter, setFilter] = useState<GalleryFilter>('All');

  const onProgress = useCallback((p: number) => setHeaderHidden(p < 0.38), []);

  // Arriving from another page with a section to jump to.
  useEffect(() => {
    if (!target) return;
    const id = window.setTimeout(() => scrollToSection(target), 120);
    window.history.replaceState({}, '');
    return () => window.clearTimeout(id);
  }, [target]);

  const tickerGroup = (hidden: boolean) => (
    <ul className="ticker__group" aria-hidden={hidden || undefined}>
      {ticker.map((t) => (
        <li key={t}>{t}</li>
      ))}
    </ul>
  );

  return (
    <>
      <Header hidden={headerHidden} />

      <main>
        <HeroStage onProgress={onProgress} skipIntro={!!target} />

        <div className="ticker" aria-label="What we build">
          <div className="ticker__track">
            {tickerGroup(false)}
            {tickerGroup(true)}
          </div>
        </div>

        {/* About + dashboard */}
        <section id="about" className="band band--paper">
          <div className="wrap">
            <div className="section-head section-head--split">
              <h2 className="h-display h-lg">Three decades of building in Lahore, on one board.</h2>
              <p className="lede">
                Arif and Sons Construction Co. is a Lahore construction company delivering residential and commercial
                projects across the city. Here is the company at a glance: what we have built, where we work and when you can reach us.
              </p>
            </div>
            <SiteBoard
              onPickKind={(k) => {
                setFilter(k);
                scrollToSection('projects');
              }}
            />
          </div>
        </section>

        {/* Services */}
        <section id="services" className="band band--navy band--grid">
          <div className="wrap">
            <div className="section-head">
              <h2 className="h-display h-lg">What we build</h2>
              <p className="lede">
                Take the whole job from empty plot to finished building, or bring us in for a single stage of it.
              </p>
            </div>
            <ServicesShowcase />
          </div>
        </section>

        {/* Process */}
        <section id="process" className="band band--paper">
          <div className="wrap">
            <div className="section-head">
              <h2 className="h-display h-lg">How a project runs</h2>
              <p className="lede">Five stages, in order. You know which one you are in and what comes next.</p>
            </div>
            <ol className="process">
              {steps.map((s) => (
                <li key={s.title}>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="band band--deep">
          <div className="wrap">
            <div className="section-head section-head--split">
              <h2 className="h-display h-lg">Recent work, photographed on site</h2>
              <p className="lede">
                Real photos from our sites in Lake City, DHA, Bahria Town, Park Avenue and Johar Town. Pick a type of
                work to narrow the list.
              </p>
            </div>
            <ProjectGallery filter={filter} onFilter={setFilter} />
          </div>
        </section>

        {/* Why us */}
        <section id="why-choose" className="band band--paper">
          <div className="wrap why">
            <div>
              <h2 className="h-display h-lg">Why clients choose Arif and Sons</h2>
              <p className="lede" style={{ marginTop: '1.25rem' }}>
                With over three decades of experience, we have built our reputation on quality work, strict safety
                standards and sustainable construction practices.
              </p>
              <ul className="checklist">
                {reasons.map((r) => (
                  <li key={r}>
                    <Check size={22} strokeWidth={3} aria-hidden="true" />
                    {r}
                  </li>
                ))}
              </ul>
            </div>
            <dl className="values">
              <h3 className="h-display h-md">Our core values</h3>
              {values.map((v) => (
                <div key={v.title}>
                  <dt>{v.title}</dt>
                  <dd>{v.desc}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Leadership */}
        <section id="leadership" className="band band--navy">
          <div className="wrap leader">
            <figure className="leader__photo">
              <img src={CEO} alt="Suleiman Arif Hussain, Chief Executive Officer of Arif and Sons Construction Co." loading="lazy" decoding="async" width={900} height={1125} />
            </figure>
            <div>
              <h2 className="h-display h-lg">Suleiman Arif Hussain</h2>
              <p className="leader__role">Chief Executive Officer, professional civil engineer</p>
              <p className="lede">
                A civil engineer with extensive experience in construction management and project execution, leading
                Arif and Sons with a focus on quality, innovation and sustainable practice.
              </p>
              <ul className="leader__facts">
                {[
                  '10+ years in the construction industry',
                  'Residential and commercial construction',
                  'Construction management',
                  'Sustainable building practices',
                ].map((f) => (
                  <li key={f}>
                    <Award size={19} aria-hidden="true" />
                    {f}
                  </li>
                ))}
              </ul>
              <div className="hero__actions">
                <a className="btn btn--brick" href="tel:+923122696789">
                  <Phone size={18} />
                  Call +92 312 2696789
                </a>
                <a className="btn btn--ghost" href={QUOTE_LINK} target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon size={18} />
                  Message on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section id="team" className="band band--deep">
          <div className="wrap">
            <div className="section-head">
              <h2 className="h-display h-lg">The people behind the work</h2>
            </div>
            <ul className="team">
              {teamMembers.map((m) => (
                <li key={m.name}>
                  <img src={m.image} alt={m.name} loading="lazy" decoding="async" width={420} height={420} />
                  <h3>{m.name}</h3>
                  <p>{m.role}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Clients */}
        <section id="clients" className="band band--paper">
          <div className="wrap">
            <div className="section-head">
              <h2 className="h-display h-lg">Where we build</h2>
              <p className="lede">Housing societies and neighbourhoods in Lahore where we have delivered work.</p>
            </div>
          </div>
          <ClientsSlider />
        </section>

        {/* Questions */}
        <section id="questions" className="band band--deep">
          <div className="wrap">
            <div className="section-head">
              <h2 className="h-display h-lg">Questions people ask before they build</h2>
            </div>
            <div className="faq">
              {faqs.map((f, i) => (
                <details key={f.q} open={i === 0}>
                  <summary>{f.q}</summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <div className="tape" aria-hidden="true" />

        {/* Contact */}
        <section id="contact" className="band band--navy band--grid">
          <div className="wrap quote">
            <div>
              <h2 className="h-display h-lg">Tell us about your plot</h2>
              <p className="lede" style={{ marginTop: '1.25rem' }}>
                Pick a few options and send them to us on WhatsApp. We will reply with next steps and arrange a site
                visit.
              </p>
              <ul className="contact-list">
                <li>
                  <a href={`tel:${PHONE_TEL}`}>
                    <Phone size={22} aria-hidden="true" />
                    <span>
                      <small>Phone and WhatsApp</small>
                      {PHONE_DISPLAY}
                    </span>
                  </a>
                </li>
                <li>
                  <a href={`mailto:${EMAIL}`}>
                    <Mail size={22} aria-hidden="true" />
                    <span>
                      <small>Email</small>
                      {EMAIL}
                    </span>
                  </a>
                </li>
                <li>
                  <a href={localInfo.googleMapsSearchUrl} target="_blank" rel="noopener noreferrer">
                    <MapPin size={22} aria-hidden="true" />
                    <span>
                      <small>Office</small>
                      {localInfo.addressLine}
                    </span>
                  </a>
                </li>
              </ul>
              <div className="socials">
                {SOCIALS.map((s) => (
                  <a key={s.name} className="icon-btn" href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.name}>
                    {socialIcon(s.name)}
                  </a>
                ))}
              </div>
            </div>
            <QuotePlanner />
          </div>
        </section>
      </main>

      <Footer />

      <a className={`wa-float${headerHidden ? ' is-hidden' : ''}`} href={QUOTE_LINK} target="_blank" rel="noopener noreferrer" aria-label="Chat with us on WhatsApp">
        <WhatsAppIcon size={30} />
      </a>
      {!headerHidden && <AIchatbot />}
    </>
  );
}
