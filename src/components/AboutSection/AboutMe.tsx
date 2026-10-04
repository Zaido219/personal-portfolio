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
    title: "Before college",
    content:
      "After high school, financial struggles kept me from going straight to college. I worked as a high-speed sewing machine operator for two years, until the repetitive work left my heart tired and my mind wanting more. The pandemic was a tragic time for so many, but it also gave me the chance to finally leave that job. From there, I stepped into my father's line of work. He's a freelance aluminum and glass installer, and I'm proud to say so. Working alongside him, fabricating fixtures and windows, taught me what hard work and craftsmanship really mean. I could have stayed in that trade, but my heart kept aching for something different.",
    imageSrc: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Craftsmanship and manual labor placeholder",
  },
  {
    id: "discovery",
    title: "Falling in love with programming",
    content:
      "Unexpectedly, life gave me another chance to study. I enrolled at Bulacan Agricultural State College for a Bachelor of Science in Information Technology. Juggling work and college was incredibly tough, but it paid off. From the very first day we were taught C++, I knew I had fallen in love with programming. I met great people and learned things I would never have discovered on my own. I built and broke a lot of projects. Some days I felt like an absolute genius, and just as many days I felt like a monkey typing randomly on a keyboard.",
    imageSrc: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Software development workspace placeholder",
  },
];

// --- Main Component ---
export const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="w-full bg-transparent max-w-7xl mx-auto px-6 py-16 md:py-24 transition-colors duration-300"
    >
      {/* Section Header */}
      <div className="mb-12 max-w-2xl">
        <h2 className="text-3xl md:text-5xl sm:text-4xl font-extrabold tracking-tight mb-3 text-zinc-900 dark:text-white">
          <span className="text-sunset-deep dark:text-sunset-bright">About Me</span>
        </h2>
        <p className="text-zinc-600 dark:text-neutral-400 text-sm sm:text-base font-medium">
          Hello there! My name is John Phillip Lor Malbas, but most of my friends simply call me Lor.
          I've always been passionate about learning, and this is how I got here.
        </p>
      </div>

      {/* Editorial Bento Glass Container */}
      <div className="w-full rounded-2xl transition-colors duration-300 overflow-hidden
                      bg-white/70 dark:bg-neutral-900/40 
                      backdrop-blur-2xl backdrop-saturate-150
                      border border-white/80 dark:border-white/10 
                      shadow-[0_8px_32px_0_rgba(0,0,0,0.06)] dark:shadow-2xl">

        {/* Intro Quote Banner */}
        <div className="p-8 sm:p-12 border-b border-black/10 dark:border-white/10 bg-white/40 dark:bg-neutral-950/20 backdrop-blur-md">
          <p className="text-xl sm:text-2xl md:text-3xl font-light leading-relaxed text-zinc-800 dark:text-neutral-200 max-w-4xl">
            "I prioritize growth and learning above all else."
          </p>
        </div>

        {/* Editorial Story Blocks Grid */}
        <div className="divide-y divide-black/10 dark:divide-white/10">
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
                      ? "lg:border-r border-black/10 dark:border-white/10"
                      : "lg:order-2 lg:border-l border-black/10 dark:border-white/10"
                  }`}
                >
                  <div>
                    <h3 className="text-2xl font-bold text-zinc-900 dark:text-neutral-100 mb-4">
                      {block.title}
                    </h3>
                    <p className="text-zinc-600 dark:text-neutral-400 leading-relaxed text-sm sm:text-base">
                      {block.content}
                    </p>
                  </div>

                  {block.highlight && (
                    <div className="mt-6 pt-4 border-t border-black/10 dark:border-white/10">
                      <span className="text-sm font-semibold text-sunset-dusk dark:text-sunset-peach">
                        {block.highlight}
                      </span>
                    </div>
                  )}
                </div>

                {/* Image / Visual Slot */}
                <div
                  className={`lg:col-span-5 bg-black/5 dark:bg-neutral-950/40 min-h-[260px] relative overflow-hidden ${
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
                    <div className="w-full h-full flex items-center justify-center p-6 text-zinc-400 dark:text-neutral-400 text-xs uppercase tracking-widest">
                      [ Image Slot: {block.title} ]
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Closing Block */}
        <div className="p-8 sm:p-10 border-t border-black/10 dark:border-white/10 bg-white/40 dark:bg-neutral-950/30 backdrop-blur-md">
          <h3 className="text-xl font-bold text-zinc-900 dark:text-neutral-100 mb-2">
            Where I am today
          </h3>
          <p className="text-zinc-600 dark:text-neutral-400 text-sm sm:text-base leading-relaxed max-w-3xl">
            I spent my internship at the Gender and Development Office of my school, where I led the
            development of a data repository and analytics platform, improving and expanding the
            system's functionality. Time really flies. I received my degree on July 9, 2026, a
            beautiful, bittersweet moment that marked four years of massive personal growth. Today,
            I'm looking for a place where I can put these skills to use. Along with my foundational
            technical knowledge, I bring maturity and a work ethic built on years of real-world
            labor, and I can't wait to find a team that shares that vision.
          </p>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;