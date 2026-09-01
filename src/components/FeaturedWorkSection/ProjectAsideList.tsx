import React from "react";
import type { ProjectItemProps } from "../../interface/types";

interface ProjectAsideItemProps {
  project: ProjectItemProps;
}

/**
 * SRP: Renders a single secondary project row
 */
export const ProjectAsideItem: React.FC<ProjectAsideItemProps> = ({ project }) => (
  <div className="group p-4 rounded-xl border border-neutral-200/80 bg-neutral-100/60 hover:bg-white hover:border-sunset-deep/40 dark:border-neutral-800/80 dark:bg-neutral-900/40 dark:hover:bg-neutral-900 shadow-xs hover:shadow-md dark:shadow-none transition-all duration-200">
    <div className="flex items-center justify-between gap-x-2 mb-1.5">
      <h4 className="text-sm font-semibold text-neutral-800 dark:text-neutral-200 group-hover:text-sunset-bright transition-colors">
        {project.projectName}
      </h4>
      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-neutral-200/80 text-neutral-800 dark:bg-neutral-950 dark:text-sunset-peach border border-neutral-300/80 dark:border-sunset-dusk/30">
        {project.projectStatus}
      </span>
    </div>
    
    <p className="text-xs text-neutral-600 dark:text-neutral-400 line-clamp-2 mb-3 leading-relaxed">
      {project.projectDescription}
    </p>

    {project.projectLink && (
      <a
        href={project.projectLink}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[11px] font-mono text-neutral-500 dark:text-neutral-500 hover:text-sunset-bright dark:hover:text-sunset-peach transition-colors inline-flex items-center gap-x-1"
      >
        Source Code &rarr;
      </a>
    )}
  </div>
);

interface ProjectAsideListProps {
  projects: ProjectItemProps[];
  isDark?: boolean;
}

/**
 * SRP: Manages vertical scrolling bounds and container presentation
 */
export const ProjectAsideList: React.FC<ProjectAsideListProps> = ({ projects }) => {
  if (projects.length === 0) return null;

  return (
    <aside className="rounded-2xl bg-white/80 dark:bg-neutral-900/30 border border-neutral-200 dark:border-neutral-800 p-6 flex flex-col h-full max-h-[580px] shadow-sm dark:shadow-none transition-colors duration-300">
      <div className="flex items-center justify-between mb-4 pb-3 border-b border-neutral-200 dark:border-neutral-800">
        <h3 className="text-xs font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
          Other Noteworthy Projects
        </h3>
        <span className="text-xs font-mono text-neutral-400 dark:text-neutral-500">
          {projects.length} repositor{projects.length > 1 ? "ies" : "y"}
        </span>
      </div>

      <div className="flex flex-col gap-y-3 overflow-y-auto pr-1 custom-scrollbar">
        {projects.map((project) => (
          <ProjectAsideItem key={project.projectName} project={project} />
        ))}
      </div>
    </aside>
  );
};