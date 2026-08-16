import React from "react";
import type { ProjectItemProps } from "../../interface/types";

interface ProjectAsideItemProps {
  project: ProjectItemProps;
}

/**
 * SRP: Renders a single secondary project row
 */
export const ProjectAsideItem: React.FC<ProjectAsideItemProps> = ({ project }) => (
  <div className="group p-4 rounded-xl border border-neutral-800/80 bg-neutral-900/40 hover:bg-neutral-900 hover:border-sunset-deep/40 transition-all duration-200">
    <div className="flex items-center justify-between gap-x-2 mb-1.5">
      <h4 className="text-sm font-semibold text-neutral-200 group-hover:text-sunset-bright transition-colors">
        {project.projectName}
      </h4>
      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-neutral-950 text-sunset-peach border border-sunset-dusk/30">
        {project.projectStatus}
      </span>
    </div>
    
    <p className="text-xs text-neutral-400 line-clamp-2 mb-3 leading-relaxed">
      {project.projectDescription}
    </p>

    {project.projectLink && (
      <a
        href={project.projectLink}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[11px] font-mono text-neutral-500 hover:text-sunset-peach transition-colors inline-flex items-center gap-x-1"
      >
        Source Code &rarr;
      </a>
    )}
  </div>
);

interface ProjectAsideListProps {
  projects: ProjectItemProps[];
}

/**
 * SRP: Manages vertical scrolling bounds and container presentation
 */
export const ProjectAsideList: React.FC<ProjectAsideListProps> = ({ projects }) => {
  if (projects.length === 0) return null;

  return (
    <aside className="rounded-2xl bg-neutral-900/30 border border-neutral-800 p-6 flex flex-col h-full max-h-[580px]">
      <div className="flex items-center justify-between mb-4 pb-3 border-b border-neutral-800">
        <h3 className="text-xs font-mono uppercase tracking-wider text-neutral-400">
          Other Noteworthy Projects
        </h3>
        <span className="text-xs font-mono text-neutral-500">
          {projects.length} repository{projects.length > 1 ? "ies" : ""}
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