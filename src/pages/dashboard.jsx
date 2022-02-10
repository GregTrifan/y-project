import { Heading,Box, Avatar,Flex,Spacer,Center,Stack,Text, VStack,Divider,Spinner } from '@chakra-ui/react';
import React,{useEffect} from 'react';
import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { userState } from '../atoms/userAtom';

const Dashboard = () => {
  const user = useRecoilValue(userState);
  const [erc20Tokens,setErc20Tokens] = useState([]);
  const [ethBalance,setEthBalance] = useState();
  const [loading,setLoading] = useState(false);
  const grabTokens = async() => {
    const address = user.idToken.wallet_address
    setLoading(true);
    const fetchedTokens = await fetch(`https://deep-index.moralis.io/api/v2/${address}/erc20?chain=eth&format=decimal`,{headers:{'X-API-Key':import.meta.env.VITE_MORALIS_KEY}})
            .then((res)=>res.json());
    const fetchedEther = await fetch(`https://deep-index.moralis.io/api/v2/${address}/balance?chain=eth`,{headers:{'X-API-Key':import.meta.env.VITE_MORALIS_KEY}})
            .then((res)=>res.json());
    setEthBalance(Number(fetchedEther.balance));
    setErc20Tokens(fetchedTokens);
  }
  useEffect(()=> {
    if (user) {
     grabTokens().then(()=>setLoading(false));
    }
  },[user])

  if (!user) 
      return (<Heading>Please Connect your Wallet in order to see this page</Heading>)
  return (<div>
    <Heading>Your Assets</Heading>
    <Box mt="8"
    mx="auto"
    shadow="lg"
    py={6}
    maxW={{ base: "90vw", sm: "80vw", md: "70vw", lg: "60vw", xl: "800px" }}
    spacing={0}
    bgGradient="linear(to-br,gray.200,green.100,blue.100)"
    rounded="md">
      
      <Stack direction={{ base: "column" }} w="full">
        {
          ethBalance&&(<>
          <Flex pr={{base:2,md:10}} pl={2} >
            <Avatar
              my="auto"
              mx="auto"
              mr={3}
              name="ETH"
              src="https://tokens.1inch.io/0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee.png"
              />
            <VStack alignItems="start" my="auto">
              <Text opacity={0.8} fontWeight="bold">Ethereum (ETH)</Text>
            </VStack>
            <Spacer/>
            
              <Text opacity={0.8} my="auto" fontWeight="bold">
                  {Number(ethBalance)/Math.pow(10,18)} ETH
              </Text>
              
          </Flex>
          {erc20Tokens.length!=0&&<Divider borderColor="gray.400"/>}
          </>)
        }
      {
        erc20Tokens.map((token,pid)=>(
        <React.Fragment key={pid}>
          <Flex pr={{base:2,md:10}} pl={2} >
            <Avatar
              my="auto"
              mx="auto"
              mr={3}
              name={token.symbol}
              src={token.logo}
              />
            <VStack alignItems="start" my="auto">
              <Text opacity={0.8} fontWeight="bold">{token.name} ({token.symbol})</Text>
            </VStack>
            <Spacer/>
            
              <Text opacity={0.8} my="auto" fontWeight="bold">
                  {Number(token.balance)/Math.pow(10,Number(token.decimals))} {token.symbol}
              </Text>
              
          </Flex>
          {erc20Tokens[pid] !==
                erc20Tokens[erc20Tokens.length - 1] ? (
                  <Divider borderColor="gray.400"/>
                ) : (
                  ""
                )}
        </React.Fragment>
        ))
      }
      {loading&&(<Center><Spinner size="xl" /></Center>)}
      </Stack>
    </Box>
</div>);
};

export default Dashboard;
