import React, { useState } from "react";
import headerMobile from "../../assets/images/homePage/header_mobile.webp";
import headerWave from "../../assets/images/homePage/headerWave.webp";
import SameBtn from "../common/SameBtn";
import { IndiaFlag, LocationIcon, Logo2, Mic, Logo } from "../common/Icons";
import { navData } from "../common/Helper";

const HomeHeader = () => {
  const [navBar, setNavBar] = useState(false);

  const showNav = () => {
    setNavBar(!navBar);
  };

  const handleLinkClick = () => {
    setNavBar(false);
    document.body.classList.remove("max-md:overflow-hidden");
  };

  if (navBar) {
    document.body.classList.add("max-md:overflow-hidden");
  } else {
    document.body.classList.remove("max-md:overflow-hidden");
  }

  const handleInputChange = (event) => {
    const { value } = event.target;
    const sanitizedValue = value.replace(/[^0-9]/g, "").slice(0, 10);
    event.target.value = sanitizedValue;
  };

  return (
    <div className="bg-homeHeader pb-28 relative bg-center min-h-screen xl:max-h-[110vh] bg-no-repeat lg:bg-[100%_100%] bg-cover">
      <div className="container px-6 md:px-3 max-w-[1164px]">
        <nav className="pt-8 md:pt-2.5 ">
          <div className="max-w-[1164px] md:px-0 sm:px-3 mx-auto ">
            <div className="flex justify-between items-center">
              <a href="/" className="relative z-[4]" aria-label="logo">
                {navBar ? <Logo2 /> : <Logo />}
              </a>
              <div className="flex items-center">
                <ul
                  className={`flex items-center gap-[14px]  duration-300 max-md:fixed max-md:w-full max-md:h-full max-md:pt-[121px] max-md:flex-col max-md:z-[3] max-md:top-0 max-md:left-[-105%] max-md:p-[30px] max-md:bg-white ${
                    navBar && "!left-0"
                  }`}
                >
                  <div className="gap-6 flex md:flex-row flex-col items-center">
                    {navData.map((obj, i) => (
                      <li key={i}>
                        <a
                          href={obj.url}
                          className="text-black  flex items-center gap-1.5 md:text-white text-nowrap text-base leading-xs1 font-normal relative z-[1] after:w-0 after:bg-white after:h-[1.5px] after:bottom-0 after:left-[50%] after:duration-300 after:rounded-md after:absolute hover:after:left-0 hover:after:w-full"
                          onClick={handleLinkClick}
                          aria-label="navClickbar"
                        >
                          {obj.Ques}
                          {obj.name}
                        </a>
                      </li>
                    ))}
                  </div>
                  <button className="text-darkBlue hover:shadow-[0px_1px_17.3px_1px_#fff]  duration-500 hidden md:block text-base leading-xs1 font-semibold bg-white py-[14px] md:py-4 px-7 rounded-[4px]   relative z-[1] after:absolute after:h-full after:w-1 after:top-0 after:skew-x-12 after:blur-[3px] overflow-hidden after:left-[-20%] after:bg-white">
                    Create an Account
                  </button>
                  <button className="block md:hidden  border-darkBlue hover:shadow-[0px_1px_17.3px_1px_darkBlue]  duration-500 mt-[115px]  bg-darkBlue text-base leading-xs1 font-semibold text-white py-4 px-7 rounded-[4px] hover:text-darkBlue hover:bg-white  relative border-transparent border-2 w-[314px] hover:border-dark-blue z-[1] after:absolute after:h-full after:w-1 after:top-0 after:skew-x-12 after:blur-[3px] overflow-hidden after:left-[-20%] after:bg-dark-blue">
                    Create an Account
                  </button>
                </ul>
              </div>

              <button onClick={showNav} className="md:hidden relative z-[4]">
                {navBar ? (
                  <div className="flex md:hidden flex-col relative z-50 justify-between w-[18px] h-[17px] cursor-pointer">
                    <span className="bg-black w-[11px] h-[2px] relative z-50 transition-all ease-linear duration-300 rotate-[45deg] translate-x-0 translate-y-0 -bottom-[11px]"></span>
                    <span className="bg-black w-[11px] h-[2px] relative z-50 transition-all ease-linear duration-300 rotate-[-45deg] translate-x-0 translate-y-1 bottom-[8px]"></span>
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

        <div className="flex flex-row flex-wrap pt-14 md:pt-16 items-center justify-center">
          <div className="lg:w-6/12 w-full">
            <h1 className="text-white text-3xl2 lg:-mt-16 md:text-xxl mb-3 md:mb-2 leading-9 text-center mx-auto lg:mx-0 lg:text-start md:leading-xxl font-extrabold max-w-[520px]">
              Find the location{" "}
              <span className="font-light">of any phone by its number</span>
            </h1>
            <p className="text-sm md:text-base max-w-[285px] mx-auto lg:mx-0 md:max-w-[506px] mb-6 pb-0 font-normal text-center lg:text-start leading-5 md:leading-6 text-white">
              Add phones to your account & track them when neededAdd phones to
              your account & track them when needed
            </p>
            <div className="max-lg:mx-auto  bg-white rounded shadow-inputNumber flex items-center justify-between ps-2.5 max-w-[448px] mt-6">
              <div className="flex items-center gap-2">
                <IndiaFlag />
                <select
                  className="outline-none cursor-pointer text-sm leading-[23px] md:leading-[26px] md:text-base"
                  name="number"
                  id="number"
                >
                  <option value="91" className="flex items-center gap-2">
                    +91
                  </option>
                  <option value="01" className="flex items-center gap-2">
                    +01
                  </option>
                  <option value="61" className="flex items-center gap-2">
                    +61
                  </option>
                  <option value="02" className="flex items-center gap-2">
                    +02
                  </option>
                  <option value="21" className="flex items-center gap-2">
                    +04
                  </option>
                </select>
              </div>
              <label htmlFor="home"></label>
              <input
                id="home"
                type="text"
                maxLength={10}
                onInput={handleInputChange}
                className="outline-none w-[35%] sm:w-1/2 no-spinner"
              />
              <button className="bg-darkBlue border-2 hover:border-white border-darkBlue hover:shadow-[0px_1px_17.3px_1px_darkBlue] hover:text-darkBlue hover:bg-white  duration-500 -me-[1px] rounded font-semibold text-sm md:text-base group text-white py-[13.5px] px-[22.2px] flex items-center gap-1 ">
                <LocationIcon />
                Locate
              </button>
            </div>
          </div>
          <div className="lg:w-6/12 pt-8 sm:pt-12 lg:pt-0 flex justify-center w-full">
            <div className="relative">
              <img
                className="w-[339px] translate-x-[-15%] h-[353px] lg:w-full lg:h-full"
                src={headerMobile}
                alt="mobile"
              />
              <div className="p-2 md:p-[18px] shadow-[0px_16px_25.3px_0px_#00000014] absolute right-0 md:right-[1%] lg:right-[10%] xl:right-0 2xl:right-[-9%] bottom-[-2%] lg:bottom-[22%] xl:w-[280px] rounded-tl-xl rounded-br-xl bg-white">
                <div className="flex justify-between">
                  <p className="text-xl md:text-2xl text-skyBlue font-bold leading-10">
                    Need help?
                  </p>
                  <span>
                    <Mic />
                  </span>
                </div>

                <p className="text-sm md:text-base text-darkBlue  leading-normal md:leading-6 font-normal mb-[14px]">
                  Get help with technical,
                  <br />
                  account and billing enquiries.
                </p>
                <SameBtn
                  className="bg-darkBlue border border-darkBlue hover:shadow-[0px_1px_17.3px_1px_darkBlue]  duration-500 hover:text-darkBlue hover:bg-white text-white md:w-full"
                  btnName="Customer Support"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        className="absolute w-full  bottom-0 md:bottom-[-8%] 2xl:bottom-[-24%] z-0"
        src={headerWave}
        alt="wave"
      />
    </div>
  );
};

export default HomeHeader;
