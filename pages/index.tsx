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
    <Flex flexDirection="column" height="90vh" width="100%" color="#DCD7C9">
      <Flex
        height="90%"
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
      >
        <Flex
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          width="36%"
        >
          <Text fontSize={["sm", "md", "lg", "x-large"]}>Hi, I&apos;m Jean Gal <br /> and welcome to my website!</Text>
        </Flex>
        <Image
          src={"./mepic.png"}
          alt='Jean Gal'
          objectFit="cover"
          alignSelf="center"
          sx={{ filter: 'brightness(80%)' }}
          border="2px"
          borderColor="#DCD7C9"
          m="2%"
          borderRadius="50%"
          width="28%"
        />
        <Flex
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          width="36%"
        >
          <Text fontSize={["sm", "md", "lg", "x-large"]}>I am a passionate Software Engineer with a focus on Blockchain technology</Text>
        </Flex>
      </Flex>
      <Box display="flex" justifyContent="center" height="10%" width="100%" mb={5}>
        <Box display="flex" flexDirection="row" alignItems="center" height="auto" border="1px solid #DCD7C9" boxSizing="border-box" borderRadius="10px" maxWidth="100%">
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
              <Text mr={5} transition="all .15s linear" onClick={handleClick} cursor="pointer">
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