import React, { useState } from "react";
import { techStacks } from "../../config/TechStacks";
import { TechMarquee } from "./StackMarquee";
import type { TechField, TechStackItemProps } from "../../interface/types";

const CATEGORY_LABELS: Record<TechField, string> = {
  languages: "Languages",
  frontend: "Frontend",
  backend: "Backend",
  database: "Database",
  frameworks: "Frameworks",
  testing: "Testing",
  devops: "DevOps",
  tools: "Tools",
  deployment: "Deployment",
  "hardware&systems": "Hardware & Systems",
};

const StackSection: React.FC = () => {
  // Store active hover color for each category card independently
  const [activeColors, setActiveColors] = useState<Record<string, string | null>>({});

  const handleColorChange = (category: string, color: string | null) => {
    setActiveColors((prev) => ({ ...prev, [category]: color }));
  };

  const groupedTechStacks = techStacks.reduce<
    Partial<Record<TechField, TechStackItemProps[]>>
  >((acc, item) => {
    const category = item.field;
    acc[category] = acc[category] ?? [];
    acc[category]!.push(item);
    return acc;
  }, {});

  const categories = Object.entries(groupedTechStacks) as [
    TechField,
    TechStackItemProps[],
  ][];

  return (
    <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
          My <span className="text-[var(--color-sunset-bright)]">Tool Kit</span>
        </h2>
        <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-2 font-mono">
          Technologies, frameworks, and environments I work with.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map(([category, items]) => {
          if (!items || items.length === 0) return null;
          const currentColor = activeColors[category];

          return (
            <div
              key={category}
              /* relative isolate creates the boundary for the full card spotlight */
              className="relative isolate rounded-2xl bg-white/80 dark:bg-neutral-900/40 border border-neutral-200 dark:border-neutral-800 p-5 flex flex-col gap-y-3 shadow-sm dark:shadow-none overflow-hidden transition-colors duration-500"
            >
              {/* Full Category Card Backlight */}
              <div
                aria-hidden="true"
                className="absolute inset-0 blur-2xl transition-all duration-500 pointer-events-none -z-10 rounded-2xl"
                style={{
                  backgroundColor: currentColor ?? "transparent",
                  opacity: currentColor ? 0.2 : 0,
                }}
              />

              {/* Subheader */}
              <div className="flex items-center gap-2 border-b border-neutral-100 dark:border-neutral-800/60 pb-2 relative z-10">
                <span className="h-2 w-2 rounded-full bg-[var(--color-sunset-deep)]" />
                <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-neutral-600 dark:text-[var(--color-sunset-peach)]">
                  {CATEGORY_LABELS[category] ?? category}
                </h3>
              </div>

              {/* Marquee */}
              <div className="w-full overflow-hidden relative z-10">
                <TechMarquee
                  items={items}
                  direction="right"
                  speedInSeconds={Math.max(12, items.length * 3.5)}
                  onItemHover={(color) => handleColorChange(category, color)}
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default StackSection;