import React from "react";
import spark from "../../assets/images/spark.png";
const PercentageCard = ({ percentage, quote }) => {
  return (
    <div className="w-[267.82px] h-[239px] bg-white relative rounded-[27.11px] shadow-xl hover:shadow-2xl ">
      <div className="absolute -top-4 -left-3 ">
        <img src={spark} alt="" className="  -rotate-12" />
      </div>
      <div className="absolute left-9 top-9 text-lg w-[207.82px] h-[92px] ">
        <p className="text-[64px] leading-[76.8px] ">{percentage}%</p>
        <p className="text-zinc-500 font-manrope">{quote}</p>
      </div>
    </div>
  );
};

export default PercentageCard;
