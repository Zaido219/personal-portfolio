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
    <footer className="w-full transition-colors duration-200 bg-neutral-50 text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100 border-t border-neutral-200 dark:border-neutral-900">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        
        {/* --- Upper Tier: Call-To-Action Banner --- */}
        <div className="relative overflow-hidden rounded-2xl border p-8 sm:p-12 md:p-16 mb-16 transition-colors duration-200 bg-white border-neutral-200 dark:bg-neutral-900/40 dark:border-neutral-800/80">
          
          {/* Subtle Sunset Background Glow */}
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-sunset-bright/10 dark:bg-sunset-bright/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <span className="text-xs font-semibold uppercase tracking-wider text-sunset-bright">
                Let's Build Together
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-100 mt-2">
                LET'S MAKE IT HAPPEN
              </h2>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm sm:text-base mt-3">
                Let me help you build software solutions that will last a lifetime. Whether you have a project in mind or an open role, my inbox is always open.
              </p>
            </div>

            {/* Email CTA Button */}
            <a
              href="mailto:contact@jplm.dev"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-bold text-sm text-neutral-950 bg-sunset-bright hover:bg-sunset-amber transition-all duration-200 shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] shrink-0"
            >
              Email Me
            </a>
          </div>
        </div>

        {/* --- Middle Tier: Links & Brand Overview --- */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-neutral-200 dark:border-neutral-800/80">
          
          {/* Brand Column (5 cols) */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-bold text-neutral-900 dark:text-neutral-100">
                JPLM<span className="text-sunset-bright">.DEV</span>
              </h3>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-2 max-w-sm leading-relaxed">
                John Phillip Lor Malbas — Software Engineer focused on high-level architecture, robust backend logic, and crafting human-centric web applications.
              </p>
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-400 dark:text-neutral-500 mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              {navigationLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-neutral-600 dark:text-neutral-400 hover:text-sunset-bright dark:hover:text-sunset-bright transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources & External Links (4 cols) */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-400 dark:text-neutral-500 mb-4">
              Resources & Highlights
            </h4>
            <ul className="space-y-2.5 text-sm">
              {resourceLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.isExternal ? "_blank" : "_self"}
                    rel={link.isExternal ? "noopener noreferrer" : undefined}
                    className="inline-flex items-center gap-1.5 text-neutral-600 dark:text-neutral-400 hover:text-sunset-bright dark:hover:text-sunset-bright transition-colors"
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
              className="hover:text-sunset-bright transition-colors"
              aria-label="GitHub"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-sunset-bright transition-colors"
              aria-label="LinkedIn"
            >
              LinkedIn
            </a>
            <a
              href="mailto:contact@jplm.dev"
              className="hover:text-sunset-bright transition-colors"
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