import { Box, Flex, Heading,Text,Stack } from "@chakra-ui/react";
import React from "react";

import Signup from "./Signup";
import Timer from "./Timer";

const TopHomepage1 = () => {
  return (
    
    <Box bg={"#2C1338"} >
      <Heading maxWidth={"90%"} fontSize={"60px"} fontFamily={["GT Haptik Medium","sans-serif"]} wordBreak={"break-word"}>
        {" "}
        <Text color={"white"} textAlign={"justify"} marginLeft={"10%"} paddingTop={"5%"}>
          Time tracking for{" "}
          <span style={{ color: "rgb(229, 124, 216)" }}>
            <i>better</i>
          </span>{" "}
          work,
          <br /> not overwork.
        </Text>
    </Heading>
   
      <Stack direction={{lg:"row",md:"column",base:"column"}}  marginRight={"10%"}>
        <Box w={"100%"}><Signup /></Box>
      
     <Box>  <Timer /></Box>
   
      </Stack>
      </Box>
  );
};

export default TopHomepage1;
