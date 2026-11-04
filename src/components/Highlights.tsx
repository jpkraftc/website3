const highlights = [
  { icon: '✓', label: 'Licensed & Insured' },
  { icon: '✦', label: 'Quality Workmanship' },
  { icon: '◷', label: 'Reliable Communication' },
  { icon: '⌁', label: 'Residential & Commercial' },
];

export default function Highlights() {
  return (
    <section className="features" aria-label="Company highlights">
      {highlights.map((item) => (
        <div key={item.label}>
          {item.icon} <span>{item.label}</span>
        </div>
      ))}
    </section>
  );
}
