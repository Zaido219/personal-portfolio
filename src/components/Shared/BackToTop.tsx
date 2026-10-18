import React, { useEffect, useState } from "react";

type BackToTopProps = {
  /** How far (in px) the page must be scrolled before the button appears. */
  threshold?: number;
};

export const BackToTop: React.FC<BackToTopProps> = ({ threshold = 400 }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > threshold);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  const scrollToTop = () => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Back to top"
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
      className={`group fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full
                  ring-1 ring-white/70
                  bg-[radial-gradient(circle_at_50%_35%,var(--color-sunset-peach)_0%,var(--color-sunset-amber)_30%,var(--color-sunset-bright)_65%,var(--color-sunset-deep)_100%)]
                  shadow-[inset_0_2px_4px_rgba(255,255,255,0.7),inset_0_-5px_10px_rgba(184,67,5,0.4),0_10px_28px_rgba(234,97,19,0.45)]
                  transition-all duration-300 motion-reduce:transition-none
                  hover:scale-105 hover:shadow-[inset_0_2px_4px_rgba(255,255,255,0.7),inset_0_-5px_10px_rgba(184,67,5,0.4),0_14px_36px_rgba(234,97,19,0.6)]
                  active:scale-95
                  focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sunset-bright
                  ${
                    visible
                      ? "translate-y-0 opacity-100"
                      : "pointer-events-none translate-y-4 opacity-0"
                  }`}
    >
      {/* Glossy highlight */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[3px] h-1/2 w-[72%] -translate-x-1/2 rounded-full
                   bg-gradient-to-b from-white/70 to-transparent"
      />

      {/* Arrow */}
      <svg
        aria-hidden="true"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="2.25"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="relative drop-shadow-[0_1px_2px_rgba(184,67,5,0.6)] transition-transform duration-300
                   motion-reduce:transition-none group-hover:-translate-y-0.5"
      >
        <path d="M12 19V5" />
        <path d="m5 12 7-7 7 7" />
      </svg>
    </button>
  );
};

export default BackToTop;