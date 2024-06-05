import React from "react";
import SameBtn from "../common/SameBtn";
import { AdvantageData } from "../common/Helper";
import { LocationEllp } from "../common/Icons";

const Advantages = () => {
  return (
    <div id="Advantage" className="pb-14 mt-[-3px] relative">
      <div className="container max-w-[1164px] relative z-20">
        <h1 className=" text-2xl2  lg:text-5xl font-light leading-8 lg:leading-xl1 text-darkBlue mb-2 text-center">
          Advantages of <span className="font-extrabold">Celltracker</span>
        </h1>
        <p className="text-sm md:text-base font-normal mx-auto max-w-[472px] text-center pb-0 leading-6 text-darkGray mb-7">
          Fames tincidunt pellentesque nisl blandit at sit. Ullamcorper nisi sit
          elit rhoncus vestibulum fames libero id.
        </p>
        <div className="flex flex-row justify-center flex-wrap">
          {AdvantageData.map((advantage, index) => (
            <div
              key={index}
              className={`w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-3 sm:px-[9px] mt-[18px] sm:mt-6 ${index === 1 || index === 3 ? " lg:translate-y-[10%]" : ""
                }`}
            >
              <div
                className={`w-full sm:max-w-[271px] xl:w-[271px] mx-auto md:mx-0 h-full min-h-[184px] xl:h-[271px] sm:max-h-[253px] p-[20px] border-[2px] border-solid hover:border-darkBlue duration-300 border-[#03045E1A] shadow-[0px_16px_25.3px_0px_#00000014] rounded-xl`}
              >
                <div className="relative">
                  <span className="relative z-20">{advantage.icon}</span>
                  <div className="absolute top-[55%] left-[-3.6%] bg-lightBlue benefits_bubble_bg translate-y-[-50%] z-10 w-[48px] h-[41px]"></div>
                </div>
                <p className="font-normal  text-xl lg:text-2xl leading-6 md:leading-[28.8px] text-darkBlue mt-1">
                  {advantage.title}
                </p>
                <p className="text-sm md:text-base leading-6 font-normal text-darkGray opacity-70 mt-[6px]">
                  {advantage.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center px-3 md:px-0 pt-10 lg:pt-20">
          <SameBtn
            className=" bg-darkBlue text-white max-sm:w-full"
            btnName="Create your Account"
          />{" "}
        </div>
      </div>
      <span className="absolute left-0 top-[9%]">
        <LocationEllp />
      </span>
    </div>
  );
};

export default Advantages;
