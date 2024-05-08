//uncomment the commented part to stop transition to next slide on hover rest will work same
import React, { useState, useEffect, useCallback } from "react";

import { RxDotFilled } from "react-icons/rx";

const Carousel = ({ texts }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  //const [isHovered, setIsHovered] = useState(false);

  const nextSlide = useCallback(() => {
    const isLastSlide = currentIndex === texts.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, texts.length]);

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  //comment out below use Effect to stop transition to next slide on hover rest will work same and uncomment the next seEffect
  useEffect(() => {
    let interval;

    interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, [currentIndex, nextSlide]);

  // useEffect(() => {
  //   let interval;
  //   if (!isHovered) {
  //     interval = setInterval(() => {
  //       nextSlide();
  //     }, 4000);
  //   }

  //   return () => clearInterval(interval);
  // }, [currentIndex, isHovered, nextSlide]);

  return (
    <div
      className="w-full h-full  relative group"
      // onMouseEnter={() => setIsHovered(true)}
      // onMouseLeave={() => setIsHovered(false)}
    >
      <div className="w-full h-full flex items-center justify-center">
        <div className="text-[40px] leading-[48px] font-manrope text-zinc-900">
          {texts[currentIndex]}
        </div>
      </div>

      <div className="flex top-4 justify-center py-2">
        {texts.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`text-2xl cursor-pointer hover:text-stone-300 ${
              slideIndex === currentIndex
                ? "text-green-600"
                : "text-neutral-200"
            }`}
          >
            <RxDotFilled className="h-8 w-8" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
