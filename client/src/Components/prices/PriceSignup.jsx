import React from "react";
import {
    Box,
    Button,
    Divider,
    Flex,
    Stack,
    Text,
    Image,
    Input,
  } from "@chakra-ui/react";
  import { BsCheckLg,BsGoogle,BsApple } from "react-icons/bs";
  
const PriceSignup = () => {
  return <Box>
      <Box m="auto" border={"1px solid white"} w={{lg:"70%"}} mt={{lg:"80px"}} p={{lg:"20px"}} bg="#fce5d8">
     
     <Box color={"black"} fontSize={{lg:"32px"}} m={{lg:"10px 0px 0px -400px"}}>Sign up for free. No credit card required.</Box>

     <Box direction={{lg:"flex"}}>
   
       <Input w={{lg:"230px"}} ml={{lg:"-300px"}} borderColor="black"/>
   
   
       <Input w={{lg:"230px"}}  borderColor="black"/>
    
 
       <Button  w={{lg:"200px"}} bg="#e57cd8" color="white">Sign up with email</Button>
   
   
     <Flex>
     <Text color={"black"}>Or sign up with:</Text>
    <Box color={"black"} bg="white" borderRadius={"50%"} w={{lg:"30px"}}><BsGoogle/></Box>
     <Box color={"black"} bg="white" borderRadius={"50%"}> <BsApple/></Box>
     </Flex>

    
     
   </Box>
 </Box>


  </Box>;
};

export default PriceSignup;
