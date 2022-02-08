import React from "react";
import {Box, Flex,Icon} from "@chakra-ui/react"
import { Link } from "react-router-dom";

const NavItem = (props) => {
    const { icon, children,to, ...rest } = props;
    return (
      <Link to={to??"/"}>
        <Flex
        align="center"
        px="4"
        pl="4"
        py="3"
        cursor="pointer"
        color="inherit"
        _hover={{
          bg: "gray.50",
          color: "brand.500",
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
              color: "brand.600",
            }}
            as={icon}
          /></Box>
        )}
        {children}
      </Flex>
      </Link>
    );
  };
export default NavItem