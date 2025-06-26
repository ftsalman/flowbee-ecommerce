import React from "react";
import { useLocation, useParams, Link } from "react-router-dom";

// Label overrides
const LABEL_OVERRIDES = {
  categories: "Categories",
  smartphones: "Smartphones",
  "mobile-phones": "Mobile Phones",
  apple: "Apple",
  samsung: "Samsung",
};

const formatLabel = (str) =>
  str.replace(/[-_]/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

const Breadcrumbs = () => {
  const location = useLocation();
  const segments = location.pathname.split("/").filter(Boolean);

  const crumbs = segments.map((segment, index) => {
    const path = "/" + segments.slice(0, index + 1).join("/");
    const label =
      LABEL_OVERRIDES[segment.toLowerCase()] || formatLabel(segment);

    return { label, link: path };
  });

  const fullCrumbs = [{ label: "Home", link: "/home" }, ...crumbs];

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
              {index > 0 && ">"}
              {isLast ? (
                <span className="font-semibold text-black">{crumb.label}</span>
              ) : (
                <Link
                  to={crumb.link}
                  className="hover:underline text-gray-700 whitespace-nowrap"
                >
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
