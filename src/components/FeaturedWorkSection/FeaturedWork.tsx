import React from "react";
import type { ProjectItemProps } from "../../interface/types";
import { Projects } from "../../config/ProjectConstants"; // Assuming path to your constants
import { ReflectedGlow } from "../Shared/Glow";

/**
 * SRP: Renders section title and subtitle
 */
const SectionHeader = () => (
  <div className="mb-12">
    <h2 className="text-3xl sm:text-4xl font-extrabold text-sunset-bright tracking-tight mb-3">
      Featured Work
    </h2>
    <p className="text-neutral-400 text-sm sm:text-base max-w-xl">
      A selection of systems, tools, and engines built from scratch to explore architecture, algorithms, and networking mechanics.
    </p>
  </div>
);

/**
 * SRP: Status badge formatted using warm sunset tokens
 */
const StatusTag = ({ status }: { status: string }) => (
  <span className="inline-block px-2.5 py-0.5 text-xs font-mono rounded-full bg-neutral-900 border border-sunset-dusk/50 text-sunset-peach">
    {status}
  </span>
);

/**
 * SRP: Renders a primary featured project card with image placeholder and subtle backlight hover
 */
const FeaturedProjectCard = ({ project }: { project: ProjectItemProps }) => (
  <div className="group relative flex flex-col justify-between rounded-2xl bg-neutral-900 border border-neutral-800 p-6 transition-all duration-300 hover:border-sunset-deep/50 hover:bg-neutral-900/80">
    {/* Optional subtle background glow on hover */}
    <div
      aria-hidden="true"
      className="absolute -inset-px rounded-2xl bg-gradient-to-tr from-sunset-deep/20 via-transparent to-sunset-amber/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none -z-10"
    />

    <div>
      {/* Thumbnail / Visual Area */}
      <div className="w-full aspect-video rounded-lg bg-neutral-950 border border-neutral-800/80 mb-5 overflow-hidden flex items-center justify-center text-neutral-600 font-mono text-xs group-hover:border-neutral-700 transition-colors">
        [ {project.projectName} Visual ]
      </div>

      <div className="flex items-center justify-between gap-x-2 mb-3">
        <h3 className="text-xl font-bold text-white group-hover:text-sunset-peach transition-colors">
          {project.projectName}
        </h3>
        <StatusTag status={project.projectStatus} />
      </div>

      <p className="text-neutral-400 text-sm leading-relaxed mb-6">
        {project.projectDescription}
      </p>
    </div>

    {project.projectLink && (
      <div className="pt-2">
        <a
          href={project.projectLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-x-2 text-xs font-semibold uppercase tracking-wider text-sunset-bright hover:text-white transition-colors"
        >
          View Source Code
          <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
            <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
            <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 100-2H5z" />
          </svg>
        </a>
      </div>
    )}
  </div>
);

/**
 * SRP: Compact list item for secondary project archive
 */
const ProjectAsideItem = ({ project }: { project: ProjectItemProps }) => (
  <div className="group p-4 rounded-xl border border-neutral-800/60 bg-neutral-900/40 hover:bg-neutral-900 hover:border-neutral-700 transition-all duration-200">
    <div className="flex items-center justify-between gap-x-2 mb-1">
      <h4 className="text-sm font-semibold text-neutral-200 group-hover:text-sunset-bright transition-colors">
        {project.projectName}
      </h4>
      <span className="text-[10px] font-mono text-neutral-500">{project.projectStatus}</span>
    </div>
    <p className="text-xs text-neutral-400 line-clamp-2 mb-3 leading-normal">
      {project.projectDescription}
    </p>
    {project.projectLink && (
      <a
        href={project.projectLink}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[11px] font-medium text-neutral-500 hover:text-sunset-peach transition-colors inline-flex items-center gap-x-1"
      >
        Repository &rarr;
      </a>
    )}
  </div>
);

/**
 * SRP: Main container orchestrating layout split between top 3 and remaining projects
 */
export const FeaturedWorkSection = () => {
  const featuredProjects = Projects.slice(0, 3);
  const secondaryProjects = Projects.slice(3);

  return (
    <section id="work" className="w-full bg-neutral-950 max-w-7xl mx-auto px-6 py-16 md:py-24">
      <SectionHeader />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {/* Main Grid: Top 3 Projects */}
        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredProjects.map((project, index) => (
            <div
              key={project.projectName}
              className={index === 0 ? "md:col-span-2" : "col-span-1"}
            >
              <FeaturedProjectCard project={project} />
            </div>
          ))}
        </div>

        {/* Aside Sidebar: Remaining Projects */}
        <aside className="lg:col-span-1 rounded-2xl bg-neutral-900/30 border border-neutral-800 p-6">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-400 mb-4 pb-3 border-b border-neutral-800">
            Other Noteworthy Projects
          </h3>
          <div className="flex flex-col gap-y-3 max-h-[600px] overflow-y-auto custom-scrollbar pr-1">
            {secondaryProjects.map((project) => (
              <ProjectAsideItem key={project.projectName} project={project} />
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
};