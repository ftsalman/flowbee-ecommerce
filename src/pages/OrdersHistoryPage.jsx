import React, { useEffect, useState } from "react";
import Breadcrumbs from "../Components/Breadcrumbs/BreadCrumbs";
import { OrdersFilter } from "../Components/ordersHistory-page/OrdersFilter";
import { PageContainer } from "../Components/ui/PageContainer";
import { FilterPanelContainer } from "../Components/products-page/FilterPanelContainer";
import { OrdersSearchbar } from "../Components/ordersHistory-page/OrdersSearchbar";
import { List } from "../Components/ui/List";
import OrdersCard from "../Components/ordersHistory-page/OrdersCard";
import { OrdersCardSkeleton } from "../Components/ordersHistory-page/OrdersCardSkeleton";

/* ----------------------------------------------------------
dummy data
---------------------------------------------------------- */
const mockOrders = [
  {
    orderId: "1728947824",
    productName: "Apple iPhone 14 Pro 512GB Gold (MQ233)",
    imageUrl: "/images/products/img16.png",
    deliveryDate: "2025-05-27",
    status: "Delivered",
  },
  {
    orderId: "1728947825",
    productName: "Samsung Galaxy S23 Ultra 256GB",
    imageUrl: "/images/products/img15.png",
    deliveryDate: "2025-05-25",
    status:"Cancelled",
  },
  {
    orderId: "1728947826",
    productName: "Sony WH-1000XM5 Headphones",
    imageUrl: "/images/products/img14.png",
    deliveryDate: "2025-06-01",
    status: "Delivered",
  },
];

export const OrdersHistoryPage = () => {
  const [isSearchExpanded, setIsSearchExpanded] = useState(true);
  const [searchValue, setSearchValue] = useState("");
  const [ordersData, setOrdersData] = useState([]);
  const [fetchStatus, setFetchStatus] = useState("loading"); // 'loading' | 'success' | 'error'
  const [activeStatus, setActiveStatus] = useState(["On the way"]);

  useEffect(() => {
    const fetchOrdersData = async () => {
      setFetchStatus("loading");
      try {
        await new Promise((res) => setTimeout(res, 600));
        setOrdersData(mockOrders);
        setFetchStatus("success");
      } catch (err) {
        console.error(err);
        setFetchStatus("error");
      }
    };
    fetchOrdersData();
  }, []);

  // Filter Orders
  const filteredOrders = ordersData.filter((order) => {
    const matchesSearch = order.productName
      .toLowerCase()
      .includes(searchValue.toLowerCase());

    const matchesStatus =
      activeStatus.length === 0 || activeStatus.includes(order.status);

    return matchesSearch && matchesStatus;
  });
  return (
    <PageContainer className="p-0">
      <Breadcrumbs />

      <div className="w-full flex gap-4 panel-scrollbar overflow-x-hidden">
        <FilterPanelContainer>
          <OrdersFilter
            selected={activeStatus}
            onChange={(status, checked) => {
              setActiveStatus((prev) =>
                checked ? [...prev, status] : prev.filter((s) => s !== status)
              );
            }}
          />
        </FilterPanelContainer>

        <div className="flex-grow flex flex-col px-3 py-4 panel-scrollbar overflow-y-auto">
          <div>
            <OrdersSearchbar
              isSearchExpanded={isSearchExpanded}
              setIsSearchExpanded={setIsSearchExpanded}
              searchValue={searchValue}
              setSearchValue={setSearchValue}
            />
          </div>

          <div className="space-y-6 w-5xl mt-3.5">
            {fetchStatus === "success" && (
              <h2 className="text-md font-semibold">
                {filteredOrders.length} Results Found
              </h2>
            )}

            {fetchStatus === "loading" && (
              <div className="space-y-4">
                {[...Array(6)].map((_, idx) => (
                  <OrdersCardSkeleton key={idx} />
                ))}
              </div>
            )}

            {fetchStatus === "success" && (
              <div className="space-y-4">
                {filteredOrders.length === 0 ? (
                  <p className="text-sm text-gray-500">
                    No orders match your search.
                  </p>
                ) : (
                  <List
                    className="flex flex-col"
                    data={filteredOrders}
                    uniqueKey="orderId"
                    render={(item) => <OrdersCard data={item} />}
                  />
                )}
              </div>
            )}

            {fetchStatus === "error" && (
              <p className="text-red-500 text-sm">
                Failed to load orders. Please refresh and try again.
              </p>
            )}
          </div>
        </div>
      </div>
    </PageContainer>
  );
};
