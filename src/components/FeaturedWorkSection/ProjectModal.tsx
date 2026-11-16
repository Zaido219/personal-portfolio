import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import type { ProjectItemProps } from "../../interface/types";

interface ProjectModalProps {
  project: ProjectItemProps | null;
  onClose: () => void;
}

export const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  useEffect(() => {
    if (!project) return;

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-1 sm:p-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="presentation"
        >
          <motion.button
            type="button"
            className="absolute inset-0 h-full w-full cursor-pointer bg-black/35 backdrop-blur-sm"
            onClick={onClose}
            aria-label="Close project details"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <motion.section
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            aria-describedby="project-modal-description"
            initial={{ opacity: 0, scale: 0.97, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="relative flex max-h-[80vh] max-h-[80dvh] w-[80vw] flex-col overflow-hidden rounded-xl border border-white/80 bg-white/80 shadow-[0_12px_32px_rgba(0,0,0,0.14)] ring-1 ring-black/5 backdrop-blur-2xl backdrop-saturate-150 transition-colors duration-300 dark:border-white/10 dark:bg-neutral-900/80 dark:shadow-[0_16px_40px_rgba(0,0,0,0.45)] dark:ring-white/10 sm:w-[75vw] lg:w-[60vw]"
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute right-3 top-3 z-20 shrink-0 rounded-full border border-black/10 bg-white/60 p-1.5 text-zinc-700 transition-colors hover:border-sunset-deep/40 hover:text-sunset-deep dark:border-white/10 dark:bg-white/5 dark:text-neutral-300 dark:hover:border-sunset-bright/40 dark:hover:text-sunset-bright"
              aria-label="Close project details"
            >
              <X size={16} aria-hidden="true" />
            </button>

            <div className="min-h-0 overflow-y-auto custom-scrollbar">
              <div className="space-y-5 p-3 sm:space-y-6 sm:p-6">
                <div className="flex items-start justify-between gap-3 pr-10">
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <h2
                        id="project-modal-title"
                        className="text-lg font-bold tracking-tight text-zinc-900 dark:text-neutral-100 sm:text-xl"
                      >
                        {project.projectName}
                      </h2>
                      <span className="inline-flex rounded-full border border-sunset-amber/50 bg-sunset-peach/50 px-2 py-0.5 font-mono text-[9px] font-semibold uppercase tracking-wider text-sunset-dusk dark:border-sunset-dusk/40 dark:bg-neutral-950/60 dark:text-sunset-bright">
                        {project.projectStatus}
                      </span>
                    </div>
                  </div>
                </div>

                {project.images.length > 0 && (
                  <figure className="mx-auto w-[60%] overflow-hidden rounded-lg border border-black/10 bg-black/5 dark:border-white/10 dark:bg-black/30">
                    <img
                      src={project.images[0]}
                      alt={`${project.projectName} screenshot`}
                      className="max-h-[50vh] w-full object-contain"
                    />
                  </figure>
                )}

                <p
                  id="project-modal-description"
                  className="max-w-3xl text-xs leading-relaxed text-zinc-600 dark:text-neutral-300 sm:text-sm"
                >
                  {project.projectDescription}
                </p>

                {project.techStacks.length > 0 && (
                  <section aria-label="Technologies used">
                    <h3 className="mb-2 font-mono text-[11px] font-bold uppercase tracking-wider text-sunset-dusk dark:text-sunset-bright">
                      Built with
                    </h3>
                    <ul className="flex flex-wrap gap-1.5">
                      {project.techStacks.map((tech) => (
                        <li
                          key={tech}
                          className="rounded-md border border-black/10 bg-white/60 px-2.5 py-1 font-mono text-[11px] text-zinc-700 dark:border-white/10 dark:bg-neutral-950/50 dark:text-neutral-300"
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </section>
                )}

                {project.projectLink && (
                  <a
                    href={project.projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-10 w-full items-center justify-center gap-1.5 rounded-lg border border-sunset-deep/30 bg-sunset-deep px-4 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-sunset-dusk focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sunset-deep dark:border-sunset-bright/30 dark:bg-sunset-bright dark:text-neutral-950 dark:hover:bg-sunset-peach sm:w-auto"
                  >
                    View project <span aria-hidden="true">&rarr;</span>
                  </a>
                )}
              </div>
            </div>
          </motion.section>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
