import PhoneNews from "../../assets/images/homePage/findPhone.webp";
import { LocationEllp } from "../common/Icons";
import SameBtn from "../common/SameBtn";

const Newsletter = () => {
  return (
    <div id="FoundPhone" className="pt-16 relative mt-14 px-3 md:px-6 lg:px-0">
      <div className="  container max-w-[1164px]">
        <div className="bg-newsBg  lg:max-h-[391px]  rounded-xl bg-center  bg-no-repeat  bg-cover">
          <div className="flex flex-row flex-wrap lg:max-h-[391px] ">
            <div className="lg:w-7/12 w-full">
              <img
                className="w-[332px] sm:w-[529px] lg:translate-x-[12%] translate-y-[-42%] md:translate-y-[-15%] h-[376px] sm:h-[600px] "
                src={PhoneNews}
                alt="newsletter_Phone"
              />
            </div>
            <div className="lg:w-5/12 w-full lg:pt-14 mt-[-100px] lg:mt-0">
              <div className=" flex  -mt-16 lg:mt-0 flex-col justify-center pb-12 lg:pb-0 items-center">
                <h2 className="text-white text-center lg:pt-11 font-light leading-xl1 text-2xl2 md:text-5xl mb-3 md:mb-2">
                  Find your <span className="font-extrabold">phone</span>
                </h2>
                <p className=" text-sm md:text-base font-normal px-10 lg:px-0 text-center mx-auto mb-7 lg:mb-8 leading-6 text-white pb-0 max-w-[402px]">
                  Fames tincidunt pellentesque nisl blandit at sit. Ullamcorper
                  nisi sit elit rhoncus vestibulum fames libero id.
                </p>
                <SameBtn
                  className="  bg-white w-[266px] md:w-auto px-10  text-darkBlue "
                  btnName="Start Now"
                />{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
      <span className="left-0 hidden lg:block absolute top-40">
        <LocationEllp />
      </span>
    </div>
  );
};

export default Newsletter;
