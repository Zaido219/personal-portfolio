import BaseSection from "./Ui/BaseSection";

const WorkExperienceSection = () => {
  return (
    <BaseSection>
        <h2>Experiences</h2>
      <ul className="flex flex-col gap-3 border-l-2 border-zinc-800 pl-4">
        <li>
          <span className="block text-zinc-500 text-xs uppercase">Runtime</span>
          <span className="font-semibold text-zinc-200">Node.js v20 LTS</span>
        </li>
        <li>
          <span className="block text-zinc-500 text-xs uppercase">
            Avg. Latency
          </span>
          <span className="font-semibold text-zinc-200">&lt; 150ms</span>
        </li>
        <li>
          <span className="block text-zinc-500 text-xs uppercase">
            Auth Strategy
          </span>
          <span className="font-semibold text-zinc-200">JWT + OAuth2</span>
        </li>
      </ul>
    </BaseSection>
  );
};

export default WorkExperienceSection;
