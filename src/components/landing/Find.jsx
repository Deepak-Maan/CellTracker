import React from 'react'
import MobileImg from '../../assets/images/landingPage/findPhoneImg.webp'
import { trackerdata } from '../common/Helper'
const Find = () => {
    return (
        <>
            <div className='lg:pt-[132px] pt-24'>
                <div className=' max-w-[1140px] mx-auto min-[1164px]:px-3 px-5'>
                    <h2 className=" text-[28px] md:text-4xl lg:text-5xl leading-8 md:leading-10 lg:leading-xl1 font-light text-darkBlue  text-center">
                        Find Anyone Anywhere <span className="font-extrabold block sm:inline"> for Under $1</span>
                    </h2>
                    <p className="font-normal text-sm sm:text-base text-darkGray leading-5 sm:leading-6 text-center max-w-[442px] mx-auto pt-2">
                        Fames tincidunt pellentesque nisl blandit at sit. Ullamcorper nisi sit elit rhoncus vestibulum fames libero id.
                    </p>
                    <div className='flex flex-wrap relative flex-row justify-center items-center pt-[31px] sm:pt-3 md:pt-14 lg:pt-[78px] pb-[34px]'>
                        <img src={MobileImg} alt="mobile-img" className='top-[50px]  lg:absolute w-[213px] h-[319px] lg:w-[256px] lg:h-[386px] translate-x-7' />
                        {trackerdata.map((data, index) => {
                            return (
                                <div className={`${index === 0 ? "sm:w-full mt-[47px] lg:mt-0 sm:justify-center max-sm:order-0 lg:justify-start lg:w-1/2 block" : index === 1 ? "md:justify-end max-sm:order-1 sm:mt-6 lg:mt-0 mt-[18px]" : index === 2 ? "mt-[18px] sm:mt-6 max-sm:order-0 sm:ps-5 lg:ps-0" : index === 3 ? "md:justify-end max-sm:order-3 sm:mt-6 mt-[18px]" : index === 4 ? "sm:ps-5 lg:justify-center flex order-5 lg:pr-5 mt-[18px] sm:mt-6 lg:mt-[51px]" : ""} max-md:justify-center w-full h-[156px] flex sm:w-1/2 pr-1`}>
                                    <div className="flex items-center pr-4 gap-[14px] w-full h-[152px] sm:min-h-[156px] max-w-[376px] rounded border border-black border-opacity-10">
                                        <div className="sm:min-w-[75px] sm:h-[70px] min-w-[61px] min-h-[57px] relative min-[1140px]:left-[-.5px] left-[-1.5px] border-l-[1px] border-l-black border-opacity-10 bg-lightOffBlue flex justify-center items-center">
                                            {data.img}
                                        </div>
                                        <p className=' font-normal text-black text-lg leading-[29.92px] lg:text-xl md:leading-8  max-w-[269px]'>{data.description}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Find