import React, { useState } from "react";
import headerMobile from "../../assets/images/homePage/header_mobile.webp";
import headerWave from "../../assets/images/homePage/headerWave.webp";
import SameBtn from "../common/SameBtn";
import { Mic } from "../common/Icons";
import { Logo } from "../common/Icons";
import { navData } from "../common/Helper";

const HomeHeader = () => {
  const [navBar, setnavBar] = useState(false);
  function showNav() {
    setnavBar(!navBar);
  }
  if (navBar) {
    document.body.classList.add("max-md:overflow-hidden");
  } else {
    document.body.classList.remove("max-md:overflow-hidden");
  }
  return (
    <div className="bg-homeHeader pb-28 relative bg-center min-h-screen  bg-no-repeat lg:bg-[100%_100%] bg-cover">
      <div className="container max-w-[1164px]">
        <nav>
          <div className="max-w-[1164px] px-6 sm:px-3 mx-auto pt-[27px]">
            <div className="flex justify-between items-center">
              <a href="/" className="relative z-[4]" aria-label="logo">
                {navBar ? <Logo /> : <Logo />}
              </a>
              <ul
                className={`flex items-center gap-[35px] duration-300 max-md:fixed max-md:w-full max-md:h-full max-md:justify-start max-md:pt-[121px] max-md:flex-col max-md:z-[3] max-md:top-0 max-md:left-[-105%] max-md:p-[30px] max-md:bg-white ${
                  navBar && "!left-0"
                }`}
              >
                {navData.map((obj, i) => (
                  <li key={i}>
                    <a
                      href="/"
                      className="text-black md:text-white font-mukta text-base leading-[26.59px] font-normal relative z-[1] after:w-0 after:bg-white after:h-[2px] after:bottom-1 after:left-[50%] after:duration-300 after:rounded-md after:absolute hover:after:left-0 hover:after:w-full"
                    >
                      {obj.name}
                    </a>
                  </li>
                ))}
                <button className="font-mukta md:hidden bg-dark-blue text-base leading-[26.59px] font-semibold text-white py-4 px-7 rounded-[4px] hover:text-dark-blue hover:bg-white duration-300 relative border-transparent border-2 w-full hover:border-dark-blue z-[1] after:absolute after:h-full after:w-1 after:top-0 after:skew-x-12 after:blur-[3px] overflow-hidden after:left-[-20%] after:bg-dark-blue hover:after:animate-moveToX">
                  Log In
                </button>
              </ul>
              <button className="font-mukta text-dark-blue max-md:hidden text-base leading-[26.59px] font-semibold bg-white py-[14px] md:py-4 px-7 rounded-[4px] hover:bg-dark-blue hover:text-white duration-300 relative z-[1] after:absolute after:h-full after:w-1 after:top-0 after:skew-x-12 after:blur-[3px] overflow-hidden after:left-[-20%] after:bg-white hover:after:animate-moveToX">
                Log In
              </button>
              <button onClick={showNav} className="md:hidden relative z-[4]">
                {navBar ? (
                  <div className="flex md:hidden flex-col relative z-50 justify-between w-[18px] h-[17px] cursor-pointer">
                    <span className="bg-black w-[11px] h-[2px] relative z-50 transition-all ease-linear duration-300 rotate-[45deg] translate-x-0 translate-y-0 -bottom-[11px]"></span>
                    <span className="bg-black w-[11px] h-[2px] relative z-50  transition-all ease-linear duration-300 rotate-[-45deg] translate-x-0 translate-y-1 bottom-[8px]"></span>
                  </div>
                ) : (
                  <div className="flex md:hidden flex-col z-50 justify-between w-[24px] h-[24px] cursor-pointer relative">
                    <span className="bg-white rounded-md w-1/2 h-[3px] relative z-50 mb-[3px] transition-all ease-linear duration-300"></span>
                    <span className="bg-white rounded-md w-full h-[3px] relative z-50 mb-[3px] transition-all ease-linear duration-300"></span>
                    <span className="bg-white rounded-md w-1/2 h-[3px] ms-auto relative z-50 mb-[3px] transition-all ease-linear duration-300"></span>
                  </div>
                )}
              </button>
            </div>
          </div>
        </nav>
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
            <div className="flex items-center gap-[7px] w-full">
              <input
                className="w-full pr-[5px] text-black outline-none"
                type="tel"
                pattern="\d{10}"
                placeholder=""
                maxLength="10"
              />
            </div>
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
