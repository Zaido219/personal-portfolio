import React, { useState } from "react";
import { techStacks } from "../../config/TechStacks";
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
  const [activeColors, setActiveColors] = useState<
    Record<string, string | null>
  >({});

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
      {/* Section Header */}
      <div className="mb-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
          My <span className="text-[var(--color-sunset-bright)]">Tool Kit</span>
        </h2>
        <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-2 font-mono">
          Technologies, frameworks, and environments I work with.
        </p>
      </div>

      {/* Multi-Column Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map(([category, items]) => {
          if (!items || items.length === 0) return null;
          const currentColor = activeColors[category];

          return (
            <div
              key={category}
              className="relative isolate rounded-2xl bg-transparent dark:bg-neutral-900/40 backdrop-blur-md border border-neutral-200/80 dark:border-neutral-800 p-5 flex flex-col gap-y-4 shadow-sm dark:shadow-none overflow-hidden transition-all duration-300 hover:border-[var(--color-sunset-amber)]/40 dark:hover:border-neutral-700"
              onMouseLeave={() => handleColorChange(category, null)}
            >
              {/* Dynamic Single Ambient Spotlight */}
              <div
                aria-hidden="true"
                className="absolute inset-0 blur-2xl transition-all duration-500 pointer-events-none -z-10 rounded-2xl opacity-20 dark:opacity-30"
                style={{
                  backgroundColor: currentColor ?? "transparent",
                  display: currentColor ? "block" : "none",
                }}
              />

              {/* Category Subheader */}
              <div className="flex items-center gap-2 border-b border-neutral-200/60 dark:border-neutral-800/60 pb-2 relative z-10">
                <span className="h-2 w-2 rounded-full bg-[var(--color-sunset-deep)] dark:bg-[var(--color-sunset-bright)]" />
                <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-[var(--color-sunset-dusk)] dark:text-[var(--color-sunset-peach)]">
                  {CATEGORY_LABELS[category] ?? category}
                </h3>
              </div>

              {/* Direct Icon Wrap Container */}
              <div className="flex flex-wrap gap-3 relative z-10">
                {items.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center justify-center w-12 h-12 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200/90 dark:border-neutral-800 shadow-sm hover:scale-110 hover:border-[var(--color-sunset-deep)] dark:hover:border-[var(--color-sunset-bright)] transition-all duration-200 shrink-0 select-none cursor-pointer"
                    title={item.name}
                    onMouseEnter={() =>
                      handleColorChange(category, item.color ?? null)
                    }
                  >
                    <div
                      className="[&>svg]:w-6 [&>svg]:h-6 flex items-center justify-center transition-colors duration-200"
                      style={{ color: item.color ?? "currentColor" }}
                    >
                      {item.icon}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default StackSection;