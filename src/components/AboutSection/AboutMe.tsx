import React from "react";

// --- Types & Data Configuration ---
export interface StoryBlock {
  id: string;
  title: string;
  content: string;
  highlight?: string;
  imageSrc?: string;
  imageAlt?: string;
}

export const AboutStory: StoryBlock[] = [
  {
    id: "roots",
    title: "Craftsmanship & Hard Labor",
    content:
      "My journey wasn't linear. Financial constraints after high school led me to work two years as a high-speed sewing machine operator, followed by years fabricating glass and aluminum fixtures alongside my father. That manual labor taught me the true meaning of discipline, patience, and raw craftsmanship.",
    highlight: "Built on real-world labor and grit.",
    imageSrc: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Craftsmanship and manual labor placeholder",
  },
  {
    id: "discovery",
    title: "Falling in Love with Code",
    content:
      "Enrolling in Information Technology at Bulacan Agricultural State College gave me a second chance at education. From writing my first lines of C++, I became obsessed with software development—building, breaking, and iterating through countless projects while balancing full-time work and study.",
    highlight: "Graduated July 9, 2026 — BS in Information Technology.",
    imageSrc: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Software development workspace placeholder",
  },
];

// --- Main Component ---
export const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="w-full bg-transparent text-neutral-900 dark:text-neutral-100 max-w-7xl mx-auto px-6 py-16 md:py-24 transition-colors duration-300"
    >
      {/* Section Header */}
      <div className="mb-12 max-w-2xl">
        <h2 className="text-3xl md:text-5xl sm:text-4xl font-extrabold tracking-tight mb-3 text-neutral-900 dark:text-white">
          <span className="text-sunset-bright">About Me</span>
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm sm:text-base">
          Hi, I'm John Phillip Lor Malbas (or just Lor). Here is the story behind my journey into software engineering.
        </p>
      </div>

      {/* Editorial Bento Glass Container */}
      <div className="w-full rounded-2xl transition-colors duration-300 overflow-hidden
                      bg-transparent dark:bg-neutral-900/40 
                      backdrop-blur-xl backdrop-saturate-150
                      border border-white/40 dark:border-white/10 
                      shadow-xl dark:shadow-2xl">
        
        {/* Intro Quote Banner */}
        <div className="p-8 sm:p-12 border-b border-white/30 dark:border-white/10 bg-transparent dark:bg-neutral-950/20 backdrop-blur-md">
          <p className="text-xl sm:text-2xl md:text-3xl font-light leading-relaxed text-neutral-800 dark:text-neutral-200 max-w-4xl">
            "Along with foundational technical knowledge, I bring a level of maturity and a work ethic forged through years of real-world labor."
          </p>
        </div>

        {/* Editorial Story Blocks Grid */}
        <div className="divide-y divide-white/30 dark:divide-white/10">
          {AboutStory.map((block, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={block.id}
                className="grid grid-cols-1 lg:grid-cols-12 items-stretch"
              >
                {/* Text Block */}
                <div
                  className={`p-8 sm:p-10 lg:col-span-7 flex flex-col justify-between ${
                    isEven
                      ? "lg:border-r border-white/30 dark:border-white/10"
                      : "lg:order-2 lg:border-l border-white/30 dark:border-white/10"
                  }`}
                >
                  <div>
                    <h3 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
                      {block.title}
                    </h3>
                    <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed text-sm sm:text-base">
                      {block.content}
                    </p>
                  </div>

                  {block.highlight && (
                    <div className="mt-6 pt-4 border-t border-white/20 dark:border-white/10">
                      <span className="text-xs font-semibold uppercase tracking-wider text-sunset-bright">
                        {block.highlight}
                      </span>
                    </div>
                  )}
                </div>

                {/* Image / Visual Slot */}
                <div
                  className={`lg:col-span-5 bg-white/10 dark:bg-neutral-950/40 min-h-[260px] relative overflow-hidden ${
                    isEven ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  {block.imageSrc ? (
                    <img
                      src={block.imageSrc}
                      alt={block.imageAlt || block.title}
                      className="w-full h-full object-cover opacity-90 hover:opacity-100 grayscale contrast-125 hover:grayscale-0 transition-all duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center p-6 text-neutral-400 text-xs uppercase tracking-widest">
                      [ Image Slot: {block.title} ]
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Closing Career Objective Block */}
        <div className="p-8 sm:p-10 border-t border-white/30 dark:border-white/10 bg-white/20 dark:bg-neutral-950/30 backdrop-blur-md">
          <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-2">
            Where I Am Today
          </h3>
          <p className="text-neutral-600 dark:text-neutral-400 text-sm sm:text-base leading-relaxed max-w-3xl">
            During my internship at the Gender and Development Office, I led the development of a data repository and 
            analytics platform. Having graduated in July 2026, 
            I am actively seeking a software engineering team where I can apply my development skills, 
            continuously learn, and contribute to meaningful systems.
          </p>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;