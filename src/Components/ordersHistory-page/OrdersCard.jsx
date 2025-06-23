import React from "react";
import { CardContainer } from "../ui/CardContainer";
import { IconStar } from "../../assets/icons/InterfaceIcons";
import { Button } from "../ui/button/Button";

const STATUS_DOT_COLORS = {
  Delivered: "bg-green-500",
  Shipped: "bg-yellow-400",
  Pending: "bg-gray-400",
  Cancelled: "bg-red-500",
};

const OrdersCard = ({ data = {}, loading = false }) => {
  const {
    orderId = "N/A",
    productName = "Unknown Product",
    imageUrl = "/images/default-product.png",
    deliveryDate = "",
    status = "no available",
  } = data;

  const formattedDate = deliveryDate
    ? new Date(deliveryDate).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      })
    : "Date not available";

  const dotColor = STATUS_DOT_COLORS[status] || "bg-gray-300";

  return (
    <CardContainer className="border border-gray-300 rounded-md bg-white">
      <div className="flex items-center justify-between gap-4 px-4 py-3">
        <div className="flex items-center gap-6">
          <img
            src={imageUrl}
            alt={productName}
            className="h-20 w-20 object-cover rounded-sm"
          />
          <div className="space-y-1">
            <h4 className="text-sm font-semibold leading-tight">
              {productName}
            </h4>
            <span className="text-sm text-gray-500">Order ID: {orderId}</span>
          </div>
        </div>

        {/* Right: Status and Actions */}
        <div className="flex flex-col items-center  justify-center text-right ">
          <div className="flex items-center justify-center gap-1">
            <span className={`h-3 w-3 rounded-full ${dotColor}`} />
            <span className="text-sm font-semibold text-black">
              {status === "Delivered"
                ? `Delivered On ${formattedDate}`
                : `Delivery by ${formattedDate}`}
            </span>
          </div>
          {"Delivered" && (
            <>
              <p className="text-sm text-gray-500">
                Your item has been delivered
              </p>
              <Button
                variant="secondary"
                className=" border-none text-sm font-semibold shadow-none cursor-pointer flex  items-center gap-1"
              >
                <IconStar size="14" />
                Rate & Review Product
              </Button>
            </>
          )}
        </div>
      </div>
    </CardContainer>
  );
};

export default OrdersCard;




