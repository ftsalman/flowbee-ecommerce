import React, { useState } from "react";
import { ProductImageGallery } from "./ProductImageGallery";
import { ColorSelector } from "./ColorSelector";
import { StorageSelector } from "./StorageSelector";
import { ProductSpecs } from "./ProductSpecs";
import { Button } from "../ui/button/Button";
import {
  IconBattery,
  IconCamera,
  IconCPU,
  IconDelivery,
  IconDeliveryTruck,
  IconFrontCamera,
  IconHome,
  IconScreenSize,
  IconShield,
  IconVerified,
} from "../../assets/icons/InterfaceIcons";

export const ProductDisplay = ({ product }) => {
  const [activeImage, setActiveImage] = useState(product.images[0]);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedStorage, setSelectedStorage] = useState("1TB");

  const colorOptions = ["#000000", "#fff", "#f43f5e", "#facc15", "#a855f7"];
  const storageOptions = ["128GB", "256GB", "512GB", "1TB"];

  // Transform specs into structured format for ProductSpecs
  const formattedSpecs = [
    {
      icon: <IconScreenSize size={18} />,
      title: "Display",
      subtitle: product.specs.displaySize,
    },
    {
      icon: <IconCPU size={18} />,
      title: "Storage",
      subtitle: product.specs.storage,
    },
    {
      icon: <IconCPU size={18} />,
      title: "CPU",
      subtitle: `${product.specs.cpuCores}‑core`,
    },
    {
      icon: <IconCamera size={18} />,
      title: "Main Camera",
      subtitle: product.specs.mainCamera,
    },
    {
      icon: <IconFrontCamera size={18} />,
      title: "Front Camera",
      subtitle: product.specs.frontCamera,
    },
    {
      icon: <IconBattery size={18} />,
      title: "Battery",
      subtitle: product.specs.batteryCapacity,
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row  gap-10 px-14 py-10">
      {/* Image Gallery */}
      <ProductImageGallery
        images={product.images}
        activeImage={activeImage}
        setActiveImage={setActiveImage}
      />

      {/* Info Section */}
      <div className="flex-1  px-6 space-y-4 px-1">
        {/* Title & Price */}
        <div className="space-y-2">
          <h1 className="text-3xl font-semibold">{product.label}</h1>
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-black">$1399</span>
            <span className="line-through text-gray-400 text-sm">$1599</span>
          </div>
          <p className="text-gray-500 text-sm leading-relaxed">
            Enhanced capabilities thanks to an enlarged 6.7-inch display and
            all-day battery life. Incredible photos in both low and bright light
            using the upgraded dual-camera system.
          </p>
        </div>

        {/* Color & Storage Selectors */}
        <ColorSelector
          options={colorOptions}
          selectedColor={selectedColor}
          onSelect={setSelectedColor}
        />
        <StorageSelector
          options={storageOptions}
          selected={selectedStorage}
          onSelect={setSelectedStorage}
        />

        {/* Buttons */}
        <div className="flex flex-wrap items-center gap-4 mt-6">
          <Button
            variant="secondary"
            className="border border-black px-7 py-3 text-sm text-black hover:bg-gray-200 transition"
          >
            Add to Wishlist
          </Button>
          <Button
            variant="secondary"
            className="bg-black px-10 py-3 text-sm text-white hover:bg-gray-800 transition"
            onClick={() => console.log("Add to Cart clicked")}
          >
            Add to Cart
          </Button>
        </div>

        {/* Product Specs */}
        <div className="mt-8">
          <ProductSpecs specs={formattedSpecs} />
        </div>

        {/* Services */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
          <div className="flex items-center gap-2">
            <span className="flex items-center gap-2 p-2 bg-gray-100 border border-gray-200 rounded-md">
              <IconDeliveryTruck size="24" color="#000" />
            </span>
            <div>
              <p className=" text-sm text-[#717171] font-semibold">
                Free Delivery
              </p>
              <p className=" text-[12px] font-medium">1-2 day </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="flex items-center gap-2 p-2 bg-gray-100 border border-gray-200 rounded-md">
              <IconHome size="24" color="#000" />
            </span>
            <div>
              <p className=" text-sm text-[#717171] font-semibold">In Stock</p>
              <p className=" text-[12px] font-medium">Today </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="flex items-center gap-2 p-2 bg-gray-100 border border-gray-200 rounded-md">
              <IconVerified size="24" color="#000" />
            </span>
            <div>
              <p className=" text-sm text-[#717171] font-semibold">
                Guaranteed
              </p>
              <p className=" text-[12px] font-medium">1 year</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
