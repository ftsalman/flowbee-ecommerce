// CategoryItem.jsx
import React from "react";

export const CategoryItem = ({ label, icon: Icon, isActive, onMouseEnter }) => (
  <div
    onMouseEnter={onMouseEnter}
    className={`relative flex items-center gap-2 px-8 py-2 cursor-pointer select-none
                border-l first:border-none border-neutral-700 transition-colors
                ${
                  isActive
                    ? "text-yellow-300"
                    : "text-gray-300 hover:text-yellow-300"
                }`}
  >
    {Icon && <Icon size="24" />}

    <span
      className="text-sm inline-block
                 after:absolute after:left-0 after:right-0 after:-bottom-1
                 after:h-[2px] after:rounded-sm
                 after:transition-opacity
                 after:bg-yellow-400
                 after:opacity-0
                 "
      style={isActive ? { position: "relative" } : undefined}
    >
      {label}

      {isActive && (
        <span className="absolute  inset-x-0 -bottom-1.5 h-[4px] w-[7rem] bg-yellow-400 rounded-sm" />
      )}
    </span>
  </div>
);
