import { ESTIMATE_EMAIL_HREF, PHONE_DISPLAY, PHONE_HREF } from '@/constants/site';

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <span className="kicker">LET'S GET STARTED</span>
      <h2>
        Have an electrical project
        <br />
        <em>in mind?</em>
      </h2>
      <p>Tell us what you need. We would be glad to discuss your project and provide an estimate.</p>
      <div className="actions">
        <a className="button primary" href={ESTIMATE_EMAIL_HREF}>
          Email for an Estimate ↗
        </a>
        <a className="button secondary" href={PHONE_HREF}>
          {PHONE_DISPLAY}
        </a>
      </div>
      <p className="location">Winston-Salem · Greensboro · High Point · The Triad</p>
    </section>
  );
}
