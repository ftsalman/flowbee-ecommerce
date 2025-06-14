import React from "react";
import { Button } from "../ui/button/Button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="bg-[#FFD833]">
      <div className="flex flex-col-reverse md:flex-row items-center md:items-stretch px-6 md:px-20 py-12 md:h-[70vh]">
        {/* Right (side on desktop) – text */}

        <div className="flex-1 flex items-center justify-center pb-8 md:pb-0">
          <img
            src="/images/headset.png"
            alt="High‑fidelity headphones"
            className="max-w-[320px] md:max-w-none w-4/5 md:w-auto object-contain"
          />
        </div>

        {/* Left (top on mobile) – image */}
        <div className="flex-1 flex flex-col justify-center gap-4 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Listen&nbsp;to
            <br className="hidden md:block" />
            the <span className="text-blue-600">amazing</span>
            <br />
            music sound.
          </h1>

          <p className="text-base md:text-lg text-gray-800">
            Experience music like never before
          </p>

         <Link to={"/"}>
          <Button className="bg-[#030712] text-white cursor-pointer w-fit mx-auto md:mx-0 px-14 py-3 hover:bg-gray-900">
            Shopping Now
          </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
