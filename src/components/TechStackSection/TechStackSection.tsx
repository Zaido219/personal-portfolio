import { techStacks } from "../../config/TechStacks";
import TechStackItem from "./TechStackItem";
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

const StackSection = () => {
  const groupedTechStacks = techStacks.reduce<
    Partial<Record<TechField, TechStackItemProps[]>>
  >((acc, item) => {
    const category = item.field;
    acc[category] = acc[category] ?? [];
    acc[category]!.push(item);
    return acc;
  }, {});

  return (
    <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Title matching Sunset Theme */}
      <div className="mb-10">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
          My <span className="text-[var(--color-sunset-bright)]">Tool Kit</span>
        </h2>
        <p className="text-sm text-neutral-400 mt-2 font-mono">
          Technologies, frameworks, and environments I often work with.
        </p>
      </div>

      {/* Stack Categories Container */}
      <div className="space-y-10">
        {(
          Object.entries(groupedTechStacks) as [
            TechField,
            TechStackItemProps[],
          ][]
        ).map(([category, items]) => {
          if (!items || items.length === 0) return null;

          return (
            <div
              key={category}
              className="pt-6 border-t border-neutral-800/80 first:border-t-0 first:pt-0"
            >
              {/* Category Subheader Tag */}
              <div className="mb-6 flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-[var(--color-sunset-deep)]" />
                <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-[var(--color-sunset-peach)]">
                  {CATEGORY_LABELS[category] ?? category}
                </h3>
              </div>

              {/* Seamless Icon Grid (No Card Boxes) */}
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6">
                {items.map((item, index) => (
                  <TechStackItem
                    key={item.id ?? `${item.name}-${index}`}
                    {...item}
                  />
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