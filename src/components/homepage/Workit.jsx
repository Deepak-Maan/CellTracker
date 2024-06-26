import workitMobile from "../../assets/images/homePage/workitMobile.webp";
import { workitData } from "../common/Helper";
import { LocationEllp } from "../common/Icons";
import CommonBtn from "../common/CommonBtn";

const Workit = () => {
  return (
    <div
      id="Work"
      className="pb-24 pt-5 md:pb-36 lg:pb-14 xl:pb-36 lg:pt-12 relative"
    >
      <div className="container max-w-[1164px] relative z-20 ">
        <h1
          data-aos="zoom-in"
          className="text-2xl2 lg:text-5xl font-light   leading-8 md:leading-xl1 text-darkBlue mb-2 text-center"
        >
          How it <span className="font-extrabold">works</span>
        </h1>
        <p
          data-aos="zoom-in"
          className="text-sm md:text-base px-9 md:px-0 font-normal mx-auto max-w-[472px] text-center pb-0 leading-5 md:leading-6 text-darkGray  mb-8"
        >
          Fames tincidunt pellentesque nisl blandit at sit. Ullamcorper nisi sit
          elit rhoncus vestibulum fames libero id.
        </p>
        <div className="flex flex-row justify-center pt-4 md:pt-14  items-center flex-wrap">
          <div
            data-aos="zoom-in"
            className="lg:w-1/2 flex justify-center w-full "
          >
            <img
              className="lg:max-w-[580px] xl:max-w-[710px]  relative z-20 xl:-ms-20  2xl:-ms-12 md:max-h-[656px] max-sm:min-h-[370px] "
              src={workitMobile}
              alt="workitMobile"
            />
            <div className="absolute top-[55%] md:left-[17%] lg:left-[2%] xl:left-[-6%] linear_bg benefits_bubble_bg translate-y-[-57%] sm:translate-y-[-55%] md:translate-y-[-86%] lg:translate-y-[-58%] z-10 opacity-[10%] w-[320px] h-[296px] sm:w-[420px] sm:h-[446px] md:w-[520px] md:h-[360px] lg:w-[470px] lg:h-[380px] xl:w-[570px] xl:h-[490px]"></div>
            <div className="absolute top-[55%] md:left-[17%] lg:left-[2%] xl:left-[-6%] linear_bg benefits_bubble_bg_2 translate-y-[-57%] sm:translate-y-[-55%] md:translate-y-[-86%] lg:translate-y-[-58%] z-10 opacity-[10%] w-[320px] h-[296px] sm:w-[420px] sm:h-[446px] md:w-[520px] md:h-[360px] lg:w-[470px] lg:h-[380px] xl:w-[570px] xl:h-[490px]"></div>
          </div>
          <div className="lg:w-1/2 w-full flex px-3 md:px-3 pt-10 md:pt-0 flex-col sm:flex-row lg:flex-col gap-3 justify-center items-center ">
            {workitData.map((obj, index) => (
              <div
                key={index}
                data-aos="zoom-in"
                className="p-5 border hover:border w-full  shadow-[0px_16px_25.3px_0px_#00000014]  hover:border-darkBlue duration-500 md:max-w-[536px] mb-[18px] border-lightGray2  rounded-xl h-[303px] sm:h-[310px] md:h-[330px] lg:h-auto"
              >
                <div className="relative">
                  <span className="relative z-20 ">{obj.Icon}</span>
                  <div className="absolute top-[55%] left-[-2%]  bg-lightBlue benefits_bubble_bg translate-y-[-50%] z-10  w-[38px] h-[30px]  md:w-[48px] md:h-[41px]"></div>
                </div>
                <p className="text-xl md:text-2xl mt-[18px] text-darkBlue leading-7 font-normal pb-0 mb-1.5">
                  {obj.Heading}
                </p>
                <p className="text-sm md:text-base font-normal leading-5 md:leading-6  text-darkGray pb-0">
                  {obj.Description}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div
          data-aos="zoom-in"
          className="flex flex-col px-3 md:px-0 sm:flex-row justify-center pt-5 md:pt-10 gap-3 items-center"
        >
          <CommonBtn
            className="duration-500 bg-darkBlue border border-darkBlue hover:text-darkBlue hover:bg-white hover:shadow-[0px_1px_17.3px_1px_darkBlue] hover:border-white text-white max-sm:w-full"
            btnName="Create your Account"
          />
          <CommonBtn
            className="duration-500 bg-white hover:text-darkBlue hover:bg-white hover:shadow-[0px_1px_17.3px_1px_darkBlue]  !hover:border-white   text-darkBlue !border !border-darkBlue max-sm:w-full"
            btnName="Got more Question?"
          />
        </div>
      </div>
      <span className="absolute left-0 top-[10%] md:top-[15%]">
        <LocationEllp />
      </span>
      <span className="absolute z-30 right-0 rotate-180 top-[-7%]">
        <LocationEllp />
      </span>
      <span className="absolute z-30 right-0 rotate-180 bottom-[4%]">
        <LocationEllp />
      </span>
    </div>
  );
};

export default Workit;
