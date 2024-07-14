import React from "react";
import Marquee from "react-fast-marquee";
const SlidingText = () => {
  return (
    <section className="w-full  overflow-hidden absolute top-5 left-0">
      <Marquee direction="right">
        {Array.from({ length: 100 }, (_, i) => (
          <div key={i} className="mx-10 text-orange-100 flexCenter gap-12">
            <h1 className="text-[6rem] md:text-xl title ">$SKELLY</h1>
            <h1 className="text-orange-500 text-2xl font-bold">*</h1>
          </div>
        ))}
      </Marquee>
    </section>
  );
};

export default SlidingText;
