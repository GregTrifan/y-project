import { Box, Center } from "@chakra-ui/react";
import ReactMarkdown from "react-markdown";
import ChakraUIRenderer from "chakra-ui-markdown-renderer";
const Home = () => {
  const msg = `
  # Welcome to Y-Project
  This is a **basic** React project (built for the Unstoppable Domains bounty from Gitcoin) providing token balances & owned NFTs of an Unstoppable Domains user
  ### This app uses under the hood:
  * Moralis API (fetches owned tokens & nfts)
  * Unstoppable Domains uauth lib (for wallet authentification)
  * React (cause why not 😅)
  * Chakra UI for making a fairly nice UI
  `;
  return (
    <Box>
      <Box h="86vh">
        <ReactMarkdown components={ChakraUIRenderer()} children={msg} />
      </Box>
      <Center>&#169; {new Date().getFullYear()} Greg (TheSlayer-666)</Center>
    </Box>
  );
};

export default Home;
