import React from 'react'
import { WorksData } from '../common/Helper'
import { DottedLine, LocationEllp } from '../common/Icons'

const Work = () => {
    return (
        <div id='howWork' className='relative'>
            <div className='absolute left-0 bottom-[-2%] md:bottom-0'>
                <LocationEllp />
            </div>
            <div className="container mx-auto px-6 md:px-3 max-w-[1164px] pt-[94px] sm:pt-[98px] pb-[94px]">
                <h2 data-aos="zoom-in" className='font-light  text-[28px] md:text-4xl lg:text-5xl leading-8 md:leading-10 lg:leading-xl1 text-darkBlue text-center'>How it <span className="font-extrabold">works</span></h2>
                <p data-aos="zoom-in" className='sm:text-base text-sm font-normal leading-5 sm:leading-7 text-darkGray text-center mx-auto max-w-[472px] pt-2 pb-14'>Fames tincidunt pellentesque nisl blandit at sit. Ullamcorper nisi sit elit rhoncus vestibulum fames libero id.</p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-y-[200px]">
                    {WorksData.map((data, index) => (
                        <div data-aos="zoom-in" key={index} className={`max-w-[267px] relative ${index === 0 ? "lg:mr-auto mx-auto" : index === 1 ? "lg:mx-auto mx-auto" : index === 2 ? "lg:ml-auto mx-auto sm:col-span-2 lg:col-span-1" : ""}`}>
                            <div className={`absolute h-[14px] rotate-90 lg:rotate-0 sm:hidden lg:flex sm:top-[10%] ${index === 2 ? "lg:hidden !hidden" : index === 1 ? "bottom-[-55%] right-[20%] sm:right-[-60%] " : index === 0 ? "bottom-[-67%] right-[20%] sm:right-[-50%] " : ""}`}>
                                <DottedLine />
                            </div>
                            <div className={`md:w-[75px] w-[61px] h-[57px] md:h-[70px] flex items-center bg-lightOffBlue justify-center mx-auto `}>
                                {data.Icon}
                            </div>
                            <p className='pt-[14px] text-center text-xl sm:text-2xl font-normal leading-6 sm:leading-7 pb-[6px]'>{data.Heading}</p>
                            <p className='text-center text-sm sm:text-base font-normal leading-5 sm:leading-6 max-w-[241px] mx-auto'>{data.Description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Work
