import SectionHeader from "./Ui/SectionHeaderText";
import { techStacks } from "../config/TechStacks";
import TechStackItem from "./Ui/TechStackItem";
import type { TechField, TechStackItemProps } from "../interface/types";
import BaseSection from "./Ui/BaseSection";
import GroupCard from "./Ui/stackSection/groupCard";

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
    <div className="">
      <SectionHeader title="My Tool Kit" />
      
      <div className="space-y-6 p-3 grid md:grid grid-cols-2 md:grid-cols-3  gap-x-6 md:gap-x-8 gap-y-2 md:gap-y-4 rounded-lg dark:bg-zinc-900 rounded-xl">
        {/* Languages */}
        {groupedTechStacks["languages"] && (
          <GroupCard>
            <p className="font-semibold text-sm text-zinc-900 dark:text-zinc-300 uppercase tracking-tight bg-slate-200 dark:bg-zinc-800 w-fit p-2 rounded-2xl">Languages</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-5 gap-y-1 max-w-2xl">
              {groupedTechStacks["languages"].map((item, index) => (
                <TechStackItem key={item.id ?? `${item.name}-${index}`} {...item} />
              ))}
            </div>
          </GroupCard>
        )}

        {/* Database */}
        {groupedTechStacks["database"] && (
          <GroupCard>
            <p className="font-semibold text-sm text-zinc-900 dark:text-zinc-300 uppercase tracking-tight bg-slate-200 dark:bg-zinc-800 w-fit p-2 rounded-2xl">Database</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-4 max-w-2xl">
              {groupedTechStacks["database"].map((item, index) => (
                <TechStackItem key={item.id ?? `${item.name}-${index}`} {...item} />
              ))}
            </div>
          </GroupCard>
        )}

        {/* Frameworks */}
        {groupedTechStacks["frameworks"] && (
          <GroupCard>
            <p className="font-semibold text-sm text-zinc-900 dark:text-zinc-300 uppercase tracking-tight bg-slate-200 dark:bg-zinc-800 w-fit p-2 rounded-2xl">Frameworks</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-4 max-w-2xl">
              {groupedTechStacks["frameworks"].map((item, index) => (
                <TechStackItem key={item.id ?? `${item.name}-${index}`} {...item} />
              ))}
            </div>
          </GroupCard>
        )}

        {/* Testing */}
        {groupedTechStacks["testing"] && (
          <GroupCard>
            <p className="font-semibold text-sm text-zinc-900 dark:text-zinc-300 uppercase tracking-tight bg-slate-200 dark:bg-zinc-800 w-fit p-2 rounded-2xl">Testing</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-4 max-w-2xl">
              {groupedTechStacks["testing"].map((item, index) => (
                <TechStackItem key={item.id ?? `${item.name}-${index}`} {...item} />
              ))}
            </div>
          </GroupCard>
        )}

        {/* DevOps */}
        {groupedTechStacks["devops"] && (
          <GroupCard>
            <p className="font-semibold text-sm text-zinc-900 dark:text-zinc-300 uppercase tracking-tight bg-slate-200 dark:bg-zinc-800 w-fit p-2 rounded-2xl">DevOps</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-4 max-w-2xl">
              {groupedTechStacks["devops"].map((item, index) => (
                <TechStackItem key={item.id ?? `${item.name}-${index}`} {...item} />
              ))}
            </div>
          </GroupCard>
        )}

        {/* Tools */}
        {groupedTechStacks["tools"] && (
          <GroupCard>
            <p className="font-semibold text-sm text-zinc-900 dark:text-zinc-300 uppercase tracking-tight bg-slate-200 dark:bg-zinc-800 w-fit p-2 rounded-2xl">Tools</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-4 max-w-2xl">
              {groupedTechStacks["tools"].map((item, index) => (
                <TechStackItem key={item.id ?? `${item.name}-${index}`} {...item} />
              ))}
            </div>
          </GroupCard>
        )}

        {/* Deployment */}
        {groupedTechStacks["deployment"] && (
          <GroupCard>
            <p className="font-semibold text-sm text-zinc-900 dark:text-zinc-300 uppercase tracking-tight bg-slate-200 dark:bg-zinc-800 w-fit p-2 rounded-2xl">Deployment</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-4 max-w-2xl">
              {groupedTechStacks["deployment"].map((item, index) => (
                <TechStackItem key={item.id ?? `${item.name}-${index}`} {...item} />
              ))}
            </div>
          </GroupCard>
        )}

        {/* Hardware & Systems */}
        {groupedTechStacks["hardware&systems"] && (
          <GroupCard>
            <p className="font-semibold text-sm text-zinc-900 dark:text-zinc-300 uppercase tracking-tight bg-slate-200 dark:bg-zinc-800 w-fit p-2 rounded-2xl">Hardware and Systems</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-4 max-w-2xl">
              {groupedTechStacks["hardware&systems"].map((item, index) => (
                <TechStackItem key={item.id ?? `${item.name}-${index}`} {...item} />
              ))}
            </div>
          </GroupCard>
        )}
      </div>
    </div>
  );
};

export default StackSection;