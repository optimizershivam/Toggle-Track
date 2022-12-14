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
  useToast,
} from '@chakra-ui/react';
import { BsApple, BsGoogle } from "react-icons/bs";
import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';

export default function SignupCard() {
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
    <Box bg={"rgb(44, 19, 56)"} color={"white"} maxWidth={"100%"}>
     

   
   
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
          <Stack spacing={4} >
            
            <FormControl border='5px' id="email" isRequired>
            
              <Input width={"100%"} type="email" placeholder="email" value={email} onChange={handleEmailChange} />
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
            <HStack spacing={4} pt={2}>
              
              <Button 
                loadingText="Submitting"
                borderRadius={"20px"}
                size="lg"
               width={"30%"}
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
             <Text fontSize={"15px"}>or signup with : </Text>
             <a href="https://damp-reef-46945.herokuapp.com/google"> <Button bg={'black'} borderRadius={"50%"}  height={"50px"} width={"50px"}>
              <BsGoogle size={'20px'} _hover={{bg:"black"}}/>
              </Button></a>
              <Button bg={'black'} borderRadius={"50%"}  height={"50px"} width={"50px"}>
              <BsApple size={'20px'} _hover={{bg:"black"}}/>
              </Button>
     
              
              
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