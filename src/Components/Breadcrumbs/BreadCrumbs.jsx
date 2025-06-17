import React from "react";
import { IconChevronRight } from "../../assets/icons/InterfaceIcons";

const Breadcrumbs = ({ product }) => {
  const crumbs = [
    { label: "Home", link: "/home" },
    { label: "Categories", link: "/category" },
    {
      label: product?.category || "Category",
      link: `/categories/${product?.category || ""}`,
    },
    {
      label: product?.brand || "Brand",
      link: `/categories/${product?.category || ""}/${product?.brand || ""}`,
    },
    { label: product?.title || "Product", link: null },
  ];

  return (
    <nav
      className="bg-[#FFD833] border-b border-gray-300 py-4 px-10 text-sm text-gray-800"
      aria-label="Breadcrumb"
    >
      <ol className="flex items-center space-x-1">
        {crumbs.map((crumb, index) => (
          <li key={index} className="flex items-center">
            {index > 0 && <IconChevronRight className="mx-1 text-gray-500" />}
            {crumb.link ? (
              <a href={crumb.link} className="hover:underline text-gray-700">
                {crumb.label}
              </a>
            ) : (
              <span className="font-semibold text-black">{crumb.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
