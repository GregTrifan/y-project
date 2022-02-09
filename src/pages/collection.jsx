import {  Heading,Wrap, WrapItem } from '@chakra-ui/react';
import React, { useEffect,useState } from 'react';
import { useRecoilValue } from 'recoil';
import { userState } from '../atoms/userAtom';
import NftCard from '../components/nftCard';
const Collection = () => {
  const user = useRecoilValue(userState);
  const [nfts,setNfts] = useState([])
  
  const grabCollectibles = async () => {
    const address = user.idToken.wallet_address
    const fetchedCollectibles = await fetch(`https://deep-index.moralis.io/api/v2/${address}/nft?chain=eth&format=decimal&limit=12`,{headers:{'X-API-Key':import.meta.env.VITE_MORALIS_KEY}})
                .then((res)=>res.json());
    setNfts(fetchedCollectibles.result);
  }
  
  useEffect(()=> {
    if (user) {
      grabCollectibles()
    }
    
  },[user])

  if (!user) 
  return (<Heading>Please Connect your Wallet in order to see this page</Heading>)
  
  return (<div>
    <Heading>Collection</Heading>
    <Wrap spacing='30px'>
      {nfts.map((item,pid)=> (
          <WrapItem key={pid}><NftCard address={item.token_address} tokenId={item.token_id} /></WrapItem>))}
    </Wrap>
    </div>
    );
};

export default Collection;
