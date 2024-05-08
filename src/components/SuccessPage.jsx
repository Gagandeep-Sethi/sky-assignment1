import React, { useEffect } from "react";
import logo from "../assets/images/logo.png";
import tick from "../assets/images/tick.png";
import { useNavigate } from "react-router-dom";

const SuccessPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/"); // Navigate to another page after 5 seconds
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);
  return (
    <div className="">
      <div className="p-6 ">
        <img src={logo} alt="logo" className="w-[121px]  h-30.5px " />
      </div>
      <div className="flex flex-col justify-center items-center h-screen w-full">
        <div className="flex flex-col justify-center items-center w-[718px] h-[357px]">
          <div className="">
            <img src={tick} alt="" className="w-[66.67px] h-[66.67px]" />
          </div>
          <p className="text-center font-grace text-4xl text-green-600">
            Success Submitted
          </p>
          <p className="font-manrope text-[56px] leading-[67.2px] pt-4">
            Congratulations
          </p>
          <p className="text-[27px] leading-[35.1px] text-3xl text-neutral-500 text-center pt-4">
            Your request has been successfully submitted to us. We will validate
            your information and reach out to your shortly with updates
          </p>
        </div>
        <p className="text-[20px] leading-[26px] font-manrope text-neutral-500 pt-40">
          Redirecting you to Homepage in{" "}
          <span className="font-semibold text-black ">5 Seconds</span>
        </p>
      </div>
    </div>
  );
};

export default SuccessPage;
