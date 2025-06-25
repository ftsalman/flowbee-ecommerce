import React, { useState } from "react";
import { List } from "../ui/List";
import { Card } from "../ui/Card";
import { IconStar } from "../../assets/icons/InterfaceIcons";
import { Link } from "react-router-dom";

const initialProducts = [
  {
    id: 1,
    label: "Skullcandy - Crusher anc 2 wireless headphone",
    price: "$299.99",
    image: [
      "/images/products/img6.png",
      "/images/products/img10.png",
      "/images/products/img11.png",
      "/images/products/img12.png",
    ],
    rating: 4,
  },
  {
    id: 2,
    label: "Skullcandy - Crusher anc 2 wireless headphone",
    price: "$299.99",
    image: [
      "/images/products/img6.png"
    ],
    rating: 1,
  },
  {
    id: 3,
    label: "Skullcandy - Crusher anc 2 wireless headphone",
    price: "$299.99",
    image: [
      "/images/products/img7.png"
    ],
    rating: 1,
  },
  {
    id: 4,
    label: "Skullcandy - Crusher anc 2 wireless headphone",
    price: "$299.99",
    image: [
      "/images/products/img2.png"
    ],
    rating: 1,
  },
  {
    id: 5,
    label: "Skullcandy - Crusher anc 2 wireless headphone",
    price: "$299.99",
    image: [
      "/images/products/img6.png"
    ],
    rating: 1,
  },
];

const TopSeller = () => {
  const [topseller, setTopseller] = useState(initialProducts);

  const handleStarClick = (id, newRating) => {
    const updated = topseller.map((item) =>
      item.id === id ? { ...item, rating: newRating } : item
    );
    setTopseller(updated);
  };

  return (
    <section className="py-7 px-6 md:px-24">
      <h2 className="text-2xl font-semibold mb-10">Best Seller</h2>

      <div>
        <List
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6"
          uniqueKey="id"
          data={topseller}
          render={(item) => (
            <Link to={`products/${item.id}`} key={item.id}>
              <Card className="p-0 inset-0 bg-transparent shadow-none space-y-4 border-0 hover:shadow-md transition duration-300">
                <div className="relative">
                  <img
                    src={item.image?.[0]}
                    alt={item.label}
                    className="cursor-pointer hover:scale-105 duration-300 transition-transform object-contain w-full"
                  />
                  <span className="absolute top-2 left-2 text-xs font-semibold px-3 py-0.5 rounded bg-white shadow">
                    HOT
                  </span>
                </div>
                <div className="px-2 pb-2">
                  <div className="flex items-center gap-0.5 text-xs mb-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <IconStar
                        key={i}
                        size={13}
                        onClick={() => handleStarClick(item.id, i + 1)}
                        className={`cursor-pointer transition ${
                          i < item.rating ? "fill-yellow-400" : "fill-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <h3 className="text-sm font-semibold">{item.label}</h3>
                  <p className="text-sm font-semibold">{item.price}</p>
                </div>
              </Card>
            </Link>
          )}
        />
      </div>
    </section>
  );
};

export default TopSeller;
