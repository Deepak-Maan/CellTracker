// Footer.js
import React from "react";
import { FooterLogo } from "../common/Icons";
import { Link } from "react-router-dom";

const Footer = ({ footerLinks, socialMediaLinks }) => {
    return (
        <div className="container xl:max-w-[1164px] px-6 md:px-3 pt-[58px] sm:pt-[60px] lg:pt-[102px]">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center pb-[58px] sm:pb-12 border-b border-darkBlue justify-between gap-[38px] lg:gap-0">
                <div className="flex justify-center lg:justify-start">
                    <FooterLogo />
                </div>
                <div>
                    <ul className="flex gap-6 justify-center">
                        {footerLinks.map(({ href, label }) => (
                            <li key={href}>
                                <Link
                                    to={href}
                                    className="text-sm sm:text-base font-normal leading-5 sm:leading-6 text-darkGray relative z-[1] after:w-0 after:bg-darkGray after:h-[1.5px] after:bottom-0 after:left-[50%] after:duration-300 after:rounded-md after:absolute hover:after:left-0 hover:after:w-full"
                                >
                                    {label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="flex gap-[18px] ps-0 justify-center lg:justify-end sm:col-span-2 lg:col-span-1">
                    <ul className="flex gap-[18px] justify-center ps-0 lg:justify-end">
                        {socialMediaLinks.map(({ href, label, Icon }) => (
                            <li key={href} className="hover:-translate-y-1 duration-300">
                                <Link
                                    to={href}
                                    target="_blank"
                                    aria-label={label}
                                    rel="noopener noreferrer"
                                >
                                    <Icon />
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <p className="text-center text-xs sm:text-sm leading-[18px] sm:leading-5 font-normal py-[18px]">
                ©{new Date().getFullYear()} Cell Tracker. All Rights Reserved.
            </p>
        </div>
    );
};

export default Footer;
