import React from "react";
import squash from "../assets/json-animations/squash.json";
import Lottie from "lottie-react";
const HowToBuy = () => {
  return (
    <div id="roadmap" className="relative w-full  bg-black">
      <img
        src="/img/roadmap2.png"
        alt=""
        className="try h-[700px] md:h-[900px] w-full "
      />

      <div className="absolute bottom-1/3 left-20">
        <h1 className="extra_text neon-red road_title text-[7rem] md:text-5xl flexCenter mb-7">
          Create a Wallet Preferably <br />
          Matamask
        </h1>
        <p className="neon-text extra_text road_extra text-[5rem] md:text-lg font-bold">
          Download and create a wallet <br /> on Metamask
        </p>
      </div>

      <div className="absolute bottom-1/2 right-7">
        <h1 className="extra_text neon-red road_title text-[7rem] md:text-5xl flexCenter mb-7">
          Get Some $Eth
        </h1>
        <p className="neon-text extra_text road_extra text-[5rem] md:text-lg font-bold">
          Buy or transfer from your <br /> favorite Exchange.
        </p>
      </div>

      <div className="absolute top-60 md:top-32 left-[10%] md:left-1/4 md:-translate-x-12">
        <h1 className="extra_text neon-red road_title text-[7rem] md:text-5xl flexCenter mb-7">
          Swap on Uniswap.
        </h1>
        <p className="neon-text extra_text road_extra text-[5rem] md:text-lg font-bold">
          Head over to Uniswap and swap your <br /> $ETH to $SKELLY.
        </p>
      </div>
      <div className="absolute top-60 md:top-32 right-[10%] md:translate-x-12">
        <h1 className="extra_text neon-red road_title text-[7rem] md:text-5xl flexCenter mb-7">
          Congrats, Youre now a <br /> $SKELLY holder
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
