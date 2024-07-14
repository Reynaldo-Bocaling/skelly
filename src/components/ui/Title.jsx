import React from "react";

const Title = ({ label }) => {
  return (
    <>
      <h1 className="title-font text-5xl font-medium text-white text-center">
        {label}
      </h1>
    </>
  );
};

export default Title;
