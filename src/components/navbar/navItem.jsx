import React from "react";
import {Box, Flex,Icon,useColorModeValue} from "@chakra-ui/react"

const NavItem = (props) => {
    const { icon, children, ...rest } = props;
    return (
      <Flex
        align="center"
        px="4"
        pl="4"
        py="3"
        cursor="pointer"
        color={useColorModeValue("inherit", "gray.400")}
        _hover={{
          bg: useColorModeValue("gray.50", "gray.900"),
          color: useColorModeValue("brand.500", "gray.200"),
        }}
        role="group"
        fontWeight="semibold"
        transition=".15s ease"
        {...rest}
      >
        {icon && (
            <Box
            rounded="md"
            mx="2"
            my="1"
            boxShadow='lg'
            >
          <Icon
            
            mx="2"
            color="brand.500"
            _groupHover={{
              color: useColorModeValue("brand.600", "gray.300"),
            }}
            as={icon}
          /></Box>
        )}
        {children}
      </Flex>
    );
  };
export default NavItem