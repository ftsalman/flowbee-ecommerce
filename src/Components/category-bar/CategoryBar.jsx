import React, { useState } from "react";
import { List } from "../ui/List";
import {
  IconCamera,
  IconComputer,
  IconGaming,
  IconHeadphones,
  IconPhone,
} from "../../assets/icons/InterfaceIcons";

const categories = [
  { id: "1", label: "Phones", icon: IconPhone },
  { id: "2", label: "Computers", icon: IconComputer },
  { id: "3", label: "Smart Watches", icon: IconGaming },
  { id: "4", label: "Cameras", icon: IconCamera },
  { id: "5", label: "Headphones", icon: IconHeadphones },
  { id: "6", label: "Gaming", icon: IconGaming },
];

export const CategoryBar = () => {
  const [hovered, setHovered] = useState(null);
  return (
    <div className="bg-[#1E1E1E] h-fit w-full px-20 text-white whitespace-nowrap border-t border-gray-700 relative z-10">
      <List
        data={categories}
        uniqueKey="id"
        render={({ label, icon: Icon }, idx) => (
          <div
            className={`
              flex items-center gap-2 px-[2rem] py-2
              cursor-pointer select-none transition-colors
              
              ${idx !== 0 ? "border-l border-neutral-700" : ""}
              ${hovered === label ? "text-yellow-400" : "text-gray-300"}
            `}
            onMouseEnter={() => setHovered(label)}
            onMouseLeave={() => setHovered(null)}
          >
            {Icon && <Icon size="24" />}
            <span className="text-sm">{label}</span>
          </div>
        )}
      />
    </div>
  );
};

// // components/category-bar/CategoryBar.jsx
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { CategoryItem } from "./CategoryItem";

// import {
//   IconCamera,
//   IconComputer,
//   IconGaming,
//   IconHeadphones,
//   IconPhone,
// } from "../../assets/icons/InterfaceIcons";

// const CATEGORIES = [
//   {
//     id: "men",
//     label: "Men",
//     icon: IconPhone,
//     sub: [
//       { title: "Top Wear", items: ["All Top Wear", "Shirts", "T-Shirts","Winter Wear", "Jackets","Sweat Shirts", "Jackets"] },
//       { title: "Bottom Wear", items: ["Jeans", "Shorts", "Trousers"] },
//       { title: "Accessories", items: ["Belts", "Bags", "Watches"] },
//     ],
//   },
//   {
//     id: "computers",
//     label: "Computers",
//     icon: IconComputer,
//     sub: [
//       { title: "Laptops", items: ["Gaming", "MacBooks"] },
//       { title: "Desktops", items: ["Towers", "All‑in‑Ones"] },
//     ],
//   },
//   {
//     id: "watches",
//     label: "Smart Watches",
//     icon: IconGaming,
//     sub: [
//       { title: "Brands", items: ["Apple", "Samsung", "Fitbit"] },
//       { title: "Straps", items: ["Leather", "Silicone", "Metal"] },
//     ],
//   },
//   { id: "cameras", label: "Cameras", icon: IconCamera },
//   { id: "headphones", label: "Headphones", icon: IconHeadphones },
//   { id: "gaming", label: "Gaming", icon: IconGaming },
// ];

// export const CategoryBar = () => {
//   const [active, setActive] = useState(null);
//   const navigate = useNavigate();

//   const handleCategoryClick = (id) => {
//     const cat = CATEGORIES.find((c) => c.id === id);
//     if (!cat?.sub) {
//       navigate(`/category/${id}`);
//     } else {
//       setActive((prev) => (prev === id ? null : id));
//     }
//   };

//   const handleSubClick = (label) => {
//     navigate(`/search?query=${encodeURIComponent(label)}`);
//     setActive(null);
//   };

//   return (
//     <nav className="bg-[#1E1E1E] flex items-center justify-center gap-7  border-t border-gray-700 w-full  text-white select-none relative z-50">
//       <ul className="flex">
//         {CATEGORIES.map((cat, idx) => (
//           <CategoryItem
//             key={cat.id}
//             idx={idx}
//             {...cat}
//             isOpen={active === cat.id}
//             setActive={setActive}
//             onClick={handleCategoryClick}
//             onSubClick={handleSubClick}
//           />
//         ))}
//       </ul>
//     </nav>
//   );
// };
