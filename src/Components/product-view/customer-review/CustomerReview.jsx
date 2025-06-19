// components/reviews/CustomerReview.jsx
import React, { useEffect, useState } from "react";
import { PageContainer } from "../../ui/PageContainer";
import { CardContainer } from "../../ui/CardContainer";
import { ReviewStats } from "./ReviewStats";
import { ReviewCard } from "./ReviewCard";
import { List } from "../../ui/List";
import { Button } from "../../ui/button/Button";
import { IconArrowDown } from "../../../assets/icons/InterfaceIcons";
import { RelatedProductCard } from "../releted-products/RelatedProductCard";
import { data } from "react-router-dom";

// ❶ Make sure every review has a unique id!
const DUMMY_REVIEWS = [
  {
    id: 1,
    name: "Iman Gadzhi",
    rating: 2.4,
    avatar:
      "https://i.pinimg.com/736x/dd/1d/e6/dd1de6d91467f98928ede3a7798dbb23.jpg",
    comment:
      "I was a bit nervous to be buying a secondhand phone from Amazon, but I couldn’t be happier with my purchase!! I have a pre-paid data plan so I was worried that this phone wouldn’t connect with my data plan, since the new phones don’t have the physical Sim tray anymore, but couldn’t have been easier! I bought an Unlocked black iPhone 14 Pro Max in excellent condition and everything is PERFECT. It was super easy to set up and the phone works and looks great. It truly was in excellent condition. Highly recommend!!!🖤",
    date: "2024-06-15",
  },
  {
    id: 2,
    name: "Iman Gadzhi",
    rating: 2.4,
    avatar:
      "https://i.pinimg.com/736x/dd/1d/e6/dd1de6d91467f98928ede3a7798dbb23.jpg",
    comment:
      "I was a bit nervous to be buying a secondhand phone from Amazon, but I couldn’t be happier with my purchase!! I have a pre-paid data plan so I was worried that this phone wouldn’t connect with my data plan, since the new phones don’t have the physical Sim tray anymore, but couldn’t have been easier! I bought an Unlocked black iPhone 14 Pro Max in excellent condition and everything is PERFECT. It was super easy to set up and the phone works and looks great. It truly was in excellent condition. Highly recommend!!!🖤",
    date: "2024-06-15",
  },
  {
    id: 3,
    name: "Iman Gadzhi",
    rating: 2.4,
    avatar:
      "https://i.pinimg.com/736x/dd/1d/e6/dd1de6d91467f98928ede3a7798dbb23.jpg",
    comment:
      "I was a bit nervous to be buying a secondhand phone from Amazon, but I couldn’t be happier with my purchase!! I have a pre-paid data plan so I was worried that this phone wouldn’t connect with my data plan, since the new phones don’t have the physical Sim tray anymore, but couldn’t have been easier! I bought an Unlocked black iPhone 14 Pro Max in excellent condition and everything is PERFECT. It was super easy to set up and the phone works and looks great. It truly was in excellent condition. Highly recommend!!!🖤",
    date: "2024-06-15",
    images: [
      "https://i.pinimg.com/736x/61/79/54/6179549885ff1fb200bec99ee5c3c0cb.jpg",
      "https://i.pinimg.com/736x/41/96/40/41964033c51d2f5d971e02d4d62c4708.jpg",
    ],
  },
  {
    id: 4,
    name: "Iman Gadzhi",
    rating: 2.4,
    avatar:
      "https://i.pinimg.com/736x/dd/1d/e6/dd1de6d91467f98928ede3a7798dbb23.jpg",
    comment:
      "I was a bit nervous to be buying a secondhand phone from Amazon, but I couldn’t be happier with my purchase!! I have a pre-paid data plan so I was worried that this phone wouldn’t connect with my data plan, since the new phones don’t have the physical Sim tray anymore, but couldn’t have been easier! I bought an Unlocked black iPhone 14 Pro Max in excellent condition and everything is PERFECT. It was super easy to set up and the phone works and looks great. It truly was in excellent condition. Highly recommend!!!🖤",
    date: "2024-06-15",
  },
  {
    id: 5,
    name: "Iman Gadzhi",
    rating: 2.4,
    avatar:
      "https://i.pinimg.com/736x/dd/1d/e6/dd1de6d91467f98928ede3a7798dbb23.jpg",
    comment:
      "I was a bit nervous to be buying a secondhand phone from Amazon, but I couldn’t be happier with my purchase!! I have a pre-paid data plan so I was worried that this phone wouldn’t connect with my data plan, since the new phones don’t have the physical Sim tray anymore, but couldn’t have been easier! I bought an Unlocked black iPhone 14 Pro Max in excellent condition and everything is PERFECT. It was super easy to set up and the phone works and looks great. It truly was in excellent condition. Highly recommend!!!🖤",
    date: "2024-06-15",
  },
];

const Releted_Products = [
  {
    id: 1,
    title: "Apple iPhone 14 Pro 512GB Gold (MQ233)",
    price: 1437,
    img: "/images/products/img16.png",
  },
  {
    id: 2,
    title: "Apple iPhone 14 Pro 512GB Gold (MQ233)",
    price: 1437,
    img: "/images/products/img13.png",
  },
  {
    id: 3,
    title: "Apple iPhone 14 Pro 512GB Gold (MQ233)",
    price: 1437,
    img: "/images/products/img14.png",
  },
  {
    id: 4,
    title: "Apple iPhone 14 Pro 512GB Gold (MQ233)",
    price: 1437,
    img: "/images/products/img15.png",
  },
  {
    id: 5,
    title: "Apple iPhone 14 Pro 512GB Gold (MQ233)",
    price: 1437,
    img: "https://i.pinimg.com/736x/b7/d6/98/b7d698bd2003ab473c9e4c5c4d14a9da.jpg",
  },
];

export const CustomerReview = () => {
  const [reviewData, setReviewData] = useState([]);
  const [relatedProductsData, setReletedProductsData] = useState([]);
  const [expanded, setExpanded] = useState(false); // collapsed by default

  useEffect(() => {
    // later: replace with fetch("/api/reviews")
    setReviewData(DUMMY_REVIEWS);
    setReletedProductsData(Releted_Products);
  }, []);

  /* show only first 3 when collapsed */
  const visible = expanded ? reviewData : reviewData.slice(0, 3);

  return (
    <PageContainer className="bg-white space-y-6 px-4 sm:px-8 md:px-14">
      <h4 className="text-lg font-semibold">Customer Reviews</h4>

      {/* ratings bars */}
      <ReviewStats />

      {/* review list */}
      <List
        /* ❷ responsive grid – 1 col on mobile, 2 on medium, 3 on large */
        className="grid gap-6 grid-cols-1 md:grid-cols-1 lg:grid-cols-1"
        data={visible}
        render={(item) => <ReviewCard key={item.id} data={item} />}
      />

      {/* toggle button; appears only if there’s more to show */}
      {reviewData.length > 3 && (
        <div className="flex justify-center">
          <Button
            variant="secondary"
            onClick={() => setExpanded((p) => !p)}
            className="border px-10 py-2 mt-2 rounded-md text-sm
                         border-black font-medium hover:bg-gray-100 transition-all"
          >
            {expanded ? "View Less" : "View More"}
            <IconArrowDown
              className={`ml-1 transition-transform ${
                expanded ? "rotate-180" : ""
              }`}
            />
          </Button>
        </div>
      )}
      {/* Releted Products */}
      <div className="  space-y-2 ">
        <h4 className="text-lg text-center md:text-start  md:px-7  font-semibold">
          Related Products
        </h4>
        <List
          className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-3 xl:grid-cols-5 px-7 items-center gap-4"
          data={relatedProductsData}
          uniqueKey="id"
          render={(item) => (
            <>
              <RelatedProductCard
                key={item.id}
                data={item}
                loading={false}
                onBuyClick={(data) => console.log("Buy:", data)}
                onWishlistClick={(data) => console.log("Wishlist:", data)}
              />
            </>
          )}
        />
      </div>
    </PageContainer>
  );
};
