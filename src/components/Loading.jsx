import React, { useEffect, useState } from "react";
import witch from "../assets/json-animations/witch.json";
import Lottie from "lottie-react";
import hand from "../assets/json-animations/hand-aniamtions.json";
import bats from "../assets/json-animations/bat1.json";
import CircularIntro from "./CircularIntro";

const Loading = () => {
  return (
    <div id="loader" className=" w-full  h-full fixed z-[999]  flexColCenter">
      <div className=" w-[600px] h-[600px] flexColCenter relative ">
        <div className="w-full relative z-[99] flexColCenter -translate-y-32">
          <h1 className="title absoslute top-4 text-9xl z-[998]">$SKELLY</h1>
          <h2 className="extra_text text-4xl font-bold text-[#221503] mt-12">
            A MATT FURIE ORIGINAL
          </h2>
        </div>
      </div>
      <Lottie animationData={witch} className="w-full absolute" />
      <img
        src="/img/float1.png"
        className="absolute  right-0 bottom-20 w-[500px]"
        alt=""
      />
      <Lottie
        animationData={bats}
        className="w-[250px] absolute top-20 right-1/4 translate-x-5"
      />
    </div>
  );
};

export default Loading;
