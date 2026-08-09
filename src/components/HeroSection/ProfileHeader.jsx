import React from 'react';

export const NAV_ITEMS = [
  { label: 'Work', href: '#work' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'About', href: '#about' },
];
// SRP: Responsible solely for brand representation
const Brand = () => (
  <a href="#" className="flex items-center gap-x-3 group">
    <div className="h-9 w-9 rounded-full bg-red-500 overflow-hidden flex-shrink-0 transition-transform group-hover:scale-105">
      {/* Fallback image placeholder or actual user avatar */}
      <img src="/avatar-placeholder.png" alt="John Phillip Lor Malbas" className="h-full w-full object-cover" />
    </div>
    <span className="font-bold text-sm tracking-wider text-white">JPLM.DEV</span>
  </a>
);

// SRP: Responsible solely for rendering semantic navigation links (OCP via props/config)
const NavMenu = ({ items }) => (
  <nav aria-label="Main Navigation">
    <ul className="flex items-center gap-x-6 md:gap-x-8">
      {items.map((item) => (
        <li key={item.label}>
          <a
            href={item.href}
            className="text-xs font-semibold uppercase tracking-widest text-neutral-400 hover:text-white transition-colors duration-200"
          >
            {item.label}
          </a>
        </li>
      ))}
      <li>
        <a
          href="#contact"
          className="text-xs font-semibold uppercase tracking-widest text-white border border-neutral-700 hover:border-neutral-400 px-4 py-2 rounded-full transition-all duration-200"
        >
          Contact
        </a>
      </li>
    </ul>
  </nav>
);

// SRP: Header container handling top-level flex distribution
const Header = () => (
  <header className="w-full max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
    <Brand />
    <NavMenu items={NAV_ITEMS} />
  </header>
);

// SRP: Status Badge Component
const StatusBadge = ({ text }) => (
  <div className="inline-flex items-center gap-x-2 px-3 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-medium text-emerald-400 mb-6">
    <span className="relative flex h-2 w-2">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
    </span>
    {text}
  </div>
);

// SRP: Main Call-To-Action buttons
const HeroCTA = () => (
  <div className="flex items-center gap-x-4 pt-2">
    <a
      href="/resume.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="px-6 py-3 rounded-full bg-white text-neutral-950 font-medium text-sm hover:bg-neutral-200 transition-colors duration-200"
    >
      My Resume
    </a>
    <a
      href="mailto:contact@jplm.dev"
      className="px-6 py-3 rounded-full border border-neutral-800 text-neutral-300 font-medium text-sm hover:bg-neutral-900 hover:text-white transition-colors duration-200"
    >
      Email Me
    </a>
  </div>
);

// SRP: Root component orchestrating the layout structure
export const HeroSection = () => {
  return (
    <section className="min-h-screen bg-neutral-950 text-white flex flex-col justify-between selection:bg-neutral-800 selection:text-white">
      <Header />

      <main className="w-full max-w-7xl mx-auto px-6 py-12 md:py-24 flex-1 flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left Column: Hero Copy */}
        <div className="flex-1 max-w-2xl">
          <StatusBadge text="Available for work" />
          
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-4 leading-none">
            John Phillip Lor Malbas
          </h1>
          
          <h2 className="text-2xl sm:text-4xl font-semibold text-neutral-400 mb-6">
            Software Developer
          </h2>
          
          <p className="text-neutral-400 text-base sm:text-lg leading-relaxed max-w-xl mb-8">
            Engineering elegant solutions through clean code and modern architecture. 
            Specializing in robust backend systems and intuitive user interfaces.
          </p>

          <HeroCTA />
        </div>

        {/* Right Column: Visual Feature / Image Card */}
        <div className="flex-1 flex justify-center md:justify-end w-full">
          <div className="relative w-full max-w-md aspect-square rounded-2xl bg-gradient-to-tr from-neutral-900 to-neutral-800 border border-neutral-800 shadow-2xl overflow-hidden flex items-center justify-center">
            {/* Visual element or actual headshot goes here */}
            <div className="text-neutral-600 text-sm font-mono">
              [ Developer Avatar / Visual Card ]
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};