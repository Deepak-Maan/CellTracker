import React, { useState } from 'react'
import mobileImg from "../../assets/images/landingPage/headerMobileImg.png"
import { Location, LocationEllipse, Logo } from '../common/Icons'
import { navData } from '../common/Helper'
const LandingHero = () => {
    const [navBar, setnavBar] = useState(false);
    function showNav() {
        setnavBar(!navBar);
    }
    if (navBar) {
        document.body.classList.add("max-md:overflow-hidden");
    } else {
        document.body.classList.remove("max-md:overflow-hidden");
    }
    return (
        <div>
            <div className="container mx-auto px-3 pt-[83px] max-w-[1164px]">
                <nav>
                    <div className="max-w-[1164px] px-6 sm:px-3 mx-auto pt-[27px]">
                        <div className="flex justify-between items-center">
                            <a href="/" className="relative z-[4]" aria-label="logo">
                                {navBar ? <Logo /> : <Logo />}
                            </a>
                            <ul
                                className={`flex items-center gap-[35px] duration-300 max-md:fixed max-md:w-full max-md:h-full max-md:justify-start max-md:pt-[121px] max-md:flex-col max-md:z-[3] max-md:top-0 max-md:left-[-105%] max-md:p-[30px] max-md:bg-white ${navBar && "!left-0"
                                    }`}
                            >
                                {navData.map((obj, i) => (
                                    <li key={i}>
                                        <a
                                            href="/"
                                            className="text-black md:text-white  text-base leading-[26.59px] font-normal relative z-[1] after:w-0 after:bg-white after:h-[2px] after:bottom-1 after:left-[50%] after:duration-300 after:rounded-md after:absolute hover:after:left-0 hover:after:w-full"
                                        >
                                            {obj.name}
                                        </a>
                                    </li>
                                ))}
                                <button className=" md:hidden bg-dark-blue text-base leading-[26.59px] font-semibold text-white py-4 px-7 rounded-[4px] hover:text-dark-blue hover:bg-white duration-300 relative border-transparent border-2 w-full hover:border-dark-blue z-[1] after:absolute after:h-full after:w-1 after:top-0 after:skew-x-12 after:blur-[3px] overflow-hidden after:left-[-20%] after:bg-dark-blue hover:after:animate-moveToX">
                                    Log In
                                </button>
                            </ul>
                            <button className=" text-dark-blue max-md:hidden text-base leading-[26.59px] font-semibold bg-white py-[14px] md:py-4 px-7 rounded-[4px] hover:bg-dark-blue hover:text-white duration-300 relative z-[1] after:absolute after:h-full after:w-1 after:top-0 after:skew-x-12 after:blur-[3px] overflow-hidden after:left-[-20%] after:bg-white hover:after:animate-moveToX">
                                Log In
                            </button>
                            <button onClick={showNav} className="md:hidden relative z-[4]">
                                {navBar ? (
                                    <div className="flex md:hidden flex-col relative z-50 justify-between w-[18px] h-[17px] cursor-pointer">
                                        <span className="bg-black w-[11px] h-[2px] relative z-50 transition-all ease-linear duration-300 rotate-[45deg] translate-x-0 translate-y-0 -bottom-[11px]"></span>
                                        <span className="bg-black w-[11px] h-[2px] relative z-50  transition-all ease-linear duration-300 rotate-[-45deg] translate-x-0 translate-y-1 bottom-[8px]"></span>
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
                <div className="grid grid-cols-1 xl:grid-cols-2">
                    <div className='pt-[71px]'>
                        <h1 className='text-xxl leading-xxl font-extrabold text-white'><span className="xl:text-nowrap">Locate any phone,</span> <span className="font-bold xl:text-nowrap">anywhere, anytime</span></h1>
                        <p className='text-base font-normal leading-6 text-white pt-2'>Lorem ipsum dolor sit amet consectetur. Nisl vitae arcu volutpat nunc cursus. Lacus ornare aliquet condimentum elementum elementum nisl nibh sed. Egestas aliquam id quam nunc.</p>
                    </div>
                    <div className='relative xl:translate-x-20'>
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
