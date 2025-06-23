import React from "react";
import { IconCheck } from "../../assets/icons/InterfaceIcons"; // make sure this is a black tick

const StatusCheckbox = ({ label, checked, onChange }) => {
  const id = `chk-${label.replace(/\s+/g, "-").toLowerCase()}`;

  return (
    <label
      htmlFor={id}
      className="relative flex items-center gap-3 cursor-pointer select-none"
    >
      {/* Native hidden checkbox */}
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange?.(e.target.checked)}
        className="hidden peer"
      />

      {/* Checkbox box */}
      <span
        className={`
          w-5 h-5 rounded border-2
          border-gray-300
          flex items-center justify-center
          peer-checked:bg-yellow-400
          peer-checked:border-black
        `}
      >
        {checked && <IconCheck size="14" />}
      </span>

      {/* Label text */}
      <span className="text-sm font-medium text-black">{label}</span>
    </label>
  );
};

export default StatusCheckbox;
