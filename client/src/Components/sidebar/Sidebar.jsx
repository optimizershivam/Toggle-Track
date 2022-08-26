import React,{ReactNode} from 'react'
import {
  IconButton,
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
} from '@chakra-ui/react';
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
  FiFolderMinus,
  FiUser
  
} from 'react-icons/fi';
import { IconType } from 'react-icons';
import { ReactText } from 'react';
import { TbReportSearch } from "react-icons/tb";
import { FaUserFriends,FaTag,FaQuestion } from "react-icons/fa";
// interface LinkItemProps {
//   name: string;
//   icon: IconType;
// }

const LinkItems = [
  { name: 'Home', icon: FiHome },
  { name: 'Trending', icon: FiTrendingUp },
  { name: 'Explore', icon: FiCompass },
  { name: 'Favourites', icon: FiStar },
  { name: 'Settings', icon: FiSettings },
];
const Anylyze=[
    { name:"Reports",icon:TbReportSearch}
]
const Manage=[
    {name:"Projects",icon:FiFolderMinus},
    {name:"Client",icon:FiUser},
    {name:"Team",icon:FaUserFriends},
    {name:"Tag",icon:FaTag},
    {name:"Help",icon:FaQuestion}
]

export default function SimpleSidebar({ children }: { children: ReactNode }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: 'none', md: 'block' }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full">
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav display={{ base: 'flex', md: 'none' }} onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
    </Box>
  );
}

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  return (
    <Box
      bg={useColorModeValue('#2c1338')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 40 }}
      pos="fixed"
      h="full"
      {...rest}>
        {/* Timer */}
        <Box  border='1px solid orange'>
      <Flex h="10px" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="15px" color="orange" fontFamily="monospace" fontWeight="bold">
          Tracker
        </Text>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon}>
         <Text color="white" fontSize="10px">{link.name}</Text> 
        </NavItem>
      ))}
    {/* anaylyze */}
      </Box>
      <Box  border='1px solid orange' marginTop={"10px"}>
      <Flex h="10px" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="15px" color="orange" fontFamily="monospace" fontWeight="bold">
          Anaylyze
        </Text>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      {Anylyze.map((link) => (
        <NavItem key={link.name} icon={link.icon}>
         <Text color="white" fontSize="10px">{link.name}</Text> 
        </NavItem>
      ))}
      </Box>
    {/* Manage */}
    <Box  border='1px solid orange' marginTop={"10px"}>
      <Flex h="10px" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="15px" color="orange" fontFamily="monospace" fontWeight="bold">
          Manage
        </Text>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      {Manage.map((link) => (
        <NavItem key={link.name} icon={link.icon}>
         <Text color="white" fontSize="10px">{link.name}</Text> 
        </NavItem>
      ))}
      </Box>
    
    </Box>
  );
};

interface NavItemProps extends FlexProps {
  icon: IconType;
  children: ReactText;
}
const NavItem = ({ icon, children, ...rest }: NavItemProps) => {
  return (
    <Link href="#" style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}>
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
            fontSize="10px"
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
    </Link>
  );
};

interface MobileProps extends FlexProps {
  onOpen: () => void;
}
const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 24 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue('white', 'gray.900')}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent="flex-start"
      {...rest}>
      <IconButton
        variant="outline"
        onClick={onOpen}
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Text fontSize="2xl" ml="8" fontFamily="monospace" fontWeight="bold">
        Logo
      </Text>
    </Flex>
  );
};