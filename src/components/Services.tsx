const services = [
  {
    icon: '⌂',
    title: 'Residential',
    description:
      'Whole-home rewires, panel replacements, new construction, lighting, outlets, and repairs.',
  },
  {
    icon: '▦',
    title: 'Commercial',
    description:
      'Tenant improvements, circuits, equipment connections, lighting, panels, and renovations.',
  },
  {
    icon: '⚙',
    title: 'Industrial',
    description: 'Electrical support and project inquiries for industrial facilities and equipment.',
  },
];

export default function Services() {
  return (
    <section id="services" className="section services">
      <div className="section-head">
        <div>
          <span className="kicker">WHAT WE DO</span>
          <h2>
            Electrical services
            <br />
            <em>done right.</em>
          </h2>
        </div>
        <p>
          From new construction to troubleshooting and upgrades, Kraft Electric delivers dependable
          solutions for projects of all sizes.
        </p>
      </div>
      <div className="cards">
        {services.map((service) => (
          <article key={service.title}>
            <span className="icon">{service.icon}</span>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
