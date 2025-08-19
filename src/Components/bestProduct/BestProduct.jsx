import React, { useState } from "react";
import { List } from "../ui/List";
import { Card } from "../ui/Card";
import { IconStar } from "../../assets/icons/InterfaceIcons";
import { useShopContext } from "../../context/ShopContext";
import { SectionHeader } from "../ui/SectionHeader";

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
  const { bestsellers, loading } = useShopContext();

  const getTagStyles = (tag) => {
    switch (tag) {
      case "New":
        return "bg-yellow-400 text-white";
      case "Hot Seller":
        return "bg-red-500 text-white";
      case "Raw Green":
      case "Top Green":
        return "bg-green-500 text-white";
      default:
        return "bg-gray-300 text-black";
    }
  };

  const [isloading, setIsLoading] = useState(false);

  return (
    <div className="py-7 px-6 md:px-16">
      <div>
        <SectionHeader header="Top Products" />
      </div>

      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="h-48 bg-gray-200 rounded-2xl animate-pulse"
            ></div>
          ))}
        </div>
      ) : (
        <List
          data={bestsellers}
          uniqueKey="id"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6"
          render={(item) => (
            <Card className="relative p-4 border-2 border-yellow-100 rounded-2xl shadow-sm hover:shadow-md transition text-center">
              {/* Tag */}
              {item.tag && (
                <span
                  className={`absolute top-2 left-2 text-xs font-semibold px-2 py-0.5 rounded-full ${getTagStyles(
                    item.tag
                  )}`}
                >
                  {item.tag}
                </span>
              )}

              <div className="group flex items-center justify-center mb-3">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-28 w-28 group-hover:scale-110 transition-transform duration-300 object-contain"
                />
              </div>

              <p className="text-xs text-gray-500 mb-1">{item.category}</p>

              <h3 className="text-md font-semibold text-gray-800 truncate mb-1">
                {item.name}
              </h3>

              <p className="text-lg font-semibold text-green-400 ">
                ${item.offerPrice}{" "}
                <span className="text-sm text-gray-400 line-through">
                  ${item.price}
                </span>
              </p>

              <div className="flex items-center justify-center mt-2 gap-0.5">
                {Array.from({ length: 5 }, (_, i) => (
                  <span
                    key={i}
                    className={
                      i < item.rating ? "text-yellow-400" : "text-gray-300"
                    }
                  >
                    <IconStar className="w-4 h-4" />
                  </span>
                ))}
              </div>
            </Card>
          )}
        />
      )}
    </div>
  );
};
