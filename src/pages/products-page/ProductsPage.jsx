import React, { useEffect, useState } from "react";
import { PageContainer } from "../../Components/ui/PageContainer";
import { FilterPanelContainer } from "../../Components/products-page/FilterPanelContainer";
import {
  ProductCard,
  SkeletonProductCard,
} from "../../Components/ui/ProductCard";
import { List } from "../../Components/ui/List";
import { Pagination } from "../../Components/ui/Pagination";
import { Button } from "../../Components/ui/button/Button";
import { IconArrowDown } from "../../assets/icons/InterfaceIcons";
import Breadcrumbs from "../../Components/Breadcrumbs/BreadCrumbs";
import { FilterSidebar } from "../../Components/products-page/FilderSidebar/FilterSidebar";

// Dummy product data
const initialProducts = [
  {
    id: 1,
    label: "Skullcandy - Crusher anc 2 wireless headphone",
    price: "299.99",
    img: "/images/products/img16.png",
  },
  {
    id: 2,
    label: "Skullcandy - Crusher anc 2 wireless headphone",
    price: "299.99",
    img: "/images/products/img13.png",
  },
  {
    id: 3,
    label: "Skullcandy - Crusher anc 2 wireless headphone",
    price: "299.99",
    img: "/images/products/img14.png",
  },
  {
    id: 4,
    label: "Skullcandy - Crusher anc 2 wireless headphone",
    price: "299.99",
    img: "/images/products/img15.png",
  },
  {
    id: 3,
    label: "Skullcandy - Crusher anc 2 wireless headphone",
    price: "299.99",
    img: "/images/products/img14.png",
  },
  {
    id: 5,
    label: "Skullcandy - Crusher anc 2 wireless headphone",
    price: "299.99",
    img: "https://i.pinimg.com/736x/b7/d6/98/b7d698bd2003ab473c9e4c5c4d14a9da.jpg",
  },
  {
    id: 6,
    label: "Skullcandy - Crusher anc 2 wireless headphone",
    price: "299.99",
    img: "/images/products/img1.png",
  },
  {
    id: 7,
    label: "Skullcandy - Crusher anc 2 wireless headphone",
    price: "299.99",
    img: "https://i.pinimg.com/736x/b7/d6/98/b7d698bd2003ab473c9e4c5c4d14a9da.jpg",
  },
  {
    id: 8,
    label: "Skullcandy - Crusher anc 2 wireless headphone",
    price: "299.99",
    img: "/images/products/img1.png",
  },
  {
    id: 9,
    label: "Skullcandy - Crusher anc 2 wireless headphone",
    price: "299.99",
    img: "/images/products/img1.png",
  },
  {
    id: 10,
    label: "Skullcandy - Crusher anc 2 wireless headphone",
    price: "299.99",
    img: "/images/products/img1.png",
  },
  {
    id: 11,
    label: "Skullcandy - Crusher anc 2 wireless headphone",
    price: "299.99",
    img: "/images/products/img1.png",
  },
];

export const ProductsPage = () => {
  const [productsData, setProductsData] = useState(initialProducts);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  const perPage = 8;
  const totalPages = Math.ceil(productsData.length / perPage);

  // Get the products to show on current page
  const paginatedProducts = productsData.slice(
    (currentPage - 1) * perPage,
    currentPage * perPage
  );

  // Loading simulation
  useEffect(() => {
    const timeout = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timeout);
  }, []);

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  return (
    <PageContainer className="p-0 ">
      <Breadcrumbs/>
      <div className="w-full flex flex-row lg:flex-row gap-4 panel-scrollbar overflow-x-hidden">
        <FilterPanelContainer>
          <FilterSidebar />
        </FilterPanelContainer>

        <div className="flex-grow min-w-0 flex flex-col px-3 py-4 panel-scrollbar  overflow-y-auto ">
          <div className="flex items-center justify-between mb-4">
            <h4 className="flex items-center gap-2 text-md text-[#6C6C6C] font-semibold">
              Selected Products:
              <span className="text-black font-semibold">
                {productsData.length}
              </span>
            </h4>

            <Button
              variant="secondary"
              size="md"
              className="flex items-center gap-2 px-6 py-2 text-sm cursor-pointer"
            >
              By rating <IconArrowDown />
            </Button>
          </div>

          <List
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 w-full px-4"
            data={paginatedProducts}
            uniqueKey="id"
            render={(item) => <ProductCard data={item} loading={isLoading} />}
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
        </div>
      </div>
    </PageContainer>
  );
};
