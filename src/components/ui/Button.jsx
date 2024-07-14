import React from "react";

const Button = ({ label, variant }) => {
  return (
    <>
      <button className="border-[2px] rounded-full mt-9">
        <div
          className={`${variant} gradient-text text  text-xl font-bold py-3 rounded-full border-[2px] border-violet-500 -rotate-[4deg]`}
        >
          {" "}
          {label}
        </div>
      </button>
    </>
  );
};

export default Button;
