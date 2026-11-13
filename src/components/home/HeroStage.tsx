import { useCallback, useEffect, useRef, useState } from 'react';
import { ArrowDown } from 'lucide-react';
import introVideo from '../../assets/abc.mp4';
import lastFrame from '../../assets/brand/intro-last.webp';
import poster from '../../assets/brand/intro-poster.webp';
import mark from '../../assets/brand/logo-mark.webp';
import { QUOTE_LINK } from '../../lib/contact';
import { scrollToSection } from '../../lib/useGoToSection';
import { WhatsAppIcon } from '../Icons';

// The intro video plays once per visit; coming back to the home page goes straight to the logo.
let introPlayed = false;

const clamp = (n: number) => Math.min(1, Math.max(0, n));

interface Props {
  /** 0 at the top of the page, 1 when the hero has fully scrolled past its pinned stage. */
  onProgress: (p: number) => void;
  skipIntro?: boolean;
}

export default function HeroStage({ onProgress, skipIntro = false }: Props) {
  const heroRef = useRef<HTMLElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const reduced = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const [phase, setPhase] = useState<'video' | 'logo'>(introPlayed || skipIntro || reduced ? 'logo' : 'video');
  // If we start on the logo there is no need to download the video at all.
  const [useVideo] = useState(phase === 'video');
  const phaseRef = useRef(phase);
  phaseRef.current = phase;

  const showLogo = useCallback(() => {
    introPlayed = true;
    setPhase('logo');
  }, []);

  // Play the video through once, then hand over to the logo.
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.play().catch(showLogo); // autoplay blocked: go straight to the logo
    const safety = window.setTimeout(showLogo, 12000);
    return () => window.clearTimeout(safety);
  }, [showLogo]);

  // Scroll drives the fly-away. Values are written as CSS variables to avoid re-rendering.
  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      const total = Math.max(1, hero.offsetHeight - window.innerHeight);
      const p = clamp(window.scrollY / total);
      if (window.scrollY > 24 && phaseRef.current === 'video') showLogo();
      if (!reduced) {
        const t = clamp(p / 0.5);
        const reveal = clamp((p - 0.4) / 0.28);
        hero.style.setProperty('--fly', (t * t).toFixed(4));
        hero.style.setProperty('--reveal', reveal.toFixed(4));
        hero.classList.toggle('is-revealed', reveal > 0.6);
      } else {
        hero.classList.add('is-revealed');
      }
      onProgress(reduced ? 1 : p);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [onProgress, reduced, showLogo]);

  return (
    <section ref={heroRef} className={`hero${phase === 'logo' ? ' is-logo' : ''}`} aria-label="Arif and Sons Construction Co.">
      <div className="hero__pin">
        {!useVideo && <img className="hero__video" src={lastFrame} alt="" />}
        {useVideo && <video
          ref={videoRef}
          poster={poster}
          className="hero__video"
          src={introVideo}
          muted
          playsInline
          preload="auto"
          aria-hidden="true"
          tabIndex={-1}
          onEnded={showLogo}
          onError={showLogo}
          onTimeUpdate={(e) => {
            const v = e.currentTarget;
            if (v.duration) heroRef.current?.style.setProperty('--video', (v.currentTime / v.duration).toFixed(3));
          }}
        />}
        <div className="hero__shade" />
        <div className="hero__foot" />

        <div className="hero__lockup">
          <div className="hero__mark">
            <img src={mark} alt="" width={640} height={439} />
          </div>
          <h1 className="hero__name">
            <span className="hero__word hero__word--a"><span>Arif</span></span>
            <span className="hero__word hero__word--b"><span>and</span></span>
            <span className="hero__word hero__word--c"><span>Sons</span></span>
          </h1>
          <p className="hero__sub">
            <span>Construction Co.</span>
          </p>
        </div>

        <div className="hero__after">
          <div className="wrap">
            <div className="hero__after-inner">
              <p className="h-display h-xl">Houses, plazas and interiors, built properly in Lahore since 1995.</p>
              <p className="lede">
                From the first survey to the last coat of paint, one team handles your grey structure, finishing and
                handover.
              </p>
              <div className="hero__actions">
                <a className="btn btn--brick" href={QUOTE_LINK} target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon size={20} />
                  Get a quote on WhatsApp
                </a>
                <button type="button" className="btn btn--ghost" onClick={() => scrollToSection('projects')}>
                  See our projects
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="hero__cue" aria-hidden="true">
          <span>
            Scroll
            <i />
          </span>
        </div>

        <button type="button" className="btn btn--ghost btn--sm hero__skip" onClick={showLogo} tabIndex={phase === 'logo' ? -1 : 0}>
          Skip intro
          <ArrowDown size={16} />
        </button>
        <div className="tape hero__progress" />
      </div>
    </section>
  );
}
