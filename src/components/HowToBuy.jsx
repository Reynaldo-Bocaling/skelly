import React from "react";
import squash from "../assets/json-animations/squash.json";
import Lottie from "lottie-react";
const HowToBuy = () => {
  return (
    <div id="roadmap" className="relative w-full  bg-black">
      <img
        src="/img/roadmap3.png"
        alt=""
        className="try h-[700px] md:h-[900px] w-full "
      />

      <div className="absolute bottom-20 md:bottom-0 right-0 flexColCenter ">
        <img src="/img/ribbon.png" className="w-[100rem] md:w-[48rem]" alt="" />
        <h1 className="  extra_text neon-red text-[9rem] md:text-8xl -translate-y-[20rem] md:-translate-y-40">
          HOW TO BUY
        </h1>
      </div>
      <Lottie
        animationData={squash}
        className="w-[150px] md:w-[250px]  absolute top-[14%] -right-28 md:top-28 md:-right-5"
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
