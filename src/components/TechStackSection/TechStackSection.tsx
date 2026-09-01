import React from "react";
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
  // Group tech stacks by category
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
      {/* Section Header */}
      <div className="mb-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
          My <span className="text-[var(--color-sunset-bright)]">Tool Kit</span>
        </h2>
        <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-2 font-mono">
          Technologies, frameworks, and environments I work with.
        </p>
      </div>

      {/* Multi-Column Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map(([category, items], index) => {
          if (!items || items.length === 0) return null;

          return (
            <div
              key={category}
              className="rounded-2xl bg-white/80 dark:bg-neutral-900/30 border border-neutral-200 dark:border-neutral-800 p-5 flex flex-col gap-y-3 shadow-sm dark:shadow-none overflow-hidden"
            >
              {/* Category Subheader */}
              <div className="flex items-center gap-2 border-b border-neutral-100 dark:border-neutral-800/60 pb-2">
                <span className="h-2 w-2 rounded-full bg-[var(--color-sunset-deep)]" />
                <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-neutral-600 dark:text-[var(--color-sunset-peach)]">
                  {CATEGORY_LABELS[category] ?? category}
                </h3>
              </div>

              {/* Local Horizontal Marquee inside Column Card */}
              <div className="w-full overflow-hidden">
                <TechMarquee
                  items={items}
                  direction={index % 2 === 0 ? "left" : "right"}
                  speedInSeconds={Math.max(12, items.length * 3.5)}
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