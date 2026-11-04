import emblem from '@/assets/Official_logo_K_complete.png';
import { PHONE_HREF } from '@/constants/site';

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-inner">
        <div className="hero-copy">
          <div className="eyebrow">
            RESIDENTIAL <b>•</b> COMMERCIAL <b>•</b> INDUSTRIAL
          </div>
          <h1>
            <span>Kraft</span> <strong>Electric</strong>
          </h1>
          <h2>
            Powering Homes &amp;
            <br />
            Building Trust.
          </h2>
          <p>
            Reliable electrical solutions for homes and businesses. Quality workmanship, clear
            communication, and service you can count on.
          </p>
          <div className="actions">
            <a className="button primary" href={PHONE_HREF}>
              Call Now ↗
            </a>
            <a className="button secondary" href="#contact">
              Request an Estimate →
            </a>
          </div>
        </div>
        <div className="hero-symbol">
          <div className="logo-circle">
            <img src={emblem} alt="Kraft Electric lightning emblem" />
          </div>
        </div>
      </div>
      <div className="hero-footer">
        LICENSED &amp; INSURED <span>✦</span> SERVING THE TRIAD
      </div>
    </section>
  );
}
