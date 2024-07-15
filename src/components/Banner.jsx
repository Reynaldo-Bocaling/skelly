import React from "react";
import Lottie from "lottie-react";
import bats from "../assets/json-animations/bat1.json";

const Banner = () => {
  return (
    <div className="w-full relative">
      <img src="/img/banner2.jpg" alt="" className="w-full" />
      <Lottie
        animationData={bats}
        className="w-[200px] absolute top-20 right-20 "
      />
      <Lottie
        animationData={bats}
        className="w-[150px] absolute -top-7 left-7 "
      />
      <div className="flex  absolute -bottom-14 left-0 w-full z-[98] overflow-x-hidden">
        <img src="/img/floor2.png" className="w-full h-[300px]" alt="" />
        <img src="/img/floor2.png" className="w-full h-[300px]" alt="" />
        <img src="/img/floor2.png" className="w-full h-[300px]" alt="" />
        <img src="/img/floor2.png" className="w-full h-[300px]" alt="" />
      </div>
    </div>
  );
};

export default Banner;
