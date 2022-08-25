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
  return <Box>

<Box mt={50}>
        <Box w={"50%"} m="auto">
          <Text
            fontSize={{ base: "", md: "", lg: "15.36px" }}
            mt={{ lg: "100px" }}
          >
            All plans come with a free, 30-day trial of Toggl Track Premium—no
            credit card required. You can choose to upgrade at the end of the
            trial or continue using Track for free.
          </Text>
          <Text mt={{ lg: "30px" }}>Still unsure?</Text>
          <Button
            bg={"#2C1338"}
            border="1px solid white"
            borderRadius={"30px"}
            height={{ lg: "50px" }}
            mt={{ lg: "30px" }}
            _hover={{ color: "#E57CD8", bg: "#FCD5E8" }}
          >
            Compare all plan features <IoMdArrowDropright />
          </Button>
        </Box>
      </Box>
      {/* **** */}

      <Box
        border={"1px solid white"}
        mt={{ lg: "100px" }}
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
            >
              “Toggl Track increased our profitability by at least 20%. We found
              out where the team was spending too much time on clients. Toggl
              Track gave us the ability to restrategize, find out what’s wrong,
              and fix it.”
            </Text>
            <Text m={{ lg: "30px 10px 10px 30px" }} textAlign="left">
              — Sweat+Co on Toggl Track’s Premium plan.Read the case study
            </Text>
          </Box>
          <Image
            m={{ lg: "-30px 30px 0px 30px" }}
            src="https://public-assets.toggl.com/b/static/81d28305aa04efef1d9588833a218978/a9ff4/case-study-sweatandco.avif"
          />
        </Flex>
        <Flex bg="#FCE5D8" color={"black"} gap={{ lg: "150px" }}>
          <Text m={{ lg: "30px 10px 10px 30px" }} fontSize={{ lg: "24px" }}>
            Toggl Track is trusted by Sweat+Co and 70,000+ teams
          </Text>
          <Button
            m={{ lg: "30px 10px 10px 30px" }}
            w={{ lg: "200px" }}
            borderRadius="30px"
            h={{ lg: "50px" }}
            _hover={{ bg: "#564260" }}
            bg="#E57CD8"
            color={"white"}
          >
            Try Toggle Track
          </Button>
        </Flex>
      </Box>

      {/* **COMPANY IMAGE** */}

      <Box mt={{ lg: "70px" }}>
        <Image
          m="auto"
          src="https://public-assets.toggl.com/b/static/1ede89b0d75ce5a9cd6476ba3f2d6cf4/83e96/brands-oneliner.avif"
        />
      </Box>
  </Box>;
};

export default Trial;
