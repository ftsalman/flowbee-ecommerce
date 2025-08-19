import React from "react";

export const PopularProducts = () => {


    const products = [
  {
    id: 1,
    name: "Seeds of Change Organic Red Rice",
    category: "Fresh Fruit",
    brand: "NestFood",
    price: 28.85,
    oldPrice: 32.00,
    discount: "13%",
    image: "/images/grocery/fresh_fruits_image.png", // replace with real
    rating: 2,
    status: "sale",
  },
  {
    id: 2,
    name: "All Natural Style Chicken Meatballs",
    category: "Fresh Seafood",
    brand: "NestFood",
    price: 23.00,
    oldPrice: 122.00,
    discount: "64%",
    image: "/images/grocery/fresh_fruits_image.png",
    rating: 3,
    status: "sale",
  },
  {
    id: 3,
    name: "Angie’s Sweet & Salty Kettle Corn",
    category: "Baking material",
    brand: "Country Crock",
    price: 48.85,
    oldPrice: 52.00,
    discount: "8%",
    image: "/images/grocery/fresh_fruits_image.png",
    rating: 4,
    status: "new",
  },
  {
    id: 4,
    name: "Foster Farms Takeout Crispy Classic",
    category: "Baking material",
    brand: "Country Crock",
    price: 17.85,
    oldPrice: 19.00,
    discount: "",
    image: "/images/grocery/fresh_fruits_image.png",
    rating: 0,
    status: "out",
  },
  {
    id: 5,
    name: "Blue Almonds Lightly Salted Vegetables",
    category: "Fresh Fruit",
    brand: "Country Crock",
    price: 23.85,
    oldPrice: 25.00,
    discount: "",
    image: "/images/grocery/fresh_fruits_image.png",
    rating: 1,
    status: "",
  },
];
  return (
    <div className="px-6 md:px-12 py-10">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-800">Feature Products</h2>
        <div className="flex gap-4 text-sm font-medium text-gray-500">
          <button className="text-yellow-500">All</button>
          <button>Baking material</button>
          <button>Fresh Fruits</button>
          <button>Milks & Dairies</button>
          <button>Meats</button>
          <button>Vegetables</button>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded-xl p-4 hover:shadow-lg transition relative"
          >
            {/* Badge */}
            {product.discount && (
              <span className="absolute top-2 left-2 bg-yellow-500 text-white text-xs px-2 py-0.5 rounded">
                {product.discount}
              </span>
            )}
            {product.status === "new" && (
              <span className="absolute top-2 left-2 bg-blue-500 text-white text-xs px-2 py-0.5 rounded">
                New
              </span>
            )}
            {product.status === "out" && (
              <span className="absolute top-2 left-2 bg-gray-500 text-white text-xs px-2 py-0.5 rounded">
                Out of Stock
              </span>
            )}

            {/* Image */}
            <div className="flex justify-center mb-4">
              <img
                src={product.image}
                alt={product.name}
                className="h-32 object-contain"
              />
            </div>

            {/* Category */}
            <p className="text-xs text-gray-400">{product.category}</p>

            {/* Title */}
            <h3 className="text-sm font-semibold text-gray-700 line-clamp-2 mb-1">
              {product.name}
            </h3>

            {/* Rating */}
            <div className="flex items-center text-yellow-400 text-xs mb-1">
              {"★".repeat(product.rating) + "☆".repeat(5 - product.rating)}
            </div>

            {/* Brand */}
            <p className="text-xs text-gray-500 mb-2">By {product.brand}</p>

            {/* Price */}
            <div className="flex items-center gap-2 mb-3">
              <span className="text-yellow-500 font-semibold">
                ${product.price}
              </span>
              {product.oldPrice && (
                <span className="line-through text-gray-400 text-sm">
                  ${product.oldPrice}
                </span>
              )}
            </div>

            {/* Button */}
            <button className="w-full cursor-pointer bg-yellow-500 text-white py-1.5 rounded-lg text-sm hover:bg-yellow-400 transition">
              + Add
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
