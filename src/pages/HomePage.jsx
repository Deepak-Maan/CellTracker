import React from "react";
import HomeHeader from "../components/homepage/HomeHeader";
import Advantages from "../components/homepage/Advantages";
import Newsletter from "../components/homepage/Newsletter";
import Footer from "../components/homepage/Footer";
import Workit from "../components/homepage/Workit";
import Companies from "../components/homepage/Compnies";

const HomePage = () => {
  return (
    <>
      <HomeHeader />
      <Advantages />
      <Workit />
      <Companies />
      <Newsletter />
      <Footer />
    </>
  );
};

export default HomePage;
