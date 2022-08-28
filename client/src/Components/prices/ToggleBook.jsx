import { Box, Text, Image, Input, Button, FormLabel } from "@chakra-ui/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ToggleBook = () => {

  const navigate=useNavigate()
  const [change,setChange]=useState("")

  const handleChange=()=>{
    if(change){
      navigate("/ChooseToggleTime")
    }
    else{
      alert("Email Required")
    }
  }
  return (
    <Box bg="#f5f8fa" w="100%" textAlign={"center"}>
      <Image
        w={{ lg: "200px",md:"200px",base:"100px"}}
        h={{ lg: "125px" }}
        m="auto"
        p={{lg:"30px 0px 20px 0px",md:"30px 0px 20px 0px",base:"30px 0px 10px 0px"}}
        src="https://21421994.fs1.hubspotusercontent-na1.net/hubfs/21421994/logo-purple.png"
      />{" "}
      <Box bg="rgb(254 249 247)" width={{lg:"60%",md:"60%",base:"90%"}} m="auto" p={{lg:"40px",md:"40px",base:"20px"}} pb="50px">
        <Box bg="#fff">
          <Image
            w={"200px"}
            m="auto"
            src="https://21421994.fs1.hubspotusercontent-na1.net/hubfs/21421994/illo-sandtimer-1.jpg"
          />

          <Text fontSize={{lg:"32px",md:"32px",base:"25px"}} fontWeight="bold" w={{lg:"40%",md:"60%"}} m={"auto"}>Book time for your Toggl demo below</Text>
          <Text fontSize={"14px"} w={{lg:"40%",md:"60%",base:"80%"}} m="auto" mt="20px" fontWeight={"light"}>
            To reserve a time that best suits you, book instantly with your
            email right here and check your inbox for the calendar invite.
            Alternatively, someone from our team will reach out to you later
            today.
          </Text>
          <Box w={{lg:"40%",md:"60%",base:"80%"}} m="auto" mt="20px">
            <FormLabel fontWeight={"normal"}>Enter Email Address*</FormLabel>
            <Input type="email" borderColor={"black"} value={change} onChange={(e)=>setChange(e.target.value)}/>
          </Box>
          <Button bg="#ff7a59" color={"white"} mt="50px"  onClick={handleChange}>Start booking</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ToggleBook;
