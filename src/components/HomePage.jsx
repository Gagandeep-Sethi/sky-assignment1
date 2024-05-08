import React from "react";
import Heading from "./homepageComponents/Heading";
import { heading, texts, topQuote } from "../utils/constant";
import Header from "./Header";
import Display from "./homepageComponents/Display";
import Carousel from "./homepageComponents/Carousel";
import PercentageCard from "./homepageComponents/PercentageCard";
import TimeCard from "./homepageComponents/TimeCard";
import ExpenseCard from "./homepageComponents/ExpenseCard";
import Questions from "./homepageComponents/Questions";
import Footer from "./homepageComponents/Footer";
import arrow from "../assets/images/arrow.png";
const HomePage = () => {
  return (
    <div>
      <Header />
      <div>
        <div className=" flex justify-center">
          <Heading topQuote={topQuote} heading={heading} />
        </div>
        <div className="w-screen flex mt-28 h-[596px]">
          <div className="w-7/12  relative ">
            <div className="left-40 absolute">
              <Display className=" " />
            </div>
            <div className="absolute top-[120px] left-5">
              <PercentageCard
                percentage={"40"}
                quote={
                  "Achieved reduction in project execution time by optimising team availability"
                }
              />
            </div>
            <div className="absolute top top-[425px] left-28">
              <TimeCard time={"10"} quote={"Staff Deployment"} />
            </div>
            <div className="absolute bottom-0 right-[90px]">
              <ExpenseCard
                expense={"0.5"}
                quote={
                  "Reduced client expenses by saving on hiring and employee costs."
                }
              />
            </div>
          </div>
          <div className="w-5/12 ">
            <div className="w-[398px] h-[192px] mt-16 overflow-ellipsis">
              <Carousel texts={texts} />
            </div>
            <p className="w-[200px] font-manrope py-6 px-8 cursor-pointer flex items-center  rounded-full text-white bg-zinc-900 hover:bg-neutral-600 mt-[200px]">
              Explore more <img src={arrow} alt="" className="w-4 h-4 ml-4" />
            </p>
          </div>
        </div>
        <div className=" flex justify-center mt-28">
          <Questions />
        </div>
      </div>
      <div className="flex justify-center pt-10">
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
