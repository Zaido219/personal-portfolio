import React from "react";

interface SectionHeaderProps {
  title: string;
  description?: React.ReactNode;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ title, description }) => (
  <>
    {/* Sticky bar: sits right under the navbar (h-16 = top-16) */}
    <div
      className="sticky top-16 z-30 -mx-6 px-6 py-3 mb-6
                 bg-white/70 dark:bg-neutral-950/50 backdrop-blur-xl
                 border-b border-black/5 dark:border-white/10
                 transition-colors duration-300"
    >
      <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-sunset-deep dark:text-sunset-bright">
        {title}
      </h2>
    </div>

    {/* Description scrolls away normally so the pinned bar stays slim */}
    {description && (
      <p className="mb-12 max-w-2xl text-zinc-600 dark:text-neutral-400 text-sm sm:text-base font-medium">
        {description}
      </p>
    )}
  </>
);

export default SectionHeader;