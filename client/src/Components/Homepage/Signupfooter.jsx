import { Box, Button, Heading, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import FooterSignup from './FooterSignup'

export const Signupfooter = () => {
  return (
    <Box h={"800px"} w={"100%"} background={"red"}>
<Stack marginLeft={"15%"}  w={"40%"}  >


<Box h={"100px"} marginTop={"10%"}><FooterSignup/>
</Box>
</Stack>
    <Box bg={"yellow"} marginLeft={"55%"} marginTop={"5%"} h={"350px"} width={"400px"}>
        <Heading >Prefer a product demo instead?</Heading>
        <Text>Request a 30-minute personalized demo to see how Toggl Track can meet your time tracking goals</Text>
    <Button>Book a Demo</Button>
    </Box>


    </Box>
  )
}
