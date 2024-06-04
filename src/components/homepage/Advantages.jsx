import React from "react";
import SameBtn from "../common/SameBtn";

const Advantages = () => {
  return (
    <div className="pb-14">
      <div className="container relative z-20">
        <h1 className="text-5xl font-light  leading-xl1 text-darkBlue mb-2 text-center">
          Advantages of <span className=" font-extrabold">Celltracker</span>
        </h1>
        <p className="text-base font-normal mx-auto max-w-[472px] text-center pb-0 leading-6 text-darkGray  mb-12">
          Fames tincidunt pellentesque nisl blandit at sit. Ullamcorper nisi sit
          elit rhoncus vestibulum fames libero id.
        </p>
        <div className="flex flex-row flex-wrap">
          <div className="lg:w-4/12 w-full">
            {Partnerslogos.map((obj, index) => (
                <span>{obj.name}</span>
          
            ))}
          </div>
        </div>
        <div>
            <SameBtn  text="Create your Account"/>
        </div>
      </div>
    </div>
  );
};

export default Advantages;
