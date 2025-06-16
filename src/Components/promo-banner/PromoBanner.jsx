import React, { useEffect, useState } from "react";
import { Button } from "../ui/button/Button";

const PromoBanner = () => {
  const [timeLeft, setTimeLeft] = useState(getTimeRemaining());

  useEffect(() => {
    const timer = setInterval(() => {
      const remaining = getTimeRemaining();
      setTimeLeft(remaining);
    }, 1000);

    return () => clearInterval(timer); // Cleanup on unmount
  }, []);

  function getTimeRemaining() {
    const targetDate = new Date("2025-07-01T00:00:00");
    const total = targetDate - new Date();

    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));

    return {
      total,
      days: Math.max(0, days),
      hours: Math.max(0, hours),
      minutes: Math.max(0, minutes),
      seconds: Math.max(0, seconds),
    };
  }

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 md:h-full bg-yellow-400">
      {/* Left - Image */}
      <div className="h-full w-full min-h-[250px]">
        <img
          src="/images/banner.png"
          alt="Promo showing products"
          className="object-cover h-full w-full"
        />
      </div>

      {/* Right - Text + Timer */}
      <div className="flex flex-col justify-center px-6 sm:px-10 lg:px-16 py-8 gap-4 text-black">
        <p className="text-sm text-blue-700 font-semibold uppercase">Promotion</p>
        <h2 className="text-2xl font-bold">Hurry up! 40% OFF</h2>
        <p className="text-sm text-gray-800">
          Thousands of high tech products are waiting for you
        </p>

        <div className="flex flex-col gap-3 mt-2">
          <small>Offer expires in:</small>
          <div className="flex gap-2">
            <CountdownBox value={timeLeft.days} label="Days" />
            <CountdownBox value={timeLeft.hours} label="Hours" />
            <CountdownBox value={timeLeft.minutes} label="Minutes" />
            <CountdownBox value={timeLeft.seconds} label="Seconds" />
          </div>
        </div>

       <div>
         <Button className="bg-black text-white px-14 py-2 shadow-md cursor-pointer text-sm rounded">
          Shop now
        </Button>
       </div>
      </div>
    </section>
  );
};

export default PromoBanner;

const CountdownBox = ({ value, label }) => (
  <div className="flex flex-col items-center space-y-2 justify-center">
    <div className="flex flex-col items-center justify-center bg-white text-black px-3 py-2 rounded-sm w-14">
      <span className="text-lg font-bold">{String(value).padStart(2, "0")}</span>
    </div>
    <span className="text-[10px] uppercase">{label}</span>
  </div>
);
