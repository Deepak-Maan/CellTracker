import CommonBtn from "../common/CommonBtn";
import { AdvantageData } from "../common/Helper";
import { LocationEllp } from "../common/Icons";
const Advantages = () => {
  return (
    <div id="Advantage" className="pb-14 pt-6  md:pt-[18px] relative">
      <div className="container max-w-[1164px] relative z-20">
        <h1
          data-aos="zoom-in"
          className="text-2xl2  lg:text-5xl font-light leading-8 lg:leading-xl1 text-darkBlue mb-2 text-center"
        >
          Advantages of <span className="font-extrabold">Celltracker</span>
        </h1>
        <p
          data-aos="zoom-in"
          className="text-sm md:text-base font-normal px-8 md:px-0 mx-auto max-w-[472px] text-center pb-0 leading-6 text-darkGray mb-7"
        >
          Fames tincidunt pellentesque nisl blandit at sit. Ullamcorper nisi sit
          elit rhoncus vestibulum fames libero id.
        </p>
        <div
          data-aos="zoom-in"
          className="flex flex-row justify-center flex-wrap"
        >
          {AdvantageData.map((advantage, index) => (
            <div
              key={index}
              className={`w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-3 sm:px-[9px] mt-[18px] sm:mt-6 ${
                index === 1 || index === 3 ? " lg:translate-y-[10%]" : ""
              }`}
            >
              <div
                className={`w-full sm:w-full xl:w-[271px] mx-auto md:mx-0 h-full min-h-[184px] xl:h-[271px] sm:max-h-[253px] p-[20px] border-[2px] border-solid hover:border-darkBlue duration-300 border-[#03045E1A] shadow-[0px_16px_25.3px_0px_#00000014] rounded-xl`}
              >
                <div className="relative mb-[26px] md:mb-3">
                  <span className="relative z-20">{advantage.icon}</span>
                  <div className="absolute top-[51%] left-[-3.6%] bg-lightBlue benefits_bubble_bg translate-y-[-59%] z-10 w-[38px] h-[30px]  md:w-[48px] md:h-[41px]"></div>
                </div>
                <p className="font-normal  text-xl lg:text-2xl leading-6 md:leading-[28.8px] text-darkBlue ">
                  {advantage.title}
                </p>
                <p className="text-sm md:text-base leading-6 font-normal text-darkGray  mt-1.5">
                  {advantage.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div
          data-aos="zoom-in"
          className="flex justify-center px-3 md:px-0 pt-1 lg:pt-18"
        >
          <CommonBtn
            className="max-sm:w-full bg-darkBlue text-white  border mt-10 xl:mt-20 2xl:mt-20 border-darkBlue hover:text-darkBlue hover:bg-white hover:shadow-[0px_1px_17.3px_1px_darkBlue] duration-500 hover:border-white"
            btnName="Create your Account"
          />{" "}
        </div>
      </div>
      <span className="absolute left-0 top-1 md:top-[9%]">
        <LocationEllp />
      </span>
    </div>
  );
};

export default Advantages;
