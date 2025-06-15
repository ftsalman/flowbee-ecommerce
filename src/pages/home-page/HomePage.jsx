import React, { useEffect, useState } from "react";
import Hero from "../../Components/hero/Hero";
import { Categories } from "../../Components/categories/Categories";
import NewArrivals from "../../Components/arrivals/NewArrivals";

// Dummy data as fallback
const categories_dummy = [
  { id: "1", label: "Mobile Phones", image_url: "/images/products/phones.png" },
  {
    id: "2",
    label: "Appliances",
    image_url: "/images/products/appliances.png",
  },
  {
    id: "3",
    label: "Women Clothing",
    image_url: "/images/products/women-clothing.png",
  },
  {
    id: "4",
    label: "Men Clothing",
    image_url: "/images/products/men-clothing.png",
  },
  { id: "5", label: "Footwear", image_url: "/images/products/shoes.png" },
  {
    id: "6",
    label: "Accessories",
    image_url: "/images/products/accessories.png",
  },
  {
    id: "7",
    label: "Kids Clothing",
    image_url:
      "https://i.pinimg.com/736x/67/c9/e1/67c9e192280e66e75753fd0e55465a86.jpg",
  },
  {
    id: "8",
    label: "Laptops",
    image_url:
      "https://i.pinimg.com/736x/45/7b/bd/457bbd650f0e4e3c116a5fe0f46863ed.jpg",
  },
];

const HomePage = () => {
  const [categoryData, setCategoryData] = useState([]);
  const [fetchStatus, setFetchStatus] = useState("loading");

  useEffect(() => {
    const timer = setTimeout(() => {
      setCategoryData(categories_dummy);
      setFetchStatus(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className=" overflow-clip space-y-9">
      <Hero />
      <Categories data={categoryData} isLoading={fetchStatus} />
      <NewArrivals/>
    </div>
  );
};

export default HomePage;
