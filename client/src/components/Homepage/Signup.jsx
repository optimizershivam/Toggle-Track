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
import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

export default function SignupCard() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Box bg={"rgb(44, 19, 56)"} color={"white"}>
     

   
   
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
      <Stack pt={6}>
              <Text align={'justify'}>
              By signing up, you agree to our terms of service, privacy policy and to receiving marketing communication from Toggl Track. You can opt out anytime.
              </Text>
            </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('rgb(44, 19, 56)', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            
            <FormControl id="email" isRequired>
            
              <Input type="email" />
            </FormControl>
            <FormControl id="password" isRequired>
      
              <InputGroup>
                <Input type={showPassword ? 'text' : 'password'} />
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
            <Stack spacing={10} pt={2}>
              <Box>
              <Button
                loadingText="Submitting"
                size="lg"
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                Sign up
              </Button>
              <Button>
                dddddd
              </Button>
              </Box>
              
            </Stack>
            <Stack pt={6}>
              <Text align={'justify'}>
              By signing up, you agree to our terms of service, privacy policy and to receiving marketing communication from Toggl Track. You can opt out anytime.
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
     
   
   </Box>
  );
}