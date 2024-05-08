import React from "react";
import rocket from "../../assets/images/rocket.png";
const TimeCard = ({ time, quote }) => {
  return (
    <div className="flex bg-white items-center pl-4 pr-7 py-3  rounded-[111.54px] shadow-xl ">
      <div className="bg-green-50 rounded-full p-2 mr-2">
        <img src={rocket} alt="" className="w-8 h-8" />
      </div>
      <div>
        <p className="text-2xl font-manrope font-semibold">{time} Days</p>
        <p className="text-md font-manrope text-zinc-500">{quote}</p>
      </div>
    </div>
  );
};

export default TimeCard;
