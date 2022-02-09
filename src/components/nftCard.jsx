import React from 'react';
import {Image,Box, Text, Skeleton, HStack,chakra, Spacer, Tooltip} from "@chakra-ui/react";
import { useNft } from "use-nft"
import {FaLink} from "react-icons/fa";
import IDK from "../images/idk.png";
import Atropos from 'atropos/react';
const NftCard = (props) => {
    const {address,tokenId} = props;
    const { loading, error, nft } = useNft(
        address,
        tokenId
    )
    
    if (loading) return (<Box rounded="lg" p="2" m="1" mx="auto" shadow="lg" bgGradient="linear(to-br,green.100,blue.100)">
    <Skeleton h={{base:"400",md:"300"}} w={{base:"400px", md:"300px"}} rounded="md" my="1" />
    <HStack>
    <Text p="2" rounded="md" bgColor="gray.900" color="gray.100"><Skeleton height='20px' /></Text>
    <Spacer/>
    <chakra.a href="/" rounded="md" bgColor="gray.900" p="2" color="gray.100"><Skeleton height='20px' /></chakra.a>
    </HStack>
  </Box>);

    // nft.error is an Error instance in case of error.
    if (error) return (<Box rounded="lg" p="2" m="1" mx="auto" shadow="lg" bgGradient="linear(to-br,green.100,blue.100)">
    <Image src={IDK} h={{base:"400",md:"300"}} rounded="md" my="1" />
    <HStack>
    <Text p="2" rounded="md" bgColor="gray.900" color="gray.100"><Skeleton height='20px' /></Text>
    <Spacer/>
    
    </HStack>
  </Box>)

    return (
      <Atropos>
      <Box rounded="lg" p="2" m="1" mx="auto" shadow="lg" maxW="600" bgGradient="linear(to-br,green.100,blue.100)">
        
        <Image data-atropos-offset="-3" src={nft.image} h={{base:"400",md:"300"}} mx="auto" fallbackSrc={IDK} rounded="md" my="1" />
        <HStack mx='1'>
            <Tooltip rounded="lg" label={nft.description}>
            <Text p="2" data-atropos-offset="5" rounded="md" bgColor="gray.900" color="gray.100">{nft.name}</Text>
            </Tooltip>
        <Spacer/>
        <Tooltip rounded="lg" label="View on OpenSea">
        <chakra.a data-atropos-offset="5" href={`https://opensea.io/assets/${address}/${tokenId}`} target="_blank" rounded="md" bgColor="gray.900" p="2" color="gray.100"><FaLink/></chakra.a>
        </Tooltip>
        </HStack>
        
      </Box>
      </Atropos>
    );
};

export default NftCard;
