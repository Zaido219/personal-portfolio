export const HeroSection = () => {
  return (
    <section className="px-4">
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-row items-center gap-x-2">
          <div>
            <div className="rounded-full h-11 w-11 bg-red-500"></div>
          </div>
          <div>
            <p>ZAIDO.DEV</p>
          </div>
        </div>
        <div className="bg-red-400 flex flex-row gap-x-2">
          <nav>Work</nav>
          <nav>Skills</nav>
          <nav>Experience</nav>
          <nav>About</nav>
          <nav>Contact</nav>
        </div>
      </div>
      <div className="bg-red-700 flex flex-row items-center gap-x-10 p-2">
        <div>
          <div className="bg-red-300 inline-block mb-6">
            <p className="bg-red-900 w-fit p-2 rounded-full">Available for work</p>
          </div>
          <div className="bg-red-200 flex flex-col gap-4">
            <p className="bg-red-800 text-7xl font-bold">John Phillip Lor Malbas</p>
            <p className="bg-red-100 inline-block text-5xl font-semibold">Software Developer</p>
            <p className="bg-red-800 max-w-md justify-around">
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
