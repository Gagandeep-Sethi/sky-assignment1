import React from "react";

import Accordion from "./Accordion";
import { questionAnswers } from "../../utils/constant";
const Questions = () => {
  return (
    <div className="w-[1376px] h-[749px] bg-[#E8EEE7] rounded-[40px] flex ">
      <div className="w-1/2 ">
        <div className="">
          <div className=" mt-[80px] ml-[94.5px]">
            <p className="font-grace text-[32px] leading-[35px]  text-neutral-400">
              What’s on your mind
            </p>
            <p className="font-manrope text-[60px] leading-[66px] ">
              Ask Questions{" "}
            </p>
            {/* <img src={arrow} alt="" className="bg-black" /> */}
          </div>
        </div>
      </div>
      <div className="w-1/2">
        <div className="w-[581px] mt-[137px]">
          <Accordion questionAnswers={questionAnswers} />
        </div>
      </div>
    </div>
  );
};

export default Questions;
