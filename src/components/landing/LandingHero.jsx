import React from 'react'
import mobileImg from "../../assets/images/landingPage/headerMobileImg.png"
import { Location, LocationEllipse } from '../common/Icons'
const LandingHero = () => {
    return (
        <div>
            <div className="container mx-auto px-3 pt-[83px] max-w-[1164px]">
                <div className="grid grid-cols-2">
                    <div className='pt-[71px]'>
                        <h1 className='text-xxl leading-xxl font-extrabold text-white'><span className="text-nowrap">Locate any phone,</span> <span className="font-bold text-nowrap">anywhere, anytime</span></h1>
                        <p className='text-base font-normal leading-6 text-white pt-2'>Lorem ipsum dolor sit amet consectetur. Nisl vitae arcu volutpat nunc cursus. Lacus ornare aliquet condimentum elementum elementum nisl nibh sed. Egestas aliquam id quam nunc.</p>
                    </div>
                    <div className='relative translate-x-20'>
                        <div className=' p-2 bg-lightSky rounded-[12px] max-w-[205px] w-full absolute bottom-0 right-0 overflow-hidden'>
                            <div className="flex items-center">
                                <Location />
                                <p className=' text-lg font-normal text-darkBlue leading-8'>Geolocation found!</p>
                            </div>
                            <p className=' text-xl text-darkBlue font-semibold leading-8'>+44 633 427 390</p>
                            <p className='text-black text-sm font-normal leading-5'>3 Succession Walk, Fish Island, London E3 2RX, United Kingdom</p>
                            <p className=' text-right text-xs font-light leading-4 text-black pt-3'>June 02,2024   17:34</p>
                            <div className="-ms-[9px] -mt-5"><LocationEllipse /></div>
                        </div>
                        <img src={mobileImg} alt="mobineImg" className='w-full' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingHero
