import React, { useState } from 'react';
import {ReflectedGlow} from "./../Shared/Glow";

export const NAV_ITEMS = [
  { label: 'Work', href: '#work' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'About', href: '#about' },
];

// SRP: Solely responsible for rendering the list of navigation links and CTA
const NavLinks = ({ items, onItemClick, isVertical = false }) => (
  <ul className={`flex ${isVertical ? 'flex-col gap-y-4' : 'flex-row items-center gap-x-6 md:gap-x-8'}`}>
    {items.map((item) => (
      <li key={item.label}>
        <a
          href={item.href}
          onClick={onItemClick}
          className="block text-xs font-semibold uppercase tracking-widest text-neutral-400 hover:text-white transition-colors duration-200"
        >
          {item.label}
        </a>
      </li>
    ))}
    <li className={isVertical ? 'pt-2' : ''}>
      <a
        href="#contact"
        onClick={onItemClick}
        className="inline-block text-xs font-semibold uppercase tracking-widest text-white border border-neutral-700 hover:border-neutral-400 px-4 py-2 rounded-full transition-all duration-200"
      >
        Contact
      </a>
    </li>
  </ul>
);

// SRP: Responsible solely for brand representation
const Brand = () => (
  <a href="#" className="flex items-center gap-x-3 group">
    <div className="h-9 w-9 rounded-full bg-red-500 overflow-hidden flex-shrink-0 transition-transform group-hover:scale-105">
      <img src="/avatar-placeholder.png" alt="John Phillip Lor Malbas" className="h-full w-full object-cover" />
    </div>
    <span className="font-bold text-sm tracking-wider text-white">JPLM.DEV</span>
  </a>
);

// SRP: Desktop container & visibility boundary
const DesktopNavMenu = ({ items }) => (
  <nav aria-label="Desktop Navigation" className="hidden md:block">
    <NavLinks items={items} />
  </nav>
);

// SRP: Mobile menu button trigger
const MobileNavToggle = ({ isOpen, onToggle }) => (
  <button
    onClick={onToggle}
    type="button"
    aria-expanded={isOpen}
    aria-label="Toggle navigation menu"
    className="md:hidden text-white focus:outline-none p-2"
  >
    <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
      {isOpen ? (
        <path fillRule="evenodd" clipRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
      ) : (
        <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
      )}
    </svg>
  </button>
);

// SRP: Mobile full-width drawer wrapper
const MobileNavDrawer = ({ items, onClose }) => (
  <div className="fixed inset-x-0 top-[88px] bg-neutral-900 border-b border-neutral-800 p-6 md:hidden shadow-lg z-40">
    <nav aria-label="Mobile Navigation">
      <NavLinks items={items} onItemClick={onClose} isVertical />
    </nav>
  </div>
);

// SRP: Header container orchestrating layout & state
const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-neutral-900 w-full max-w-7xl mx-auto px-6 py-6 flex items-center justify-between relative z-50">
      <Brand />
      <DesktopNavMenu items={NAV_ITEMS} />
      <MobileNavToggle 
        isOpen={isMobileMenuOpen} 
        onToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
      />
      {isMobileMenuOpen && (
        <MobileNavDrawer 
          items={NAV_ITEMS} 
          onClose={() => setIsMobileMenuOpen(false)} 
        />
      )}
    </header>
  );
};

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

// SRP: Hero Call-To-Action buttons
const HeroCTA = () => (
  <div className="flex items-center gap-x-4 pt-2">
    <a
      href="/resume.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="px-6 py-3 rounded-full bg-[#EA6113] text-neutral-200 font-medium text-sm transition-all duration-200 shadow-[0_0_20px_rgba(234,97,19,0.5)] hover:shadow-[0_0_28px_rgba(234,97,19,0.7)]"
    >
      My Resume
    </a>
    <a
      href="mailto:contact@jplm.dev"
      className="px-6 py-3 rounded-full border border-neutral-800 text-[#FFE3B3] font-medium text-sm hover:bg-neutral-900 hover:text-white transition-colors duration-200"
    >
      Email Me
    </a>
  </div>
);

// SRP: Root component orchestrating the Hero section layout
export const HeroSection = () => {
  return (
    <section className="min-h-screen bg-neutral-950 text-white flex flex-col justify-between selection:bg-neutral-800 selection:text-white">
      <Header />

      <main className="w-full max-w-7xl mx-auto px-6 py-12 md:py-24 flex-1 flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left Column: Hero Copy */}
        <div className="flex-1 max-w-2xl">
          <StatusBadge text="Available for work" />

          <ReflectedGlow>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#F88F22] mb-4 leading-none">
              John Phillip Lor Malbas
            </h1>
          </ReflectedGlow>

          <h2 className="text-2xl sm:text-4xl font-semibold text-neutral-300 mb-6">
            Software Developer
          </h2>

          <p className="text-neutral-300 text-base sm:text-lg leading-relaxed max-w-xl mb-8">
            Engineering elegant solutions through clean code and modern
            architecture. Specializing in robust backend systems and intuitive
            user interfaces.
          </p>

          <HeroCTA />
        </div>

        {/* Right Column: Visual Feature / Image Card */}
        <div className="flex-1 flex justify-center md:justify-end w-full">
          <div className="relative w-full max-w-md aspect-square rounded-2xl bg-gradient-to-tr from-neutral-900 to-neutral-800 border border-neutral-800 shadow-2xl overflow-hidden flex items-center justify-center">
            <div className="text-neutral-600 text-sm font-mono">
              [ Developer Avatar / Visual Card ]
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};