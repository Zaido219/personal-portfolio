import BaseSection from "./Ui/BaseSection";
import BaseCard from "./Ui/Card";
import SectionHeader from "./Ui/SectionHeaderText";

const AboutMe = () => {
  return (
    <BaseSection>
      <SectionHeader title="About" />
      <section>
        <BaseCard>
            <div className="flex flex-col gap-2">
              <p className="p-1 rounded-sm text-base">
                Gemini said I'm a BSIT student and Software Engineering Intern
                dedicated to building clean, modular systems. Proficient in
                Python and Django, I balance high-level web development with a
                deep-seated passion for low-level architecture. I prioritize
                technical craftsmanship and critical problem-solving,
                consistently striving to bridge the gap between complex backend
                logic and intuitive, high-performance user interfaces for
                impactful, real-world applications.
              </p>
              <p className="">
                Currently im enrolled at Bulacan Agricultural State College.
                Taking up Bachelor of Science in Information Technology
              </p>
            </div>
        </BaseCard>
      </section>
    </BaseSection>
  );
};

export default AboutMe;
