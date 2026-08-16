import React, { useState } from "react";
import { Projects } from "../../config/ProjectConstants";
import { StackedProjectCard } from "./StackedProjectCard";
import { DeckControls } from "./DeckControls";

export const FeaturedWorkSection: React.FC = () => {
  const featuredProjects = Projects.slice(0, 5);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % featuredProjects.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + featuredProjects.length) % featuredProjects.length);
  };

  return (
    <section id="work" className="w-full max-w-7xl mx-auto px-6 py-16 md:py-24 border-t border-neutral-800">
      <div className="mb-12 text-center max-w-2xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-sunset-bright tracking-tight mb-3">
          Featured Work
        </h2>
        <p className="text-neutral-400 text-sm sm:text-base">
          Explore highlighted applications and custom engines built from scratch.
        </p>
      </div>

      <div className="max-w-md mx-auto">
        {/* Stack Container with defined ratio */}
        <div className="relative w-full aspect-[4/5] sm:aspect-[1/1]">
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

        <DeckControls
          total={featuredProjects.length}
          activeIndex={activeIndex}
          onSelect={setActiveIndex}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      </div>
    </section>
  );
};