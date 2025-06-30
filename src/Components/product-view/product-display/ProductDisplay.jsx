import React, { useState } from "react";
import { Button } from "../../ui/button/Button";
import {
  IconBattery,
  IconCamera,
  IconCPU,
  IconDeliveryTruck,
  IconFrontCamera,
  IconHome,
  IconScreenSize,
  IconVerified,
} from "../../../assets/icons/InterfaceIcons";
import { ColorSelector } from "./ColorSelector";
import { ProductImageGallery } from "./ProductImageGallery";
import { StorageSelector } from "./StorageSelector";
import { ProductSpecs } from "./ProductSpecs";

export const ProductDisplay = ({ data = {}, onClick = {} }) => {
  const [activeImage, setActiveImage] = useState(data.images?.[0] || "");
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedStorage, setSelectedStorage] = useState(
    data.storageOptions?.[0] || "1TB"
  );

  const colorOptions = data.colors ?? [
    "#000000",
    "#fff",
    "#f43f5e",
    "#facc15",
    "#a855f7",
  ];
  const storageOptions = data.storageOptions ?? [
    "128GB",
    "256GB",
    "512GB",
    "1TB",
  ];

  const formattedSpecs = data?.specs
    ? [
        {
          icon: <IconScreenSize size={18} />,
          title: "Display",
          subtitle: data.specs?.displaySize ?? "N/A",
        },
        {
          icon: <IconCPU size={18} />,
          title: "Storage",
          subtitle: data.specs?.storage ?? "N/A",
        },
        {
          icon: <IconCPU size={18} />,
          title: "CPU",
          subtitle: data.specs?.cpuCores
            ? `${data.specs.cpuCores}‑core`
            : "N/A",
        },
        {
          icon: <IconCamera size={18} />,
          title: "Main Camera",
          subtitle: data.specs?.mainCamera ?? "N/A",
        },
        {
          icon: <IconFrontCamera size={18} />,
          title: "Front Camera",
          subtitle: data.specs?.frontCamera ?? "N/A",
        },
        {
          icon: <IconBattery size={18} />,
          title: "Battery",
          subtitle: data.specs?.batteryCapacity ?? "N/A",
        },
      ]
    : [];

  return (
    <div className="flex flex-col lg:flex-row gap-10 px-6 md:px-14 py-10">
      <ProductImageGallery
        images={data.images}
        activeImage={activeImage}
        setActiveImage={setActiveImage}
      />

      <div className="flex-1 px-4 space-y-4">
        <div className="space-y-2">
          <h1 className="text-3xl font-semibold">{data.label}</h1>
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-black">${data.price}</span>
            {data.oldPrice && (
              <span className="line-through text-gray-400 text-sm">
                ${data.oldPrice}
              </span>
            )}
          </div>
          <p className="text-gray-500 text-sm">
            {data.desc ?? "No description available for this product."}
          </p>
        </div>

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

        <div className="flex flex-col sm:flex-row gap-4 mt-6 w-full">
          <Button
            variant="secondary"
            className="border border-black px-6 py-3 text-sm text-black w-full sm:w-auto"
          >
            Add to Wishlist
          </Button>
          <Button
            variant="secondary"
            className="bg-black px-6 py-3 text-sm text-white w-full sm:w-auto"
          >
            Add to Cart
          </Button>
        </div>

        <div className="mt-8">
          <ProductSpecs specs={formattedSpecs} />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
          <div className="flex items-center gap-2">
            <span className="p-2 bg-gray-100 border rounded-md">
              <IconDeliveryTruck size="24" />
            </span>
            <div>
              <p className="text-sm font-semibold text-[#717171]">
                Free Delivery
              </p>
              <p className="text-xs font-medium">
                {data.services?.delivery ?? "1–2 day"}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="p-2 bg-gray-100 border rounded-md">
              <IconHome size="24" />
            </span>
            <div>
              <p className="text-sm font-semibold text-[#717171]">In Stock</p>
              <p className="text-xs font-medium">
                {data.services?.stock ?? "Today"}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="p-2 bg-gray-100 border rounded-md">
              <IconVerified size="24" />
            </span>
            <div>
              <p className="text-sm font-semibold text-[#717171]">Guaranteed</p>
              <p className="text-xs font-medium">
                {data.services?.warranty ?? "1 year"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
