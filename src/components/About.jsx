import React from "react";
import bats from "../assets/json-animations/bat1.json";
import squash from "../assets/json-animations/squash.json";
import Lottie from "lottie-react";
import SlidingText from "./SlidingText";
import Social from "./Social";

const About = () => {
  return (
    <div id="about" className="relative min-h-[780px] w-full flexColCenter">
      <SlidingText />
      <div className="flexColCenter blur_effect mx-auto max-w-[70%] md:max-w-5xl w-full mt-5 px-7 py-10 rounded-xl border-[3px]  border-[rgba(247,90,76,0.5)]">
        <h1 className="title text-[#f13423] text-[8rem] md:text-6xl flexCenter">
          About $SKELLY{" "}
          <Lottie animationData={squash} className="w-[100px]  " />
        </h1>
        <div className="md:max-w-3xl ">
          <p className="extra_text text-white text-[5rem] md:text-2xl text-center mt-7">
            A Matt Furie Original Kid Skelly is the Skeletor-Esque dude
            sometimes portrayed as a nerdy, skinny kid and other times as a
            caring grandmother.
          </p>
        </div>
        <button className="halloween-button mt-7 text-[5rem] md:text-[2rem]">
          Buy Now
        </button>
      </div>
      <img
        src="/img/banner.jpg"
        alt=""
        className="md:max-w-5xl max-w-[70%] rounded-lg mt-14"
      />
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

export default About;
