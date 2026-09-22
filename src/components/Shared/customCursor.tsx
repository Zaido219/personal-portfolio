import { useEffect, useRef } from "react";
export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const crossRef = useRef<HTMLDivElement>(null);
  const glassRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (!cursorRef.current) return;
      cursorRef.current.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;
      const target = document.elementFromPoint(
        event.clientX,
        event.clientY,
      ) as HTMLElement | null;
      const clickable = !!target?.closest(
        "a, button, [role='button'], [data-cursor='clickable']",
      );
      if (clickable) {
        dotRef.current?.classList.add("opacity-0", "scale-50");
        crossRef.current?.classList.remove("opacity-0", "scale-50");
        glassRef.current?.classList.add("scale-110");
      } else {
        dotRef.current?.classList.remove("opacity-0", "scale-50");
        crossRef.current?.classList.add("opacity-0", "scale-50");
        glassRef.current?.classList.remove("scale-110");
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <div
      ref={cursorRef}
      className=" pointer-events-none fixed left-0 top-0 z-[9999] hidden md:block "
    >
      {" "}
      {/* Liquid glass lens */}{" "}
      <div
        ref={glassRef}
        className=" absolute -left-5 -top-5 h-10 w-10 rounded-full bg-white/5 border border-white/20 backdrop-blur-[3px] shadow-[inset_0_0_8px_rgba(255,255,255,0.12)] transition-transform duration-200 "
      >
        {" "}
        {/* Glass highlight */}{" "}
        <div className=" absolute left-[4px] top-[3px] h-[5px] w-[5px] rounded-full bg-white/30 blur-[1px] " />{" "}
      </div>{" "}
      {/* Outer rotating dashed ring */}{" "}
      <svg
        className=" absolute -left-5 -top-5 h-10 w-10 animate-spin "
        style={{ animationDuration: "7s" }}
        viewBox="0 0 40 40"
      >
        {" "}
        <circle
          cx="20"
          cy="20"
          r="18"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeDasharray="6 10"
          className="text-sunset-bright"
        />{" "}
      </svg>{" "}
      {/* Normal cursor dot */}{" "}
      <div
        ref={dotRef}
        className=" absolute -left-1 -top-1 h-2 w-2 rounded-full bg-sunset-bright transition-all duration-150 "
      />{" "}
      {/* Clickable cursor cross */}{" "}
      <div
        ref={crossRef}
        className=" absolute -left-2 -top-2 h-4 w-4 opacity-0 scale-50 transition-all duration-150 "
      >
        {" "}
        {/* Horizontal line */}{" "}
        <div className=" absolute left-0 top-1/2 h-[2px] w-full -translate-y-1/2 rounded-full bg-sunset-bright " />{" "}
        {/* Vertical line */}{" "}
        <div className=" absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 rounded-full bg-sunset-bright " />{" "}
      </div>{" "}
    </div>
  );
}
