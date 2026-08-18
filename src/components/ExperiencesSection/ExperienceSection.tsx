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
      className="group relative rounded-xl bg-neutral-900/60 border border-neutral-800/80 p-6 sm:p-8 transition-all duration-300 hover:border-neutral-700 hover:bg-neutral-900 shadow-lg"
    >
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 md:gap-8">
        {/* Left Column: Timeline / Period */}
        <div className="md:w-1/3 flex-shrink-0">
          <span className="font-mono text-xs sm:text-sm font-medium tracking-wider text-neutral-400 group-hover:text-sunset-peach transition-colors duration-200">
            {periodText}
          </span>
        </div>

        {/* Right Column: Company & Role Title */}
        <div className="md:w-2/3 flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-bold text-white group-hover:text-sunset-bright transition-colors duration-200">
              {item.company}
            </h3>
            <p className="text-sm font-medium text-sunset-dusk">{item.title}</p>
          </div>
        </div>
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
