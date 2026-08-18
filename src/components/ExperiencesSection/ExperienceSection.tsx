import React from "react";
import { motion } from "framer-motion";

// 1. Data Type Definition
export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description?: string;
  technologies?: string[];
}

// 2. Mock Experience Data (Move to config/ExperienceConstants.ts as needed)
export const EXPERIENCES: Experience[] = [
  {
    id: "exp-1",
    company: "Tech Solutions Inc.",
    role: "Full Stack Developer",
    period: "2024 — Present",
    description: "Architected microservices and responsive user interfaces using React, Node.js, and PostgreSQL.",
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS"],
  },
  {
    id: "exp-2",
    company: "Digital Innovations Lab",
    role: "Junior Software Engineer",
    period: "2023 — 2024",
    description: "Developed RESTful APIs and maintained core UI components adhering to modern accessibility standards.",
    technologies: ["React", "JavaScript", "Express", "MongoDB"],
  },
  {
    id: "exp-3",
    company: "Freelance",
    role: "Web Developer",
    period: "2022 — 2023",
    description: "Built custom web applications and client portfolios focused on performance optimization.",
    technologies: ["HTML/CSS", "JavaScript", "Tailwind CSS"],
  },
];

// SRP: Section Header Typography
const ExperienceHeader: React.FC = () => (
  <div className="mb-10 max-w-2xl">
    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-3">
      My <span className="text-sunset-bright">Experience</span>
    </h2>
    <p className="text-neutral-400 text-sm sm:text-base">
      A timeline of my professional trajectory, engineering roles, and technical contributions.
    </p>
  </div>
);

// SRP: Single Experience Item Card with Hover Effects
const ExperienceItemCard: React.FC<{ item: Experience }> = ({ item }) => {
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
            {item.period}
          </span>
        </div>

        {/* Right Column: Title, Company, Description & Tech Stack */}
        <div className="md:w-2/3 flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-bold text-white group-hover:text-sunset-bright transition-colors duration-200">
              {item.company}
            </h3>
            <p className="text-sm font-medium text-sunset-dusk mb-3">
              {item.role}
            </p>
            {item.description && (
              <p className="text-neutral-400 text-sm leading-relaxed mb-4">
                {item.description}
              </p>
            )}
          </div>

          {/* Technology Badges */}
          {item.technologies && item.technologies.length > 0 && (
            <div className="flex flex-wrap gap-2 pt-2">
              {item.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-full text-[11px] font-mono font-medium bg-neutral-950 border border-neutral-800 text-sunset-peach/80"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
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
    <section id="experience" className="w-full bg-neutral-950 text-white max-w-7xl mx-auto px-6 py-16 md:py-24">
      {/* Outer Card Shell matching reference layout */}
      <div className="rounded-3xl bg-neutral-900/30 border border-neutral-800/80 p-6 sm:p-10 md:p-12 shadow-2xl backdrop-blur-sm">
        <ExperienceHeader />
        <ExperienceList items={EXPERIENCES} />
      </div>
    </section>
  );
};