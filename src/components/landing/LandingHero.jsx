import React from 'react'
import mobileImg from "../../assets/images/landingPage/headerMobileImg.png"
const LandingHero = () => {
    return (
        <div>
            <div className="container mx-auto px-3 pt-[83px] max-w-[1164px]">
                <div className="grid grid-cols-2">
                    <div>
                        <h1 className='text-xxl leading-xxl font-extrabold text-white'><span className="text-nowrap">Locate any phone,</span> <span className="font-bold text-nowrap">anywhere, anytime</span></h1>
                        <p className='text-base font-normal leading-6 text-white pt-2'>Lorem ipsum dolor sit amet consectetur. Nisl vitae arcu volutpat nunc cursus. Lacus ornare aliquet condimentum elementum elementum nisl nibh sed. Egestas aliquam id quam nunc.</p>
                    </div>
                    <div>
                        <div className=''>

                        </div>
                        <img src={mobileImg} alt="mobineImg" className='w-full' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingHero
