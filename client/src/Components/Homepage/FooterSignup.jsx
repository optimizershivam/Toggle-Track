import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Center,
  HStack,
} from '@chakra-ui/react';
import { FaApple } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

export default function FooterSignup() {
  return (
    <Box
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
<Header>Sign up for free</Header>
<Text>All plans come with a free, 30-day trial of Toggl Track Premium—no credit card required. Upgrade at the end of the trial or continue using Track for free.</Text>
   <HStack>
   <Center p={8}>
      <Button
        w={'full'}
        maxW={'md'}
        variant={'outline'}
        leftIcon={<FcGoogle />}>
        <Center>
          <Text>Sign in with Google</Text>
        </Center>
      </Button>
    </Center>
    <Center p={8}>
      <Button
        w={'full'}
        maxW={'md'}
        variant={'outline'}
        leftIcon={<FcGoogle />}>
        <Center>
          <Text>Sign in with Google</Text>
        </Center>
      </Button>
    </Center>

   </HStack>
   <Center p={8}>
      <Button
        w={'full'}
        maxW={'md'}
        variant={'outline'}
        leftIcon={<FcGoogle />}>
        <Center>
          <Text>Sign in with Google</Text>
        </Center>
      </Button>
    </Center>    
          
      
    </Box>
  );
}