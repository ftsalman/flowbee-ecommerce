import React, { useEffect, useState } from "react";
import Hero from "../../Components/hero/Hero";
import { Categories } from "../../Components/categories/Categories";
import NewArrivals from "../../Components/arrivals/NewArrivals";
import { Collections } from "../../Components/collections/Collections";
import TopSeller from "../../Components/topSeller/TopSeller";
import { Service } from "../../Components/service/Service";
// import PromoBanner from "../../Components/promo-banner/PromoBanner";
import { BestProduct } from "../../Components/bestProduct/BestProduct";
import { ProductSection } from "../../Components/ProductSection/ProductSection";
import { PopularProducts } from "../../Components/PopularProducts/PopularProducts";
import { PromoBanner } from "../../Components/PromoBanner/PromoBanner";
import { Footer } from "../../Components/footer/Footer";

// Dummy data as fallback
const categories_dummy = [
  {
    id: 1,
    label: "Vegetables",
    image: "/images/grocery/organic_vegitable_image.png",
    bgColor: "#fef08a",
  },
  {
    id: 2,
    label: "Fruits",
    image: "/images/grocery/fresh_fruits_image.png",
    bgColor: "#fde68a",
  },
  {
    id: 3,
    label: "Juices",
    image: "/images/grocery/organic_vegitable_image.png",
    bgColor: "#fdba74",
  },
  {
    id: 4,
    label: "Organic",
    image: "/images/grocery/organic_vegitable_image.png",
    bgColor: "#bbf7d0",
  },
  {
    id: 5,
    label: "Healthy Greens",
    image: "/images/grocery/organic_vegitable_image.png",
    bgColor: "#bef264",
  },
  {
    id: 4,
    label: "Organic",
    image: "/images/grocery/organic_vegitable_image.png",
    bgColor: "#bbf7d0",
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
    <div className=" overflow-clip space-y-9 ">
      <Hero />
      <Categories data={categoryData} isLoading={fetchStatus} />
      {/* <NewArrivals /> */}
      <PopularProducts />

      {/* <Collections /> */}
      <ProductSection />
      {/* <TopSeller /> */}
      <BestProduct />
      <Service />
      <PromoBanner />
      <Footer/>

      {/* <PromoBanner /> */}
    </div>
  );
};

export default HomePage;
