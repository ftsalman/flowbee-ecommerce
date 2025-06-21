import React from "react";
import { Navbar } from "../Components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import { Promobar } from "../Components/promobar/Promobar";
import { CategoryBar } from "../Components/category-bar/CategoryBar";

export const HomeLayout = () => {
  return (
    <div className="bg-white overflow-clip h-[100dvh] flex flex-col ">
      <Promobar />
      <Navbar />
      <CategoryBar />

      <div className=" w-full  max-w-[100vw] overflow-auto overflow-x-hidden panel-scrollbar flex-grow h-[calc(100dvh-9.75rem)] md:h-[calc(100dvh-5.1rem)] duration-300  bg-[#F9F9F9]">
        <Outlet />
      </div>
      {/* Optional: Footer if needed */}
      {/* <Footer /> */}
    </div>
  );
};
