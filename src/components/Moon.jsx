import React from "react";

const Moon = () => {
  return (
    <div className="w-full flexCenter pt-[40rem] md:pt-20 relative z-[998]">
      <h1 className="title neon-text absolute top-52 md:top-5 text-[16rem] md:text-9xl z-[998]">
        $SKELLY
      </h1>
      <div className="moon w-[500px] h-[500px] md:w-[600px] md:h-[600px] flexColCenter relative ">
        <div className="w-full relative z-[99] flexColCenter">
          <img src="/img/logo.png" alt="" className="w-[60%]  rounded-full" />
          <h2 className="extra_text text-[8rem] md:text-4xl font-bold">
            A MATT FURIE ORIGINAL
          </h2>
          <button className="halloween-button mt-7 text-[6rem] md:text-[2rem]">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Moon;
