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
  import { IoMdArrowDropright } from "react-icons/io";
  
const Trial = () => {
  return <Box textAlign={"center"}>

<Box mt={50}>
        <Box w={"50%"} m="auto">
          <Text
            fontSize={{ base: "", md: "", lg: "15.36px" }}
            mt={{ lg: "100px" ,md:"100px" }}
          >
            All plans come with a free, 30-day trial of Toggl Track Premium—no
            credit card required. You can choose to upgrade at the end of the
            trial or continue using Track for free.
          </Text>
          <Text mt={{ base:"20px", lg: "30px"  }}>Still unsure?</Text>
          <Button
            bg={"#2C1338"}
            border="1px solid white"
            borderRadius={"30px"}
            height={{ lg: "50px" }}
            mt={{ base:"20px", lg: "30px" }}
            ml={{ base:"-20px" }}
            mb={{base:"50px"}}
            _hover={{ color: "#E57CD8", bg: "#FCD5E8" }}
          >
            Compare all plan features <IoMdArrowDropright />
          </Button>
        </Box>
      </Box>
      {/* **** */}

      <Box
        border={"1px solid white"}
        mt={{base:"100px",md:"70px", lg: "100px" }}
        mb={{ lg: "50px" }}
        w={{ lg: "70%" }}
        m="auto"
      >
        <Flex bg={"#FFF3ED"} color="black">
          <Box>
            <Text
              fontSize={{ lg: "24px" }}
              m={{ lg: "30px 10px 0px 30px" }}
              textAlign="left"
              p={{md:"20px",base:"20px"}}
            >
              “Toggl Track increased our profitability by at least 20%. We found
              out where the team was spending too much time on clients. Toggl
              Track gave us the ability to restrategize, find out what’s wrong,
              and fix it.”
            </Text>
            <Text m={{ lg: "30px 10px 10px 30px" }} textAlign="left"  p={{md:"20px",base:"20px"}}>
              — Sweat+Co on Toggl Track’s Premium plan.Read the case study
            </Text>
          </Box>
          <Image
          w={{base:"40%"}}
          h={{base:"70%"}}
            m={{ lg: "-30px 30px 0px 30px",md: "-40px 30px 0px 30px",base: "50px 0px 0px 0px"  }}
            src="https://public-assets.toggl.com/b/static/81d28305aa04efef1d9588833a218978/a9ff4/case-study-sweatandco.avif"
          />
        </Flex>
        <Flex bg="#FCE5D8" color={"black"} gap={{ lg: "150px",md:"150px" }} p={{md:"20px",base:"20px"}}>
          <Text m={{ lg: "30px 10px 10px 30px" }} fontSize={{ lg: "24px", md:"18px" }}>
            Toggl Track is trusted by Sweat+Co and 70,000+ teams
          </Text>
          <Button
            m={{ lg: "30px 10px 10px 30px" }}
            w={{ lg: "200px",base:"200px" }}
            borderRadius="30px"
            h={{ lg: "50px",md:"50px",base:"50px"}}
            _hover={{ bg: "#564260" }}
            bg="#E57CD8"
            color={"white"}
            fontSize={{base:"13px"}}
          >
            Try Toggle Track
          </Button>
        </Flex>
      </Box>

      {/* **COMPANY IMAGE** */}

      <Box mt={{ lg: "70px",md:"70px" ,base:"50px" }} >
        <Image
   
        w={{md:"90%",base:"90%",lg:"60%"}}
          m="auto"
          src="https://public-assets.toggl.com/b/static/1ede89b0d75ce5a9cd6476ba3f2d6cf4/83e96/brands-oneliner.avif"
        />
      </Box>
  </Box>;
};

export default Trial;
