import { Box, Center } from "@chakra-ui/react";
import ReactMarkdown from 'react-markdown'
import ChakraUIRenderer from 'chakra-ui-markdown-renderer';
const Home = () => {
  const msg=`
  # Lorem
  ## Ipsum
  Dolor **sit** Amet
  ### this is a md test
  `
  return (
    <Box>
      <Box h="120vh">
      <ReactMarkdown  components={ChakraUIRenderer()} children={msg}/>
    </Box>
    <Center>
    &#169; {new Date().getFullYear()} Greg (TheSlayer-666)
    </Center>
    </Box>
  );
};

export default Home;
