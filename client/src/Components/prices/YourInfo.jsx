import {
  Box,
  Button,
  Divider,
  Flex,
  FormLabel,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { BsCheckLg } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const YourInfo = () => {
  const [firstName,setFirstName]=useState("")
  const [lastName,setLastName]=useState("")
  const [email,setEmail]=useState("")
  const navigate=useNavigate()
  let date=  localStorage.getItem("date")
 
   let time= localStorage.getItem("time")

   
const handleUserInfo=()=>{

  if(firstName && lastName && email){

    const payload={
      firstName,
      lastName,
      email
    }
    localStorage.setItem("userInfo",JSON.stringify(payload))
    console.log(JSON.parse(localStorage.getItem("userInfo")))
             navigate("/BookingConfirm")
  }
  else{

    alert("all fields are required")
  }



 
}

  return (
    <Box bg="#f5f8fa" w="100%" h={{md:"1200px"}} textAlign={"center"}>
      <Flex w="300px" pt="50px" m="auto">
        <Stack>
          <Box
            w="20px"
            h="20px"
            ml="50px"
            border={"3px solid red"}
            bg="red"
            borderRadius="50%"
            color={"white"}
            fontSize="15px"
          >
            {" "}
            <BsCheckLg />
          </Box>
          <Text fontSize={"13px"}>CHOOSE TIME</Text>
        </Stack>

        <Divider mt="10px" color={"red"} border="3px solid red" />
        <Stack>
          <Box
            w="20px"
            h="20px"
            border={"3px solid red"}
            borderRadius="50%"
          ></Box>

          <Text fontSize={"13px"}>YOUR INFO</Text>
        </Stack>
      </Flex>

      <Box bg="white" w={{lg:"60%",md:"60%",base:"90%"}} border={"1px solid"} m="auto" mt="50px" p={{lg:"30px 40px 30px 40px",base:"30px 40px 90px 40px"}}>
        <Text fontSize={"20px"} textAlign="left" fontWeight={"bold"}>Your information</Text>
        <Text ml={{lg:"-350px"}} mt="20px">{`${date} at ${time}`}</Text>
        <Stack direction={{lg:"row",md:"column",base:"column"}} mt="20px">
          <Box >
            <FormLabel>First Name*</FormLabel>
            <Input type="text" w={{lg:"400px"}} borderColor={"black"} value={firstName} onChange={(e)=>setFirstName(e.target.value)}/>
          </Box>
          <Box >
            <FormLabel>Last Name*</FormLabel>
            <Input type="text" borderColor={"black"}  w={{lg:"400px"}} value={lastName} onChange={(e)=>setLastName(e.target.value)}/>
          </Box>
        </Stack>
        <Box mt="20px">
          <FormLabel> Your Email Address*</FormLabel>
          <Input type="email" borderColor={"black"} w={{lg:"810px",md:""}} ml={{lg:"-30px"}} value={email} onChange={(e)=>setEmail(e.target.value)}/>
        </Box>
       
        <Button mt="30px" ml={{lg:"630px"}} w="150px" bg="#ff7a59" color="white" onClick={handleUserInfo} >Confirm</Button>
      </Box>
     
    </Box>
  );
};

export default YourInfo;
