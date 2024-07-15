import React from "react";
import { howtobuy } from "../constants";
import bats from "../assets/json-animations/bat1.json";
import squash from "../assets/json-animations/squash.json";
import Lottie from "lottie-react";
import Social from "./Social";
const Skelenomics = () => {
  return (
    <div id="howtobuy" className="relative w-full flexColEnd min-h-[65q0px] bb">
      <h1 className="absolute top-1/4 md:bottom-1/4 right-1/4 translate-x-32 md:translate-y-40  extra_text neon-red text-[9rem] md:text-8xl flexCenter mb-12">
        SKELENOMICS
      </h1>
      <img src="/img/howtobuy4.jpg" alt="" className="w-full" />

      <Lottie
        animationData={bats}
        className="w-[200px] absolute top-20 right-20 "
      />
      <Lottie
        animationData={bats}
        className="w-[150px] absolute -top-7 left-7 "
      />
      {/* <img
        src="/img/banner.jpg"
        alt=""
        className="max-w-[90rem] md:max-w-3xl  absolute bottom-0 right-[5%]  rounded-lg"
      /> */}

      <div className="flexAround w-full md:gap-8  absolute -bottom-14">
        {howtobuy.map((item, index) => (
          <div
            key={index}
            className="relative flexCenter -bottom-14 w-full h-[250px] "
          >
            <div className="absolute top-1/2 -translate-y-20 md:-translate-y-0 md:top-10 flexColCenter z-[98]">
              <h1 className="skele_title extra_text text-[4rem] md:text-3xl font-bold text-[#f13423]">
                {item.value}
              </h1>
              <span className="skele_extra extra_text text-white tracking-wider text-[4rem] md:text-2xl font-bold">
                {item.name}
              </span>
            </div>

            <img
              src="/img/tagName.png"
              alt=""
              className="absolute bottom-0 left-0 w-[400px] h-[170px] md:h-[250px]"
            />
          </div>
        ))}
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
