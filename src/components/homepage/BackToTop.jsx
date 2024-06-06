import { useEffect, useState } from "react";
import { BackToTopIcon } from "../common/Icons";
const BackToTop = () => {
  const [isBackToTopVisible, setIsBackToTopVisible] = useState(false);
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsBackToTopVisible(true);
      } else {
        setIsBackToTopVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <button
      onClick={scrollToTop}
      className={`fixed sm:bottom-12 bottom-4 hover:scale-110  right-4 sm:w-12 sm:h-12 w-9 h-9 bg-skyBlue shadow-[0_2px_20px_-9px_#fff] text-white flex justify-center items-center group rounded-full z-40 transition-all duration-300 ease-linear ${
        isBackToTopVisible ? " translate-y-0" : " translate-y-[200%]"
      }`}
    >
      <span className=" transition-all duration-300 group-hover:animate-bounce mt-2">
        {" "}
        <BackToTopIcon />
      </span>{" "}
    </button>
  );
};
export default BackToTop;
