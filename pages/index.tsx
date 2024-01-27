import type { NextPage } from 'next';
import Marquee from "react-fast-marquee";
import { useState } from 'react';
import { Box, Flex, Image, Text, Tooltip } from '@chakra-ui/react';

const Home: NextPage = () => {

  const [isOpen, setOpen] = useState(false);

  const handleClick = () => {
    navigator.clipboard.writeText(address);
    setOpen(true);
    setTimeout(() => setOpen(false), 500);
  };

  const address = '0x4df30AF0237E9a5c29D0f49a18Cb6f46692e3c71';

  return (
    <Flex flexDirection="column" height="90vh" width="100%" color="black">
      <Flex
        height="90%"
        width="100%"
        alignItems="center"
        justifyContent="center"
      >
        <Flex flexDirection="column" alignItems="center" justifyContent="center" w="50%">
          <Text fontSize="x-large">Hi, my name is Jean Gal <br /> and welcome to my website!</Text>
        </Flex>
        <Image src={"./mepic.png"} alt='Jean Gal' height="45%" width="45%" objectFit="contain" alignSelf="center" />
        <Flex flexDirection="column" alignItems="center" justifyContent="flex-start" w="50%">
          <Text fontSize="x-large">I am passionate Software Engineer  <br /> with a focus on Blockchain technology</Text>
        </Flex>
      </Flex>
      <Box display="flex" justifyContent="center" height="10%" width="100%" mb={5}>
        <Box display="flex" flexDirection="row" alignItems="center" height="auto" border="1px solid black" boxSizing="border-box" borderRadius="10px" maxWidth="100%">
          <Marquee direction="right" speed={50} gradient={false} pauseOnHover={true}>
            <Text m="10px auto" mr={5} transition="all .15s linear" >
              JEAN GAL &copy; {new Date().getFullYear()}
            </Text>
            <Text mr={5} transition="all .15s linear" >
              SOFTWARE ENGINEER
            </Text>
            <Text mr={5} transition="all .15s linear">
              BLOCKCHAIN DEVELOPER
            </Text>
            <Tooltip label="Address copied" isOpen={isOpen} >
              <Text mr={5} transition="all .15s linear" onClick={handleClick}>
                {"ETH: " + address}
              </Text>
            </Tooltip>
          </Marquee>
        </Box>
      </Box>
    </Flex>
  );
};


export default Home;