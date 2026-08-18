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
    <section className="py-10 max-w-4xl mx-auto px-4 sm:px-6">
      {/* Main Section Header */}
      <div className="mb-8 text-center flex flex-col items-center gap-2">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white flex items-center gap-2">
          <span>💻</span> My Tool Kit
        </h2>
        <div className="h-0.5 w-16 bg-gradient-to-r from-[var(--color-sunset-deep)] to-[var(--color-sunset-bright)] rounded-full mt-1" />
      </div>

      {/* Categories Stack */}
      <div className="space-y-8">
        {(
          Object.entries(groupedTechStacks) as [
            TechField,
            TechStackItemProps[],
          ][]
        ).map(([category, items]) => {
          if (!items || items.length === 0) return null;

          return (
            <div key={category} className="pt-6 border-t border-neutral-800/80 first:border-t-0 first:pt-0">
              {/* Category Subheader */}
              <h3 className="text-sm font-semibold text-neutral-400 uppercase tracking-wider mb-4 text-center sm:text-left">
                {CATEGORY_LABELS[category] ?? category}
              </h3>

              {/* Seamless Badge Grid */}
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2.5 sm:gap-3">
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