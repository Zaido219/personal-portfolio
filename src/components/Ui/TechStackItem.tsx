import React from "react";
import type { TechStackItemProps } from  "./../../interface/types";

export const TechCard = ({
  item,
  className = "",
  onClick,
}: TechStackItemProps) => {
  const { name, field, icon, color } = item;

  // Handles click events cleanly if a handler is supplied
  const handleClick = () => {
    if (onClick) {
      onClick(item);
    }
  };

  return (
    <div
      onClick={handleClick}
      className={`flex items-center gap-3 p-3 rounded-lg border border-neutral-800 bg-neutral-900/50 hover:border-neutral-700 transition-all ${
        onClick ? "cursor-pointer" : ""
      } ${className}`}
    >
      {/* Icon Wrapper: Applies dynamic brand color via inline style */}
      {icon && (
        <span
          className="text-2xl flex-shrink-0"
          style={{ color: color ?? "currentColor" }}
          aria-hidden="true"
        >
          {icon}
        </span>
      )}

      {/* Item Metadata */}
      <div className="flex flex-col min-w-0">
        <span className="font-medium text-sm text-neutral-100 truncate">
          {name}
        </span>
        <span className="text-xs text-neutral-400 capitalize truncate">
          {field}
        </span>
      </div>
    </div>
  );
};