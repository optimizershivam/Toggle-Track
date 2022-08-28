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
import { ChevronRightIcon, LockIcon, ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';
import { FaApple, FaGoogle, FaTwitter } from 'react-icons/fa';
import Navbar from '../NavComponents/Navbar';
import Footer from '../Homepage/Footer';
import { useToast } from '@chakra-ui/react'

export default function Signup1() {
  const [showPassword, setShowPassword] = useState(false);
  const [email,setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading,setIsloading] = useState(false)
  const toast = useToast()
  
 const nav =useNavigate()
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
       await fetch("https://damp-reef-46945.herokuapp.com/auth/register"
       , {
          method : "POST",
          body : JSON.stringify(payload),
          headers: {
              'Content-Type': 'application/json'
            },
      })
      .then((res) => res.json())
      .then((res) => {
        console.log(res)
         if(res.message === "required fields are email,password")
         {
          toast({
            title: 'Please fill the details.',
            description: "Input Feilds are required .",
            status: 'error',
            duration: 1500,
            isClosable: true,
            position:"top"
          })
         }
        else if (res.message === "Register Successfull")
        {
          toast({
            title: 'Account created.',
            description: "We've created your account for you. Please Login",
            status: 'success',
            duration: 2500,
            isClosable: true,
            position:"top"
          })
          setTimeout(()=>{ nav("/login",{replace:true})},1000)
        }
      })
      
     
  }

  return (

  
     <>
      {/* <Navbar/> */}


    <Box bg={"rgb(44, 19, 56)"} color={"white"}  margin={"auto"} >
     

   
   
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
      <HStack margin={"auto"}>
      <a href="https://damp-reef-46945.herokuapp.com/google"><Button background={"white"} color={"black"} borderRadius={"16px"} leftIcon={<FaGoogle />}>
    Login with Google
  </Button></a>
  <Button background={"white"} color={"black"} borderRadius={"16px"}  leftIcon={<FaApple />}>
    Login with Apple
  </Button>
</HStack>
     
        <Box
          rounded={'lg'}
          bg={useColorModeValue('rgb(44, 19, 56)', 'gray.700')}
         
      
          p={8}>
          <Stack spacing={4} >
            
            <FormControl border='5px' id="email" >
<FormLabel>Email</FormLabel>
              <Input width={"100%"} type="email" placeholder="email" value={email} onChange={handleEmailChange} />
            </FormControl>
            <FormControl id="password" >
            <FormLabel>Password</FormLabel>
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

          
            <HStack spacing={4} pt={2}>
           
              <Button 
                loadingText="Submitting"
                borderRadius={"16px"}
                size="lg"
               width={"100%"}
               marginRight={"6%"}
                bg={'rgb(229, 124, 216)'}
                color={'white'}
                
                _hover={{
                  bg: 'rgb(86, 66, 96)',
                }}
                onClick={
                  ()=>{
                    setIsloading(true)
                    setTimeout(() => {
                        setIsloading(false)
                         handleSubmit()
                    },1000)
                    
                  }
                }
                isLoading={isLoading}
                >
                Sign up
              </Button>
            
            
              
              
            </HStack>
            <Stack pt={6}>
              <Text align={'center'} fontSize={"10px"}>
              By signing up, you agree to our terms of service, privacy policy and to receiving marketing communication from Toggl Track. You can opt out anytime.
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
     
     
   </Box>
   {/* <Footer/> */}
   </>
   
  );
}