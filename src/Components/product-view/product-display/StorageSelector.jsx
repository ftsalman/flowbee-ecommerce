import React from "react";
import { cn } from "../../../utils/utils";
import { Button } from "../../ui/button/Button";
import { List } from "../../ui/List";

export const StorageSelector = ({ options, selected, onSelect }) => {
  return (
    <div className="flex flex-wrap items-center gap-2 mt-2">
      <span className="min-w-[100px] text-sm text-gray-700">Select storage:</span>
      <List
        className="flex flex-wrap gap-2"
        data={options}
        uniqueKey={(storage, i) => `${storage}-${i}`}
        render={(storage) => (
          <Button
            key={storage}
            variant="secondary"
            onClick={() => onSelect(storage)}
            className={cn(
              "px-4 py-2 rounded-md text-sm text-gray-500 border border-gray-300 transition-all",
              selected === storage
                ? "border-gray-800 text-gray-800 font-medium bg-gray-100"
                : "hover:border-gray-500 hover:text-gray-700"
            )}
          >
            {storage}
          </Button>
        )}
      />
    </div>
  );
};
