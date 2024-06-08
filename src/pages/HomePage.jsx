import React from "react";
import HomeHeader from "../components/homepage/HomeHeader";
import Advantages from "../components/homepage/Advantages";
import Newsletter from "../components/homepage/Newsletter";
import Footer from "../components/homepage/Footer";
import Workit from "../components/homepage/Workit";
import Companies from "../components/homepage/Companies";
import BackToTop from "../components/homepage/BackToTop";
import AccountCreate from "../components/homepage/AccountCreate";

const HomePage = () => {
  return (
    <>
      <BackToTop />
      <HomeHeader />
      <Advantages />
      <Workit />
      <Companies />
      <AccountCreate/>
      <Newsletter />
      <Footer />
    </>
  );
};

export default HomePage;
