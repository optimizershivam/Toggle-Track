import { Flex,Text,Box,Center } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { formatAMPM } from './Time'
import { BsFillTagFill, BsCurrencyDollar, BsFolderFill } from "react-icons/bs";
import { AiFillPlayCircle } from "react-icons/ai";
import { deletedata } from './api';


 const Scheduler = ({send,getdata,data}) => {


    useEffect(()=>{
      getdata()
    },[])  
  return (
    <div style={{ marginLeft: "15%" }}>
    {data.map((e)=>{
      return (
        <Flex
        key={e.id}
          color="white"
          _hover={{ color: "#7e6e85" }}
          h="60px"
          borderBottom="2px"
          borderColor="blackAlpha.400"
          p="15px 2px 10px 15px"
          justifyContent="space-between"
        >
          <Flex gap="10px">
            <Text color="black">{e.project}</Text>
            <Center className="icon">
              <BsFolderFill />
            </Center>
          </Flex>

          <Flex gap="15px" mr="70px">
            <Center className="icon">
              <BsFillTagFill />
            </Center>
            <Center className="icon">
              <BsCurrencyDollar />
            </Center>

            <Box as="div" w="160px">
              <Text color="black">
                {formatAMPM(new Date())}-{formatAMPM(new Date())}
              </Text>
            </Box>

            <Text color="black">{e.stopat}</Text>

            <Center>
              <AiFillPlayCircle />
            </Center>
            <Center>
              <AiFillPlayCircle  onClick={()=>{
                deletedata(e.id) 
                getdata()}}/>
            </Center>
          </Flex>
        </Flex>
      );
    })}
    </div>
  );
}

export default Scheduler
