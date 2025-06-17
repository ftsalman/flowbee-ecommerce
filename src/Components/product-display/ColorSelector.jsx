import React from "react";
import { Button } from "../ui/button/Button";
import { List } from "../ui/List";
import { cn } from "../../utils/utils";

export const ColorSelector = ({ options, selectedColor, onSelect }) => {
  return (
    <div className="flex items-center gap-2 mt-2">
      <span className="min-w-[100px] text-sm text-gray-700">Select color:</span>
      <List
        className="flex gap-2 flex-wrap"
        data={options}
        uniqueKey={(color, i) => `${color}-${i}`}
        render={(color) => (
          <Button
            key={color}
            variant="secondary"
            onClick={() => onSelect(color)}
            className={cn(
              "w-6 h-6 px-1 rounded-full border border-gray-300 transition-transform hover:scale-110",
              selectedColor === color ? "ring-2 ring-black" : ""
            )}
            style={{ backgroundColor: color }}
          />
        )}
      />
    </div>
  );
};
