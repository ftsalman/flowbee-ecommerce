import React, { useEffect, useState } from "react";
import { CardContainer } from "../Components/ui/CardContainer";
import { Card } from "../Components/ui/Card";
import { List } from "../Components/ui/List";
import { Button } from "../Components/ui/button/Button";
import { IconClose, IconEdit } from "../assets/icons/InterfaceIcons";

const mockCart = [
  {
    id: 1,
    image: "/images/products/img16.png",
    title: "Apple iPhone 14 Pro",
    price: 1399,
    quantity: 1,
  },
  {
    id: 2,
    image: "/images/products/img13.png",
    title: "AirPods Max Silver",
    price: 549,
    quantity: 1,
  },
  {
    id: 3,
    image: "/images/products/img14.png",
    title: "Apple Watch Series 9 ",
    price: 399,
    quantity: 1,
  },
];

const CartPage = () => {
  const [cartItemData, setCartItemData] = useState([]);
  const [fetchStatus, setFetchStatus] = useState("loading");

  useEffect(() => {
    fetchCartItem();
  }, []);

  const fetchCartItem = async () => {
    setFetchStatus("loading");
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      setCartItemData(mockCart);
      setFetchStatus("success");
    } catch (err) {
      console.error(err);
      setFetchStatus("error");
    }
  };

  const handleQuantityChange = (id, type) => {
    setCartItemData((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity:
                type === "increment"
                  ? item.quantity + 1
                  : Math.max(1, item.quantity - 1),
            }
          : item
      )
    );
  };

  const handleDeleteItem = (id) => {
    setCartItemData((prev) => prev.filter((item) => item.id !== id));
  };

  const handleAddNewAddress = () => {
    console.log("Add New Address clicked");
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-3 grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Cart Items */}
      <CardContainer className="md:col-span-2 space-y-6 bg-transparent p-4 sm:p-5 md:p-6 rounded-none">
        <h2 className="text-xl font-semibold mb-4">Shopping Cart</h2>

        {fetchStatus === "loading" ? (
          <>
            {[...Array(3)].map((_, i) => (
              <CartItemSkeleton key={i} />
            ))}
          </>
        ) : (
          <List
            className="flex flex-col gap-4"
            data={cartItemData}
            uniqueKey="id"
            render={(item) => (
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b p-4 border-gray-200 bg-transparent">
                {/* Left: Image + Title */}
                <div className="flex items-center gap-3 flex-1">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-20 h-20 object-cover rounded-md shrink-0"
                  />
                  <h2 className="text-sm font-medium max-w-[180px]">
                    {item.title}
                  </h2>
                </div>

                {/* Middle: Quantity (centered on small screens) */}
                <div className="flex items-center gap-2">
                  <Button
                    variant="secondary"
                    className="w-8 h-8 border-none shadow-none rounded"
                    onClick={() => handleQuantityChange(item.id, "decrement")}
                  >
                    -
                  </Button>
                  <span className="w-8 border p-1 rounded-sm border-gray-200 text-center">
                    {item.quantity}
                  </span>
                  <Button
                    variant="secondary"
                    className="w-8 h-8 border-none shadow-none rounded"
                    onClick={() => handleQuantityChange(item.id, "increment")}
                  >
                    +
                  </Button>
                </div>

                {/* Right: Price + Remove */}
                <div className="flex items-center gap-4 justify-end min-w-[6rem]">
                  <p className="text-lg font-semibold whitespace-nowrap">
                    ₹{item.price}
                  </p>
                  <Button
                    variant="secondary"
                    size="md"
                    className="text-red-500 w-8 h-8 border-none shadow-none rounded text-xl"
                    onClick={() => handleDeleteItem(item.id)}
                  >
                    ×
                  </Button>
                </div>
              </div>
            )}
          />
        )}
      </CardContainer>
      {/* Address + Summary */}
      <CardContainer className="bg-white h-fit p-6 rounded-sm shadow-sm space-y-3">
        <h2 className="text-xl font-semibold">Select Address</h2>

        <Card className="relative bg-[#F6F6F6] border border-gray-200 rounded-md p-4">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <span className=" h-5 w-5 mt-1 flex items-center justify-center rounded-full border-2 border-black">
                <div className="h-2.5 w-2.5 bg-black rounded-full" />
              </span>
              <h2>YOGESH</h2>
              <Button
                variant="secondary"
                size="sm"
                className="bg-black text-white"
              >
                HOME
              </Button>
            </div>

            <div className="flex justify-between">
              <div className="flex flex-col gap-2 text-sm">
                <p className="max-w-[15rem]">
                  2118 Thornridge Cir. Syracuse, Connecticut 35624
                </p>
                <p>+91 6380088356</p>
              </div>
              <div className="flex gap-2">
                <Button
                  variant="secondary"
                  className="border-none shadow-none cursor-pointer"
                >
                  <IconEdit size="20" />
                </Button>
                <Button
                  variant="secondary"
                  className="border-none shadow-none cursor-pointer"
                >
                  <IconClose size="20" />
                </Button>
              </div>
            </div>
          </div>
        </Card>

        {/* Add New Address Divider */}
        <div className="relative flex items-center">
          <div className="flex-grow border-t border-dashed border-gray-400" />
          <Button
            onClick={handleAddNewAddress}
            variant="secondary"
            size="sm"
            className="mx-2 shrink-0 cursor-pointer bg-black text-white rounded-full w-8 h-8 flex items-center justify-center text-lg"
          >
            +
          </Button>
          <div className="flex-grow border-t border-dashed border-gray-400" />
        </div>
        <p className="text-sm text-center mt-0">Add New Address</p>

        {/* Summary Section (Placeholder for now) */}
        <div>
          <h2 className="text-xl font-semibold mt-2">Order Summary</h2>
          <div className="text-sm mt-2 space-y-2">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>
                ₹
                {cartItemData.reduce(
                  (total, item) => total + item.price * item.quantity,
                  0
                )}
              </span>
            </div>
            <div className="flex justify-between">
              <span>Estimated Tax</span>
              <span>₹50</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping & Handling</span>
              <span>₹29</span>
            </div>
            <div className="flex justify-between font-semibold border-t pt-2">
              <span>Total</span>
              <span>
                ₹
                {cartItemData.reduce(
                  (total, item) => total + item.price * item.quantity,
                  0
                ) +
                  50 +
                  29}
              </span>
            </div>
            <Button className="w-full cursor-pointer mt-4 bg-black text-white py-2 rounded">
              Checkout
            </Button>
          </div>
        </div>
      </CardContainer>
    </div>
  );
};

export default CartPage;

export const CartItemSkeleton = () => (
  <div className="flex justify-between items-center p-4 border-b border-gray-200 animate-pulse">
    {/* Left section */}
    <div className="flex gap-3 items-center">
      <div className="w-20 h-20 bg-gray-200 rounded-md" />
      <div className="w-32 h-4 bg-gray-200 rounded" />
    </div>

    {/* Quantity */}
    <div className="flex items-center gap-2">
      <div className="w-8 h-8 bg-gray-200 rounded" />
      <div className="w-8 h-8 bg-gray-200 rounded" />
      <div className="w-8 h-8 bg-gray-200 rounded" />
    </div>

    {/* Price + Delete */}
    <div className="flex items-center gap-4 min-w-[6rem] justify-end">
      <div className="w-12 h-4 bg-gray-200 rounded" />
      <div className="w-8 h-8 bg-gray-200 rounded" />
    </div>
  </div>
);

export const AddressCardSkeleton = () => (
  <Card className="p-4 bg-gray-100 rounded-md animate-pulse">
    <div className="h-4 w-24 bg-gray-300 rounded mb-2" />
    <div className="h-4 w-48 bg-gray-300 rounded mb-1" />
    <div className="h-4 w-32 bg-gray-300 rounded" />
  </Card>
);
