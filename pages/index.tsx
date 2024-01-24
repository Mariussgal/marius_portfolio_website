import type { NextPage } from 'next';
import Marquee from "react-fast-marquee";
import { useState } from 'react';
import { Box, Flex, Image, Text, Tooltip, useMediaQuery } from '@chakra-ui/react';

const Home: NextPage = () => {

  const [isOpen, setOpen] = useState(false);

  const handleClick = () => {
    navigator.clipboard.writeText(address);
    setOpen(true);
    setTimeout(() => setOpen(false), 500);
  };

  const address = '0x4df30AF0237E9a5c29D0f49a18Cb6f46692e3c71';
  const [isLargerThan900] = useMediaQuery("(max-width: 900px)");

  return (
    <Flex flexDirection="column" height="90vh" width="100%" color="black">
      <Box
        height="60%"
        width="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Image src={"./mepic.png"} alt='Jean Gal' height="60%" width="100%" objectFit="contain" alignSelf="flex-end" />
      </Box>
      <Flex flexDirection="row" alignItems="center" justifyContent="center" w="100%" height="30%">
        <Flex alignItems="center" justifyContent="center" w="50%">
          <p>Hi, my name is Jean Gal <br /> and welcome to my website</p>
        </Flex>
        <Flex flexDirection="column" alignItems="center" justifyContent="flex-start" w="50%">
          <p>Software Engineer Graduate and Blockchain Developer</p>
          <p>Working as a freelancer, get in touch with me to collaborate!</p>
        </Flex>
      </Flex>
      <Box position="absolute" bottom="20px" display="flex" justifyContent="center" width="100%" backgroundColor="transparent">
        <Box display="flex" flexDirection="row" alignItems="center" width={isLargerThan900 ? "95%" : "97%"} height="auto" backgroundColor="transparent" border="var(--border-size-std) solid var(--primary)" borderRadius="10px">
          <Marquee direction="right" speed={50} gradient={false} pauseOnHover={true}>
            <Text fontSize={isLargerThan900 ? "1em" : "1.2em"} margin="10px 20px" color="var(--primary)" transition="all .15s linear" _hover={{ color: "var(--accent)" }}>
              JEAN GAL &copy; {new Date().getFullYear()}
            </Text>
            <Text fontSize={isLargerThan900 ? "1em" : "1.2em"} margin="10px 20px" color="var(--primary)" transition="all .15s linear" _hover={{ color: "var(--accent)" }}>
              SOFTWARE ENGINEER
            </Text>
            <Tooltip label="Address copied" m={0} isOpen={isOpen} >
              <Text fontSize={isLargerThan900 ? "1em" : "1.2em"} margin="10px 20px" color="var(--primary)" transition="all .15s linear" _hover={{ color: "var(--accent)" }} onClick={handleClick}>
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