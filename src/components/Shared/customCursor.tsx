import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setPosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="
        pointer-events-none
        fixed
        left-0
        top-0
        z-[9999]
        hidden
        md:block
      "
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
    >
      {/* Outer rotating ring */}
      <div
        className="
          absolute
          -left-5
          -top-5
          h-10
          w-10
          rounded-full
          border
          border-dashed
          animate-spin
        "
        style={{
          animationDuration: "3s",
        }}
      />

      {/* Inner solid circle */}
      <div
        className="
          absolute
          -left-1
          -top-1
          h-2
          w-2
          rounded-full
          bg-white
        "
      />
    </div>
  );
}