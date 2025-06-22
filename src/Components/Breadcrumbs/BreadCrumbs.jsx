// components/Breadcrumbs/Breadcrumbs.jsx
import React from "react";
import { useLocation, Link } from "react-router-dom";
import { IconChevronRight } from "../../assets/icons/InterfaceIcons"; // Make sure this icon exists

// Capitalize first letters and replace dashes/underscores
const formatLabel = (str) =>
  str
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());

// Optional label overrides
const LABEL_OVERRIDES = {
  catalog: "Catalog",
  smartphones: "Smartphones",
  laptops: "Laptops",
};

const Breadcrumbs = () => {
  const location = useLocation();

  const segments = location.pathname
    .split("/")
    .filter(Boolean); // removes empty strings

  const crumbs = segments.map((segment, index) => {
    const path = "/" + segments.slice(0, index + 1).join("/");
    const label = LABEL_OVERRIDES[segment] || formatLabel(segment);

    return {
      label,
      link: path,
    };
  });

  const fullCrumbs = [{ label: "Home", link: "/" }, ...crumbs];

  return (
    <nav
      className="bg-[#FFD833] border-b border-gray-300 py-4 px-4 sm:px-10 text-sm text-gray-800"
      aria-label="Breadcrumb"
    >
      <ol className="flex items-center space-x-1 overflow-x-auto">
        {fullCrumbs.map((crumb, index) => {
          const isLast = index === fullCrumbs.length - 1;

          return (
            <li key={index} className="flex items-center">
              {index > 0 && (
                <IconChevronRight className="mx-1 text-gray-500 shrink-0" />
              )}
              {isLast ? (
                <span className="font-semibold text-black">
                  {crumb.label}
                </span>
              ) : (
                <Link to={crumb.link} className="hover:underline text-gray-700">
                  {crumb.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
