import React from "react";
import type { ProjectItemProps } from "../../interface/types";

interface ProjectAsideItemProps {
  project: ProjectItemProps;
}

/**
 * SRP: Renders a single secondary project row with clear neutral hierarchy
 */
export const ProjectAsideItem: React.FC<ProjectAsideItemProps> = ({ project }) => (
  <div className="group p-4 rounded-xl transition-all duration-200
                  bg-white/60 hover:bg-white/90 dark:bg-neutral-900/40 dark:hover:bg-neutral-900/70
                  backdrop-blur-md
                  border border-black/5 hover:border-sunset-deep/40 dark:border-white/10 dark:hover:border-sunset-bright/40
                  shadow-[0_2px_10px_rgba(0,0,0,0.03)] hover:shadow-[0_4px_20px_rgba(234,97,19,0.12)]">
    <div className="flex items-center justify-between gap-x-2 mb-1.5">
      <h4 className="text-sm font-bold text-zinc-900 dark:text-neutral-100 group-hover:text-sunset-deep dark:group-hover:text-sunset-bright transition-colors">
        {project.projectName}
      </h4>
      <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full 
                       bg-sunset-peach/40 text-sunset-dusk font-semibold dark:bg-neutral-950/60 dark:text-sunset-peach 
                       border border-sunset-amber/40 dark:border-sunset-dusk/30 backdrop-blur-xs">
        {project.projectStatus}
      </span>
    </div>
    
    <p className="text-xs text-zinc-600 dark:text-neutral-400 line-clamp-2 mb-3 leading-relaxed">
      {project.projectDescription}
    </p>

    {project.projectLink && (
      <a
        href={project.projectLink}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[11px] font-mono font-semibold text-sunset-dusk hover:text-sunset-deep dark:text-sunset-bright dark:hover:text-sunset-peach transition-colors inline-flex items-center gap-x-1"
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
    <aside className="rounded-2xl p-6 flex flex-col h-full max-h-[580px] transition-colors duration-300
                      bg-white/70 dark:bg-neutral-900/40 
                      backdrop-blur-2xl backdrop-saturate-150
                      border border-white/80 dark:border-white/10 
                      shadow-[0_8px_32px_0_rgba(0,0,0,0.06)] dark:shadow-2xl">
      <div className="flex items-center justify-between mb-4 pb-3 border-b border-black/10 dark:border-white/10">
        <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-sunset-dusk dark:text-sunset-bright">
          Other Noteworthy Projects
        </h3>
        <span className="text-xs font-mono font-semibold text-sunset-dusk/80 dark:text-sunset-dusk">
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