import { Box, Text, Image } from "@chakra-ui/react";
import React from "react";

const BookingConfirm = () => {
  let date=  localStorage.getItem("date")
  let newDate=date.split(" ")
  let time= localStorage.getItem("time")
  return (
    <Box bg="#f5f8fa" w={"100%"} p={{ lg: "150px", md: "70px", base: "50px" }} h={{md:"1200px",base:"750px",lg:"750px"}}>
      <Box
        bg="white"
        w={{ lg: "30%", md: "80%", base: "100%" }}
        m="auto"
        p={{lg:"70px",md:"70px 0px 80px 0px",base:"70px 20px 80px 20px"}}
        mt={{md:"120px",lg:"0px"}}
       
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
