import React from "react";

const Heading = ({ heading, topQuote }) => {
  return (
    <div className=" pt-10 w-[588px]  h-44 bg-yelow-500">
      <p className="text-center font-grace text-4xl text-green-600">
        {heading}
      </p>
      <p className="text-center text-[56px] leading-[67.2px] font-manrope ">
        {topQuote}
      </p>
    </div>
  );
};

export default Heading;
