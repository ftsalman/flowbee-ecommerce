import React from "react";
import { Button } from "../ui/button/Button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    // <section className="bg-[url('/images/products/hero-bg.png')] bg-cover bg-center bg-no-repeat">
    //   <div className="flex flex-col-reverse md:flex-row items-center md:items-stretch px-6 md:px-20 py-12 md:h-[70vh]">
    //     {/* Right (side on desktop) – text */}

    //     <div className="flex-1 flex items-center justify-center pb-8 md:pb-0">
    //       {/* <img
    //         src="/images/headset.png"
    //         alt="High‑fidelity headphones"
    //         className="max-w-[320px] md:max-w-none w-4/5 md:w-auto object-contain"
    //       /> */}
    //     </div>

    //     {/* Left (top on mobile) – image */}
    //     <div className="flex-1 flex flex-col justify-center gap-4 text-center md:text-left">
    //       <h1 className="text-4xl md:text-6xl font-bold leading-tight">
    //          Fresh Mango
    //         <br className="hidden md:block" />
    //        Juice Just Fruit
    //         <br />

    //       </h1>

    //      <Link to={"/"}>
    //       <Button className="bg-[#030712] text-white cursor-pointer w-fit mx-auto md:mx-0 px-14 py-3 hover:bg-gray-900">
    //         Shopping Now
    //       </Button>
    //       </Link>
    //     </div>
    //   </div>
    // </section>

    <section className="bg-[url('/images/products/hero-bg.png')] bg-cover bg-center bg-no-repeat h-[90vh] flex items-center justify-center">
      <div className="text-center flex items-center flex-col max-w-3xl px-6">
        <p className="text-sm text-red-600 font-semibold tracking-wide uppercase">
          100% Pure & Organic
        </p>

        <h1 className="text-4xl md:text-6xl font-bold leading-tight text-green-900 mt-3">
          Fresh Mango
          <br />
          Juice Just Fruit
        </h1>

        <Link to={"/"}>
          <Button className="bg-[#030712]  text-white cursor-pointer px-10 py-3 rounded-lg shadow-md hover:bg-gray-900 transition mt-6">
            Shopping Now
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
