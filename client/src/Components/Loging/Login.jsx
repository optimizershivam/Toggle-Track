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
} from '@chakra-ui/react';
import { BsApple, BsGoogle } from "react-icons/bs";
import { useState } from 'react';
import { ChevronRightIcon, LockIcon, ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
// import { useNavigate } from 'react-router-dom';
import { FaApple, FaGoogle, FaTwitter } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { Link as Linkrouter } from 'react-router-dom';
export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData,setformDate]=useState({});
  const nav=useNavigate()

  const handleChange=(e)=>{
   
    const {value,name}=e.target;
    setformDate({
      ...formData,
      [name]:value,
    });

  };
    const handlelogin=async(e)=>{
      try{
        e.preventDefault();
        // console.log(formData)
        const data= await axios.post("https://damp-reef-46945.herokuapp.com/auth/login",formData)
        // const user=data[0]
        // localStorage.setItem("userid",user["_id"])
        console.log(data);
        nav("/signup")

      }
      catch(err){
             if(err.response.status===401){
                alert("invaild user ")
             }
      }
    
    }
 
    
  return (


<Box w={"full"}>
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
 <Button background={"white"} color={"black"} borderRadius={"16px"} leftIcon={<FaGoogle />}>
   Login with Google
 </Button>
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
             <Input width={"100%"} type="email" placeholder="email" name="email" onChange={handleChange}  />
           </FormControl>
           <FormControl id="password" >
           <FormLabel>Password</FormLabel>
             <InputGroup>
             
               <Input  type={showPassword ? 'text' : 'password'} placeholder="password" name='password' onChange={handleChange} />
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
          
             <Button onClick={handlelogin}
               loadingText="Submitting"
               borderRadius={"16px"}
               size="lg"
              width={"100%"}
              marginRight={"6%"}
               bg={'rgb(229, 124, 216)'}
               color={'white'}
               
               _hover={{
                 bg: 'rgb(86, 66, 96)',
               }}>
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
   
  );
}