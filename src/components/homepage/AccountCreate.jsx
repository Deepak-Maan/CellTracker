import {
  AddressIcon,
  Calender,
  Debitdot,
  Email,
  LocationEllp,
  SecurityCode,
  Valid,
} from "../common/Icons";
import { AccountData } from "../common/Helper";

import visa from "../../assets/svg/Visa.svg";
import masterCard from "../../assets/svg/MasterCard.svg";
import SameBtn from "../common/SameBtn";
import { Link } from "react-router-dom";

const AccountCreate = () => {
  return (
    <div id="contact" className="pb-14 pt-5 md:pb-32 z-[2]  lg:pt-36 relative">
      <div className="container max-w-[1164px] relative ">
        <h1
          data-aos="zoom-in"
          className=" text-2xl2 lg:text-5xl font-light   leading-8 md:leading-xl1 text-darkBlue mb-2 text-center"
        >
          Create your <span className=" font-extrabold">account</span>
        </h1>
        <p
          data-aos="zoom-in"
          className="text-sm md:text-base px-9 md:px-0 font-normal mx-auto max-w-[472px] text-center pb-0 leading-5 md:leading-6 text-darkGray  "
        >
          Join now and protect your family's phones
        </p>
        <div className="flex flex-row items-center flex-wrap lg:pt-[72px] sm:pt-[50px] pt-[33.7px] gap-[37px] xl:gap-0">
          <div
            data-aos="zoom-in"
            className="lg:w-5/12  w-full flex flex-col justify-start items-start sm:justify-center sm:items-center lg:justify-start lg:items-start  ps-3 lg:ps-5 xl:ps-0"
          >
            <p className="leading-lg1 text-darkBlue sm:text-3xl2 text-2xl font-light mb-[26px]">
              Get a <span className="font-extrabold">24 hour</span> trial!
            </p>
            <div className="flex flex-col gap-[30px] pb-10">
              {AccountData.map((account, index) => (
                <div key={index} className=" flex items-center gap-5">
                  <div className="relative">
                    <span className="relative z-20">{account.icon}</span>
                    <div className="absolute top-[55%] left-[-40%]  bg-lightBlue benefits_bubble_bg translate-y-[-58%] z-10 w-[38px] h-[30px]  md:w-[48px] md:h-[41px]"></div>
                  </div>
                  <p className="pb-0 leading-normal sm:text-base text-sm  font-normal  text-darkGray">
                    {account.title}
                  </p>
                </div>
              ))}
            </div>
            <div className="sm:p-[18px]  p-6 rounded-xl shadow-[0px_0px_9.5px_0px_#00000014] lg:max-w-[424px] max-w-[560px]">
              <p className="text-center px-2 md:px-0 sm:text-base text-sm leading-normal font-normal  text-darkGray">
                Terms: Users must be 16 or over. Pricing options are shown on
                the payment page. Create an account to start a 24 hour trial
                with full access to all our tools. The service can be cancelled
                by the user at any time from within their account.
                <Link className=" text-skyBlue cursor-pointer">
                  View full terms.
                </Link>
              </p>
            </div>
          </div>
          <div className="xl:w-7/12 xl:-ms-4 lg:w-6/12 px-3 z-20 md:px-0 relative  w-full">
            <div
              data-aos="zoom-in"
              className="pb-9 border border-solid  z-20 relative shadow-[0px_16px_25.3px_0px_#00000014] rounded-xl"
            >
              <div className="bg-darkBlue px-5 relative  z-30 py-6  md:py-5 rounded-tl-xl  rounded-tr-xl flex justify-between">
                <p className="capitalize text-white md:text-3xl2 text-2xl leading-sm1  flex gap-3 items-center">
                  <Debitdot />
                  Debit/Credit Card
                </p>
                <div className="flex sm:gap-[34px] gap-[6px] items-center">
                  <img
                    src={visa}
                    alt="visa"
                    className="sm:w-[73px] sm:h-[27px] w-[33px] h-[12px]"
                  />
                  <img
                    src={masterCard}
                    alt="mastercard"
                    className="sm:w-[57px] sm:h-[49px] w-[25px] h-[21px]"
                  />
                </div>
              </div>
              <form className="sm:pt-[30px] pt-[42px] sm:px-6 px-2" action="">
                <div className="mb-5">
                  <label className="capitalize text-darkBlue font-normal sm:text-base text-sm  leading-normal ">
                    Your Address
                  </label>
                  <div className="border border-solid border-lightBlueEb max-sm:h-[45px] bg-lightGrayFA  rounded flex items-center mt-1.5 md:mt-2">
                    <div className="px-3 py-[14px] bg-lightGrayED flex items-center justify-center">
                      <AddressIcon />
                    </div>
                    <label htmlFor="Address"></label>
                    <input
                      id="Address"
                      type="text"
                      placeholder="Address Line 1"
                      className="sm:px-[14px]  pl-5 placeholder:text-darkBlue placeholder:font-normal placeholder:sm:text-base placeholder:text-sm font-normal sm:text-base text-sm text-darkBlue leading-normal w-full outline-none bg-transparent"
                    />
                  </div>
                  <p className="mt-1 text-whiteGray sm:text-base text-sm  font-normal leading-normal">
                    Our enter address manually
                  </p>
                </div>
                <div className="mb-5">
                  <label className="capitalize text-darkBlue font-normal sm:text-base text-sm  leading-normal ">
                    Email Address
                  </label>
                  <div className="border border-solid border-lightBlueEb max-sm:h-[45px] bg-lightGrayFA  rounded flex items-center mt-1.5 md:mt-2">
                    <div className="px-3 py-[14px] bg-lightGrayED flex items-center justify-center">
                      <Email />
                    </div>
                    <label htmlFor="Email"></label>
                    <input
                      id="Email"
                      type="text"
                      placeholder="Email Address"
                      className="sm:px-[14px] pl-5  capitalize placeholder:text-darkBlue placeholder:font-normal placeholder:sm:text-base placeholder:text-sm font-normal sm:text-base text-sm  text-darkBlue leading-normal w-full outline-none bg-transparent"
                    />
                  </div>
                </div>
                <div className="mb-5">
                  <label className="capitalize text-darkBlue font-normal sm:text-base text-sm leading-normal ">
                    Card Number (Visa or Mastercard)
                  </label>
                  <div className="border border-solid border-lightBlueEb max-sm:h-[45px] bg-lightGrayFA  rounded flex items-center mt-1.5 md:mt-2">
                    <div className="px-3 py-[14px] bg-lightGrayED flex items-center justify-center">
                      <Valid />
                    </div>
                    <label htmlFor="Card"></label>
                    <input
                      id="Card"
                      type="number"
                      maxLength={16}
                      placeholder="Valid Card Number"
                      className="sm:px-[14px] pl-5  capitalize placeholder:text-darkBlue placeholder:font-normal placeholder:sm:text-base placeholder:text-sm font-normal sm:text-base text-sm  text-darkBlue leading-normal w-full outline-none bg-transparent"
                    />
                  </div>
                </div>
                <div className="sm:mb-[46px] mb-[38px] flex gap-[17px]">
                  <div className="lg:max-w-[307px] w-full">
                    <label className="capitalize text-darkBlue font-normal sm:text-base text-sm leading-normal ">
                      Expiry Date
                    </label>
                    <div className="border border-solid border-lightBlueEb max-sm:h-[45px]  bg-lightGrayFA rounded flex items-center mt-1.5 md:mt-2">
                      <div className="px-3 py-[14px] bg-lightGrayED flex items-center justify-center">
                        <Calender />
                      </div>
                      <label htmlFor="month"></label>
                      <input
                        id="month"
                        type="number"
                        placeholder="MM/YY"
                        className="sm:px-[14px] pl-5  placeholder:text-darkBlue placeholder:font-normal placeholder:sm:text-base !placeholder:text-sm capitalize font-normal sm:text-base text-sm  text-darkBlue leading-normal w-full outline-none bg-transparent"
                      />
                    </div>
                  </div>
                  <div className="lg:max-w-[307px] w-full">
                    <label className="capitalize text-darkBlue font-normal sm:text-base text-sm leading-normal ">
                      Card Security Code
                    </label>
                    <div className="border border-solid border-lightBlueEb max-sm:h-[45px] bg-lightGrayFA   rounded flex items-center mt-1.5 md:mt-2">
                      <div className="px-3 py-[14px] bg-lightGrayED flex items-center justify-center">
                        <SecurityCode />
                      </div>
                      <label htmlFor="ex"></label>
                      <input
                        id="ex"
                        type="number"
                        maxLength={4}
                        placeholder="E.x @ 0123"
                        className="sm:px-[14px] pl-5  placeholder:text-darkBlue placeholder:font-normal placeholder:sm:text-base placeholder:text-sm capitalize font-normal sm:text-base text-sm  text-darkBlue leading-normal w-full outline-none bg-transparent"
                      />
                    </div>
                  </div>
                </div>
                <SameBtn
                  btnName="Buy Now (50C)"
                  className="capitalize border-darkBlue hover:text-darkBlue hover:bg-white hover:shadow-[0px_1px_17.3px_1px_darkBlue] duration-500 hover:border-white text-white px-0 bg-darkBlue w-full"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
      <span className="absolute left-0 top-[-1%] md:top-[15%]">
        <LocationEllp />
      </span>
      <span className="absolute !-z-0 right-0 rotate-180 -bottom-5 md:bottom-[2%] xl:bottom-[22%]">
        <LocationEllp />
      </span>
    </div>
  );
};

export default AccountCreate;
