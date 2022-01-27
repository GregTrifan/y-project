import {
    Box,
    Button,
    Drawer,
    DrawerContent,
    DrawerOverlay,
    Flex,
    IconButton,
    Input,
    InputGroup,
    InputLeftElement,
    Spacer,
    useColorModeValue,
    useDisclosure,
  } from "@chakra-ui/react";
import { FiMenu, FiSearch } from "react-icons/fi";
import SidebarContent from "./navbar/sidebar";
import React from "react";
  
export default function Layout({children}) {
    const sidebar = useDisclosure();

    return (
      <Box
        as="section"
        bg={useColorModeValue("gray.50", "gray.700")}
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
            bg={useColorModeValue("white", "gray.800")}
            borderBottomWidth="1px"
            borderColor={useColorModeValue("inherit", "gray.700")}
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
              <Button>
                Connect wallet
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