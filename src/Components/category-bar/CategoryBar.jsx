import React, { useState } from "react";
import { List } from "../ui/List";
import { CATEGORIES_DATA } from "../../constants/CategoriesDropdownData";
import { CategoryList } from "./CategoryList";
// import { IconMenu2 } from "@tabler/icons-react"; // or any hamburger icon
import { CategoryItem } from "./CategoryItems";
import { IconHamburger, IconUser } from "../../assets/icons/InterfaceIcons";

export const CategoryBar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const openCategory =
    CATEGORIES_DATA.find((c) => c.label === openDropdown) || null;

  return (
    <nav className="relative z-10 bg-[#1E1E1E] border-t p-1 border-gray-700 text-white">
      {/* ------ Desktop row (hidden on small) ------ */}
      <div
        className="hidden md:flex items-center gap-px px-20"
        onMouseLeave={() => setOpenDropdown(null)}
      >
        <List
          data={CATEGORIES_DATA}
          uniqueKey="id"
          render={(item, idx) => (
            <CategoryItem
              key={item.id}
              idx={idx}
              {...item}
              isActive={openDropdown === item.label}
              onMouseEnter={() => setOpenDropdown(item.label)}
            />
          )}
        />
      </div>

      {/* ------ Mega‑menu (desktop only) ------ */}
      <div className="hidden md:block">
        <CategoryList openCategory={openCategory} />
      </div>

      {/* ------ Mobile bar ------ */}
      <div className="md:hidden flex items-center justify-between px-4 py-3">
        <span className="font-semibold">Shop by Category</span>
        <button
          aria-label="Toggle categories"
          onClick={() => setMobileOpen((p) => !p)}
          className="p-2 rounded-md hover:bg-neutral-800 transition"
        >
          <IconHamburger size="24" />
        </button>
      </div>

      {/* ------ Mobile dropdown (simple list) ------ */}
      {mobileOpen && (
        <ul className="md:hidden bg-neutral-900 divide-y divide-neutral-700">
          {CATEGORIES_DATA.map((cat) => (
            <li
              key={cat.id}
              className="px-6 py-3 text-sm hover:bg-neutral-800 active:bg-neutral-700 transition"
            >
              {cat.label}
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};
