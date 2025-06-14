import React, { useState } from "react";
import { List } from "../ui/List";
import {
  IconCamera,
  IconComputer,
  IconGaming,
  IconHeadphones,
  IconPhone,
} from "../../assets/icons/InterfaceIcons";

const categories = [
  { id: "1", label: "Phones", icon: IconPhone },
  { id: "2", label: "Computers", icon: IconComputer },
  { id: "3", label: "Smart Watches", icon: IconGaming },
  { id: "4", label: "Cameras", icon: IconCamera },
  { id: "5", label: "Headphones", icon: IconHeadphones },
  { id: "6", label: "Gaming", icon: IconGaming },
];

export const CategoryBar = () => {
  const [hovered, setHovered] = useState(null);
  return (
    <div className="bg-[#1E1E1E] h-fit p-2 px- w-full text-white whitespace-nowrap border-t border-gray-700 relative z-10">
      <List
        data={categories}
        uniqueKey="id"
        render={({ label, icon: Icon }, idx) => (
          <div
            className={`
              flex items-center gap-1 px-[4rem] py-2
              cursor-pointer select-none transition-colors
              hover:bg-neutral-700
              ${idx !== 0 ? "border-l border-neutral-700" : ""}
              ${hovered === label ? "text-yellow-400" : "text-gray-300"}
            `}
            onMouseEnter={() => setHovered(label)}
            onMouseLeave={() => setHovered(null)}
          >
            {Icon && <Icon size="24" />}
            <span className="text-sm">{label}</span>
          </div>
        )}
      />
    </div>
  );
};
