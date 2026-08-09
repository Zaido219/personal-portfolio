export const HeroSection = () => {
  return (
    <section className="px-4 overflow-hidden">
      <div className="flex flex-col items-center">
        <div className="flex flex-row items-center gap-x-2">
          <div>
            <div className="rounded-full h-11 w-11 bg-red-500"></div>
          </div>
          <div>
            <p>ZAIDO.DEV</p>
          </div>
        </div>
        <div className="flex flex-row gap-x-2">
          <nav>Work</nav>
          <nav>Skills</nav>
          <nav>Experience</nav>
          <nav>About</nav>
          <nav>Contact</nav>
        </div>
      </div>
      <div className="flex flex-row items-center gap-x-10 p-2">
        <div>
          <div className="inline-block mb-6">
            <p className="w-fit p-2 rounded-full">Available for work</p>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-7xl font-bold">John Phillip Lor Malbas</p>
            <p className="inline-block text-5xl font-semibold">Software Developer</p>
            <p className="max-w-md justify-around">
              Engineering elegant solutions through clean code and modern
              architecture. Specializing in robust backend systems and intuitive
              user interfaces.
            </p>
          </div>
          <div className="bg-red-300 inline-block">
            <button>My Resume</button>
            <button>Email Me</button>
          </div>
        </div>
        <div>
          <div className="bg-red-600 h-120 w-120 rounded-xl"></div>
        </div>
      </div>
    </section>
  );
};
