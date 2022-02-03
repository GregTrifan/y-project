import {
    Box,
    Flex,
    Text,
} from "@chakra-ui/react";
import {HiOutlinePhotograph} from "react-icons/hi"
import { MdHome} from "react-icons/md";
import "@fontsource/quantico";
import NavItem from "./navItem";
const SidebarContent = (props) => (
    <Box
      as="nav"
      pos="fixed"
      top="0"
      left="0"
      zIndex="sticky"
      h="full"
      pb="10"
      overflowX="hidden"
      overflowY="auto"
      bg="white"
      borderColor="inherit"
      borderRightWidth="1px"
      w="60"
      {...props}
    >
      <Flex px="4" py="5" align="center">
        
        <Text
          fontSize="3xl"
          ml="2"
          fontFamily="quantico"
          color="brand.500"
          fontWeight="semibold"
        >
          Y-Project
        </Text>
      </Flex>
      <Flex
        direction="column"
        as="nav"
        fontSize="sm"
        color="gray.600"
        aria-label="Main Navigation"
      >
        <NavItem icon={MdHome}>Feed</NavItem>
        <NavItem icon={HiOutlinePhotograph}>Your Collection</NavItem>
      </Flex>
    </Box>
);
export default SidebarContent