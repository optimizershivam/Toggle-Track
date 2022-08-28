import { Box, Text, Image, Flex, Stack, Divider } from "@chakra-ui/react";
import React from "react";
import { BsCheckLg } from "react-icons/bs";

const BookingConfirm = () => {
  let date=  localStorage.getItem("date")
  let newDate=date.split(" ")
  let time= localStorage.getItem("time")
  return (
    <Box bg="#f5f8fa" w={"100%"} p={{ lg: "150px", md: "70px", base: "50px" }} h={{md:"1200px",base:"750px",lg:"750px"}} textAlign={"center"}>
      <Flex w={{lg:"350px",md:"300px",base:"300px"}} pt="50px" m="auto" mt={{lg:"-150px",base:"-30px"}} ml={{base:"-30px",lg:"430px",md:"150px"}}>
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
            bg="red"
            color={"white"}
          > {" "}
          <BsCheckLg /></Box>

          <Text fontSize={"13px"}>YOUR INFO</Text>
        </Stack>
      </Flex>

      <Box
        bg="white"
        w={{ lg: "30%", md: "80%", base: "100%" }}
        m="auto"
        p={{lg:"70px",md:"70px 0px 80px 0px",base:"70px 20px 80px 20px"}}
        mt={{md:"120px",lg:"60px",base:"50px"}}
       
      >
        <Image
          m="auto"
          src="https://static.hsappstatic.net/ui-images/static-2.427/optimized/success.svg"
        />
        <Text fontSize={"24px"} mt="20px">
          Booking confirmed
        </Text>
        <Text fontSize={"14px"} w="80%" m={"auto"} mt="20px">
          You're booked with Toggl Marketing. An invitation has been emailed to
          you.
        </Text>
        <Text fontWeight={"bold"} mt="20px">{`${newDate[0]} ${newDate[1]} ${newDate[2]}, ${newDate[3]}`}</Text>
        <Text fontWeight={"bold"}>{` at ${time}`}</Text>
      </Box>
    </Box>
  );
};

export default BookingConfirm;
