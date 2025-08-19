import React from "react";

export const PromoBanner = () => {
  return (
      <div className="bg-white rounded-xl overflow-hidden flex flex-col md:flex-row items-center justify-between px-6 md:px-12 py-8 shadow-sm">
      {/* Left Image */}
      <div className="flex-1 flex justify-center md:justify-start">
        <img
          src="https://i.pinimg.com/1200x/c2/aa/2e/c2aa2ea7bfc9434ed893a70c09c83afe.jpg" // replace with real image (chili sauce jar)
          alt="Spice Manna"
          className="h-full md:h-full object-contain"
        />
      </div>

      {/* Right Text */}
      <div className="flex-1 text-center md:text-left  px-6 mt-6 md:mt-0">
        <p className="text-orange-500 font-medium text-sm mb-2">
          Get Up To 30% Off
        </p>
        <h2 className="text-xl md:text-2xl font-bold text-gray-800 leading-snug">
          Spice Manna Bright Tangy <br />
          Sweet Chili <span className="text-orange-500">Tamarind</span>
        </h2>
        <button className="mt-4 cursor-pointer bg-yellow-500 text-white px-6 py-2 rounded-lg hover:bg-yellow-400 transition">
          Shop Now →
        </button>
      </div>
    </div>
  )
};
