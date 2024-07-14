import React from "react";
import Section from "./ui/Section";
import Moon from "./Moon";
import Lottie from "lottie-react";
import hand from "../assets/json-animations/hand-aniamtions.json";
import bats from "../assets/json-animations/bat1.json";
import spider from "../assets/json-animations/spider.json";
import { motion } from "framer-motion";
import Moon2 from "./Moon2";

const Hero2 = () => {
  return (
    <Section id="hero2" variant="">
      <div className="h-[800px] relative w-full overflow-y-hidden">
        <Moon2 />

        <Lottie
          animationData={bats}
          className="w-[250px] absolute top-20 left-20"
        />
        <Lottie
          animationData={bats}
          className="w-[200px] absolute top-20 right-1/4 translate-x-5"
        />
        <Lottie
          animationData={spider}
          className="w-[300px] absolute top-20 right-20"
        />

        <div className="flexAround -translate-y-20">
          <Lottie
            animationData={hand}
            start={3}
            className="w-[100px] translate-y-2"
          />
          <Lottie
            animationData={hand}
            start={5}
            className="w-[200px] translate-x-12"
          />
          <Lottie
            animationData={hand}
            start={1}
            className="w-[120px] translate-y-3"
          />
        </div>
        {/* <div className="flexEnd  absolute -bottom-5 left-0 w-full z-[98]">
          <img src="/img/floor1.png" className="w-full h-[300px]" alt="" />
          <img src="/img/floor2.png" className="w-full h-[300px]" alt="" />
          <img src="/img/floor2.png" className="w-full h-[300px]" alt="" />
        </div> */}
      </div>
    </Section>
  );
};

export default Hero2;
