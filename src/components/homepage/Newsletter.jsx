import PhoneNews from "../../assets/images/homePage/findPhone.webp";
import { LocationEllp } from "../common/Icons";
import SameBtn from "../common/SameBtn";

const Newsletter = () => {
  return (
    <div id="FoundPhone" className="pt-16 relative mt-14 px-3 md:px-6 lg:px-0">
      <div className="  container max-w-[1164px] pt-20 md:pt-0">
        <div className="flex rounded-xl  lg:max-h-[391px] xl:bg-cover bg-center max-sm:h-[500px] bg-no-repeat bg-newsBg flex-row  flex-wrap items-center lg:pb-0 md:pb-20 sm:pb-16 pb-[46px]">
          <div
            data-aos="zoom-in"
            className="lg:w-[53%] w-full flex justify-center"
          >
            <img
              className="lg:max-w-[609px] sm:max-w-[445px] min-[360px]:max-w-[370px] lg:h-[689px] sm:h-[507px] min-[370px]:h-[420px] h-[380px] md:w-full -translate-y-[37%] md:-translate-y-[24%] lg:-mb-[281px] sm:-mb-[110px] -mb-[110px]"
              src={PhoneNews}
              alt="newsletter_Phone"
            />
          </div>
          <div
            data-aos="zoom-in"
            className=" lg:w-[36%] w-full flex -mt-20 md:mt-0 flex-col items-center"
          >
            <h2 className="text-white text-center lg:pt-2 font-light leading-xl1 text-2xl2 md:text-5xl mb-3 md:mb-2">
              Find your <span className="font-extrabold">phone</span>
            </h2>
            <p className=" text-sm md:text-base font-normal px-10 lg:px-0 text-center mx-auto mb-7 lg:mb-8 leading-6 text-white pb-0 max-w-[402px]">
              Fames tincidunt pellentesque nisl blandit at sit. Ullamcorper nisi
              sit elit rhoncus vestibulum fames libero id.
            </p>
            <SameBtn
              className=" shadow-[inset_18rem_0_0_0_#fff] hover:shadow-[inset_0_0_0_0] hover:border hover:border-darkBlue  duration-500 bg-white w-[266px] md:w-auto px-10  text-darkBlue "
              btnName="Start Now"
            />{" "}
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
