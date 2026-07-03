import BaseSection from "./Ui/BaseSection";
import BaseCard from "./Ui/Card";
import SectionHeader from "./Ui/SectionHeaderText";

const AboutMe = () => {
  return (
    <div>
      <SectionHeader title="About" />
      <section className="flex items-center justify-center p-4 min-h-fit">
        <div className="p-2 rounded-xl w-full max-w-2xl">
          <p className="text-sm md:text-lg font-normal md:text-sm leading-relaxed text-slate-800 break-words whitespace-normal text-left dark:text-white">
            Im an aspiring software engineer, currently based in San Ildefonso,
            Bulacan. My passion lies in backend development and systems
            architecture—specifically building clean, modular solutions that
            solve real-world problems. My most significant technical
            contribution to date has been serving as the Lead Developer for GAD
            Insight, a data analytics system for my college. This role allowed
            me to bridge the gap between high-level architectural strategy and
            hands-on implementation using Python, Django, and MySQL. I pride
            myself on being a "technical craftsman" who values SOLID principles
            and thorough documentation, ensuring that the systems my builds are
            not just functional, but maintainable for years to come. I am
            currently seeking a full-time role or growth-oriented opportunity
            where I can apply my experience in backend logic and system design
            to help a team build impactful software.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutMe;
