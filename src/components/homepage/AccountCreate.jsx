import React, { useState } from "react";
import {
  AddressIcon,
  Calender,
  Debitdot,
  Email,
  LocationEllp,
  SecurityCode,
  Valid,
} from "../common/Icons";
import InputMask from "react-input-mask";
import { AccountData } from "../common/Helper";
import visa from "../../assets/images/svg/Visa.svg";
import masterCard from "../../assets/images/svg/MasterCard.svg";
import CommonBtn from "../common/CommonBtn";
import { Link } from "react-router-dom";

const AccountCreate = () => {
  const [formData, setFormData] = useState({
    address: "",
    email: "",
    cardNumber: "",
    expiryDate: "",
    securityCode: "",
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { id, value } = e.target;

    if (id === "securityCode") {
      if (value.length > 4) return;
    }
    if (id === "cardNumber") {
      if (value.length > 16) return;
    }

    setFormData({ ...formData, [id]: value });
  };

  const validate = () => {
    let newErrors = {};

    if (!formData.address) {
      newErrors.address = "Address is required";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email address is invalid";
    }

    if (!formData.cardNumber) {
      newErrors.cardNumber = "Card number is required";
    } else if (formData.cardNumber.replace(/\s+/g, "").length !== 16) {
      newErrors.cardNumber = "Card number must be 16 digits";
    }

    if (!formData.expiryDate) {
      newErrors.expiryDate = "Expiry date is required";
    } else if (!/^\d{2}\/\d{2}$/.test(formData.expiryDate)) {
      newErrors.expiryDate = "Expiry date is invalid";
    }

    if (!formData.securityCode) {
      newErrors.securityCode = "Security code is required";
    } else if (
      formData.securityCode.length < 3 ||
      formData.securityCode.length > 4
    ) {
      newErrors.securityCode = "Security code must be 3 or 4 digits";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form submitted successfully");
    } else {
      console.log("Form validation failed");
    }
  };

  return (
    <div id="contact" className="pb-14 pt-5 md:pb-32 z-[2]  lg:pt-36 relative">
      <div className="container max-w-[1164px] relative ">
        <h1
          data-aos="zoom-in"
          className="text-2xl2 lg:text-5xl font-light   leading-8 md:leading-xl1 text-darkBlue mb-2 text-center"
        >
          Create your <span className="font-extrabold">account</span>
        </h1>
        <p
          data-aos="zoom-in"
          className="text-sm md:text-base px-9 md:px-0 font-normal mx-auto max-w-[472px] text-center pb-0 leading-5 md:leading-6 text-darkGray  "
        >
          Join now and protect your family's phones
        </p>
        <div className="flex flex-row items-center flex-wrap lg:pt-[72px] sm:pt-[50px] pt-[33.7px] gap-5 lg:gap-[37px] xl:gap-0">
          <div
            data-aos="zoom-in"
            className="md:w-5/12  w-full flex flex-col justify-start items-start  ps-3 lg:ps-5 xl:ps-0"
          >
            <p className="leading-lg1 text-darkBlue sm:text-3xl2 text-2xl font-light mb-[26px]">
              Get a <span className="font-extrabold">24 hour</span> trial!
            </p>
            <div className="flex flex-col gap-6 md:gap-[30px] pb-10">
              {AccountData.map((account, index) => (
                <div key={index} className="flex items-center gap-5">
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
            <div className="sm:p-[18px]  p-6 rounded-xl shadow-[0px_0px_9.5px_0px_#00000014] max-md:mx-auto lg:max-w-[424px] max-w-[560px]">
              <p className="text-center px-2 md:px-0 sm:text-base text-sm leading-normal font-normal  text-darkGray">
                Terms: Users must be 16 or over. Pricing options are shown on
                the payment page. Create an account to start a 24 hour trial
                with full access to all our tools. The service can be cancelled
                by the user at any time from within their account.
                <Link className="text-skyBlue ms-1 cursor-pointer">
                  View full terms.
                </Link>
              </p>
            </div>
          </div>
          <div className="xl:w-7/12 xl:-ms-4 md:w-6/12 px-3 z-20 md:px-0 relative  w-full">
            <div
              data-aos="zoom-in"
              className="pb-9 border border-solid  z-20 relative shadow-[0px_16px_25.3px_0px_#00000014] rounded-xl"
            >
              <div className="bg-darkBlue px-5 relative  z-30 py-6  md:py-5 rounded-tl-xl  rounded-tr-xl flex justify-between">
                <p className="capitalize text-white lg:text-3xl2 text-2xl leading-sm1  flex gap-3 items-center">
                  <Debitdot />
                  Debit/Credit Card
                </p>
                <div className="flex sm:gap-[34px] md:gap-2 lg:gap-[6px] items-center">
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
              <form
                className="sm:pt-[30px] pt-[42px] sm:px-6 px-2"
                onSubmit={handleSubmit}
              >
                <div className="mb-5">
                  <label className="capitalize text-darkBlue font-normal sm:text-base text-sm  leading-normal ">
                    Your Address
                  </label>
                  <div className="border border-solid border-lightBlueEb max-sm:h-[45px] bg-lightGrayFA  rounded flex items-center mt-1.5 md:mt-2">
                    <div className="px-3 py-[14px] bg-lightGrayED flex items-center justify-center">
                      <AddressIcon />
                    </div>
                    <label htmlFor="address"></label>
                    <input
                      id="address"
                      type="text"
                      placeholder="Address Line 1"
                      value={formData.address}
                      onChange={handleInputChange}
                      className="sm:px-[14px]  pl-5 placeholder:text-darkBlue placeholder:font-normal placeholder:sm:text-base placeholder:text-sm font-normal sm:text-base text-sm text-darkBlue leading-normal w-full outline-none bg-transparent"
                    />
                  </div>
                  {errors.address && (
                    <p className="mt-1 text-red-600 sm:text-base text-sm  font-normal leading-normal">
                      {errors.address}
                    </p>
                  )}
                </div>

                <div className="mb-5">
                  <label className="capitalize text-darkBlue font-normal sm:text-base text-sm  leading-normal ">
                    Email Address
                  </label>
                  <div className="border border-solid border-lightBlueEb max-sm:h-[45px] bg-lightGrayFA  rounded flex items-center mt-1.5 md:mt-2">
                    <div className="px-3 py-[14px] bg-lightGrayED flex items-center justify-center">
                      <Email />
                    </div>
                    <label htmlFor="email"></label>
                    <input
                      id="email"
                      type="text"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="sm:px-[14px] pl-5  capitalize placeholder:text-darkBlue placeholder:font-normal placeholder:sm:text-base placeholder:text-sm font-normal sm:text-base text-sm  text-darkBlue leading-normal w-full outline-none bg-transparent"
                    />
                  </div>
                  {errors.email && (
                    <p className="mt-1 text-red-600 sm:text-base text-sm  font-normal leading-normal">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div className="mb-5">
                  <label className="capitalize text-darkBlue font-normal sm:text-base text-sm leading-normal ">
                    Card Number (Visa or Mastercard)
                  </label>
                  <div className="border border-solid border-lightBlueEb max-sm:h-[45px] bg-lightGrayFA  rounded flex items-center mt-1.5 md:mt-2">
                    <div className="px-3 py-[14px] bg-lightGrayED flex items-center justify-center">
                      <Valid />
                    </div>
                    <label htmlFor="cardNumber"></label>
                    <input
                      id="cardNumber"
                      type="text"
                      pattern="\d{16}"
                      placeholder="Valid Card Number"
                      value={formData.cardNumber}
                      onChange={handleInputChange}
                      className="sm:px-[14px] pl-5 placeholder:text-darkBlue placeholder:font-normal placeholder:sm:text-base placeholder:text-sm font-normal sm:text-base text-sm text-darkBlue leading-normal w-full outline-none bg-transparent"
                    />
                  </div>
                  {errors.cardNumber && (
                    <p className="mt-1 text-red-600 sm:text-base text-sm  font-normal leading-normal">
                      {errors.cardNumber}
                    </p>
                  )}
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
                      <label htmlFor="expiryDate"></label>
                      <InputMask
                        id="expiryDate"
                        mask="99/99"
                        placeholder="MM/YY"
                        value={formData.expiryDate}
                        onChange={handleInputChange}
                        className="sm:px-[14px] pl-5 placeholder:text-darkBlue placeholder:font-normal placeholder:sm:text-base !placeholder:text-sm capitalize font-normal sm:text-base text-sm text-darkBlue leading-normal w-full outline-none bg-transparent"
                      />
                    </div>
                    {errors.expiryDate && (
                      <p className="mt-1 text-red-600 sm:text-base text-sm  font-normal leading-normal">
                        {errors.expiryDate}
                      </p>
                    )}
                  </div>

                  <div className="lg:max-w-[307px] w-full">
                    <label className="capitalize text-darkBlue font-normal sm:text-base text-sm leading-normal ">
                      Card Security Code
                    </label>
                    <div className="border border-solid border-lightBlueEb max-sm:h-[45px] bg-lightGrayFA   rounded flex items-center mt-1.5 md:mt-2">
                      <div className="px-3 py-[14px] bg-lightGrayED flex items-center justify-center">
                        <SecurityCode />
                      </div>
                      <label htmlFor="securityCode"></label>
                      <input
                        id="securityCode"
                        type="number"
                        maxLength={4}
                        placeholder="E.x @ 0123"
                        value={formData.securityCode}
                        onChange={handleInputChange}
                        className="sm:px-[14px] pl-5  placeholder:text-darkBlue placeholder:font-normal placeholder:sm:text-base placeholder:text-sm capitalize font-normal sm:text-base text-sm  text-darkBlue leading-normal w-full outline-none bg-transparent"
                      />
                    </div>
                    {errors.securityCode && (
                      <p className="mt-1 text-red-600 sm:text-base text-sm  font-normal leading-normal">
                        {errors.securityCode}
                      </p>
                    )}
                  </div>
                </div>

                <CommonBtn
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
