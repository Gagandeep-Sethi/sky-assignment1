import React from "react";

const Footer = () => {
  return (
    <div className="w-[1376px] h-[144px]] rounded-[40px] bg-neutral-100 flex justify-between p-10 mb-6">
      <div>
        <p className="font-manrope text-lg">©Talup 2023. All rights reserved</p>
      </div>
      <div className="gap-10 flex">
        <p className="font-manrope text-lg underline ">Terms & Conditions</p>
        <p className="font-manrope text-lg underline">Privacy Policy</p>
      </div>
    </div>
  );
};

export default Footer;
