import React from "react";

export const PromoBanner = () => {
  return (
    <div className="bg-[#efefef]  overflow-hidden flex flex-col md:flex-row items-center justify-between px-6 md:px-12 py-8 ">
      {/* Left Image */}
      <div className="flex-1 flex justify-center md:justify-start">
        <img
          src="https://i.pinimg.com/1200x/c2/aa/2e/c2aa2ea7bfc9434ed893a70c09c83afe.jpg" // replace with real image (chili sauce jar)
          alt="Spice Manna"
          className="h-full md:h-full object-contain"
        />
      </div>

      {/* Right Text */}
      <div className="flex-1 text-center md:text-left px-6 mt-6 md:mt-0">
        <p className="text-gray-800 font-medium text-sm mb-2">
          Cool & Refreshing
        </p>
        <h2 className="text-xl md:text-4xl font-bold text-yellow-400  leading-snug">
          Delicious Creamy <br />
          <span className="text-gray-800 ">Milk Shake</span>
        </h2>
        <button className="mt-4 cursor-pointer bg-yellow-400 text-white px-6 py-2 rounded-lg hover:bg-yellow-300 transition">
          Order Now →
        </button>
      </div>
    </div>
  );
};
