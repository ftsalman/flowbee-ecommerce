import React from "react";

const PriceRange = ({ min = 0, max = 5000, step = 10, value, onChange }) => {


  return (
    <div className="space-y-2">
      <div className="flex gap-2">
        <input
          type="number"
          name="from"
        //   value={from}
        //   onChange={handleInput}
          className="w-1/2 border border-gray-300 px-2 py-1 rounded text-sm"
        />
        <input
          type="number"
          name="to"
        //   value={to}
        //   onChange={handleInput}
          className="w-1/2 border border-gray-300 px-2 py-1 rounded text-sm"
        />
      </div>

      <div className="relative h-6">
        <input
          type="range"
        //   min={min}
        //   max={max}
        //   step={step}
        //   value={from}
        //   onChange={(e) => handleSlider(0, e.target.value)}
          className="absolute w-full opacity-0"
        />
        <input
          type="range"
        //   min={min}
        //   max={max}
        //   step={step}
        //   value={to}
          onChange={(e) => handleSlider(1, e.target.value)}
          className="absolute w-full opacity-0"
        />
        <div
          className="absolute top-1/2 -translate-y-1/2 h-1 w-full rounded bg-gray-300"
        //   style={trackStyle}
        />
      </div>
    </div>
  );
};

export default PriceRange;
