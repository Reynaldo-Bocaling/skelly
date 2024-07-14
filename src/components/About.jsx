import React from "react";
import bats from "../assets/json-animations/bat1.json";
import squash from "../assets/json-animations/squash.json";
import Lottie from "lottie-react";
import SlidingText from "./SlidingText";
import Social from "./Social";

const About = () => {
  return (
    <div
      id="about"
      className="relative min-h-[450px] md:min-h-[880px] w-full flexColCenter"
    >
      <SlidingText />
      <h1 className="title neon-text absolute top-52 left-1/2 -translate-x-1/2  text-[7rem] md:text-6xl flexCenter ">
        About $SKELLY
      </h1>
      <div className="flexColCenter absolute bottom-10 blur_effect mx-auto max-w-[70%] md:max-w-5xl w-full mt-5 px-7 py-10 rounded-xl border-[3px]  border-[rgba(247,90,76,0.5)]">
        <div className="md:max-w-3xl ">
          <p className="extra_text text-white text-[5rem] md:text-2xl text-center mt-7">
            A Matt Furie Original <br /> Kid Skelly is the Skeletor-Esque dude
            sometimes portrayed as a nerdy, skinny kid and other times as a
            caring grandmother.
          </p>
        </div>
        <button className="halloween-button mt-7 text-[5rem] md:text-[2rem]">
          Buy Now
        </button>
      </div>

      <Lottie
        animationData={bats}
        className="w-[200px] absolute top-20 right-20 "
      />
      <Lottie
        animationData={bats}
        className="w-[200px] absolute -top-7 left-7 "
      />
    </div>
  );
};

export default About;
