import {
  Container,
  Stack,
  Flex,
  Tag,
  Box,
  Heading,
  Text,
  Button,
  Image,
  Icon,
  IconButton,
  createIcon,
  useColorModeValue,
} from '@chakra-ui/react';

export default function Video() {
  return (
    <Container maxW={'8xl'} bg={"rgb(255, 243, 237)"} margin={"auto"}>
      <Stack
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: 'column', md: 'row' }} padding={"5%"}>
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}>
            <Text
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: '30%',
                position: 'absolute',
                bottom: 1,
                left: 0,
                color:"#2c1338",
                bg: '#2c1338',
                zIndex: -1,
              }}>
             A time tracking tool 
            </Text>
            <br />
            <Text color={'#2c1338'}>
<Tag as='i' size={"200px"} color={"rgb(229, 124, 216)"}>anyone</Tag> can use
            </Text>
           
          </Heading>
          <Text color={'black'} fontSize={"large"} textAlign={"justify"} fontWeight={"400px"} margin="auto">
          Whether you are a team of one or a thousand, we <br/>understand that being productive is different for everyone. This is why Toggl Track is built into any workflow.
          </Text>
         
        </Stack >
        <Stack
          flex={1}
          justify={'center'}
          align={'center'}
          position={'relative'}
          w={'full'}>
          <Blob
            w={'150%'}
            h={'150%'}
            position={'absolute'}
            top={'-20%'}
            left={0}
            zIndex={-1}
            color={useColorModeValue('red.50', 'red.400')}
          />
          <Box
            position={'relative'}
            height={'300px'}
            rounded={'2xl'}
            boxShadow={'2xl'}
            width={'full'}
            overflow={'hidden'}>
            <Button
              aria-label={'Play Button'}
              variant={'ghost'}
              _hover={{ bg: 'transparent' }}
              icon={<PlayIcon w={12} h={12} />}
              size={'lg'}
              color={'white'}
              borderRadius={"16px"}
              bg={"rgb(44, 19, 56)"}
              position={'absolute'}
              left={'50%'}
              top={'50%'}
              transform={'translateX(-50%) translateY(-50%)'} 
            >Watch-1 minute Video</Button>
            <Image
              alt={'Hero Image'}
              fit={'cover'}
              align={'center'}
              w={'100%'}
              h={'100%'}
              src={
                'https://public-assets.toggl.com/b/static/d65ac20a8a6956148d7437345ec74581/0ff40/illo-human-point.avif'
              }
            />
          </Box>
        </Stack>
      </Stack>
      <Stack  direction={{lg:"row",md:"column",base:"column"}} alignItems="center" justifyContent="space-between" textAlign={"justify"}>
        <Box padding={"5%"} margin="auto">
            <img height={"20%"} src="https://public-assets.toggl.com/b/static/illo-integrations-6b17ecf23dcdd61c6225b50a3cb52c4b.png" alt="" />
  <Heading size={"md"} marginTop={"12%"} marginBottom={"5%"}>100+ integrations</Heading>   
  <Text fontFamily={"Inter', sans-serif"} fontWeight={"400"}>Use Toggl Track with the tools you <br/>already use. Track time in 100+ popular tools with the Toggl Track browser extension.</Text> 
        </Box>
        <Box padding={"5%"}>
            <img src="https://public-assets.toggl.com/b/static/illo-desktop-mobile-cf42e1f520c9e57b534affd23bcc4340.png" alt="" />
  <Heading size={"md"} marginTop={"12%"} marginBottom={"5%"}>Works where you work</Heading>   
  <Text>Track time on our web app, desktop,<br/> and mobile apps. You can even start the timer from your stopwatch!</Text> 
        </Box>
        <Box padding={"5%"}>
            <img src="data:image/png;base64,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" alt="" />
  <Heading size={"md"} marginTop={"12%"} marginBottom={"5%"}>Designed to be easy</Heading>   
  <Text>No instruction manual needed. But if <br/> you ever need help, our support team has a track record of responding within 3 hours!</Text> 
        </Box>
      </Stack>
    </Container>
  );
}

const PlayIcon = createIcon({
  displayName: 'PlayIcon',
  viewBox: '0 0 58 58',
  d:
    'M28.9999 0.562988C13.3196 0.562988 0.562378 13.3202 0.562378 29.0005C0.562378 44.6808 13.3196 57.438 28.9999 57.438C44.6801 57.438 57.4374 44.6808 57.4374 29.0005C57.4374 13.3202 44.6801 0.562988 28.9999 0.562988ZM39.2223 30.272L23.5749 39.7247C23.3506 39.8591 23.0946 39.9314 22.8332 39.9342C22.5717 39.9369 22.3142 39.8701 22.0871 39.7406C21.86 39.611 21.6715 39.4234 21.5408 39.1969C21.4102 38.9705 21.3421 38.7133 21.3436 38.4519V19.5491C21.3421 19.2877 21.4102 19.0305 21.5408 18.8041C21.6715 18.5776 21.86 18.3899 22.0871 18.2604C22.3142 18.1308 22.5717 18.064 22.8332 18.0668C23.0946 18.0696 23.3506 18.1419 23.5749 18.2763L39.2223 27.729C39.4404 27.8619 39.6207 28.0486 39.7458 28.2713C39.8709 28.494 39.9366 28.7451 39.9366 29.0005C39.9366 29.2559 39.8709 29.507 39.7458 29.7297C39.6207 29.9523 39.4404 30.1391 39.2223 30.272Z',
});

export const Blob = (props) => {
  return (
    <Icon
      width={'100%'}
      viewBox="0 0 578 440"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M239.184 439.443c-55.13-5.419-110.241-21.365-151.074-58.767C42.307 338.722-7.478 282.729.938 221.217c8.433-61.644 78.896-91.048 126.871-130.712 34.337-28.388 70.198-51.348 112.004-66.78C282.34 8.024 325.382-3.369 370.518.904c54.019 5.115 112.774 10.886 150.881 49.482 39.916 40.427 49.421 100.753 53.385 157.402 4.13 59.015 11.255 128.44-30.444 170.44-41.383 41.683-111.6 19.106-169.213 30.663-46.68 9.364-88.56 35.21-135.943 30.551z"
        fill="currentColor"
      />
    </Icon>
  );
};