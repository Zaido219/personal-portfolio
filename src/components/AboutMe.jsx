import BaseSection from "./Ui/BaseSection";
import BaseCard from "./Ui/Card";
import SectionHeader from "./Ui/SectionHeaderText";

const AboutMe = () => {
  return (
    <div id="about" className="bg-gray-100 rounded-xl">
      <SectionHeader title="About" />
      <section className="flex items-center justify-center p-4 min-h-fit">
        <div className="p-2 rounded-xl w-full max-w-2xl">
          <p className="text-sm md:text-lg font-normal md:text-sm leading-relaxed text-slate-800 break-words whitespace-normal text-left dark:text-zinc-300">
            Hello there! My name is John Phillip Lor Malbas, but most of my
            friends simply call me Lor. I've always been someone who is
            passionate about learning. After high school, financial struggles
            kept me from going straight to college. Instead, I ended up working
            as a high-speed sewing machine operator for two years, until the
            repetitive work left my heart tired and my mind wanting more. The
            COVID-19 pandemic was a tragic time for so many, but it also gave me
            the opportunity to finally leave that sewing job. From there, I
            stepped into my father's line of work. I am proud to say he is a
            freelance aluminum and glass installer. Working alongside him,
            fabricating fixtures and windows, taught me the true meaning of hard
            work and craftsmanship. I could have stayed in that trade, but my
            heart kept aching for something different. Unexpectedly, life gave
            me another chance to study. I enrolled at Bulacan Agricultural State
            College for a Bachelor of Science in Information Technology.
            Juggling work and college was incredibly tough, but it paid off.
            From the very first day we were taught C++, I knew I had fallen in
            love with programming. Those four years of college mean the world to
            me. I met great people and learned things I would have never
            discovered on my own. Most of all, I became obsessed with software
            development. Throughout those years, I built and broke a lot of
            projects. There were days I felt like a absolute genius, and just as
            many days where I felt like a monkey typing randomly on a keyboard!
            I spent my internship at the Gender and Development Office of my
            school, where I led the development of a data repository and
            analytics platform. My work centered on improving and expanding the
            system's functionality. Time really flies—I graduated and received
            my degree on July 9, 2026. It was a beautiful, bittersweet moment
            that marked four years of massive personal growth. Today, I'm
            actively looking for a place where I can put these skills to use.
            Along with my foundational technical knowledge, I bring a level of
            maturity and a work ethic built on years of real-world labor. I
            prioritize growth and learning above all else, and I can't wait to
            find a team that shares that vision.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutMe;
