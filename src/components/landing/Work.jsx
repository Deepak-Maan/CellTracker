import React from 'react'
import { WorksData } from '../common/Helper'
import { DottedLine } from '../common/Icons'

const Work = () => {
    return (
        <div>
            <div className="container mx-auto px-3 max-w-[1164px]">
                <h2 className='font-light text-5xl leading-xl1 text-darkBlue text-center'>How it <span className="font-extrabold">works</span></h2>
                <p className='text-base font-normal leading-7 text-darkGray text-center mx-auto max-w-[472px] pt-2 pb-14'>Fames tincidunt pellentesque nisl blandit at sit. Ullamcorper nisi sit elit rhoncus vestibulum fames libero id.</p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-y-[200px]">
                    {WorksData.map((data, index) => (
                        <div key={index} className={`max-w-[267px] relative ${index === 0 ? "lg:mr-auto mx-auto" : index === 1 ? "lg:mx-auto mx-auto" : index === 2 ? "lg:ml-auto mx-auto sm:col-span-2 lg:col-span-1" : ""}`}>
                            <div className={`absolute h-[14px] rotate-90 lg:rotate-0 sm:hidden lg:flex right-[20%] sm:right-[-50%] bottom-[-46%] sm:top-[10%] ${index === 2 ? "lg:hidden !hidden" : ""}`}>
                                <DottedLine />
                            </div>
                            <div className={`w-[75px] h-[70px] flex items-center bg-lightOffBlue justify-center mx-auto `}>
                                {data.Icon}
                            </div>
                            <p className='pt-[14px] text-center text-2xl font-normal leading-7 pb-[6px]'>{data.Heading}</p>
                            <p className='text-center text-base font-normal leading-6 max-w-[241px] mx-auto'>{data.Description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Work
