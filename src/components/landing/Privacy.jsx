import React from 'react'
import { PrivaryData } from '../common/Helper'

const Privacy = () => {
    return (
        <div>
            <div className="container max-w-[1164px] mx-auto px-3 pt-[76px] ">
                <h2 className=' text-[28px] md:text-4xl lg:text-5xl leading-8 md:leading-10 lg:leading-xl1 font-light text-darkBlue text-center  pb-2'>Universal<span className=" font-extrabold"> Privacy</span></h2>
                <p className=' text-sm sm:text-base font-normal leading-5 sm:leading-6 max-w-[472px] text-darkGray pb-[34px] sm:pb-14 mx-auto text-center'>Fames tincidunt pellentesque nisl blandit at sit. Ullamcorper nisi sit elit rhoncus vestibulum fames libero id.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                    {PrivaryData.map((data, index) => (
                        <div className='bg-lightGray p-[1px] lg:max-w-[267px] h-full hover:bg-gradient-to-t from-[#00B5D8] to-[#000080] rounded-[4px]'>
                            <div key={index} className=" lg:max-w-[267px] h-full group bg-white hover:bg-gradient-to-tr from-[#00B5D8] to-[#000080] rounded-[4px] pb-[13px] pt-7 ">
                                <div className='w-[75px] border-l border-lightGray -ms-[1px] h-[70px] bg-lightOffBlue group-hover:bg-white flex items-center justify-center'>
                                    <div>{data.Icon}</div>
                                </div>
                                <p className='ps-3 group-hover:text-white duration-300 text-black text-xl sm:text-2xl font-normal leading-7 max-w-[241px] pt-[14px] pb-[6px]'>{data.Heading}</p>
                                <p className='ps-3 group-hover:text-white duration-300 text-sm sm:text-base font-normal text-darkGray leading-6'>{data.Description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Privacy
