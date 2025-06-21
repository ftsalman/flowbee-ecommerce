import React, { useEffect, useState } from "react";
import { SectionHeader } from "./SectionHeader";
import PriceRange from "./PriceRange";
import { Brand } from "../brand-slidebar/Brand";
import { BuiltMemory } from "../built-memory/BuiltMemory";

const allBrands = [
  { name: "Apple", count: 110 },
  { name: "Samsung", count: 125 },
  { name: "Xiaomi", count: 68 },
  { name: "Poco", count: 44 },
  { name: "OPPO", count: 36 },
  { name: "Honor", count: 10 },
  { name: "Motorola", count: 34 },
  { name: "Nokia", count: 22 },
  { name: "Realme", count: 35 },
];

const BUILT_MEMORY = [
  { name: "16GB", count: 65 },
  { name: "32GB", count: 123 },
  { name: "64GB", count: 48 },
  { name: "128GB", count: 50 },
  { name: "256GB", count: 24 },
  { name: "512GB", count: 8 },
];

export const FilterSidebar = ({ onChange }) => {
  // States
  const [priceOpen, setPriceOpen] = useState(true);
  const [brandOpen, setBrandOpen] = useState(true);
  const [builtMemoryOpen, setBuiltMemoryOpen] = useState(true);
  const [priceRange, setPriceRange] = useState([0, 2000]);
  const [brandsData, setBrandsData] = useState(allBrands);
  const [builtMemoryData, SetBuiiltMemoryData] = useState(BUILT_MEMORY);
  const [isLoading, setIsLoading] = useState(true);

  // UseEffect

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timeout);
  }, []);

  const handlePriceChange = (min, max) => {
    setPriceRange([min, max]);
    if (onChange) {
      onChange({ priceRange: [min, max] });
    }
  };

  return (
    <div className="w-full max-w-[250px] ">
      <div className="space-y-2">
        <SectionHeader
          head="Price"
          onClickDropdown={() => setPriceOpen(!priceOpen)}
          isOpen={priceOpen}
        />

        {priceOpen && (
          <div className=" px-4">
            <PriceRange />
          </div>
        )}

        <div className=" space-y-2">
          <SectionHeader
            head="Brand"
            onClickDropdown={() => setBrandOpen(!brandOpen)}
            isOpen={brandOpen}
          />

          {brandOpen && (
            <Brand
              data={brandsData}
              loading={isLoading}
              onChange={console.log("clicked")}
            />
          )}
        </div>

        <div className=" space-y-2">
          <SectionHeader
            head="Built-in memory"
            onClickDropdown={() => setBuiltMemoryOpen(!builtMemoryOpen)}
            isOpen={builtMemoryOpen}
          />
          {builtMemoryOpen && (
            <BuiltMemory
              loading={isLoading}
              data={builtMemoryData}
              onChange={console.log("clicked")}
            />
          )}
        </div>

        <div>
          <SectionHeader head="Protection class" />
        </div>

        <div>
          <SectionHeader head="Screen diagonal" />
        </div>

        <div>
          <SectionHeader head="Screen type" />
        
        </div>

        <div>
          <SectionHeader head="Battery capacity" />
        </div>

      </div>
    </div>
  );
};
