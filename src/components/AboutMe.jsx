import BaseSection from "./Ui/BaseSection";
import BaseCard from "./Ui/Card";
import SectionHeader from "./Ui/SectionHeaderText";

const AboutMe = () => {
  return (
    <BaseSection>
      <SectionHeader title="About" />
      <section className="">
        <BaseCard>
          <div className="bg-red-100 flex flex-col gap-2 w-full">
            <p className="className=p-1 rounded-sm text-sm md:text-base break-words whitespace-normal">
              Im an aspiring software engineer and BSIT student at Bulacan
              Agricultural State College, currently based in San Ildefonso,
              Bulacan. My passion lies in backend development and systems
              architecture—specifically building clean, modular solutions that
              solve real-world problems. My most significant technical
              contribution to date has been serving as the Lead Developer for
              GAD Insight, a data analytics system for my college. This role
              allowed me to bridge the gap between high-level architectural
              strategy and hands-on implementation using Python, Django, and
              MySQL. I pride myself on being a "technical craftsman" who values
              SOLID principles and thorough documentation, ensuring that the
              systems I build are not just functional, but maintainable for
              years to come. I am currently seeking a full-time role or
              growth-oriented opportunity where I can apply my experience in
              backend logic and system design to help a team build impactful
              software.
            </p>
          </div>
        </BaseCard>
      </section>
    </BaseSection>
  );
};

export default AboutMe;
