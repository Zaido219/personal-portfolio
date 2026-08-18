import React from "react";
import { motion } from "framer-motion";
import { workExperiences } from "../../config/constants";
import { type WorkExperienceItemProps } from "../../interface/types";

// SRP: Section Header Typography
const ExperienceHeader: React.FC = () => (
  <div className="mb-10 max-w-2xl">
    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-3">
      My <span className="text-sunset-bright">Experience</span>
    </h2>
    <p className="text-neutral-400 text-sm sm:text-base">
      A timeline of my professional trajectory, engineering roles, and technical
      contributions.
    </p>
  </div>
);

// SRP: Single Experience Item Card with Hover Effects
// Pure helper to encapsulate formatting logic (SRP)
const formatYearRange = (startYear: string, endYear?: string): string => {
  if (!startYear) return "";
  if (endYear && startYear.toLowerCase() === endYear.toLowerCase()) {
    return startYear;
  }
  return `${startYear} — ${endYear ?? "Present"}`;
};

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
      className="group relative pl-6 sm:pl-8 pb-10 last:pb-0 border-l border-neutral-800 hover:border-neutral-700 transition-colors duration-300"
    >
      {/* Vertical Timeline Dot */}
      <span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-neutral-700 border border-neutral-900 group-hover:bg-sunset-peach group-hover:scale-125 transition-all duration-300 shadow-[0_0_8px_rgba(255,150,100,0.5)]" />

      {/* Node Content Container */}
      <div className="flex flex-col gap-1.5">
        {/* Timeline / Period Badge */}
        <span className="font-mono text-xs font-semibold tracking-wider text-sunset-peach/90 uppercase">
          {periodText}
        </span>

        {/* Role Title */}
        <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-sunset-bright transition-colors duration-200">
          {item.title}
        </h3>

        {/* Company Name */}
        <p className="text-sm font-medium text-neutral-400">
          {item.company}
        </p>
      </div>
    </motion.div>
  );
};

// SRP: List Wrapper for Experience Items
const ExperienceList: React.FC<{ items: Experience[] }> = ({ items }) => (
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
      className="w-full bg-neutral-950 text-white max-w-7xl mx-auto px-6 py-16 md:py-24"
    >
      {/* Outer Card Shell matching reference layout */}
      <div className="rounded-3xl bg-neutral-900/30 border border-neutral-800/80 p-6 sm:p-10 md:p-12 shadow-2xl backdrop-blur-sm">
        <ExperienceHeader />
        <ExperienceList items={workExperiences} />
      </div>
    </section>
  );
};
