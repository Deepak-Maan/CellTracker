import workitMobile from "../../assets/images/homePage/workitMobile.webp";
import { workitData } from "../common/Helper";
import { LocationEllp } from "../common/Icons";
import SameBtn from "../common/SameBtn";

const Workit = () => {
  return (
    <div id="Work" className="pb-14 pt-5 md:pb-32 lg:pt-12 relative">
      <div className="container max-w-[1164px] relative z-20 ">
        <h1 className=" text-2xl2 lg:text-5xl font-light   leading-8 md:leading-xl1 text-darkBlue mb-2 text-center">
          How it <span className=" font-extrabold">works</span>
        </h1>
        <p className="text-sm md:text-base px-9 md:px-0 font-normal mx-auto max-w-[472px] text-center pb-0 leading-5 md:leading-6 text-darkGray  mb-8">
          Fames tincidunt pellentesque nisl blandit at sit. Ullamcorper nisi sit
          elit rhoncus vestibulum fames libero id.
        </p>
        <div className="flex flex-row justify-center pt-14 items-center flex-wrap">
          <div className="lg:w-1/2  flex justify-center w-full ">
            <img
              className="md:max-w-[680px] relative z-20 xl:-ms-20  2xl:-ms-12 md:max-h-[626px]"
              src={workitMobile}
              alt="workitMobile"
            />
            <div className="absolute top-[55%] left-[-4%] linear_bg benefits_bubble_bg translate-y-[-50%] z-10 opacity-[10%] lg:w-[570px] lg:h-[490px]"></div>
            <div className="absolute top-[55%] left-[-4%] linear_bg benefits_bubble_bg_2 translate-y-[-50%] z-10 opacity-[10%] lg:w-[570px] lg:h-[490px]"></div>
          </div>
          <div className="lg:w-1/2 flex px-3 md:px-0 pt-10 md:pt-0 flex-col justify-center items-center  w-full ">
            {workitData.map((obj, index) => (
              <div className="p-5   border hover:border max-w-[536px] mb-[18px] border-lightGray2  rounded-xl h-[303px] md:h-auto">
                <div className="relative">
                  <span className="relative z-20">{obj.Icon}</span>
                  <div className="absolute top-[55%] left-[-2%]  bg-lightBlue benefits_bubble_bg translate-y-[-50%] z-10  w-[48px] h-[41px]"></div>
                </div>
                <p className=" text-xl md:text-2xl mt-1 text-darkBlue leading-7 font-normal pb-0 mb-1.5">
                  {obj.Heading}
                </p>
                <p className="text-sm md:text-base font-normal leading-6  text-darkGray pb-0">
                  {obj.Description}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col px-3 md:px-0 sm:flex-row justify-center pt-10 gap-3 items-center">
          <SameBtn
            className=" bg-darkBlue text-white max-sm:w-full"
            btnName="Create your Account"
          />
          <SameBtn
            className="  bg-white  text-darkBlue !border !border-darkBlue max-sm:w-full"
            btnName="Got more Question?"
          />
        </div>
      </div>
      <span className="absolute left-0 top-[15%]">
        <LocationEllp />
      </span>
      <span className="absolute right-0 rotate-180 top-[-15%]">
        <LocationEllp />
      </span>
    </div>
  );
};

export default Workit;
