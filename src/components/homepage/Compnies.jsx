import React from "react";
// import { joinCompanies } from "./";
import { joinCompanies } from "../common/Helper";

import toplayer from "../../assets/images/homePage/company_Top.webp";
import btmlayer from "../../assets/images/homePage/company_Btm.webp";
import SameBtn from "../common/SameBtn";

const Companies = () => {
  return (
    <div className="bg-companies bg-cover bg-center bg-no-repeat relative">
      <img src={toplayer} alt="toplayer" className="absolute top-0 w-full" />
      <img
        src={btmlayer}
        alt="botmlayer"
        className="absolute bottom-[-12%] w-full"
      />
      <div className="containers px-3 custom_container mx-auto">
        <h2 className="text-white lg:text-5xl sm:text-4xl text-2lg text-center font-light sm:leading-xs leading-xxs md:max-w-[664px] mx-auto lg:pb-[109px] sm:pb-[80px] pb-[65px] lg:pt-[222px] md:pt-[180px] sm:pt-[150px] pt-[126px]">
          Join <span className="font-extrabold">70,000+ companies</span> doing
          time tracking the easy way
        </h2>
        <div className="flex lg:flex-row flex-col-reverse flex-wrap justify-center lg:items-end items-center max-lg:gap-[42px] pb-[80px]">
          {joinCompanies.map((obj, id) => {
            return (
              <div
                key={id}
                className={`pl-[34px] bg-white rounded-tl-xl sm:rounded-tr-xl rounded-br-xl border-y border-s border-solid w-full h-full relative max-sm:px-6 shadow-[0px_16px_25.3px_0px_#00000014] ${
                  id === 1
                    ? "max-w-[527px] sm:pt-[63px] sm:pb-[34px] pt-[60px] pb-[30px] lg:-translate-x-3"
                    : "max-w-[467px] max-sm:py-[75.5px] py-[34px]"
                }`}
              >
                <h3 className=" text-darkBlue font-normal text-3xl2 leading-lg1 mb-[18px]">
                  Cell Tracker
                  {id === 1 && (
                    <span className="font-extrabold  text-skyBlue"> Pro</span>
                  )}
                </h3>
                <p className="font-normal text-base leading-normal  text-darkGray mb-3">
                  {obj.description}
                </p>
                <p className="font-normal text-base  text-darkGray leading-normal flex items-center gap-[6px] mb-[6px]">
                  {obj.rightclick}
                  {obj.seat}
                </p>
                <p className="font-normal text-base  text-darkGray leading-normal flex items-center gap-[6px] mb-[44px]">
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
                <div className="flex sm:flex-row flex-col items-center gap-4 max-sm:w-full">
                  <SameBtn
                    className=" bg-darkBlue text-white max-sm:w-full"
                    btnName="Start your free trial"
                  />
                  <SameBtn />
                  {id === 1 && (
                    <p className="font-normal  text-base  text-darkGray leading-normal">
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
