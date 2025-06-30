import React, { useContext } from "react";
import { useLocation, useParams, Link } from "react-router-dom";
import { ShopContext } from "../../context/ShopContext";
const LABEL_OVERRIDES = {
  "": "Home",
  "home": "Home",
  "categories": "Categories",
  "mobile-phones": "Mobile Phones",
  "my-account": "My Account",
  "order-history": "Order History",
  "orders": "Orders",
  "products": "Products",
};

const formatLabel = (segment) =>
  segment.replace(/[-_]/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

const Breadcrumbs = () => {
  const location = useLocation();
  const { allProducts = [] } = useContext(ShopContext);
  const segments = location.pathname.split("/").filter(Boolean);

  const crumbs = segments.map((segment, index) => {
    const path = "/" + segments.slice(0, index + 1).join("/");

    // Handle product ID -> product name
    const isLast = index === segments.length - 1;
    const prevSegment = segments[index - 1];
    const isProductId = prevSegment === "products";

    let label = LABEL_OVERRIDES[segment.toLowerCase()] || formatLabel(segment);

    if (isLast && isProductId) {
      const product = allProducts.find((p) => String(p.id) === String(segment));
      label = product?.label || segment;
    }

    return { label, link: path };
  });

  const fullCrumbs =
    segments[0]?.toLowerCase() === "home"
      ? crumbs
      : [{ label: "Home", link: "/" }, ...crumbs];
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
