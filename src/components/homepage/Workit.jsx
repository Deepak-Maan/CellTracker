import workitMobile from "../../assets/images/homePage/workitMobile.webp";
import { workitData } from "../common/Helper";
import SameBtn from "../common/SameBtn";

const Workit = () => {
  return (
    <div className="pb-14">
      <div className="container max-w-[1164px] relative z-20 ">
        <h1 className="text-5xl font-light  leading-xl1 text-darkBlue mb-2 text-center">
          How it <span className=" font-extrabold">works</span>
        </h1>
        <p className="text-base font-normal mx-auto max-w-[472px] text-center pb-0 leading-6 text-darkGray  mb-8">
          Fames tincidunt pellentesque nisl blandit at sit. Ullamcorper nisi sit
          elit rhoncus vestibulum fames libero id.
        </p>
        <div className="flex flex-row justify-center items-center flex-wrap">
          <div className="lg:w-1/2  w-full ms-[-40px]">
            <img className="w-full" src={workitMobile} alt="workitMobile" />
          </div>
          <div className="lg:w-1/2  w-full ">
            {workitData.map((obj, index) => (
              <div className="p-5   border hover:border max-w-[536px] mb-[18px] border-lightGray2  rounded-xl h-[303px] md:h-auto">
                <span className="">{obj.Icon}</span>
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
        <div className="flex flex-col md:flex-row justify-center pt-10 gap-3 items-center">
          <SameBtn text="Create your Account" />
          <SameBtn text="Got more Question?" />
        </div>
      </div>
    </div>
  );
};

export default Workit;
