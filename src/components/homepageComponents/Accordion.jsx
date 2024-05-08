import React, { useState } from "react";

const Accordion = ({ questionAnswers }) => {
  const [openIndex, setOpenIndex] = useState(2);

  const handleAccordionClick = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div>
      {questionAnswers.map((qa, index) => (
        <div
          key={index}
          className="collapse collapse-plus bg-[#E8EEE7] rounded-none border-b-2 "
        >
          <input
            type="radio"
            name="my-accordion"
            checked={openIndex === index}
            onChange={() => handleAccordionClick(index)}
          />
          <div
            className="collapse-title text-xl font-medium font-manrope"
            onClick={() => handleAccordionClick(index)}
          >
            {qa.question}
          </div>
          {openIndex === index && (
            <div className="collapse-content">
              <p className="text-[15px] leading-[24px] font-manrope text-gray-500">
                {qa.answer}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
