import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PageContainer } from "../../Components/ui/PageContainer";
import { FilterPanelContainer } from "../../Components/products-page/FilterPanelContainer";
import { ProductCard } from "../../Components/ui/ProductCard";
import { List } from "../../Components/ui/List";
import { Pagination } from "../../Components/ui/Pagination";
import { Button } from "../../Components/ui/button/Button";
import { IconArrowDown } from "../../assets/icons/InterfaceIcons";
import Breadcrumbs from "../../Components/Breadcrumbs/BreadCrumbs";
import { FilterSidebar } from "../../Components/products-page/FilderSidebar/FilterSidebar";

// ✅ Dummy product data grouped by category slug
const initialProducts = {
  "mobile-phones": [
    {
      id: 1,
      label: "iPhone 14 Pro",
      brand: "Apple",
      price: 1399,
      memory: "128GB",
      img: "/images/products/img16.png",
    },
    {
      id: 2,
      label: "Samsung Galaxy S22",
      brand: "Samsung",
      price: 999,
      memory: "128GB",
      img: "https://i.pinimg.com/736x/7c/25/86/7c25866063c370fa8f69f0c111e816f2.jpg",
    },
    {
      id: 3,
      label: "Xiaomi Mi 12",
      brand: "Xiaomi",
      price: 499,
      memory: "64GB",
      img: "https://i.pinimg.com/736x/20/39/ba/2039baa624d958dbd99161d8af871b20.jpg",
    },
    {
      id: 4,
      label: "Realme GT Neo",
      brand: "Realme",
      price: 599,
      memory: "128GB",
      img: "https://i.pinimg.com/736x/34/51/d0/3451d0c32a3f3a4bb1ff9316883a8331.jpg",
    },
    {
      id: 5,
      label: "POCO M3 Pro",
      brand: "Poco",
      price: 329,
      memory: "256GB",
      img: "https://i.pinimg.com/736x/e1/9b/40/e19b40e34af4c5366557f14c409a9447.jpg",
    },
    {
      id: 6,
      label: "Moto G Power",
      brand: "Motorola",
      price: 289,
      memory: "64GB",
      img: "https://i.pinimg.com/736x/1c/13/5a/1c135a86d87f24c59c41a7d60570536e.jpg",
    },
    {
      id: 7,
      label: "Nokia X20",
      brand: "Nokia",
      price: 349,
      memory: "128GB",
      img: "https://i.pinimg.com/736x/a5/09/40/a50940b9a175d43d087a00a87451bf6d.jpg",
    },
    {
      id: 8,
      label: "OPPO Reno 8",
      brand: "OPPO",
      price: 679,
      memory: "256GB",
      img: "https://i.pinimg.com/736x/62/25/07/62250784d467ab7b7c62a6b73fcf4573.jpg",
    },
    {
      id: 9,
      label: "Honor 90 Lite",
      brand: "Honor",
      price: 379,
      memory: "128GB",
      img: "https://i.pinimg.com/736x/ce/0c/92/ce0c9298650e0c3c892808b047b07daf.jpg",
    },
    {
      id: 10,
      label: "Samsung Galaxy A53",
      brand: "Samsung",
      price: 749,
      memory: "256GB",
      img: "https://i.pinimg.com/736x/4a/fc/cb/4afccb74aed5bd8d45aebee7bbb5b460.jpg",
    }
  ],
  appliances: [
    {
      id: 1,
      label: "Eurolux Premium Electric Orange Juicer",
      brand: "Eurolux",
      price: 1399,
      img: "https://i.pinimg.com/736x/f3/6f/a0/f36fa01d99b175756e02715fcf58e80f.jpg",
    },
  ],
  "women-clothing": [
    {
      id: 1,
      label: "Elegant Summer Dress",
      brand: "Zara",
      price: 1299,
      img: "https://i.pinimg.com/736x/26/f1/af/26f1af41b981c677f178f0574384da65.jpg",
    },
  ],
  "men-clothing": [
    {
      id: 1,
      label: "Formal Shirt",
      brand: "H&M",
      price: 999,
      img: "https://i.pinimg.com/736x/1c/91/73/1c91738b9b74ff1cabe7ba357ffdb6f7.jpg",
    },
  ],
  accessories: [
    {
      id: 1,
      label: "Leather Wallet",
      brand: "Fossil",
      price: 499,
      img: "https://i.pinimg.com/736x/8f/8f/ae/8f8faec5dd70a9f22a430227a5f06677.jpg",
    },
  ],
  footwear: [
    {
      id: 1,
      label: "Running Shoes",
      brand: "Nike",
      price: 1499,
      img: "https://i.pinimg.com/736x/72/e9/a4/72e9a4202a657bee50f574b2b97f4fc3.jpg",
    },
  ],
};

export const ProductsPage = () => {
  const { categorySlug } = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [filters, setFilters] = useState({
    price: [0, 2000],
    brands: [],
    memory: [],
  });

  const products = initialProducts[categorySlug] || [];

  // ✅ Filter logic (fixed brand filter)
  const filteredProducts = products.filter((p) => {
    const inPriceRange =
      p.price >= filters.price[0] && p.price <= filters.price[1];
    const inBrand =
      filters.brands.length === 0 || filters.brands.includes(p.brand);
    return inPriceRange && inBrand;
  });

  const perPage = 8;
  const totalPages = Math.ceil(filteredProducts.length / perPage);

  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * perPage,
    currentPage * perPage
  );

  useEffect(() => {
    setIsLoading(true);
    const timeout = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timeout);
  }, [categorySlug, filters]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
    setCurrentPage(1);
  };

  return (
    <PageContainer className="p-0">
      <Breadcrumbs />

      <div className="w-full flex gap-4 panel-scrollbar overflow-x-hidden">
        <FilterPanelContainer className="bg-red-600 w-[11rem]">
          <FilterSidebar onFilterChange={handleFilterChange} />
        </FilterPanelContainer>

        <div className="flex-grow min-w-0 flex px-0 flex-col md:px-3 py-4 panel-scrollbar overflow-y-auto">
          <div className="flex items-center justify-between mb-4">
            <h4 className="flex items-center text-xs  gap-2 md:text-md  text-[#6C6C6C] font-semibold">
              Selected Products:
              <span className="text-black font-semibold">
                {filteredProducts.length}
              </span>
            </h4>

            <Button
              variant="secondary"
              size="md"
              className=" hidden md:block  items-center  gap-2 px-6 py-2 text-sm cursor-pointer"
            >
              By rating <IconArrowDown />
            </Button>
          </div>

          {filteredProducts.length === 0 && !isLoading ? (
            <p className="text-center text-gray-500 py-10">
              No products found with the selected filters.
            </p>
          ) : (
            <>
              <List
                className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 w-full px-0 md:px-4"
                data={paginatedProducts}
                uniqueKey="id"
                render={(item) => (
                  <ProductCard 
                  data={item} 
                  loading={isLoading} 
                   className=" w-[10rem]"
                   
                   />
                )}
              />

              <Pagination
                currPage={currentPage}
                totalPages={totalPages}
                onPrev={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                onNext={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                onPageChange={(page) => setCurrentPage(page)}
              />
            </>
          )}
        </div>
      </div>
    </PageContainer>
  );
};
