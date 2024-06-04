import React from "react";
import HomeHeader from "../components/homepage/HomeHeader";
import Advantages from "../components/homepage/Advantages";
import Newsletter from "../components/homepage/Newsletter";
import Footer from "../components/homepage/Footer";
import Workit from "../components/homepage/Workit";

const HomePage = () => {
  return (
    <>
      <HomeHeader />
      <Advantages/>
      <Workit/>
      <Newsletter/>
      <Footer/>
    </>
  );
};

export default HomePage;
