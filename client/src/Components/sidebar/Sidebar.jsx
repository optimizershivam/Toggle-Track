import React,{ReactNode} from 'react'
import {
  
  Box,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  BoxProps,
  FlexProps,
  Image,
  
} from '@chakra-ui/react';
import {
 
  FiFolderMinus,
  FiUser,
  FiWatch
  
} from 'react-icons/fi';
import { IconType } from 'react-icons';
import { ReactText } from 'react';
import { TbReportSearch } from "react-icons/tb";
import { FaUserFriends,FaTag,FaQuestion } from "react-icons/fa";
import { BellIcon } from '@chakra-ui/icons'
import {FaStopwatch  } from "react-icons/fa";
import{Link as RouterLink} from "react-router-dom";
// interface LinkItemProps {
//   name: string;
//   icon: IconType;
// }

// const LinkItems = [
//   { name: 'Timer', icon: FaStopwatch},
// ];
const Anylyze=[
    { name:"Reports",icon:TbReportSearch}
]
// const Manage=[
//     {name:"Projects",icon:FiFolderMinus,links:"/project"},
//     {name:"Client",icon:FiUser},
//     {name:"Team",icon:FaUserFriends},
//     {name:"Tag",icon:FaTag},
//     {name:"Help",icon:FaQuestion}
// ]

export default function SimpleSidebar({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    // <Box minH="100vh" bg={useColorModeValue('')}>
    <>
      <SidebarContent display={{ base: 'none', md: 'block' }}/>
       
      {/* mobilenav */}
      <MobileNav display={{ base:"flex",md: 'none' }} />
      <>
      
      
      
      
      </>

      {/* <Box ml={{ base: 0, md: 60 }} p="4">
        <Text>Hello</Text>
        {children}
      </Box> */}
      </>
    // </Box>
  );
}

// interface SidebarProps extends BoxProps {
//   onClose: () => void;
// }

const SidebarContent = ({ onClose, ...rest }) => {
  return (
    <Box
      bg={useColorModeValue('#2c1338')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w="190px"
      pos="fixed"
      h="full"
      {...rest}>
        <Box ml="1" display={"flex"} alignItems="center" marginRight="50px" marginTop="10px">
       <Image  margin="auto"   h="20px" w="80px" src="https://assets.website-files.com/5f699d08507c7daf18b16e6a/61235a16de9b7eb783fe6b73_toggl-track_.png"  />
          <BellIcon w={5} h={5} color="white"/>
        </Box>
        
        {/* Timer */}
        <Box marginTop="10px" >
      <Flex h="10px"   alignItems="center" mx="2" justifyContent="space-between">
        <Text fontSize="12px" color="#777088" fontWeight="bold" >
          TRACK
        </Text>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex> 
      <RouterLink to="/timer">
      <Flex
        align="center"
        p="1"
        mx="2"
        mt="5px"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: 'grey',
          color: 'white',
        }}
        >
        {(
          <Icon
            mr="4"
            fontSize="20px"
            padding="auto" 
            color="white"
            _groupHover={{
              color: 'white',
            }}
            as={FaStopwatch}
          />
        )}
      <Text color="white" fontSize="13px">Timer</Text>
      </Flex>
      </RouterLink>
      
    {/* anaylyze */}
      </Box >
      <Box  marginTop={"10px"}>
      <Flex h="10px" alignItems="center" mx="2" justifyContent="space-between">
        <Text fontSize="12px" color="#777088"  fontWeight="bold">
          ANAYLZE
        </Text>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      {Anylyze.map((link) => (
        <NavItem paddingTop="15px" key={link.name} link={link.links} icon={link.icon}>
         <Text color="white" fontSize="13px">{link.name}</Text> 
        </NavItem>
      ))}
      </Box>
    {/* Manage */}
    <Box   marginTop={"10px"}>
      <Flex h="10px" alignItems="center" mx="2" justifyContent="space-between">
        <Text fontSize="12px" color="#777088"  fontWeight="bold">
          MANAGE
        </Text>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      
      <>
      {/* //project */}
      <RouterLink to="/project">
    
       <Flex
        align="center"
        p="1"
        mx="2"
        mt="5px"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: 'grey',
          color: 'white',
        }}
        >
        {(
          <Icon
            mr="4"
            fontSize="20px"
            padding="auto" 
            color="white"
            _groupHover={{
              color: 'white',
            }}
            as={FiFolderMinus}
          />
        )}
      <Text color="white" fontSize="13px">Project</Text>
      </Flex>
      </RouterLink>
      </>
      {/* {name:"Client",icon:FiUser},
    {name:"Team",icon:FaUserFriends},
    {name:"Tag",icon:FaTag},
    {name:"Help",icon:FaQuestion} */}


      <>
      <Flex
        align="center"
        p="1"
        mx="2"
        mt="5px"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: 'grey',
          color: 'white',
        }}
        >
        {(
          <Icon
            mr="4"
            fontSize="20px"
            padding="auto" 
            color="white"
            _groupHover={{
              color: 'white',
            }}
            as={FiUser}
          />
        )}
      <Text color="white" fontSize="13px">Client</Text>
      </Flex>
      </>
     <>
     <Flex
        align="center"
        p="1"
        mx="2"
        mt="5px"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: 'grey',
          color: 'white',
        }}
        >
        {(
          <Icon
            mr="4"
            fontSize="20px"
            padding="auto" 
            color="white"
            _groupHover={{
              color: 'white',
            }}
            as={FaTag}
          />
        )}
      <Text color="white" fontSize="13px">Tag</Text>
      </Flex>
     
     </>
     <>
     <Flex
        align="center"
        p="1"
        mx="2"
        mt="5px"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: 'grey',
          color: 'white',
        }}
        >
        {(
          <Icon
            mr="4"
            fontSize="20px"
            padding="auto" 
            color="white"
            _groupHover={{
              color: 'white',
            }}
            as={FaQuestion}
          />
        )}
      <Text color="white" fontSize="13px">Help</Text>
      </Flex>
     </>
      </Box>
    
    </Box>
  );
};

// interface NavItemProps extends FlexProps {
//   icon: IconType;
//   children: ReactText;
  
// }
const NavItem = ( {icon,children, ...rest}) => {

  return (
    
      <Flex
        align="center"
        p="1"
        mx="2"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: 'grey',
          color: 'white',
        }}
        {...rest}>
        {icon && (
          <Icon
            mr="4"
            fontSize="20px"
            padding="auto" 
            color="white"
            _groupHover={{
              color: 'white',
            }}
            as={icon}
          />
        )}
        {children}
        {/* <Text color="white">{children}</Text> */}
      </Flex>
    // </Links>
  );
};

// interface MobileProps extends FlexProps {
//   onOpen: () => void;
// }
const MobileNav = ({ ...rest }) => {
  return (
    <Box w="50px" border="1px solid green">
    <Flex
      // ml={{ base: 0, md: 60 }}
      // px={{ base: 4, md: 24 }}
      height="100vh"
      width="50px"
      alignItems="center"
      direction="column"
      bg={"#2c1338"}
      borderBottomWidth="1px"
      // borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent="flex-start"
      {...rest}>
        <Box mt="5px" h="50px" borderBottom="1px solid #777088">
        <Image  margin="auto" h="35px" src="https://www.apkmirror.com/wp-content/uploads/2022/05/45/6279203c21d5f.png"/>
        </Box>
         <Box  mt="5px" h="50px" borderBottom="1px solid #777088">

    
    <RouterLink to="/timer">
    <Flex
     align="center"
     p="1"
     mx="2"
     mt="5px"
     borderRadius="lg"
     role="group"
     cursor="pointer"
     _hover={{
       bg: 'grey',
       color: 'white',
     }}
     >
     {(
       <Icon
         mr="4"
         fontSize="20px"
         padding="auto" 
         color="white"
         _groupHover={{
           color: 'white',
         }}
         as={FaStopwatch}
       />
     )}
   
   </Flex>
   </RouterLink>
         </Box>
       <Box  mt="10px" h="50px" borderBottom="1px solid #777088">
       {Anylyze.map((link) => (
        
        <NavItem paddingTop="5px" icon={link.icon}>
         <Text color="white" >{link.icon}</Text> 
        </NavItem>
        
      ))}
      </Box>
       
        <Box  mt="5px"  borderBottom="1px solid #777088">
        {/* {Manage.map((link) => (
        <NavItem  paddingTop="10px"  margin="5px,0px,10px,8px" icon={link.icon}>
        <Text color="white"   >{link.icon}</Text> 
        </NavItem> */}
      {/* ))} */}
      <RouterLink to="/project">
    
       <Flex
        align="center"
        p="1"
        mx="2"
        mt="5px"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: 'grey',
          color: 'white',
        }}
        >
        {(
          <Icon
            mr="4"
            fontSize="20px"
            padding="auto" 
            color="white"
            _groupHover={{
              color: 'white',
            }}
            as={FiFolderMinus}
          />
        )}
      
      </Flex>
      </RouterLink>
      <>
      <Flex
        align="center"
        p="1"
        mx="2"
        mt="5px"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: 'grey',
          color: 'white',
        }}
        >
        {(
          <Icon
            mr="4"
            fontSize="20px"
            padding="auto" 
            color="white"
            _groupHover={{
              color: 'white',
            }}
            as={FiUser}
          />
        )}
      
      </Flex>
      </>
     <>
     <Flex
        align="center"
        p="1"
        mx="2"
        mt="5px"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: 'grey',
          color: 'white',
        }}
        >
        {(
          <Icon
            mr="4"
            fontSize="20px"
            padding="auto" 
            color="white"
            _groupHover={{
              color: 'white',
            }}
            as={FaTag}
          />
        )}
      
      </Flex>
     
     </>
     <>
     <Flex
        align="center"
        p="1"
        mx="2"
        mt="5px"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: 'grey',
          color: 'white',
        }}
        >
        {(
          <Icon
            mr="4"
            fontSize="20px"
            padding="auto" 
            color="white"
            _groupHover={{
              color: 'white',
            }}
            as={FaQuestion}
          />
        )}
      
      </Flex>
     </>
    </Box>
  </Flex>
  </Box>
  );
};