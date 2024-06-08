import React, { useState } from "react";
import headerMobile from "../../assets/images/homePage/headerMobile.webp";
import headerWave from "../../assets/images/homePage/headerWave.webp";
import CommonBtn from "../common/CommonBtn";
import { LocationIcon, Logo2, Mic, Logo } from "../common/Icons";
import { navData } from "../common/Helper";
import { Link } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
const HomeHeader = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [, setCountryCode] = useState("91");

  const handleOnChange = (value, country) => {
    setPhoneNumber(value);
    setCountryCode(country.dialCode);
  };
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

 
  return (
    <div className="bg-homeHeader pb-28 relative bg-center xl:min-h-screen 2xl:min-h-[800px] bg-no-repeat lg:bg-[100%_100%] bg-cover">
      <div className="container px-6 md:px-3 max-w-[1164px]">
        <nav className="pt-8 md:pt-2.5 ">
          <div className="max-w-[1164px] md:px-0 sm:px-3 mx-auto ">
            <div className="flex justify-between items-center">
              <Link to="/" className="relative z-[4]" aria-label="logo">
                {navBar ? <Logo2 /> : <Logo />}
              </Link>
              <div className="flex items-center">
                <ul
                  className={`flex items-center gap-[14px]  duration-300 max-md:fixed max-md:w-full max-md:h-full max-md:pt-[121px] max-md:flex-col max-md:z-[3] max-md:top-0 max-md:left-[-105%] max-md:p-[30px] max-md:bg-white ${
                    navBar && "!left-0"
                  }`}
                >
                  <div className="gap-6 flex md:flex-row flex-col items-center">
                    {navData.map((obj, i) => (
                      <li key={i}>
                        <Link
                          href={obj.url}
                          className="text-black  flex items-center gap-1.5 md:text-white text-nowrap text-base leading-xs1 font-normal relative z-[1] after:w-0 after:bg-white after:h-[1.5px] after:bottom-0 after:left-[50%] after:duration-300 after:rounded-md after:absolute hover:after:left-0 hover:after:w-full"
                          onClick={handleLinkClick}
                          aria-label="navClickbar"
                        >
                          {obj.Ques}
                          {obj.name}
                        </Link>
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
            <div className="bg-white rounded shadow-inputNumber max-xl:mx-auto flex items-center justify-between ps-2.5 max-w-[448px] mt-6">
              <PhoneInput
                country={"in"}
                value={phoneNumber}
                onChange={(phone, country) => handleOnChange(phone, country)}
                inputClass="outline-none w-[35%] sm:w-1/2"
                containerClass="phone-input-container"
                buttonClass="country-code-dropdown"
              />
              <button className="hover:border-darkBlue border border-darkBlue group  hover:text-darkBlue hover:bg-white  bg-darkBlue -me-[1px] rounded font-semibold text-sm md:text-base group text-white py-[13.5px] px-[22.2px] flex items-center gap-1  duration-300 ">
                <LocationIcon />
                Locate
              </button>
            </div>
          </div>
          <div className="lg:w-6/12 pt-8 sm:pt-12 lg:pt-0 flex justify-center w-full">
            <div className="relative">
              <img
                className="w-[339px] translate-x-[-15%] h-[335px] lg:w-full lg:h-full"
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
                <CommonBtn
                  className="bg-darkBlue border py-2 md:py-4 px-[18px] w-full border-darkBlue hover:shadow-[0px_1px_17.3px_1px_darkBlue]  duration-500 hover:text-darkBlue hover:bg-white text-white md:w-full"
                  btnName="Customer Support"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        className="absolute w-full  -bottom-1 md:bottom-[-8%] 2xl:bottom-[-24%] z-0"
        src={headerWave}
        alt="wave"
      />
    </div>
  );
};

export default HomeHeader;
