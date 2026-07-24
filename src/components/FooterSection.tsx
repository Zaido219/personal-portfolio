import { BaseSection } from "./Ui/Sections";

export const Footer = () => {
  return (
    <div className="">
      {/* upper pill */}
      <div className="">
        <div>{/* some icon will go in here */}</div>
        <div>
          <p className="text-md">Let me help you build solutions that will last a lifetime.</p>
        </div>
        <div className="flex justify-around">
          <div>
            {/* Facebook Icon Link */}
            <a
              href="https://www.facebook.com/profile.php?id=100054388962678"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="text-neutral-400 hover:text-white transition-colors"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
          </div>

          <div>
            {/* GitHub Icon Link */}
            <a
              href="https://github.com/Zaido219"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-neutral-400 hover:text-white transition-colors"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
          </div>

          <div>
            {/* LinkedIn Icon Link */}
            <a
              href="https://www.linkedin.com/in/john-phillip-lor-malbas-16b649399"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-neutral-400 hover:text-white transition-colors"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      {/* center banner */}
      <div className="bg-orange-100 flex flex-col gap-2">
        <div className="bg-red-100 flex flex-col items-center gap-2 p-2">
          {/* banner text */}
          <p className="text-4xl font-bold">LETS MAKE IT HAPPEN</p>
          <div>
            <button>Email Me</button>
          </div>
        </div>
        {/* aside navigation link */}
        <aside>
          <div>
            <div>
              <nav>Home</nav>
              <nav>Github</nav>
              <nav>About</nav>
            </div>
            <div>
              <nav>Download CV</nav>
              <nav>GadInsight</nav>
              {/* perhaps other hosted projects goes in here */}
            </div>
          </div>
        </aside>
      </div>
      {/* final footer */}
      <div>
        <div className="bg-yellow-100 flex flex-col items-center">
          <p>All rights reserved</p>
          <div>
            <p className="text-lg font-semibold">JOHN PHILLIP LOR 2026</p>
            <div className="bg-green-100 flex flex-col items-center">
              {/* show local time */}
              <p>Local Time</p>
              <div>{/* local time goes inside this div */}</div>
            </div>
            <div>{/* to "up" arrow */}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
