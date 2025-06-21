import React from "react";
import { List } from "../ui/List";
import { Link } from "react-router-dom";

export const Categories = ({ data = {}, isLoading = false }) => {
  return (
    <section className="flex flex-col gap-6 py-12 px-10 md:px-20">
      <h2 className="text-2xl md:text-4xl font-semibold text-center">
        Shop by Categories
      </h2>

      <div className=" space-y-2">
        {isLoading ? (
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {Array.from({ length: 8 }).map((_, idx) => (
              <SkeletonCard key={idx} />
            ))}
          </div>
        ) : (
          <List
            className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-6xl mx-auto"
            uniqueKey="id"
            data={data}
            render={(item) => (
              <Link
               to={`ProductsPage/${item.id}`}
                key={item.id}
                className="group p-4 cursor-pointer hover:scale-105 transition duration-500 flex flex-col items-center"
              >
                <img
                  src={item.image_url}
                  onError={(e) => (e.target.src = "/images/fallback.png")}
                  alt={item.label}
                  className="w-[400px] h-40 object-contain"
                />
                <span className="mt-4 text-sm font-medium text-gray-800">
                  {item.label}
                </span>
           </Link>
            )}
          />
        )}
      </div>
    </section>
  );
};

// Skeleton loader
const SkeletonCard = () => (
  <div className="flex flex-col items-center space-y-4 animate-pulse p-4">
    <div className="w-full h-40 bg-gray-200 rounded" />
    <div className="w-2/3 h-4 bg-gray-300 rounded" />
  </div>
);




      