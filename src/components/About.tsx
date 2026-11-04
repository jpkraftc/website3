import logo from '@/assets/Full_Logo_Design_Complete.png';

export default function About() {
  return (
    <section id="about" className="section about">
      <div>
        <span className="kicker">ABOUT KRAFT ELECTRIC</span>
        <h2>
          Built on quality.
          <br />
          <em>Powered by trust.</em>
        </h2>
        <p>
          Kraft Electric is committed to professional workmanship, dependable communication, and
          electrical solutions tailored to each project. We proudly serve Winston-Salem, Greensboro,
          High Point, and surrounding North Carolina communities.
        </p>
        <a className="button primary" href="#contact">
          Work With Us →
        </a>
      </div>
      <div className="about-logo">
        <img src={logo} alt="Kraft Electric official logo artwork" />
      </div>
    </section>
  );
}
