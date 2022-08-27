// import { EmailIcon } from '@chakra-ui/icons';
// import {
//   Flex,
//   Box,
//   FormControl,
//   FormLabel,
//   Input,
//   Checkbox,
//   Stack,
//   Link,
//   Button,
//   Heading,
//   Text,
//   useColorModeValue,
//   HStack,
//   Center,
// } from '@chakra-ui/react';
// import { useState } from 'react';

// import { FaApple, FaGoogle } from 'react-icons/fa';
// import { useNavigate } from 'react-router-dom';



// export default function FooterSignup() {
//   const [email,setEmail] = useState('')
//   const [password, setPassword] = useState('')

//   const nav = useNavigate()

//   const handleuserChange = (e) => {
//       setUser(e.target.value)
//   }
//   const handlePasswordChange = (e) => {
//       setPassword(e.target.value)
//   }

//   const handleSubmit = async () => {
//       const payload = {
//           email,
//           password
//       }
//        await fetch("http://localhost:8080/auth/signup", {
//           method : "POST",
//           body : JSON.stringify(payload),
//           headers: {
//               'Content-Type': 'application/json'
//             },
//       })
//       if(email.length!=0 && password.length!=0)
//       {
//           alert("signup successfully")
//           nav("/login")
//       }
//       if(email.length==0 && password.length==0)
//       {
//           alert("please sigup")
          
//       }
     
//   }




//   return (
//     <Flex
//       minH={'80vh'}
//       align={'center'}
//       justify={'center'}
//       maxWidth={"100%"}
//       bg={useColorModeValue('#2C1338', 'gray.800')}>
//       <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
//         <Stack align={'center'}>
//           <Heading textAlign={"justify"} fontSize={'4xl'} fontFamily={ 'GT Haptik Medium'} color={"#FCE5D8"}>Sign up for free</Heading>
//           <Text fontSize={'lg'} color={'#FCE5D8'}>
//           All plans come with a free, 30-day trial of Toggl Track Premium—no credit card required. Upgrade at the end of the trial or continue using Track for free. 
//           </Text>
//         </Stack>
//         <Box
//           rounded={'lg'}
//           maxWidth={"100%"}
//           bg={useColorModeValue("#2C1338", 'gray.700')}
//           boxShadow={'lg'}
//           p={8}>
//             <HStack>
//   <Button background={"white"} color={"black"} borderRadius={"16px"} leftIcon={<FaGoogle />}>
//     Login with Google
//   </Button>
//   <Button background={"white"} color={"black"} borderRadius={"16px"}  leftIcon={<FaApple />}>
//     Login with Apple
//   </Button>
// </HStack>
//             <Center p={2}>
//       <Button
//         w={'90%'}
//         borderRadius={"16px"} 
//         bg={"white"}
//         maxW={'md'}
//         variant={'outline'}
//         leftIcon={<EmailIcon/>}>
//         <Center>
//           <Text>Sign up with email</Text>
//         </Center>
//       </Button>
//     </Center>
    
//           <Stack spacing={4}>
//             <FormControl id="email">
             
//               <Input type="email" placeholder="Email"  value={email} onChange={handleuserChange} />
//             </FormControl>
//             <FormControl id="password">
              
//               <Input type="password" placeholder='Password'  value={password} onChange={handlePasswordChange}/>
//             </FormControl>
//             <Stack spacing={10}>
             
//               <Button onClick={handleSubmit}
//                 bg={'#E57CD8'}
//                 color={'white'}
//                 borderRadius={"16px"}
//                 _hover={{
//                   bg: 'black.200',
//                 }}>
//                 Sign up via email
//               </Button>
//               <Text color={"white"} fontSize={"sm"}>By signing up, you agree to our terms of service, privacy policy and to receiving marketing communication from Toggl Track. You can opt out anytime.</Text>
//             </Stack>
//           </Stack>
//         </Box>
//       </Stack>
//     </Flex>
//   );
// }
import React from 'react'

const FooterSignup = () => {
  return (
    <div>
      <img style={{width:"100%"}} src="https://i.postimg.cc/44cVQwdJ/signup.png" alt="" />
    </div>
  )
}

export default FooterSignup