import { BaseSection } from "./Ui/Sections";

export const Footer = () => {
  return (
    <div className="flex flex-col gap-5 rounded-md p-3 overflow-hidden w-fit">
      {/* upper pill */}
      <div className="flex flex-col gap-3">
        <div>{/* some icon will go in here */}</div>
        <div>
          <p className="text-xl">
            Let me help you build solutions that will last a lifetime.
          </p>
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
          <div>
            <div>
              {/* Viber Icon Link */}
              <a
                href="viber://chat?number=%2B639553395861" // Replace with your phone number (international format without + or spaces)
                target="_blank"
                rel="noreferrer"
                aria-label="Viber"
                className="text-neutral-400 hover:text-white transition-colors"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M20.2 16.2c-.6-.4-2.8-1.4-3.2-1.5-.4-.1-.8.2-1.1.6s-1.1 1.4-1.3 1.6c-.2.2-.5.2-.8 0-.4-.2-1.8-.7-3.4-2.1-1.3-1.1-2.1-2.5-2.4-3-.2-.4 0-.7.2-.9.2-.2.4-.5.6-.7.2-.2.3-.4.4-.7.1-.2 0-.5-.1-.7-.1-.2-.9-2.2-1.3-3-.3-.8-.7-.7-1-.7h-.8c-.3 0-.9.1-1.3.6S3 7.8 3 9.9c0 2.1 1.5 4.1 1.7 4.4.2.3 3 4.6 7.3 6.4 1 .4 1.8.7 2.4.9.9.3 1.8.3 2.5.2.8-.1 2.5-1 2.8-2 .3-1 .3-1.8.2-2s-.3-.3-.7-.5zM14.2 3.2c3.9.5 7 3.6 7.5 7.5.1.5-.3 1-.8 1.1h-.1c-.5 0-.9-.4-1-.8-.4-3.1-2.8-5.5-5.9-5.9-.5-.1-.9-.5-.8-1 0-.5.4-.9.9-.9zM14.5 7.2c2 .4 3.6 2 4 4 .1.5-.2 1-.7 1.1h-.2c-.4 0-.8-.3-.9-.7-.3-1.2-1.2-2.1-2.4-2.4-.5-.1-.8-.5-.7-1 .1-.5.5-.8 1-.6z" />
                </svg>
              </a>
            </div>
          </div>
          <div>
            {/* Email Icon Link */}
            <a
              href="mailto:jpmalbas4@gmail.com"
              aria-label="Email"
              className="text-neutral-400 hover:text-white transition-colors"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      {/* center banner */}
      <div className="flex flex-col gap-2">
        <div className="h-70 flex flex-col items-center justify-center gap-5 p-2">
          {/* banner text */}
          <p className="text-5xl font-bold text-center">LETS MAKE IT HAPPEN</p>
          <div>
            <button>Email Me</button>
          </div>
        </div>
        {/* aside navigation link */}
        <aside className="p-2 gap-1 flex flex-col border-t border-neutral-800">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-1">
              <a href="#home" className="hover:underline">
                Home
              </a>
              <a
                href="https://github.com/Zaido219"
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
              >
                Github
              </a>
              <a href="#about" className="hover:underline">
                About
              </a>
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
        <div className="flex flex-col items-center">
          <p>All rights reserved</p>
          <div>
            <p className="text-lg font-semibold">JOHN PHILLIP L MALBAS 2026</p>
            <div>{/* to "up" arrow */}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
