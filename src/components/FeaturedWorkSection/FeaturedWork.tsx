import React, { useState } from "react";
import { Projects } from "../../config/ProjectConstants";
import { StackedProjectCard } from "./StackedProjectCard";
import { DeckControls } from "./DeckControls";
import { ProjectAsideList } from "./ProjectAsideList";

export const FeaturedWorkSection: React.FC = () => {
  // Partitioning data: Top 5 for deck stack, remaining for secondary list
  const featuredProjects = Projects.slice(0, 5);
  const secondaryProjects = Projects.slice(5);

  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % featuredProjects.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + featuredProjects.length) % featuredProjects.length);
  };

  return (
    <section id="work" className="w-full max-w-7xl mx-auto px-6 py-16 md:py-24 border-t border-neutral-800">
      {/* Section Title */}
      <div className="mb-12 max-w-2xl">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-sunset-bright tracking-tight mb-3">
          Featured Work
        </h2>
        <p className="text-neutral-400 text-sm sm:text-base">
          Explore highlighted applications and custom engines built from scratch, alongside additional open-source systems.
        </p>
      </div>

      {/* 12-Column Responsive Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Left Column: Stacked Deck (7 cols on Desktop) */}
        <div className="lg:col-span-7 flex flex-col justify-between">
          <div className="relative w-full aspect-[4/5] sm:aspect-[1/1] max-w-md mx-auto lg:max-w-none">
            {featuredProjects.map((project, index) => {
              const offset = (index - activeIndex + featuredProjects.length) % featuredProjects.length;
              return (
                <StackedProjectCard
                  key={project.projectName}
                  project={project}
                  offset={offset}
                  totalCards={featuredProjects.length}
                  onDismiss={handleNext}
                />
              );
            })}
          </div>

          <div className="max-w-md mx-auto lg:max-w-none w-full">
            <DeckControls
              total={featuredProjects.length}
              activeIndex={activeIndex}
              onSelect={setActiveIndex}
              onNext={handleNext}
              onPrev={handlePrev}
            />
          </div>
        </div>

        {/* Right Column: Scrollable Secondary Projects (5 cols on Desktop) */}
        <div className="lg:col-span-5">
          <ProjectAsideList projects={secondaryProjects} />
        </div>
      </div>
    </section>
  );
};