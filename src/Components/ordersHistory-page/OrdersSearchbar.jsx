import React, { useRef } from "react";
import { useClickOutside } from "../../hooks/useClickOutside";
import { Button } from "../ui/button/Button";
import { IconSearch, IconSearch2 } from "../../assets/icons/InterfaceIcons";
import { cn } from "../../utils/utils";

export const OrdersSearchbar = ({
  isSearchExpanded,
  setIsSearchExpanded,
  setSearchValue,
  searchValue,
  className,
}) => {
  const inputRef = useRef(null);

  const searchbarRef = useClickOutside(() => {
    if (!searchValue) {
      setIsSearchExpanded(false);
    }
  });

  const handleSearchExpand = () => {
    setIsSearchExpanded(true);
    setTimeout(() => {
      inputRef?.current?.focus();
    }, 0);
  };

  const handleKeyPressInSearchBar = (e) => {
    if (e.key === "Escape" && searchValue === "") {
      setIsSearchExpanded(false);
    }
  };

  return (
    <div
      ref={searchbarRef}
      className={cn(
        "w-full max-w-5xl flex items-center rounded-md overflow-hidden bg-white shadow-sm border border-gray-300",
        className
      )}
    >
      <input
        type="search"
        placeholder="Search for orders here"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        onKeyDown={handleKeyPressInSearchBar}
        ref={inputRef}
        onClick={!isSearchExpanded ? handleSearchExpand : undefined}
        className={cn(
          "flex-1 h-12 px-4 text-sm text-gray-800 outline-none placeholder:text-gray-400",
          !isSearchExpanded && "cursor-pointer"
        )}
        disabled={!isSearchExpanded}
      />
      <Button
        onClick={handleSearchExpand}
        className="h-12 px-4 cursor-pointer font-semibold gap-2 bg-yellow-400 text-black text-sm rounded-none rounded-r-md"
      >
        <IconSearch2 size="20" />
        Search Orders
      </Button>
    </div>
  );
};
