import React from "react";
import { List } from "../ui/List";

export const ProductSpecs = ({ specs }) => {
  return (
    <div className="flex items-center gap-1 mt-1 w-full">
      <List
        uniqueKey="specs"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full"
        data={specs}
        render={(spec, index) => (
          <div
            key={index}
            className="bg-[#F4F4F4] p-4 rounded-xl text-center flex items-center justify-center gap-2 hover:bg-gray-200 transition-colors duration-200 cursor-pointer"
          >
            <div>{spec.icon}</div>
            <div className="flex flex-col">
              <p className="text-md font-medium text-gray-400">{spec.title}</p>
              <p className="text-xs text-gray-800">{spec.subtitle}</p>
            </div>
          </div>
        )}
      />
    </div>
  );
};
