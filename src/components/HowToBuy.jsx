import React from "react";
import { howtobuy } from "../constants";
import bats from "../assets/json-animations/bat1.json";
import squash from "../assets/json-animations/squash.json";
import Lottie from "lottie-react";
import Social from "./Social";
const HowToBuy = () => {
  return (
    <div id="howtobuy" className="relative w-full flexColCenter ">
      <div className="flexColCenter blur_effect mx-auto max-w-[70%] md:max-w-6xl w-full mt-5 px-7 py-10 rounded-xl border-[3px]  border-[rgba(247,90,76,0.5)]">
        <h1 className="title text-[#f13423] text-[8rem] md:text-5xl flexCenter mb-12">
          How To Buy Sa Mainnet{" "}
        </h1>
        <div className="flexColCenter gap-7">
          {howtobuy.map((item, index) => (
            <div key={index} className="flexColCenter">
              <h1 className="extra_text text-[6rem] md:text-6xl font-bold text-[#f13423]">
                {item.value}
              </h1>
              <span className="extra_text text-white tracking-wider text-[4rem] md:text-2xl font-bold">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>
      <Social />

      <Lottie
        animationData={bats}
        className="w-[300px] absolute top-20 right-20 "
      />
      <Lottie
        animationData={bats}
        className="w-[300px] absolute -top-7 left-7 "
      />
    </div>
  );
};

export default HowToBuy;
