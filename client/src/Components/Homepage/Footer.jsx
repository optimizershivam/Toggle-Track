
import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  Link,
  VisuallyHidden,
  chakra,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaTwitter, FaYoutube, FaInstagram, FaGithub, FaLinkedinIn, FaFacebook } from 'react-icons/fa';



const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2} color={"whiteAlpha.500"}>
      {children}
    </Text>
  );
};

const SocialButton = ({
  children,
  label,
  href,

}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={9}
      h={9}
      textDecoration={"none"}
      cursor={'pointer'}
      as={'a'}
      href={href}
    fontSize={"6xl"}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('#E57CD8', 'whiteAlpha.200'),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function LargeWithAppLinksAndSocial() {
  return (
    <Box
      bg={useColorModeValue('rgb(44, 19, 56)', 'gray.900')}
      color={useColorModeValue('white', 'gray.200')}>
      <Container as={Stack} maxW={'full'} py={10} >
        <SimpleGrid columns={{ base: 1, sm: 2, md:3,lg:6 }} spacing={8} >
          <Stack align={'flex-start'} >
            <ListHeader>TOGGL GLOBAL</ListHeader>
            <Link  href={'#'}>Blog</Link>
            <Link href={'#'}>Our Mission</Link>
            <Link href={'#'}>Working at Toggl</Link>
            <Link href={'#'}>Legal Terms</Link>
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>PRODUCT</ListHeader>
            <Link href={'#'}>Features</Link>
            <Link href={'#'}>Pricing</Link>
            <Link href={'#'}>Integrations</Link>
            <Link href={'#'}>Case Studies</Link>
            <Link href={'#'}>API</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>USE CASES</ListHeader>
            <Link href={'#'}>Billing and Invoicing</Link>
            <Link href={'#'}>Employee Time Tracking</Link>
            <Link href={'#'}>Project Budgeting</Link>
            <Link href={'#'}>Reporting</Link>
            <Link href={'#'}>Payroll</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>DOWNLOAD</ListHeader>
            <Link href={'#'}>Mobile Apps</Link>
            <Link href={'#'}>Privacy Policy</Link>
            <Link href={'#'}>Desktop Apps</Link>
            <Link href={'#'}>Browser Extensions</Link>
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>HELP</ListHeader>
            <Link href={'#'}>Support & Knowledge Base</Link>
            <Link href={'#'}>Request A Demo</Link>
            <Link href={'#'}>Desktop Apps</Link>
            <Link href={'#'}>Contact Us</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>RESOURCES</ListHeader>
            <Link href={'#'}>Work From Home Hub</Link>
            <Link href={'#'}>Business Resources</Link>
            <Link href={'#'}>Productivity Resources</Link>
            <Link href={'#'}>Timesheet Templates</Link>
<Link href={'#'}>Media Kit</Link>
          </Stack>
        
        </SimpleGrid>
      </Container>
      <Stack direction={'row'} marginBottom={"30px"} spacing={6} justifyContent={"center"}>
            <SocialButton label={'Twitter'} href={'#'}>
              <FaTwitter />
            </SocialButton>
            <SocialButton label={'facebook'} href={'#'}>
              <FaFacebook />
            </SocialButton>
            <SocialButton label={'Instagram'} href={'#'}>
              <FaInstagram />
            </SocialButton>
            <SocialButton label={'YouTube'} href={'#'}>
              <FaYoutube />
            </SocialButton>
            <SocialButton label={'linkdin'} href={'#'}>
              <FaLinkedinIn />
            </SocialButton>
            <SocialButton label={'Github'} href={'#'}>
              <FaGithub/>
            </SocialButton>
          </Stack>

          <Stack>
            <Box>Discover Other toggl tool:</Box>
            <Box><img src="" alt="" /></Box>
            <Box></Box>
          </Stack>
      <Box
        borderTopWidth={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.700')}>
        <Container
          as={Stack}
          maxWidth
          color={"black"}
          bg={"#e57cd8"}
          py={4}
         
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ md: 'space-between' }}
          align={{ md: 'center' }}>
          <Text>© 2022 Toggl. All rights reserved</Text>
         
        </Container>
      </Box>
    </Box>
  );
}