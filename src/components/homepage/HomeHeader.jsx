import React from "react";
import logo from "../../assets/svg/Logo.svg";
import headerMobile from "../../assets/images/homePage/headerMobile.png";

const HomeHeader = () => {
  return (
    <div className="bg-homeHeader bg-center min-h-screen  bg-no-repeat lg:bg-[100%_100%] bg-cover">
      <div className="container">
        <div className="py-5">
          <img src={logo} alt="pagelogo" />
        </div>
        <div className="flex flex-row flex-wrap pt-16  items-center justify-center">
          <div className="lg:w-6/12 w-full">
            <h1 className="text-white text-xxl mb-2 leading-xxl2 font-extrabold ">
              Find the location{" "}
              <span className=" font-light"> of any phone by its number</span>
            </h1>
            <p className="text-base max-w-[506px] mb-6 pb-0 font-normal leading-6 text-white">
              Add phones to your account & track them when neededAdd phones to
              your account & track them when needed
            </p>
          </div>
          <div className="lg:w-6/12 w-full">
            <img className="w-full" src={headerMobile} alt="mobile" />
            <div className="p-[18px]  rounded-t-xl  bg-white">
              <p className="text-2xl text-skyBlue font-bold leading-10">
                Need help?
              </p>
              <p className="text-base leading-6 font-normal mb-3">
                Get help with technical, account and billing enquiries.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;
