import React, { useState } from "react";
import {
  IconDelivery,
  IconShield,
  IconSupport,
} from "../../assets/icons/InterfaceIcons";
import { List } from "../ui/List";

const service = [
  {
    id: "1",
    Icon: <IconDelivery size="34" color="#fff" />,
    title: "FREE AND FAST DELIVERY",
    Desc: "Free delivery for all orders over $140",
  },
  {
    id: "2",
    Icon: <IconSupport size="39" color="#fff" />,
    title: "24/7 CUSTOMER SERVICE",
    Desc: "Friendly 24/7 customer support",
  },
  {
    id: "3",
    Icon: <IconShield size="34" color="#fff" />,
    title: "MONEY BACK GUARANTEE",
    Desc: "We return money within 30 days",
  },
];

export const Service = () => {
  const [serviceData] = useState(service);

  return (
    <div className="w-full px-4 py-4">
      <List
        className="flex flex-wrap justify-center gap-x-12 gap-y-10"
        uniqueKey="id"
        data={serviceData}
        render={(item) => (
          <div className="flex flex-col items-center text-center space-y-4 w-[250px]">
            <div className="border-8 border-gray-300 bg-black shadow-md flex items-center justify-center w-20 h-20 rounded-full">
              {item.Icon}
            </div>
            <div>
              <h5 className="text-sm font-semibold">{item.title}</h5>
              <p className="text-xs text-gray-600">{item.Desc}</p>
            </div>
          </div>
        )}
      />
    </div>
  );
};
