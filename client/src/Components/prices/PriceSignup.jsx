import React, { useState } from "react";
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
import { BsCheckLg, BsGoogle, BsApple } from "react-icons/bs";
import { IoMdArrowDropright } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const PriceSignup = () => {
  const [email,setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  const navigate =useNavigate()

  const handleSubmit= async()=>{

    const payload = {
      email,
      password
  }
   await fetch("https://damp-reef-46945.herokuapp.com/auth/register"
   , {
      method : "POST",
      body : JSON.stringify(payload),
      headers: {
          'Content-Type': 'application/json'
        },
  })
  if(email.length!=0 && password.length!=0)
  {
      alert("register successfully")
      navigate("/login")
  }
  if(email.length==0 && password.length==0)
  {
      alert("please sigup")
      
  }
  }

  return (
    <Box mt="80px"  p={{ lg: "0px" }} textAlign={"center"}>

      <Box
        m="auto"
        border={"1px solid white"}
        w={{ lg: "70%",base:"92%" }}
        mt={{ lg: "0px" }}
        p={{ lg: "20px",base:"20px" }}
       
        bg="#fce5d8"
        // h={{ lg: "200px" }}
      >
        <Box
          color={"black"}
          fontSize={{ lg: "32px",base:"25.6px" ,md:"25.6px"}}
          m={{ lg: "10px 0px 0px -400px" }}
          fontWeight="bold"
        >
          Sign up for
          <Text as="span" color={"#e57cd8"}>
            {" "}
            free
          </Text>
          . No credit card required.
        </Box>

        <Box direction={{ lg: "flex" }} m={{ lg: "30px 0px 0px 0px",base:"30px 0px 20px 0px" }}>
          <Input
            w={{ lg: "230px" }}
            ml={{ lg: "-300px" }}
            borderColor="black"
            placeholder="Email"
            m={{ base: "10 0 10 0px" }}
            color="black"
            type={"email"}
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />

          <Input
            w={{ lg: "230px" }}
            borderColor="black"
            m={{ lg: "0 0 0 25px" ,base:"20px 0px 0px 0px"}}
            placeholder="A strong password "
            color="black"
            type={"password"}
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />


        {/* <Box display={{md:"flex"}} m="auto"> */}
          <Button
            w={{ lg: "200px",base:"290px", md:"710px"}}
            bg="#e57cd8"
            color="white"
            m={{ lg: "0 0 0 25px",base:"20px 0px 0px 0px" }}
            onClick={handleSubmit}
          >
            Sign up with email
          </Button>

          <Flex
            gap={"20px"}
            textAlign="center"
            alignItems={"center"}
            m={{ lg: "-40px 0px 0px 760px",base:"20px 0px 0px 25px"  }}
          >
            <Box>
              <Text color={"black"}>Or sign up with:</Text>
            </Box>
            
            <Box
              color={"black"}
              fontSize={{ lg: "25px" }}
              bg="white"
              p="10px"
              borderRadius={"50%"}
            >
              <BsGoogle />
            </Box>
            <Box
              color={"black"}
              fontSize={{ lg: "25px" }}
              bg="white"
              p="10px"
              borderRadius={"50%"}
            >
              <BsApple />
            </Box>
          </Flex>

          {/* </Box> */}
        </Box>
       
       <Box>
       <Text color={"black"} fontSize={{lg:"13px"}} textAlign="left" mt={{lg:"20px"}} >By signing up, you agree to our terms of service, privacy policy and to receiving marketing communication from Toggl Track. You can opt out anytime.</Text>

       </Box>

      </Box>

     {/*  */}
    <Box m={"auto"} textAlign="center" alignItems={"center"} ml={{lg:"40%",md:"30%",base:"10%"}}>
    <Flex mt={{lg:"40px",md:"40px",base:"40px"}} gap={{lg:"30px",base:"20px"}}>
     <Text fontSize={{lg:"16.2px",md:"16.2px"}}>Onboarding a team?</Text>
     <Text color={"#e57cd8"}>Book a demo </Text>
     <Box fontSize={"30px"} ml={{lg:"-25px",base:"-20px"}}><IoMdArrowDropright/></Box>
     </Flex>
    </Box>
    </Box>
  );
};

export default PriceSignup;
