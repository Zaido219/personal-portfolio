import { useEffect, useRef } from "react";
import { MousePointer2 } from "lucide-react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const pointerRef = useRef<SVGSVGElement>(null);
  const wasClickableRef = useRef(false);

  useEffect(() => {
    const handlePointerMove = (event: PointerEvent) => {
      if (event.pointerType === "touch") return;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${event.clientX - 5}px, ${event.clientY - 3}px, 0)`;
      }

      const target = event.target instanceof Element ? event.target : null;
      const clickable = !!target?.closest(
        "a, button, [role='button'], [data-cursor='clickable']",
      );

      if (clickable !== wasClickableRef.current) {
        pointerRef.current?.classList.toggle("scale-110", clickable);
        wasClickableRef.current = clickable;
      }
    };

    window.addEventListener("pointermove", handlePointerMove);
    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[9999] hidden will-change-transform md:block"
    >
      <MousePointer2
        ref={pointerRef}
        size={30}
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="absolute -left-[5px] -top-[3px] text-zinc-950 transition-transform duration-75 dark:text-neutral-100"
      />
    </div>
  );
}
