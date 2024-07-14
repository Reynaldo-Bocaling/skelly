import React from "react";

const Moon2 = () => {
  return (
    // <div className="w-full flexCenter pt-20 relative ">
    //   <h1 className="title absolute top-4 text-9xl z-[998]">$SKELLY</h1>
    //   <div className="moon w-[600px] h-[600px] flexColCenter relative ">
    //     <div className="w-full relative z-[99] flexColCenter">
    //       <img src="/img/logo.png" alt="" className="w-[60%]  rounded-full" />
    //       <h2 className="extra_text text-4xl font-bold">
    //         A MATT FURIE ORIGINAL
    //       </h2>
    //       <button className="halloween-button mt-7">Buy Now</button>
    //     </div>
    //   </div>
    // </div>

    <div className="w-full flexCenter pt-20 relative ">
      <h1 className="title absolute top-4 text-[23rem] md:text-9xl z-[998] text-[#0bff0f]">
        $SKELLY
      </h1>
      <div className="moon2 w-[630px] h-[630px] flexColCenter relative ">
        <div className="w-full relative z-[99] flexColCenter">
          <img src="/img/logo.png" alt="" className="w-[60%]  rounded-full" />
          <h2 className="extra_text text-[10rem] md:text-4xl font-bold">
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

export default Moon2;
