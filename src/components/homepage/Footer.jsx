import React from 'react'
import { Facebook, Instagram, Linkedin, Logo, Twitter } from '../common/Icons'

const Footer = () => {
    return (
        <div className='container xl:max-w-[1164px] px-3 pt-[52px] sm:pt-[60px] lg:pt-[102px]'>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center pb-[58px] sm:pb-12 border-b border-darkBlue justify-between gap-[38px] lg:gap-0">
                <div className='flex justify-center lg:justify-start'>
                    <Logo />
                </div>
                <div>
                    <ul className='flex gap-6 justify-center '>
                        <li><a href="" className='text-base font-normal leading-6 text-darkGray'>Help</a></li>
                        <li><a href="" className='text-base font-normal leading-6 text-darkGray'>Contact us</a></li>
                        <li><a href="" className='text-base font-normal leading-6 text-darkGray'>Found Phone</a></li>
                    </ul>
                </div>
                <div className='flex gap-[18px] justify-center lg:justify-end sm:col-span-2 lg:col-span-1'>
                    <Linkedin />
                    <Instagram />
                    <Facebook />
                    <Twitter />
                </div>
            </div>
            <p className='text-center text-sm leading-5 font-normal pt-[18px]'>©{new Date().getFullYear()} Cell Tracker. All Rights Reserved.</p>
        </div>
    )
}

export default Footer
