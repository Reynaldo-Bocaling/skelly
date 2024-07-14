import React from "react";
import Section from "./ui/Section";
import Moon from "./Moon";
import Lottie from "lottie-react";
import hand from "../assets/json-animations/hand-aniamtions.json";
import bats from "../assets/json-animations/bat1.json";
import spider from "../assets/json-animations/spider.json";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <Section id="hero" variant="">
      <motion.div
        animate={{ opacity: [0, 1] }}
        transition={{ duration: 0.9 }}
        className="h-[800px] relative w-full overflow-y-hidden"
      >
        <Moon />
        <img
          src="/img/float1.png"
          className="absolute  right-0 top-1/3"
          alt=""
        />
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
          className="w-[300px] absolute top-1/2 right-20"
        />

        <img
          src="/img/float2.png"
          className="absolute w-[500px] -top-36 left-[-40%] md:-left-64 scale-x-[-1] "
          alt=""
        />
        <img
          src="/img/treesWbat.png"
          className="absolute w-[700px] -bottom-12 -left-12 opacity-[0.04] "
          alt=""
        />
        <img
          src="/img/trees.png"
          className="absolute w-[700px] -bottom-12 -right-40 opacity-[0.04] "
          alt=""
        />
        <img
          src="/img/trees.png"
          className="absolute w-[400px] -bottom-12 -left-40 opacity-[0.04] "
          alt=""
        />
        <div className="flexAround ">
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
        <div className="flexEnd  absolute -bottom-5 left-0 w-full z-[98]">
          <img src="/img/floor1.png" className="w-full h-[300px]" alt="" />
          <img src="/img/floor2.png" className="w-full h-[300px]" alt="" />
          <img src="/img/floor2.png" className="w-full h-[300px]" alt="" />
        </div>
      </motion.div>
    </Section>
  );
};

export default Hero;
