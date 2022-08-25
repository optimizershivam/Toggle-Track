import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
} from '@chakra-ui/react';
import { BsApple, BsGoogle } from "react-icons/bs";
import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';

export default function SignupCard() {
  const [showPassword, setShowPassword] = useState(false);
  const [email,setEmail] = useState('')
  const [password, setPassword] = useState('')
  
// const nav =useNavigate()
  const handleEmailChange = (e) => {
      setEmail(e.target.value)
  }
  const handlePasswordChange = (e) => {
      setPassword(e.target.value)
  }

  const handleSubmit = async () => {
      const payload = {
          email,
          password
      }
       await fetch("http://localhost:8080/auth/signup", {
          method : "POST",
          body : JSON.stringify(payload),
          headers: {
              'Content-Type': 'application/json'
            },
      })
      if(email.length!=0 && password.length!=0)
      {
          alert("register successfully")
        //  nav("/login")
      }
      if(email.length==0 && password.length==0)
      {
          alert("please sigup")
          
      }
     
  }

  return (
    <Box bg={"rgb(44, 19, 56)"} color={"white"}>
     

   
   
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
      <Stack pt={6}>
              <Text p={"30px"} align={'justify'} fontSize={"lg"} marginRight={"40px"}>
              Join 5 million users in using the world's best time tracking software
              </Text>
            </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('rgb(44, 19, 56)', 'gray.700')}
         
       
          p={8}>
          <Stack spacing={4}  w={[310,400]}>
            
            <FormControl border='5px' id="email" isRequired>
            
              <Input  type="email" placeholder="email" value={email} onChange={handleEmailChange} />
            </FormControl>
            <FormControl id="password" isRequired>
      
              <InputGroup>
                <Input  type={showPassword ? 'text' : 'password'} placeholder="password" value={password} onChange={handlePasswordChange}/>
                <InputRightElement h={'full'}>
                  <Button 
                    variant={'ghost'}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }>
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <HStack spacing={10} pt={2}>
              <Box >
              <Button onClick={handleSubmit}
                loadingText="Submitting"
                borderRadius={"20px"}
                size="lg"
                w={[310,100]}
                bg={'rgb(229, 124, 216)'}
                color={'white'}
                marginRight={"30px"}
                _hover={{
                  bg: 'rgb(86, 66, 96)',
                }}>
                Sign up
              </Button>
             or signup with :
              <Button bg={'black'} borderRadius={"50%"} marginLeft={"20px"} height={"50px"} width={"60px"}>
              <BsApple size={'30px'} _hover={{bg:"black"}}/>
              </Button>
              <Button bg={'black'} borderRadius={"50%"} marginLeft={"20px"} height={"50px"} width={"60px"}>
              <BsGoogle size={'30px'} _hover={{bg:"black"}}/>
              </Button>
              </Box>
              
            </HStack>
            <Stack pt={6}>
              <Text align={'justify'} fontSize={"10px"}>
              By signing up, you agree to our terms of service, privacy policy and to receiving marketing communication from Toggl Track. You can opt out anytime.
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
     
   
   </Box>
  );
}