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
  Center,
  VStack,
  useToast,
} from '@chakra-ui/react';
import { BsApple, BsGoogle } from "react-icons/bs";
import { useState } from 'react';
import { ChevronRightIcon, LockIcon, ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';
import { FaApple, FaGoogle, FaTwitter } from 'react-icons/fa';
// import { useNavigate } from 'react-router-dom';
import { Link as Linkrouter } from 'react-router-dom';
import Footer from '../Homepage/Footer';
import Navbar from '../NavComponents/Navbar';
// import{UseNavigate}from"react-router-dom";
export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
 const navigate=useNavigate()
 const [isLoading,setIsloading] = useState(false)
 const toast = useToast()
  const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

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
        await fetch("https://damp-reef-46945.herokuapp.com/auth/login", {
            method : "POST",
            body : JSON.stringify(payload),
            headers: {
                'Content-Type': 'application/json',
                
              },
        })
        .then((res) => res.json())
        .then((res) => {
          console.log(res)
          //  Never string match the error message. Later if the backend changes the error text
          //  this check will fail and the code will behave unexpectedly. Instead the status code
          //  or some status enum should be checked for here.
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
         else if (res.message === "Plz enter registered details")
        {
          
            toast({
              title: 'Login Failed.',
              description: "Please enter correct Details.",
              status: 'error',
              duration: 3000,
              isClosable: true,
              position:"top"
            })
          
        }
        else if (res.message === "Wrong email or Password")
        {
          toast({
            title: 'Login Failed.',
            description: "Wrong email or Password.",
            status: 'error',
            duration: 3000,
            isClosable: true,
            position:"top"
          })
        }
        else if(res.message === "Login Success")
        {
          toast({
            title: 'Logged in Successfull.',
            description: "Welcome",
            status: 'success',
            duration: 2000,
            isClosable: true,
            position:"top"
          })
          localStorage.setItem("token", res.token)
          localStorage.setItem("email",payload.email)
          navigate("/timer")
        }
        
           
          
        })
        
        // This is poor error handling. Logging the error isn't enough.
        .catch((err) => console.log(err))
    }
    
  return (

<>

{/* Please format code. It is all over the place. */}
<Navbar/>
<Box w={"full"}>
  {/* Such urls should be put in some constants file */}
  <Box backgroundImage="url('https://public-assets.toggl.com/b/static/a848ad9070fcf959a459fa1e878d2abb/c0583/hero-laptops.jpg')"
  backgroundPosition="center"
  backgroundRepeat="no-repeat" bgSize="full"  h={'400px'} margin="auto"  zIndex={"-1"}>
    <Center paddingTop={"220px"}>
      <VStack>
      <Heading fontSize={"60px"} color={"#fff3ed"}>Log in to your account</Heading>
<Text>Let's get tracking!</Text>
      </VStack>
   
</Center>

    </Box>
 <Box bgColor={"#412A4C"} width={"100%"} height={"700px"} marginTop={"-50px"} zIndex={"3"}>

 

<Box bg={"rgb(44, 19, 56)"} width={"50%"} color={"white"}  margin={"auto"} zIndex="-1">
     

   
   
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
             <Input width={"100%"} type="email" placeholder="email" value={email} onChange={handleEmailChange}  />
           </FormControl>
           <FormControl id="password" >
           <FormLabel>Password</FormLabel>
             <InputGroup>
             
               <Input  type={showPassword ? 'text' : 'password'} placeholder="password" value={password} onChange={handlePasswordChange} />
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
<Stack>  <Link color={'blue.400'} marginLeft={"250px"}  _hover={{
                 color: '#E57CD8',
               }}>Forgot password?</Link></Stack>
         
           <HStack spacing={4} pt={2}>
            
             <Button 
               loadingText="Logging in"
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
               Login
             </Button>
           
           
             
             
           </HStack>
           <Stack pt={6}>
             <Text align={'center'} fontSize={"20px"} >
             <LockIcon/> Company login (SSO) <ChevronRightIcon/>
             </Text>
           </Stack>
         </Stack>
       </Box>
     </Stack>
    
  
  </Box> 
  <VStack spacing={4} pt={2}>
          <Text color={"white"}>Don't you have account ?</Text>
         <Linkrouter to="/signup"><Button 
            loadingText="Submitting"
            borderRadius={"16px"}
            size="lg"
           width={"200px"}
          margin={"auto"}
            bg={'rgb(229, 124, 216)'}
            color={'white'}
            
            _hover={{
              bg: 'rgb(86, 66, 96)',
            }}>
            Signup
          </Button></Linkrouter> 
        
        
          
          
        </VStack>
</Box>


</Box>
<Footer/>
</>
  );
}