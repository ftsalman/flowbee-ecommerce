import React from "react";
import { List } from "../ui/List";
import { Card } from "../ui/Card";
import { IconShoppingCart, IconStar } from "../../assets/icons/InterfaceIcons";
import { Button } from "../ui/button/Button";
import { SectionHeader } from "../ui/SectionHeader";

export const PopularProducts = () => {
  const products = [
    {
      id: 1,
      name: "Seeds of Change Organic Red Rice",
      category: "Fresh Fruit",
      brand: "NestFood",
      price: 28.85,
      oldPrice: 32.0,
      discount: "13%",
      image: "/images/grocery/basmati_rice_image.png",
      rating: 2,
      status: "sale",
    },
    {
      id: 2,
      name: "All Natural Style Chicken Meatballs",
      category: "Fresh Seafood",
      brand: "NestFood",
      price: 23.0,
      oldPrice: 122.0,
      discount: "64%",
      image: "/images/grocery/quinoa_image.png",
      rating: 3,
      status: "sale",
    },
    {
      id: 3,
      name: "Angie's Sweet & Salty Kettle Corn",
      category: "Baking material",
      brand: "Country Crock",
      price: 48.85,
      oldPrice: 10.8,
      discount: "8%",
      image: "/images/grocery/top_ramen_image.png",
      rating: 4,
      status: "new",
    },
    {
      id: 4,
      name: "Foster Farms Takeout Crispy Classic",
      category: "Baking material",
      brand: "Country Crock",
      price: 17.85,
      oldPrice: 19.0,
      discount: "",
      image: "/images/grocery/paneer_image.png",
      rating: 0,
      status: "out",
    },
    {
      id: 5,
      name: "Blue Almonds Lightly Salted Vegetables",
      category: "Fresh Fruit",
      brand: "Country Crock",
      price: 23.85,
      oldPrice: 25.0,
      discount: "",
      image: "/images/grocery/orange_juice_image.png",
      rating: 1,
      status: "",
    },
  ];


  return (
    <div className="px-6 md:px-12 py-10">
      {/* Header */}
      <div className=" flex items-center justify-center">
        <SectionHeader
        header="Top Saller Of Month"
        
        />
      </div>

      <List
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4"
        data={products}
        uniqueKey="id"
        render={(item) => (
          <Card className="space-y-3 p-4">
            <div className="relative flex justify-center items-center p-2 rounded-md border border-gray-200 bg-gray-100">
              {/* Status badge */}
              {item.status === "sale" && (
                <span className="absolute top-2 left-2 px-2 py-1 text-white font-semibold text-xs rounded-md bg-red-500">
                  -{item.discount}
                </span>
              )}
              {item.status === "new" && (
                <span className="absolute top-2 left-2 px-2 py-1 text-white font-semibold text-xs rounded-md bg-green-500">
                  New
                </span>
              )}
              {item.status === "out" && (
                <span className="absolute top-2 left-2 px-2 py-1 text-white font-semibold text-xs rounded-md bg-gray-500">
                  Out of Stock
                </span>
              )}

              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-contain"
              />
            </div>

            <div>
              <p className="text-xs text-gray-500">{item.category}</p>
              <h2 className="text-gray-900 font-semibold text-sm mt-1 line-clamp-2">
                {item.name}
              </h2>
            </div>

            <div>
              {/* Rating */}
              <div className="flex items-center text-yellow-400 text-xs mb-1">
                {Array.from({ length: 5 }).map((_, index) =>
                  index < item.rating ? (
                    <IconStar key={index} size="12" fill="currentColor" />
                  ) : (
                    <IconStar
                      key={index}
                      size="12"
                      fill="none"
                      stroke="currentColor"
                    />
                  )
                )}
                <span className="text-gray-500 text-xs ml-1">
                  ({item.rating})
                </span>
              </div>

              <p className="text-sm mb-1 font-medium text-gray-950">
                By <span className="text-yellow-500">{item.brand}</span>
              </p>

              {/* Price and Add to Cart */}
              <div className="flex items-center justify-between mt-2">
                <div className="flex items-center gap-2">
                  <span className="text-green-600 text-sm font-semibold">
                    AED{item.price.toFixed(2)}
                  </span>
                  {item.oldPrice && (
                    <span className="line-through text-gray-400 text-xs">
                      AED{item.oldPrice.toFixed(2)}
                    </span>
                  )}
                </div>

                <Button
                  variant="secondary"
                  size="sm"
                  className="flex items-center gap-1 bg-green-500 hover:bg-green-600 text-white px-2 py-1"
                  disabled={item.status === "out"}
                >
                  <IconShoppingCart size="20" />
                  <span className="text-xs">Add To Cart</span>
                </Button>
              </div>
            </div>
          </Card>
        )}
      />
    </div>
  );
};
