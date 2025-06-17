import React from "react";
import { Card } from "../ui/Card";
import { Link } from "react-router-dom";
import { IconArrowRight } from "../../assets/icons/InterfaceIcons";

export const Collections = () => {
  const collections = [
    {
      title: "Headband",
      image: "/images/products/headphone.png",
    },
    {
      title: "Footwear",
      image: "/images/products/shoes1.png",
    },
    {
      title: "Accessories",
      image: "/images/products/cabel.png",
    },
  ];
  return (
    <section className="py-7 px-6 md:px-24">
      <h2 className="text-2xl font-semibold mb-10">Shop Collection</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Large Left Card */}
        <Card className="relative h-[450px] md:h-[640px]  w-full flex items-end justify-start p-6 bg-[#F3F5F7] group hover:scale-105 transition-transform duration-300 overflow-hidden">
          <img
            src={collections[0].image}
            alt={collections[0].title}
            className="absolute inset-0 w-full h-full object-contain opacity-90 "
          />
          <div className="relative z-10  p-4 rounded">
            <h2 className="text-3xl font-semibold text-gray-900">
              {collections[0].title}
            </h2>
            <Link to="#">
              <p className="text-sm text-gray-600 underline inline-flex items-center gap-1 mt-1">
                Collections <IconArrowRight />
              </p>
            </Link>
          </div>
        </Card>

        {/* Right Side: Two Smaller Cards */}
        <div className="grid grid-cols-1 gap-4">
          {collections.slice(1).map((item, index) => (
            <Card
              key={index}
              className="relative h-[225px] md:h-[310px]  flex items-end p-6 bg-[#F3F5F7] overflow-hidden group"
            >
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-300"
              />
              <div className="relative z-10  text-black">
                <div>
                  <h4 className="text-3xl font-semibold text-gray-900">
                    {item.title}
                  </h4>
                  <Link to="#">
                    <p className="text-sm text-gray-600 underline inline-flex items-center gap-1 mt-1">
                      Collections <IconArrowRight />
                    </p>
                  </Link>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
