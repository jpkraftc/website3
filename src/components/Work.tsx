const projects = ['Panel Upgrades', 'Whole-Home Rewires', 'Commercial Projects'];

export default function Work() {
  return (
    <section id="work" className="section work">
      <div className="section-head">
        <div>
          <span className="kicker">OUR WORK</span>
          <h2>
            Real work.
            <br />
            <em>Real results.</em>
          </h2>
        </div>
        <p>
          Replace these placeholders with your own photos of panel upgrades, rewiring, and commercial
          installations.
        </p>
      </div>
      <div className="gallery">
        {projects.map((title, index) => (
          <div key={title} className="photo-placeholder">
            <span>{String(index + 1).padStart(2, '0')}</span>
            <strong>{title}</strong>
            <small>Add your project photo here</small>
          </div>
        ))}
      </div>
    </section>
  );
}
