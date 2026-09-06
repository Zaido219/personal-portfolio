import React from "react";

// --- Types & Link Data ---
export interface FooterLink {
  label: string;
  href: string;
  isExternal?: boolean;
}

export interface SocialLink {
  platform: string;
  href: string;
  icon: React.ReactNode;
}

export const navigationLinks: FooterLink[] = [
  { label: "Home", href: "#" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Certifications", href: "#certifications" },
];

export const resourceLinks: FooterLink[] = [
  { label: "Download CV", href: "/resume.pdf", isExternal: true },
  { label: "GadInsight Platform", href: "#", isExternal: true },
  { label: "Github Profile", href: "https://github.com", isExternal: true },
];

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-transparent text-neutral-900 dark:text-neutral-100 border-t border-neutral-200/80 dark:border-white/10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        
        {/* --- Upper Tier: Call-To-Action Glass Banner --- */}
        <div className="relative overflow-hidden rounded-3xl p-8 sm:p-12 md:p-16 mb-16 transition-colors duration-300
                        bg-gradient-to-br from-white/90 via-[var(--color-sunset-peach)]/30 to-white/70 
                        dark:from-neutral-900/60 dark:via-neutral-900/40 dark:to-neutral-950/80
                        backdrop-blur-xl backdrop-saturate-150
                        border border-[var(--color-sunset-amber)]/40 dark:border-white/10 
                        shadow-[0_10px_30px_rgba(234,97,19,0.08)] dark:shadow-2xl">
          
          {/* Enhanced Ambient Sunset Glow Spots */}
          <div className="absolute -right-16 -bottom-16 w-96 h-96 
                          bg-gradient-to-tl from-[var(--color-sunset-deep)] via-[var(--color-sunset-bright)] to-[var(--color-sunset-amber)] 
                          opacity-35 dark:opacity-20 
                          rounded-full blur-3xl pointer-events-none" />

          <div className="absolute -left-20 -top-20 w-72 h-72 
                          bg-[var(--color-sunset-peach)] 
                          opacity-50 dark:opacity-0 
                          rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-sunset-dusk)] dark:text-[var(--color-sunset-bright)]">
                Let's Build Together
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-100 mt-2">
                LET'S MAKE IT HAPPEN
              </h2>
              <p className="text-sunset-peach dark:text-neutral-400 text-sm sm:text-base mt-3">
                Let me help you build software solutions that will last a lifetime. Whether you have a project in mind or an open role, my inbox is always open.
              </p>
            </div>

            {/* Email CTA Glass Button */}
            <a
              href="mailto:contact@jplm.dev"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-bold text-sm text-white dark:text-neutral-950 
                         bg-gradient-to-r from-[var(--color-sunset-deep)] via-[var(--color-sunset-bright)] to-[var(--color-sunset-amber)] 
                         hover:contrast-125
                         transition-all duration-200 
                         shadow-[0_4px_20px_rgba(234,97,19,0.35)] hover:shadow-[0_6px_28px_rgba(234,97,19,0.5)] 
                         hover:scale-[1.02] active:scale-[0.98] shrink-0"
            >
              Email Me
            </a>
          </div>
        </div>

        {/* --- Middle Tier: Links & Brand Overview --- */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-neutral-200/80 dark:border-white/10">
          
          {/* Brand Column (5 cols) */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-bold text-neutral-900 dark:text-neutral-100">
                JPLM<span className="text-[var(--color-sunset-deep)] dark:text-[var(--color-sunset-bright)]">.DEV</span>
              </h3>
              <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-2 max-w-sm leading-relaxed">
                John Phillip Lor Malbas — Software Engineer focused on high-level architecture, robust backend logic, and crafting human-centric web applications.
              </p>
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              {navigationLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-neutral-600 dark:text-neutral-400 hover:text-[var(--color-sunset-dusk)] dark:hover:text-[var(--color-sunset-bright)] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources & External Links (4 cols) */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-4">
              Resources & Highlights
            </h4>
            <ul className="space-y-2.5 text-sm">
              {resourceLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.isExternal ? "_blank" : "_self"}
                    rel={link.isExternal ? "noopener noreferrer" : undefined}
                    className="inline-flex items-center gap-1.5 text-neutral-600 dark:text-neutral-400 hover:text-[var(--color-sunset-dusk)] dark:hover:text-[var(--color-sunset-bright)] transition-colors"
                  >
                    {link.label}
                    {link.isExternal && (
                      <span className="text-xs opacity-60">↗</span>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* --- Bottom Tier: Copyright & Socials --- */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500 dark:text-neutral-400">
          <p>© {currentYear} John Phillip Lor Malbas. All rights reserved.</p>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[var(--color-sunset-dusk)] dark:hover:text-[var(--color-sunset-bright)] transition-colors"
              aria-label="GitHub"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[var(--color-sunset-dusk)] dark:hover:text-[var(--color-sunset-bright)] transition-colors"
              aria-label="LinkedIn"
            >
              LinkedIn
            </a>
            <a
              href="mailto:contact@jplm.dev"
              className="hover:text-[var(--color-sunset-dusk)] dark:hover:text-[var(--color-sunset-bright)] transition-colors"
              aria-label="Email"
            >
              Contact
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;