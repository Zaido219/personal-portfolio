import React from "react";
import { motion } from "framer-motion";
import { workExperiences } from "../../config/constants";
import { type WorkExperienceItemProps } from "../../interface/types";

// SRP: Section Header Typography
const ExperienceHeader: React.FC = () => (
  <div className="mb-10 max-w-2xl">
    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-white mb-3">
      My <span className="text-sunset-deep dark:text-sunset-bright">Experience</span>
    </h2>
    <p className="text-zinc-600 dark:text-neutral-400 text-sm sm:text-base font-medium">
      A lifetime of perseverance, grit, learning and self discovery
    </p>
  </div>
);

// Pure helper to encapsulate formatting logic (SRP)
const formatYearRange = (startYear: string, endYear?: string): string => {
  if (!startYear) return "";
  if (endYear && startYear.toLowerCase() === endYear.toLowerCase()) {
    return startYear;
  }
  return `${startYear} — ${endYear ?? "Present"}`;
};

// SRP: Single Experience Item Card with Hover Effects
const ExperienceItemCard: React.FC<{ item: WorkExperienceItemProps }> = ({
  item,
}) => {
  const periodText = formatYearRange(item.startYear, item.endYear);

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 15 },
        visible: { opacity: 1, y: 0 },
      }}
      className="group relative pl-6 sm:pl-8 pb-10 last:pb-0 border-l border-zinc-300 dark:border-white/10 hover:border-sunset-deep dark:hover:border-sunset-bright/50 transition-colors duration-300"
    >
      {/* Vertical Timeline Dot */}
      <span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full 
                       bg-zinc-400 dark:bg-neutral-600 
                       group-hover:bg-sunset-deep dark:group-hover:bg-sunset-bright group-hover:scale-125 
                       transition-all duration-300 
                       shadow-[0_0_10px_rgba(234,97,19,0.5)]" />

      {/* Node Content Container */}
      <div className="flex flex-col gap-1.5 p-4 rounded-xl transition-all duration-200
                      bg-white/60 hover:bg-white/90 dark:bg-neutral-900/30 dark:hover:bg-neutral-900/60
                      backdrop-blur-md
                      border border-black/5 hover:border-sunset-deep/40 dark:border-white/5 dark:hover:border-sunset-bright/30
                      shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-md">
        {/* Timeline / Period Badge */}
        <span className="font-mono text-xs font-bold tracking-wider text-sunset-dusk dark:text-sunset-peach uppercase">
          {periodText}
        </span>

        {/* Role Title */}
        <h3 className="text-lg sm:text-xl font-bold text-zinc-900 dark:text-white group-hover:text-sunset-deep dark:group-hover:text-sunset-bright transition-colors duration-200">
          {item.title}
        </h3>

        {/* Company Name */}
        <p className="text-sm font-medium text-zinc-600 dark:text-neutral-400">
          {item.company}
        </p>
      </div>
    </motion.div>
  );
};

// SRP: List Wrapper for Experience Items
const ExperienceList: React.FC<{ items: WorkExperienceItemProps[] }> = ({ items }) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-50px" }}
    transition={{ staggerChildren: 0.15 }}
    className="flex flex-col gap-y-4"
  >
    {items.map((item) => (
      <ExperienceItemCard key={item.id} item={item} />
    ))}
  </motion.div>
);

// SRP: Root Section Orchestrator
export const ExperienceSection: React.FC = () => {
  return (
    <section
      id="experience"
      className="w-full bg-transparent max-w-7xl mx-auto px-6 py-16 md:py-24 transition-colors duration-300"
    >
      {/* Outer Card Shell */}
      <div className="rounded-3xl p-6 sm:p-10 md:p-12 transition-colors duration-300
                      bg-white/70 dark:bg-neutral-900/40 
                      backdrop-blur-2xl backdrop-saturate-150
                      border border-white/80 dark:border-white/10 
                      shadow-[0_8px_32px_0_rgba(0,0,0,0.06)] dark:shadow-2xl">
        <ExperienceHeader />
        <ExperienceList items={workExperiences} />
      </div>
    </section>
  );
};