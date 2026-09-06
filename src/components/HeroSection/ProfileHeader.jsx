import React, { useState } from "react";
import { ReflectedGlow } from "./../Shared/Glow";
import { useTheme } from "../../hooks/useTheme";
import myPfp from "../../../public/images/my_pfp_new.jpg";
import myLogo from "../../../public/myLogo.png";

export const NAV_ITEMS = [
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
];

const NavLinks = ({ items, onItemClick, isDark, onToggleTheme, isVertical = false }) => (
  <ul className={`flex ${isVertical ? "flex-col gap-y-4" : "flex-row items-center gap-x-6 md:gap-x-8"}`}>
    {items.map((item) => (
      <li key={item.label}>
        <a
          href={item.href}
          onClick={onItemClick}
          className="block text-xs md:text-2xs font-semibold uppercase tracking-widest text-sunset-peach hover:text-neutral-950 dark:text-sunset-dusk dark:hover:text-white transition-colors duration-200"
        >
          {item.label}
        </a>
      </li>
    ))}
    {/* !TODO temporarily disabled theme toggling*/}
    <li className={isVertical ? "pt-2" : ""}>
      <ReflectedGlow>
        <button
          type="button"
          onClick={() => {
            if (onToggleTheme) onToggleTheme();
            if (onItemClick) onItemClick();
          }}
          aria-label="Toggle theme mode"
          className="bg-sunset-peach hover:bg-sunset-amber text-neutral-900 border-sunset-amber dark:bg-sunset-dusk/80 dark:text-sunset-peach dark:border-white/10 dark:hover:border-sunset-deep backdrop-blur-md inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest border px-4 py-2 rounded-full transition-all duration-200 cursor-pointer"
        >
          {isDark ? (
            <>
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              <span>Light</span>
            </>
          ) : (
            <>
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
              <span>Dark</span>
            </>
          )}
        </button>
      </ReflectedGlow>
    </li>
  </ul>
);

const Brand = () => (
  <a href="#" className="flex items-center gap-x-3 group">
    <div className="h-9 w-9 rounded-full overflow-hidden flex-shrink-0 transition-transform group-hover:scale-105 border border-neutral-200 dark:border-white/10">
      <img src={myLogo} alt="John Phillip Lor Malbas" className="h-full w-full object-cover" />
    </div>
    <ReflectedGlow>
      <span className="font-bold text-sm tracking-wider text-sunset-peach dark:text-sunset-bright">
        JPLM.DEV
      </span>
    </ReflectedGlow>
  </a>
);

const DesktopNavMenu = ({ items, isDark, onToggleTheme }) => (
  <nav aria-label="Desktop Navigation" className="hidden md:block">
    <NavLinks items={items} isDark={isDark} onToggleTheme={onToggleTheme} />
  </nav>
);

const MobileNavToggle = ({ isOpen, onToggle }) => (
  <button
    onClick={onToggle}
    type="button"
    aria-expanded={isOpen}
    aria-label="Toggle navigation menu"
    className="md:hidden text-neutral-800 dark:text-white focus:outline-none p-2"
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

const MobileNavDrawer = ({ items, onClose, isDark, onToggleTheme }) => (
  <div className="fixed inset-x-0 top-[64px] bg-white/80 dark:bg-neutral-900/80 backdrop-blur-xl border-b border-neutral-200 dark:border-white/10 p-6 md:hidden shadow-lg z-40">
    <nav aria-label="Mobile Navigation">
      <NavLinks items={items} onItemClick={onClose} isDark={isDark} onToggleTheme={onToggleTheme} isVertical />
    </nav>
  </div>
);

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 w-full bg-transparent dark:bg-neutral-950/40 backdrop-blur-xl transition-all duration-300 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Brand />
        <DesktopNavMenu items={NAV_ITEMS} isDark={isDark} onToggleTheme={toggleTheme} />
        <MobileNavToggle isOpen={isMobileMenuOpen} onToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
        {isMobileMenuOpen && (
          <MobileNavDrawer items={NAV_ITEMS} onClose={() => setIsMobileMenuOpen(false)} isDark={isDark} onToggleTheme={toggleTheme} />
        )}
      </div>
    </header>
  );
};

const StatusBadge = ({ text }) => (
  <div className="inline-flex items-center gap-x-2 px-3 py-1.5 rounded-full dark:bg-neutral-900/40 backdrop-blur-md border border-sunset-amber dark:border-sunset-deep/60 text-sunset-amber dark:text-sunset-bright text-xs font-medium mb-6 transition-colors duration-200">
    <span className="relative flex h-2 w-2">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
    </span>
    {text}
  </div>
);

const HeroCTA = () => (
  <div className="flex items-center gap-x-4 pt-2">
    <a
      href="/resume.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="px-6 py-3 rounded-full bg-[#EA6113] text-white dark:text-sunset-peach font-medium text-sm md:text-xs transition-all duration-200 shadow-[0_0_20px_rgba(234,97,19,0.3)] hover:shadow-[0_0_28px_rgba(234,97,19,0.5)]"
    >
      My Resume
    </a>
    <a
      href="mailto:contact@jplm.dev"
      className="px-6 py-3 rounded-full border border-neutral-300/80 hover:bg-neutral-100/50 text-neutral-800 dark:border-sunset-amber/80 dark:text-[#FFE3B3] dark:hover:bg-neutral-900/50 dark:hover:text-white font-medium text-sm md:text-xs backdrop-blur-md transition-colors duration-200"
    >
      Email Me
    </a>
  </div>
);

export const HeroSection = () => {
  return (
    /* Removed solid bg-neutral-950/bg-neutral-50 background so ambient mesh passes through */
    <section className="min-h-screen bg-transparent text-neutral-900 dark:text-white flex flex-col justify-between selection:bg-sunset-bright/20 transition-colors duration-300">
      <main className="w-full max-w-7xl mx-auto px-6 py-12 md:py-24 flex-1 flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="flex-1 max-w-2xl">
          <StatusBadge text="Available for work" />
          <h1 className="text-4xl sm:text-6xl lg:text-6xl font-extrabold tracking-tight text-sunset-bright dark:text-[#F88F22] mb-4 leading-none">
            John Phillip Lor Malbas
          </h1>

          <h2 className="text-2xl sm:text-3xl font-semibold text-neutral-700 dark:text-neutral-300 mb-6">
            Software Developer
          </h2>

          <p className="text-neutral-600 dark:text-neutral-300 text-base sm:text-md leading-relaxed max-w-xl mb-8">
            Software developer focused on backend systems, data pipelines, and low-level tools. 
            I build things with Django, Python, C#, and React.
          </p>

          <HeroCTA />
        </div>

        {/* Profile Card Container with Glassmorphism */}
        <div className="flex-1 flex justify-center md:justify-end w-full">
          <div className="relative w-full max-w-md aspect-square group">
            <div
              aria-hidden="true"
              className="absolute -inset-1 sm:-inset-2 rounded-3xl bg-gradient-to-tr from-sunset-deep via-sunset-bright to-sunset-amber opacity-30 dark:opacity-40 blur-2xl transition duration-500 group-hover:opacity-60 dark:group-hover:opacity-70 group-hover:blur-3xl"
            />

            <div className="relative w-full h-full rounded-2xl bg-white/30 dark:bg-neutral-900/40 backdrop-blur-xl border sunset-peach dark:border-sunset-deep shadow-xl dark:shadow-2xl overflow-hidden">
              <img
                src={myPfp}
                alt="John Phillip Lor Malbas"
                className="w-full h-full object-cover object-center"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};