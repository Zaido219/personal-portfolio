import SectionHeader from "./Ui/SectionHeaderText";
import { techStacks } from "../config/TechStacks";
import TechStackItem from "./Ui/TechStackItem";
import type { TechField, TechStackItemProps } from "../interface/types";
import BaseSection from "./Ui/BaseSection";

const StackSection = () => {
  // Group items by field
  const groupedTechStacks = techStacks.reduce((acc, item) => {
    const category = item.field;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(item);
    return acc;
  }, {} as Partial<Record<TechField, TechStackItemProps[]>>);

  return (
    <BaseSection>
      <SectionHeader title="Tech Stack" />
      
      <div className="space-y-6">
        {/* Languages */}
        {groupedTechStacks["languages"] && (
          <div className="space-y-2 p-2 shadow-md">
            <p className="font-semibold text-sm text-zinc-900 uppercase tracking-wider">Languages</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-1">
              {groupedTechStacks["languages"].map((item, index) => (
                <TechStackItem key={item.id ?? `${item.name}-${index}`} {...item} />
              ))}
            </div>
          </div>
        )}

        {/* Database */}
        {groupedTechStacks["database"] && (
          <div className="space-y-2 p-2 shadow-md">
            <p className="font-semibold text-sm text-neutral-400 uppercase tracking-wider">Database</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-1">
              {groupedTechStacks["database"].map((item, index) => (
                <TechStackItem key={item.id ?? `${item.name}-${index}`} {...item} />
              ))}
            </div>
          </div>
        )}

        {/* Frameworks */}
        {groupedTechStacks["frameworks"] && (
          <div className="space-y-2 p-2 shadow-md">
            <p className="font-semibold text-sm text-neutral-400 uppercase tracking-wider">Frameworks</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-1">
              {groupedTechStacks["frameworks"].map((item, index) => (
                <TechStackItem key={item.id ?? `${item.name}-${index}`} {...item} />
              ))}
            </div>
          </div>
        )}

        {/* Testing */}
        {groupedTechStacks["testing"] && (
          <div className="space-y-2 p-2 shadow-md">
            <p className="font-semibold text-sm text-neutral-400 uppercase tracking-wider">Testing</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-1">
              {groupedTechStacks["testing"].map((item, index) => (
                <TechStackItem key={item.id ?? `${item.name}-${index}`} {...item} />
              ))}
            </div>
          </div>
        )}

        {/* DevOps */}
        {groupedTechStacks["devops"] && (
          <div className="space-y-2 p-2 shadow-md">
            <p className="font-semibold text-sm text-neutral-400 uppercase tracking-wider">DevOps</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-1">
              {groupedTechStacks["devops"].map((item, index) => (
                <TechStackItem key={item.id ?? `${item.name}-${index}`} {...item} />
              ))}
            </div>
          </div>
        )}

        {/* Tools */}
        {groupedTechStacks["tools"] && (
          <div className="space-y-2 p-2 shadow-md">
            <p className="font-semibold text-sm text-neutral-400 uppercase tracking-wider">Tools</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-1">
              {groupedTechStacks["tools"].map((item, index) => (
                <TechStackItem key={item.id ?? `${item.name}-${index}`} {...item} />
              ))}
            </div>
          </div>
        )}

        {/* Deployment */}
        {groupedTechStacks["deployment"] && (
          <div className="space-y-2 p-2 shadow-md">
            <p className="font-semibold text-sm text-neutral-400 uppercase tracking-wider">Deployment</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-1">
              {groupedTechStacks["deployment"].map((item, index) => (
                <TechStackItem key={item.id ?? `${item.name}-${index}`} {...item} />
              ))}
            </div>
          </div>
        )}

        {/* Hardware & Systems */}
        {groupedTechStacks["hardware&systems"] && (
          <div className="space-y-2 p-2 shadow-md">
            <p className="font-semibold text-sm text-neutral-400 uppercase tracking-wider">Hardware and Systems</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-1">
              {groupedTechStacks["hardware&systems"].map((item, index) => (
                <TechStackItem key={item.id ?? `${item.name}-${index}`} {...item} />
              ))}
            </div>
          </div>
        )}
      </div>
    </BaseSection>
  );
};

export default StackSection;