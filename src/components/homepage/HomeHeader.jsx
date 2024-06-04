import React from "react";
import headerMobile from "../../assets/images/homePage/header_mobile.webp";
import headerWave from "../../assets/images/homePage/headerWave.webp";
import SameBtn from "../common/SameBtn";
import { Logo, Mic } from "../common/Icons";

const HomeHeader = () => {
  return (
    <div className="bg-homeHeader pb-28 relative bg-center min-h-screen  bg-no-repeat lg:bg-[100%_100%] bg-cover">
      <div className="container max-w-[1164px]">
        <div className="py-5">
          <span>
            <Logo />
          </span>
        </div>
        <div className="flex flex-row flex-wrap pt-14 md:pt-16  items-center justify-center">
          <div className="lg:w-6/12 w-full">
            <h1 className="text-white text-3xl2 md:text-xxl mb-2 leading-9 text-center mx-auto lg:mx-0 lg:text-start px-3 md:px-0 md:leading-xxl font-extrabold max-w-[520px]">
              Find the location{" "}
              <span className=" font-light"> of any phone by its number</span>
            </h1>
            <p className="text-sm md:text-base max-w-[285px] mx-auto lg:mx-0 md:max-w-[506px] mb-6 pb-0 font-normal text-center lg:text-start leading-5 md:leading-6 text-white">
              Add phones to your account & track them when neededAdd phones to
              your account & track them when needed
            </p>
          </div>
          <div className="lg:w-6/12 pt-24 lg:pt-0 flex justify-center relative w-full">
            <img
              className="w-[339px] h-[353px] lg:w-full lg:h-full"
              src={headerMobile}
              alt="mobile"
            />
            <div className=" p-2 md:p-[18px] absolute  right-0 md:right-[10%] lg:right-[-3%] bottom-[-2%] lg:bottom-[24%] xl:w-[280px] rounded-tl-xl rounded-br-xl bg-white">
              <div className="flex justify-between">
                {" "}
                <p className="text-2xl text-skyBlue font-bold leading-10">
                  Need help?
                </p>
                <span>
                  <Mic />
                </span>
              </div>

              <p className="text-base  text-darkBlue leading-6 font-normal mb-[14px]">
                Get help with technical, <br /> account and billing enquiries.
              </p>
              <div className="w-full ">
                <SameBtn text="Customer Support" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        className="absolute w-full bottom-0 md:bottom-[-8%] z-0"
        src={headerWave}
        alt="wave"
      />
    </div>
  );
};

export default HomeHeader;
