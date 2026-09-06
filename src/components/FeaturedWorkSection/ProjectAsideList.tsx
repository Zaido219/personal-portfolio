import React from "react";
import type { ProjectItemProps } from "../../interface/types";

interface ProjectAsideItemProps {
  project: ProjectItemProps;
}

/**
 * SRP: Renders a single secondary project row
 */
export const ProjectAsideItem: React.FC<ProjectAsideItemProps> = ({ project }) => (
  <div className="group p-4 rounded-xl transition-all duration-200
                  bg-transparent dark:bg-neutral-900/30 dark:hover:bg-neutral-900/60
                  backdrop-blur-md
                  border border-white/50 dark:border-white/10 hover:border-sunset-deep/50 dark:hover:border-sunset-bright/40
                  shadow-sm hover:shadow-md">
    <div className="flex items-center justify-between gap-x-2 mb-1.5">
      <h4 className="text-sm font-semibold text-sunset-amber dark:text-neutral-200 group-hover:text-sunset-bright transition-colors">
        {project.projectName}
      </h4>
      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full 
                       text-sunset-bright dark:bg-neutral-950/60 dark:text-sunset-peach 
                       border border-neutral-300/60 dark:border-sunset-dusk/30 backdrop-blur-xs">
        {project.projectStatus}
      </span>
    </div>
    
    <p className="text-xs text-sunset-amber dark:text-neutral-400 line-clamp-2 mb-3 leading-relaxed">
      {project.projectDescription}
    </p>

    {project.projectLink && (
      <a
        href={project.projectLink}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[11px] font-mono text-neutral-500 dark:text-neutral-400 hover:text-sunset-bright dark:hover:text-sunset-peach transition-colors inline-flex items-center gap-x-1"
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
                      bg-transparent dark:bg-neutral-900/40 
                      backdrop-blur-xl backdrop-saturate-150
                      border border-white/40 dark:border-white/10 
                      shadow-xl dark:shadow-2xl">
      <div className="flex items-center justify-between mb-4 pb-3 border-b border-neutral-900/10 dark:border-white/10">
        <h3 className="text-xs font-mono uppercase tracking-wider text-sunset-bright dark:text-sunset-dusk">
          Other Noteworthy Projects
        </h3>
        <span className="text-xs font-mono text-sunset-bright dark:text-sunset-dusk">
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