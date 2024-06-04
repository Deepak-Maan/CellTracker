import React from "react";
import SameBtn from "../common/SameBtn";
import { AdvantageData } from "../common/Helper";
import { LocationEllp } from "../common/Icons";

const Advantages = () => {
  return (
    <div className="pb-14 relative">
      <div className="container max-w-[1164px] relative z-20">
        <h1 className="text-5xl font-light  leading-xl1 text-darkBlue mb-2 text-center">
          Advantages of <span className=" font-extrabold">Celltracker</span>
        </h1>
        <p className="text-base font-normal mx-auto max-w-[472px] text-center pb-0 leading-6 text-darkGray  mb-12">
          Fames tincidunt pellentesque nisl blandit at sit. Ullamcorper nisi sit
          elit rhoncus vestibulum fames libero id.
        </p>
        <div className="flex flex-row justify-center flex-wrap">
          {AdvantageData.map((obj, index) => (
            <div className="lg:w-3/12 md:w-4/12 sm:w-1/2 w-full px-[9px] pt-3">
              <div className="p-5   border-2 hover:border border-lightGray2 duration-300 hover:border-darkBlue rounded-xl h-[253px]">
                <span className="">{obj.Icon}</span>
                <p className=" text-2xl mt-1 text-darkBlue max-w-[231px] leading-7 font-normal pb-0 mb-1.5">
                  {obj.Heading}
                </p>
                <p className="textr-base font-normal leading-6  text-darkGray pb-0">
                  {obj.Description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center pt-12">
          <SameBtn text="Create your Account" />
        </div>
      </div>
      <span className="absolute left-0 top-[9%]">
        <LocationEllp />
      </span>
    </div>
  );
};

export default Advantages;
