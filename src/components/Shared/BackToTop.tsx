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
            border border-black/10 dark:border-white/15
            bg-white/50 dark:bg-white/[0.06]
            backdrop-blur-xl backdrop-saturate-150
            shadow-[0_8px_24px_rgba(0,0,0,0.12)]
            transition-all duration-300 motion-reduce:transition-none
            hover:scale-105 hover:border-sunset-bright/60 hover:bg-sunset-bright/15
            hover:shadow-[0_8px_28px_rgba(234,97,19,0.3)]
            active:scale-95
            focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sunset-bright
            ${
              visible
                ? "translate-y-0 opacity-100"
                : "pointer-events-none translate-y-4 opacity-0"
            }`}
    >

      {/* Arrow */}
      <svg
        aria-hidden="true"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.25"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="relative text-sunset-deep dark:text-sunset-bright transition-transform duration-300
+            motion-reduce:transition-none group-hover:-translate-y-0.5"
      >
        <path d="M12 19V5" />
        <path d="m5 12 7-7 7 7" />
      </svg>
    </button>
  );
};

export default BackToTop;