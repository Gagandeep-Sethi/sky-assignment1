import React from "react";

const ExpenseCard = ({ expense, quote }) => {
  return (
    <div className="w-[290.49px] h-[239px] rounded-[28.36px] p-8 pt-10 bg-green-950 shadow-xl hover:shadow-2xl ">
      <p className="text-white text-6xl font-switzer">
        ${expense}
        <span className="text-[22.81px] leading-[31.94px] uppercase pl-2 text-stone-400">
          million
        </span>
      </p>
      <p className=" text-stone-300 text-lg font-manrope mt-7">{quote}</p>
    </div>
  );
};

export default ExpenseCard;
