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
  } from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";
import SidebarContent from "./navbar/sidebar";
import React from "react";
import UAuth from "@uauth/js";
import UDLogo from "../images/ud.png";
export default function Layout({children}) {
    const sidebar = useDisclosure();
    const uauth = new UAuth({
      clientID:"OaafgSxIJJOXN35/KfeAkGYEeHFvq3r4ngO1E05tGVg=",
      clientSecret: "/EcHG6EihOPdoGVzCONtaQZyRyqaYIX3oANmgvMsoAA=",
      redirectUri: "http://localhost:3000/callback",
      postLogoutRedirectUri: "http://localhost:3000/login",
    });
    const handleAuth = (e) => {
      uauth.login().catch((error) => {
        console.error("login error:", error);
      });
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
              <Button onClick={handleAuth} textColor="white" bg="#4c47f7" _hover={{bgColor:"#0025bb"}} _pressed={{bg:"#4f62ce"}}>
                <Image src={UDLogo} height={6} />
                <chakra.p mx="2">Login With Unstoppable</chakra.p>
              </Button>
            </Flex>
          </Flex>
          
          <Box  p="4" >
            {children}
          </Box>
        </Box>
      </Box>
    );
  }