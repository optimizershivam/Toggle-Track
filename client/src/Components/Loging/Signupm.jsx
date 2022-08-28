import { Box, Flex, Heading,Text,Stack } from "@chakra-ui/react";
import React from "react";
import Footer from "../Homepage/Footer";
import Navbar from "../NavComponents/Navbar";

import Signup1 from "./Signup1";


const Signupm = () => {
  return (
    <>
    <Navbar/>
    <Box bg={"#2C1338"} width={"100%"} >
       <Box>  
            <img  style={{width:"15%"}} src="https://i.postimg.cc/1RDLznkj/tt.png" alt="" /></Box>

<Box width={"80%"}> <Heading maxWidth={"100%"} fontSize={"40px"} fontFamily={["GT Haptik Medium","sans-serif"]} wordBreak={"break-word"}>
        {" "}
        <Text color={"white"} textAlign={"justify"} marginLeft={"10%"} paddingTop={"5%"}>
        Sign up for a  {""}
          <span style={{ color: "rgb(229, 124, 216)" }}>
            <i>free</i>
          </span>{" "}
          Toggl Track account
          
        </Text>
    </Heading>
    <Text color={"white "} fontSize={"20px"} marginLeft={"10%"} marginTop={"20px"}>
    All plans come with a free, 30-day trial of Toggl Track Premium—no credit card required.<br/>
Upgrade at the end of the trial or continue using Track for free forever.<br/>

Already have an account? Log in here.
    </Text></Box>
   
      <Stack direction={{lg:"row",md:"column",base:"column"}}  marginRight={"10%"}>
        <Box w={"100%"}><Signup1 /></Box>
      
     <Box> <img src="https://i.postimg.cc/MZryZZDX/signtext.png" alt="" /></Box>
   
      </Stack>
      </Box>
      <Footer/>
      </>
  );
};

export default Signupm;
