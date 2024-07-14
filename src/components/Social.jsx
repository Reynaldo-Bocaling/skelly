import React from "react";
import { social } from "../constants";

const Social = () => {
  return (
    <div className="relative z-[999] w-full">
      <div className=" py-4 px-12 md:px-5 flexAround w-full  md:max-w-3xl mx-auto mt-52 md:mt-7">
        {social.map((item, index) => (
          <a
            key={index}
            href={item.url}
            className="p-5 rounded-full bg-[rgba(53,49,43,0.7)]"
          >
            <img
              src={item.icon}
              alt=""
              className="w-[80px] h-[80px] md:w-[40px] md:h-[40px]"
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Social;
