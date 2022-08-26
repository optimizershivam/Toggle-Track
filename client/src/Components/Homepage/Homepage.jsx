import { Box } from "@chakra-ui/react";
import React from "react";
import CompanyLogo from "./CompanyLogo";
import { Credit } from "./Credit";
import Footer from "./Footer";
import FooterSignup from "./FooterSignup";
import SecondHome from "./SecondHome";
import TopHomepage1 from "./TopHomepage1";
import Video from "./Video";

const Homepage = () => {
  return (
  <div style={{width:"100%"}}>
  <TopHomepage1 />
  <Credit/>
       <SecondHome />
       <CompanyLogo/>
      <Video/>
      <FooterSignup /> 
      <Footer/>
  
  </div>
    
  );
};

export default Homepage;
