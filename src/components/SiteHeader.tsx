import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import emblem from '@/assets/Official_logo_K_complete.png';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Our Work', href: '#work' },
  { label: 'About Us', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="nav">
      <a href="#home" className="brand">
        <span className="logo-circle">
          <img src={emblem} alt="" />
        </span>
        <span>
          KRAFT <em>ELECTRIC</em>
        </span>
      </a>

      <button
        type="button"
        className="menu"
        aria-label="Toggle navigation"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((open) => !open)}
      >
        {menuOpen ? <X size={26} /> : <Menu size={26} />}
      </button>

      <nav className={menuOpen ? 'open' : undefined}>
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
            {link.label}
          </a>
        ))}
      </nav>

      <a className="navcta" href="#contact">
        Request an Estimate ↗
      </a>
    </header>
  );
}
