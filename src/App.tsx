import { useEffect, useState } from 'react';
import { ArrowRight, Menu, X, Sparkles, Zap, ShieldCheck, Layers, Mail } from 'lucide-react';

const features = [
  {
    icon: Sparkles,
    title: 'Thoughtfully designed',
    description: 'Clean layouts and considered details that make every page feel effortless to read and explore.',
  },
  {
    icon: Zap,
    title: 'Fast by default',
    description: 'A lightweight static site that loads instantly on any device, with no servers to manage.',
  },
  {
    icon: ShieldCheck,
    title: 'Hosted for free',
    description: 'Published straight from your repository to GitHub Pages, with secure HTTPS included.',
  },
  {
    icon: Layers,
    title: 'Easy to extend',
    description: 'Sections are self-contained, so adding, reordering, or removing content is simple.',
  },
];

const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-900 antialiased">
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled || menuOpen
            ? 'bg-white/90 shadow-sm backdrop-blur-md border-b border-stone-200'
            : 'bg-transparent'
        }`}
      >
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 lg:px-8">
          <a href="#top" className="flex items-center gap-2 font-semibold tracking-tight text-stone-900">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-teal-700 text-white">
              <Sparkles size={16} />
            </span>
            Your Brand
          </a>

          <ul className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-stone-700 transition-colors hover:text-teal-700"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="hidden rounded-full bg-teal-700 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-teal-800 hover:shadow-md md:inline-flex"
          >
            Get in touch
          </a>

          <button
            type="button"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="rounded-lg p-2 text-stone-800 transition-colors hover:bg-stone-100 md:hidden"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>

        {menuOpen && (
          <div className="border-t border-stone-200 bg-white px-6 pb-6 pt-2 md:hidden">
            <ul className="flex flex-col">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={closeMenu}
                    className="block py-3 text-base font-medium text-stone-800 hover:text-teal-700"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              onClick={closeMenu}
              className="mt-2 inline-flex w-full items-center justify-center rounded-full bg-teal-700 px-5 py-3 text-sm font-medium text-white"
            >
              Get in touch
            </a>
          </div>
        )}
      </header>

      <main id="top">
        <section className="relative overflow-hidden">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 pb-20 pt-32 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:pb-28 lg:pt-40">
            <div className="animate-fade-up">
              <span className="inline-flex items-center gap-2 rounded-full border border-teal-200 bg-teal-50 px-3 py-1 text-xs font-medium text-teal-800">
                <span className="h-1.5 w-1.5 rounded-full bg-teal-600" />
                Now live on GitHub Pages
              </span>
              <h1 className="mt-6 text-4xl font-semibold leading-[1.15] tracking-tight text-stone-900 sm:text-5xl lg:text-6xl">
                A simple, beautiful home for your big ideas.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-stone-600">
                Share what you do, showcase your work, and connect with the people who matter. Everything is
                fast, focused, and ready to publish.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#features"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-teal-700 px-7 py-3.5 text-sm font-medium text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-teal-800 hover:shadow-lg"
                >
                  Explore features
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href="#about"
                  className="inline-flex items-center justify-center rounded-full border border-stone-300 bg-white px-7 py-3.5 text-sm font-medium text-stone-800 transition-colors hover:border-stone-400 hover:bg-stone-100"
                >
                  Learn more
                </a>
              </div>
            </div>

            <div className="animate-fade-up relative [animation-delay:150ms]">
              <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-tr from-teal-100 via-stone-100 to-amber-100 blur-2xl" />
              <img
                src="https://images.pexels.com/photos/4884116/pexels-photo-4884116.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt="A sleek laptop on a clean white desk"
                className="aspect-[4/3] w-full rounded-3xl object-cover shadow-2xl ring-1 ring-stone-900/5"
              />
            </div>
          </div>
        </section>

        <section id="features" className="border-t border-stone-200 bg-white py-20 lg:py-28">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-widest text-teal-700">Features</p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-stone-900 sm:text-4xl">
                Everything you need, nothing you don't.
              </h2>
            </div>

            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {features.map(({ icon: Icon, title, description }) => (
                <div
                  key={title}
                  className="group rounded-2xl border border-stone-200 bg-stone-50 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-teal-200 hover:bg-white hover:shadow-xl"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-100 text-teal-800 transition-colors group-hover:bg-teal-700 group-hover:text-white">
                    <Icon size={20} />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-stone-900">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-stone-600">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="bg-stone-50 py-20 lg:py-28">
          <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-2 lg:items-center lg:px-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-teal-700">About</p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-stone-900 sm:text-4xl">
                Built to be shared, designed to be remembered.
              </h2>
              <p className="mt-6 text-base leading-relaxed text-stone-600">
                Tell your story in your own words. Replace this paragraph with a short introduction about who
                you are, what you care about, and why visitors should stay a while.
              </p>
              <p className="mt-4 text-base leading-relaxed text-stone-600">
                Every section on this page can be edited, so the site grows with you as your work evolves.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-stone-900/5">
                <p className="text-4xl font-semibold tracking-tight text-teal-700">100%</p>
                <p className="mt-2 text-sm text-stone-600">Free hosting on GitHub Pages</p>
              </div>
              <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-stone-900/5">
                <p className="text-4xl font-semibold tracking-tight text-amber-600">0ms</p>
                <p className="mt-2 text-sm text-stone-600">Server wait time for visitors</p>
              </div>
              <div className="col-span-2 rounded-2xl bg-stone-900 p-8 text-white shadow-sm">
                <p className="text-lg font-medium leading-relaxed">
                  "Simplicity is the ultimate sophistication."
                </p>
                <p className="mt-3 text-sm text-stone-400">A reminder for every good website</p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="bg-white py-20 lg:py-28">
          <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-100 text-teal-800">
              <Mail size={22} />
            </div>
            <h2 className="mt-6 text-3xl font-semibold tracking-tight text-stone-900 sm:text-4xl">
              Let's start a conversation.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-stone-600">
              Have a question or an idea? Send a quick note and I'll get back to you as soon as I can.
            </p>
            <a
              href="mailto:hello@example.com"
              className="mt-10 inline-flex items-center justify-center gap-2 rounded-full bg-stone-900 px-8 py-3.5 text-sm font-medium text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-stone-800 hover:shadow-lg"
            >
              hello@example.com
              <ArrowRight size={16} />
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-stone-200 bg-stone-50">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-stone-500 sm:flex-row lg:px-8">
          <p>&copy; {new Date().getFullYear()} Your Brand. All rights reserved.</p>
          <div className="flex gap-6">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="transition-colors hover:text-teal-700">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
