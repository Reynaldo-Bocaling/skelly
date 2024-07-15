import React from "react";
import { howtobuy } from "../constants";
import bats from "../assets/json-animations/bat1.json";
import squash from "../assets/json-animations/squash.json";
import Lottie from "lottie-react";
import Social from "./Social";
const Skelenomics = () => {
  return (
    <div id="howtobuy" className="relative w-full flexColEnd min-h-[65q0px] bb">
      <img
        src="/img/skelenomics.jpg"
        alt=""
        className="w-full h-[490px] md:h-[550px]"
      />
      <img
        src="/img/skelenomics_header.png"
        className="absolute top-0 max-w-[70%] left-1/2 -translate-x-1/2"
        alt=""
      />

      <Lottie
        animationData={bats}
        className="w-[200px] absolute top-20 right-20 "
      />
      <Lottie
        animationData={bats}
        className="w-[150px] absolute -top-7 left-7 "
      />
      <div className="flexColCenter absolute left-1/2 -translate-x-1/2 top-1/4 -translate-y-20 w-full">
        <h1 className="  extra_text neon-red text-[14rem] md:text-9xl flexCenter mb-12">
          SKELENOMICS
        </h1>

        <div className="flexAround w-full md:gap-8 px-12">
          {howtobuy.map((item, index) => (
            <div
              key={index}
              className="relative flexColCenter gap-9  w-full h-[250px] "
            >
              <h1 className="skele_title extra_text text-[7rem] md:text-6xl font-bold text-[#f13423]">
                {item.value}
              </h1>
              <span className="skele_extra extra_text text-white tracking-wider text-[6rem] md:text-4xl font-bold">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="flex  absolute -bottom-14 left-0 w-full z-[98] overflow-x-hidden">
        <img src="/img/floor2.png" className="w-full h-[300px]" alt="" />
        <img src="/img/floor2.png" className="w-full h-[300px]" alt="" />
        <img src="/img/floor2.png" className="w-full h-[300px]" alt="" />
        <img src="/img/floor2.png" className="w-full h-[300px]" alt="" />
      </div>
    </div>
  );
};

export default Skelenomics;
