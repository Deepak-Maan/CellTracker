import React, { useEffect } from "react";
import { Logo } from "../common/Icons";

function Preload() {
  useEffect(() => {
    // Add the class to disable scrolling
    document.body.classList.add("overflow-hidden");

    // Set a timeout to hide the preloader after 3 seconds
    const timeout = setTimeout(() => {
      document.getElementById("Preloader").classList.add("hidden");
      document.body.classList.remove("overflow-hidden");
    }, 3000);

    // Cleanup function to remove the class and timeout if the component unmounts
    return () => {
      clearTimeout(timeout);
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  return (
    <>
      <div
        id="Preloader"
        className="h-screen bg-darkBlue flex flex-col gap-4 justify-center items-center fixed top-0 left-0 w-full z-30"
      >
        <span className="animate-bounce mb-5">
          <Logo />
        </span>
        <div className="loader w-[50px] h-[50px] relative border-[5px] border-solid border-white border-t-skyBlue rounded-[50%] animate-spin"></div>
      </div>
    </>
  );
}

export default Preload;
