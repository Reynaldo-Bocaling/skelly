import React from "react";
import { howtobuy } from "../constants";
import bats from "../assets/json-animations/bat1.json";
import squash from "../assets/json-animations/squash.json";
import Lottie from "lottie-react";
import Social from "./Social";
const HowToBuy = () => {
  return (
    <div id="howtobuy" className="relative w-full flexColCenter min-h-[65q0px]">
      <div className="flexColCenter absolute bottom-1/3 right-[5%] md:right-[9%] blur_effect mx-auto w-[50%] md:max-w-3xl md:w-full mt-5 px-7 py-10 rounded-xl border-[3px]  border-[rgba(247,90,76,0.5)]">
        <h1 className="title neon-text text-[5rem] md:text-3xl flexCenter mb-12">
          SKELENOMICS
        </h1>
        <div className="flexAround w-full md:gap-8">
          {howtobuy.map((item, index) => (
            <div key={index} className="flexColCenter">
              <h1 className="extra_text text-[6rem] md:text-5xl font-bold text-[#f13423]">
                {item.value}
              </h1>
              <span className="extra_text text-white tracking-wider text-[4rem] md:text-2xl font-bold">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>
      <img src="/img/howtobuy4.jpg" alt="" className="w-full" />

      <Lottie
        animationData={bats}
        className="w-[200px] absolute top-20 right-20 "
      />
      <Lottie
        animationData={bats}
        className="w-[150px] absolute -top-7 left-7 "
      />
      <img
        src="/img/banner.jpg"
        alt=""
        className="max-w-[90rem] md:max-w-3xl  absolute bottom-0 right-[9%]  rounded-lg"
      />
      <div className="flexEnd  absolute -bottom-5 left-0 w-full z-[98]">
        <img src="/img/floor1.png" className="w-full h-[300px]" alt="" />
        <img src="/img/floor2.png" className="w-full h-[300px]" alt="" />
        <img src="/img/floor2.png" className="w-full h-[300px]" alt="" />
      </div>
    </div>
  );
};

export default HowToBuy;
