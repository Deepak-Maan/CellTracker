import React from "react";
import {
  Facebook,
  FooterLogo,
  Instagram,
  Linkedin,
  LocationEllp,
  Twitter,
} from "../common/Icons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="relative">
      <div className="container xl:max-w-[1164px] px-3 pt-[52px] sm:pt-[60px] lg:pt-[102px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center pb-[58px] sm:pb-12 border-b border-darkBlue justify-between gap-[38px] lg:gap-0">
          <div className="flex justify-center lg:justify-start">
            <FooterLogo />
          </div>
          <div>
            <ul className="flex gap-6 justify-center">
              <li>
                <a
                  href="#Advantage"
                  className="text-sm md:text-base font-normal leading-6 text-darkGray relative z-[1] after:w-0 after:bg-darkGray after:h-[1.5px] after:bottom-0 after:left-[50%] after:duration-300 after:rounded-md after:absolute hover:after:left-0 hover:after:w-full"
                >
                  Help
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-sm md:text-base font-normal leading-6 text-darkGray relative z-[1] after:w-0 after:bg-darkGray after:h-[1.5px] after:bottom-0 after:left-[50%] after:duration-300 after:rounded-md after:absolute hover:after:left-0 hover:after:w-full"
                >
                  Contact us
                </a>
              </li>
              <li>
                <a
                  href="#Work"
                  className="text-sm md:text-base font-normal leading-6 text-darkGray relative z-[1] after:w-0 after:bg-darkGray after:h-[1.5px] after:bottom-0 after:left-[50%] after:duration-300 after:rounded-md after:absolute hover:after:left-0 hover:after:w-full"
                >
                  Found Phone
                </a>
              </li>
            </ul>
          </div>
          <div className="flex gap-[18px] justify-center lg:justify-end sm:col-span-2 lg:col-span-1">
            <ul className="flex gap-[18px] justify-center ps-0 lg:justify-end">
              <li className="hover:-translate-y-1 duration-300">
                <Link
                  to="https://www.linkedin.com/login"
                  target="_blank"
                  aria-label="linkedin"
                  rel="noopener noreferrer"
                >
                  <Linkedin />
                </Link>
              </li>
              <li className="hover:-translate-y-1 duration-300">
                <Link
                  to="https://www.instagram.com/"
                  target="_blank"
                  aria-label="instagram"
                  rel="noopener noreferrer"
                >
                  <Instagram />
                </Link>
              </li>
              <li className="hover:-translate-y-1 duration-300">
                <Link
                  to="https://www.facebook.com/login/"
                  target="_blank"
                  aria-label="facebook"
                  rel="noopener noreferrer"
                >
                  <Facebook />
                </Link>
              </li>
              <li className="hover:-translate-y-1 duration-300">
                <Link
                  to="https://x.com/login"
                  target="_blank"
                  aria-label="twitter"
                  rel="noopener noreferrer"
                >
                  <Twitter />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <p className="text-center text-xs md:text-sm leading-5 font-normal pt-[18px] pb-5 md:pb-4">
          ©{new Date().getFullYear()} Cell Tracker. All Rights Reserved.
        </p>
      </div>
      <span className="right-0 absolute bottom-16 md:bottom-6 rotate-180">
        <LocationEllp />
      </span>
    </div>
  );
};

export default Footer;
