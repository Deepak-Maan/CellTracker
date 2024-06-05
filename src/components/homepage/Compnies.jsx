import React from "react";
// import { joinCompanies } from "./";
import { joinCompanies } from "../common/Helper";

import toplayer from "../../assets/images/homePage/company_Top.webp";
import btmlayer from "../../assets/images/homePage/company_Btm.webp";
import SameBtn from "../common/SameBtn";

const Companies = () => {
  return (
    <div
      id="Login"
      className="bg-companies  bg-cover bg-center bg-no-repeat mb-10 -mt-1 relative"
    >
      <img
        src={toplayer}
        alt="toplayer"
        className="absolute top-0 xl:top-[-10%] 2xl:top-[-11%] w-full"
      />
      <img
        src={btmlayer}
        alt="botmlayer"
        className="absolute bottom-[-12%] 2xl:bottom-[-16%] w-full"
      />
      <div className="containers px-3 custom_container mx-auto">
        <h2 className="text-white lg:text-5xl sm:text-4xl px-6 md:px-0 text-2xl2 text-center font-light leading-8 md:leading-xl1 md:max-w-[664px] mx-auto lg:pb-28 sm:pb-20 pb-[65px] lg:pt-28 md:pt-[180px] sm:pt-[150px] pt-32">
          Join <span className="font-extrabold">70,000+ companies</span> doing
          time tracking the easy way
        </h2>
        <div className="flex px-3 md:px-0 lg:flex-row flex-col-reverse flex-wrap justify-center lg:items-end items-center max-lg:gap-[42px] pb-28">
          {joinCompanies.map((obj, id) => {
            return (
              <div
                key={id}
                className={`pl-[34px] bg-white  rounded-tl-xl sm:rounded-tr-xl rounded-br-xl border-y border-s border-solid w-full h-full relative max-sm:px-6 shadow-[0px_16px_25.3px_0px_#00000014] ${
                  id === 1
                    ? "max-w-[527px] sm:pt-[63px] sm:pb-8 pt-[60px] pb-8 lg:-translate-x-3"
                    : "max-w-[467px] max-sm:py-[75.5px] py-9"
                }`}
              >
                <h3 className=" text-darkBlue font-normal text-2xl lg:text-3xl2 leading-7 md:leading-lg1 mb-[18px]">
                  Cell Tracker
                  {id === 1 && (
                    <span className="font-extrabold  text-skyBlue"> Pro</span>
                  )}
                </h3>
                <p className="font-normal text-sm md:text-base leading-normal  text-darkGray mb-3">
                  {obj.description}
                </p>
                <p className="font-normal text-sm md:text-base  text-darkGray leading-normal flex items-center gap-1.5 mb-1.5">
                  {obj.rightclick}
                  {obj.seat}
                </p>
                <p className="font-normal text-sm md:text-base  text-darkGray leading-normal flex items-center gap-1.5 mb-[44px]">
                  {obj.rightclick}
                  {obj.projects}
                </p>
                <p
                  className={`${
                    id === 1 && "max-sm:!h-[70px]"
                  } lg:text-xsm text-4xl font-normal max-sm:max-w-[204px] h-[60px] !leading-[0] sm:!leading-normal mb-[27px]  text-darkBlue sm:pt-0 pt-4`}
                >
                  {obj.priceperseat}
                  <sub className="lg:text-base text-sm !leading-normal  text-darkGray">
                    {obj.billmonth}
                  </sub>
                </p>
                <div className="flex sm:flex-row flex-col items-center max-sm:w-full">
                  <SameBtn
                    className=" bg-darkBlue text-white md:mb-4 max-sm:w-full"
                    btnName="30-Day Free Trial"
                  />

                  {id === 1 && (
                    <p className="font-normal  text-base  mt-2  text-darkGray leading-normal">
                      No credit card required.
                    </p>
                  )}
                </div>
                {id === 1 && (
                  <div className="absolute xl:right-[13%] md:right-[17%] right-1/2 translate-x-1/2 top-[-29px]">
                    <SameBtn
                      className="md:!py-[15px] !font-normal text-2xl md:!px-[35px] py-3 px-4 capitalize !text-white  !bg-darkBlue"
                      btnName="Most Popular"
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Companies;