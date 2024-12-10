import type { NextPage } from 'next';
import Marquee from "react-fast-marquee";
import { useState } from 'react';
import { Box, Flex, VStack, Image, Text, Tooltip, Link } from '@chakra-ui/react';

const Home: NextPage = () => {

  const [isOpen, setOpen] = useState(false);

  const handleClick = () => {
    navigator.clipboard.writeText(address);
    setOpen(true);
    setTimeout(() => setOpen(false), 500);
  };

  const address = '0x4df30AF0237E9a5c29D0f49a18Cb6f46692e3c71';

  return (
    <Flex flexDirection="column" height="90vh" width="100%" color="#DCD7C9">
<Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="90vh"
      textAlign="center"
      px={6}
    >
      <Text fontSize="sm" fontWeight="semibold" letterSpacing="wide"  mb={4}>
        BUILD - EXPLORE - GROW 
      </Text>

      <VStack spacing={3}>
        <Text fontSize={["3xl", "4xl"]} fontWeight="bold">
          Hi, I'm <Text as="span" color="blue.500">Marius</Text>
        </Text>
   
      </VStack>

      <Text fontSize={["md", "lg"]} mt={6} maxW="700px" >
        A generalist engineering student passionate about Blockchain technology and DeFi, looking out for new experiences in web3.0!
      </Text>
    </Box>

      
      
    <Box display="flex" justifyContent="center" height="10%" width="100%" mb={5}>
        <Box display="flex" flexDirection="row" alignItems="center" height="auto" border="1px solid #DCD7C9" boxSizing="border-box" borderRadius="10px" width="100%">
          <Marquee direction="right" speed={50} gradient={false} pauseOnHover={true} style={{ width: '100%' }}>
        <Text m="10px auto" mr={5} transition="all .15s linear">
          Marius GAL &copy; {new Date().getFullYear()}
        </Text>
        <Text mr={5} transition="all .15s linear">
          GENERALIST ENGINEER STUDENT
        </Text>
        <Text mr={5} transition="all .15s linear">
          BLOCKCHAIN & DeFi ENTHUSIAST
        </Text>
          </Marquee>
        </Box>
      </Box>
    </Flex>
  );
};


export default Home;


