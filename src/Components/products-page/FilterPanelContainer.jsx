import React from "react";

export const FilterPanelContainer = ({ children }) => {
  return (
    <div
      className={`overflow-y-auto panel-scrollbar no-scrollbar border-r birder w-60 flex-shrink-0 sticky top-0 z-40  
       "border-r"  "border-l"
       border-gray-200 bg-`}
    >
      {children}
    </div>
  );
};
