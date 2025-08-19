import React from "react";

export const ProductSection = () => {
  const productSections = [
    {
      title: "Everyday Fresh & Clean with Our Products",
      buttonText: "Shop Now",
      image: "https://cdn-icons-png.flaticon.com/512/415/415682.png", // onion placeholder
      bgColor: "bg-yellow-50",
    },
    {
      title: "Make your Breakfast Healthy and Easy",
      buttonText: "Shop Now",
      image: "https://cdn-icons-png.flaticon.com/512/1046/1046784.png", // milk bottle
      bgColor: "bg-pink-50",
    },
    {
      title: "The best Organic Products Online",
      buttonText: "Shop Now",
      image: "https://cdn-icons-png.flaticon.com/512/415/415733.png", // basket
      bgColor: "bg-blue-50",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 md:px-12 py-10">
      {productSections.map((item, index) => (
        <div
          key={index}
          className={`flex items-center justify-between rounded-xl p-6 ${item.bgColor}`}
        >
          {/* Text */}
          <div className="max-w-[60%]">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              {item.title}
            </h3>
            <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-400 transition">
              {item.buttonText} →
            </button>
          </div>

          {/* Image */}
          <div className="w-28 h-28 flex-shrink-0">
            <img
              src={item.image}
              alt="Product"
              className="object-contain w-full h-full"
            />
          </div>
        </div>
      ))}
    </div>
  );
};
