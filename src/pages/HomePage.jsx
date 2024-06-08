import React from "react";
import HomeHeader from "../components/homepage/HomeHeader";
import Advantages from "../components/homepage/Advantages";
import Newsletter from "../components/homepage/Newsletter";
import Footer from "../components/common/Footer";
import Workit from "../components/homepage/Workit";
import Companies from "../components/homepage/Compnies";
import BackToTop from "../components/homepage/BackToTop";
import AccountCreate from "../components/homepage/AccountCreate";
import { homepageFooterLinks, socialMediaLinks } from "../components/common/Helper";

const HomePage = () => {
  return (
    <>
      <BackToTop />
      <HomeHeader />
      <Advantages />
      <Workit />
      <Companies />
      <AccountCreate />
      <Newsletter />
      {/* <Footer /> */}
      <Footer footerLinks={homepageFooterLinks} socialMediaLinks={socialMediaLinks} />
    </>
  );
};

export default HomePage;
