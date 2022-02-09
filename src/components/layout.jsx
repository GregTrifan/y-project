import {
    Box,
    Button,
    Drawer,
    DrawerContent,
    DrawerOverlay,
    Flex,
    Image,
    IconButton,
    Spacer,
    useDisclosure,
    chakra,
    HStack,
    MenuButton,
    Menu,
    MenuList,
    MenuItem,
  } from "@chakra-ui/react";
import { FiMenu,FiLogOut,FiExternalLink } from "react-icons/fi";
import {MdOutlineAccountBalanceWallet} from "react-icons/md";
import SidebarContent from "./navbar/sidebar";
import React from "react";
import UAuth from "@uauth/js";
import { useRecoilValue, useSetRecoilState } from "recoil";
import UDLogo from "../images/ud.png";
import { userState } from "../atoms/userAtom";
export default function Layout({children}) {
    const sidebar = useDisclosure();
    const uauth = new UAuth({
      clientID:"OaafgSxIJJOXN35/KfeAkGYEeHFvq3r4ngO1E05tGVg=",
      clientSecret: "/EcHG6EihOPdoGVzCONtaQZyRyqaYIX3oANmgvMsoAA=",
      redirectUri: "http://localhost:3000/callback",
    });
    const setUserState = useSetRecoilState(userState);
    const user = useRecoilValue(userState);
    const handleAuth = async () => {
      try {
        const authorization = uauth.loginWithPopup();
        setUserState(await authorization);
        console.log(authorization);
      } catch (error) {
        console.error("login error:", error);
      }
    }
    return (
      <Box
        as="section"
        bg="gray.50"
        minH="100vh"
      >
        <SidebarContent display={{ base: "none", md: "unset" }} />
        <Drawer
          isOpen={sidebar.isOpen}
          onClose={sidebar.onClose}
          placement="left"
        >
          <DrawerOverlay />
          <DrawerContent>
            <SidebarContent w="full" borderRight="none" />
          </DrawerContent>
        </Drawer>
        <Box ml={{ base: 0, md: 60 }} transition=".3s ease" >
          <Flex
            sx={{position: 'sticky', top: '0' }}
            as="header"
            align="center"
            justify="space-between"
            w="full"
            px="4"
            bg="white"
            borderBottomWidth="1px"
            borderColor="gray.100"
            shadow="lg"
            h="14"
          >
            <IconButton
              aria-label="Menu"
              display={{ base: "inline-flex", md: "none" }}
              onClick={sidebar.onOpen}
              icon={<FiMenu />}
              size="sm"
            />
            <Spacer/>
  
            <Flex align="center">
              {!user&&<Button onClick={()=>handleAuth()} textColor="white" bg="#4c47f7" _hover={{bgColor:"#0025bb"}} _pressed={{bg:"#4f62ce"}}>
                <Image src={UDLogo} height={6} />
                <chakra.p mx="2">Login With Unstoppable</chakra.p>
              </Button>}
              {user&&<Menu>
                <MenuButton rounded="md" p="2" fontWeight="semibold" fontSize="md" bgGradient='linear(to-r, gray.300, blue.200, green.300)'>
                <HStack>
                <MdOutlineAccountBalanceWallet/> 
                <chakra.span>{user.idToken.sub}</chakra.span>
                </HStack>
                </MenuButton>
                <MenuList>
                  <MenuItem icon={<FiExternalLink/>} onClick={()=>{
                    window.open(`https://etherscan.io/address/${user.idToken.wallet_address}`, '_blank');
                  }}>View on Etherscan</MenuItem>
                  <MenuItem icon={<FiLogOut/>} onClick={()=>setUserState()}>Logout</MenuItem>
                </MenuList>
                </Menu>}
            </Flex>
          </Flex>
          
          <Box  p="4" >
            {children}
          </Box>
        </Box>
      </Box>
    );
  }