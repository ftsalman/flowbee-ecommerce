import React, { useState } from "react";
import { SearchBar } from "../ui/SearchBar";
import { Link } from "react-router-dom";
import {
  IconFavorites,
  IconShoppingCart,
  IconUser,
} from "../../assets/icons/InterfaceIcons";

export const Navbar = () => {
  const [isSearchExpanded, setIsSearchExpanded] = useState(true);
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="w-full bg-white border-b border-gray-200">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8 h-[64px] flex items-center justify-between gap-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
        <Link to="/home">
          <img
            src="/svgs/brand-logos/logo-flowbee-secondary.svg"
            alt="Flowbee Logo"
            width={130}
            height={36}
            className="object-contain"
          />
        </Link>
        </div>

        {/* Search Bar - center aligned */}
        <div className="flex-1 max-w-[600px] mx-6">
          <SearchBar
            isSearchExpanded={isSearchExpanded}
            setIsSearchExpanded={setIsSearchExpanded}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-5 text-gray-700">
          <span className=" cursor-pointer">
            <IconFavorites size="24" />
          </span>
          <span className=" cursor-pointer">
            <IconShoppingCart size="24" />
          </span>
          <Link to="/home/settings">
            <span className=" cursor-pointer">
              <IconUser size="24" />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};
