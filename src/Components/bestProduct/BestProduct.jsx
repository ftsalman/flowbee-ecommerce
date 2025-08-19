import React from "react";
import { List } from "../ui/List";
import { Card } from "../ui/Card";

const DummyData = [
  {
    id: 1,
    name: "Organic Apples",
    category: "Fruits",
    image: "/images/grocery/organic_vegitable_image.png",
    price: 5.0,
    offerPrice: 3.5,
    rating: 4,
  },
  {
    id: 2,
    name: "Fresh Carrots",
    category: "Vegetables",
    image: "/images/grocery/organic_vegitable_image.png",
    price: 4.0,
    offerPrice: 2.5,
    rating: 5,
  },
  {
    id: 3,
    name: "Milk 1L",
    category: "Dairy",
    image: "/images/grocery/organic_vegitable_image.png",
    price: 3.0,
    offerPrice: 2.2,
    rating: 3,
  },
    {
    id: 3,
    name: "Milk 1L",
    category: "Dairy",
    image: "/images/grocery/organic_vegitable_image.png",
    price: 3.0,
    offerPrice: 2.2,
    rating: 3,
  },
    {
    id: 3,
    name: "Milk 1L",
    category: "Dairy",
    image: "/images/grocery/organic_vegitable_image.png",
    price: 3.0,
    offerPrice: 2.2,
    rating: 3,
  },
   {
    id: 3,
    name: "Milk 1L",
    category: "Dairy",
    image: "/images/grocery/organic_vegitable_image.png",
    price: 3.0,
    offerPrice: 2.2,
    rating: 3,
  },
   {
    id: 3,
    name: "Milk 1L",
    category: "Dairy",
    image: "/images/grocery/organic_vegitable_image.png",
    price: 3.0,
    offerPrice: 2.2,
    rating: 3,
  },
   {
    id: 3,
    name: "Milk 1L",
    category: "Dairy",
    image: "/images/grocery/organic_vegitable_image.png",
    price: 3.0,
    offerPrice: 2.2,
    rating: 3,
  },
   {
    id: 3,
    name: "Milk 1L",
    category: "Dairy",
    image: "/images/grocery/organic_vegitable_image.png",
    price: 3.0,
    offerPrice: 2.2,
    rating: 3,
  },
   {
    id: 3,
    name: "Milk 1L",
    category: "Dairy",
    image: "/images/grocery/organic_vegitable_image.png",
    price: 3.0,
    offerPrice: 2.2,
    rating: 3,
  },
    
];

export const BestProduct = () => {
  return (
    <div className="py-7 px-6 md:px-24">
      <h2 className="text-xl font-bold text-gray-800 mb-6">Best seller</h2>

      <List
        data={DummyData}
        uniqueKey="id"
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6"
        render={(item) => (
          <Card className="p-4 border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition text-center">
            {/* Product Image */}
            <div className="flex items-center justify-center mb-3">
              <img
                src={item.image}
                alt={item.name}
                className="h-28 w-28 object-contain"
              />
            </div>

            {/* Category */}
            <p className="text-xs text-gray-500 mb-1">{item.category}</p>

            {/* Name */}
            <h3 className="text-sm font-medium text-gray-800 truncate mb-1">
              {item.name}
            </h3>

            {/* Price */}
            <p className="text-lg font-semibold text-yellow-500">
              ${item.offerPrice}{" "}
              <span className="text-sm text-gray-400 line-through">
                ${item.price}
              </span>
            </p>

            {/* Rating */}
            <div className="flex items-center justify-center mt-2 gap-1">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <svg
                    key={i}
                    className={`w-4 h-4 ${
                      i < item.rating ? "text-yellow-400" : "text-gray-300"
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.294 3.983a1 1 0 0 0 .951.69h4.188c.969 0 1.371 1.24.588 1.81l-3.388 2.46a1 1 0 0 0-.364 1.118l1.295 3.983c.299.921-.756 1.688-1.54 1.118L9.589 13.63a1 1 0 0 0-1.176 0l-3.389 2.46c-.783.57-1.838-.197-1.539-1.118L4.78 10.99a1 1 0 0 0-.363-1.118L1.028 7.41c-.783-.57-.38-1.81.588-1.81h4.188a1 1 0 0 0 .95-.69L9.049 2.927z" />
                  </svg>
                ))}
            </div>
          </Card>
        )}
      />
    </div>
  );
};
