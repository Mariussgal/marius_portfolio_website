import type { NextPage } from 'next';
import Marquee from "react-fast-marquee";
import { useState } from 'react';
import { Box, Flex, Image, Text, Tooltip, Link } from '@chakra-ui/react';

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
        flexDirection={["column", "column", "row", "row"]}
        alignItems="center"
        justifyContent="center"
      >
        <Flex
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          width={["80%", "80%", "26%", "26%"]}
          pb={[8, 8, 0, 0]}
          mr={[0, 0, 8, 8]}
        >
          <Text
            fontSize={["sm", "md", "lg", "x-large"]}
            textAlign={["center", "center", "justify", "justify"]}
          >
            Hi, my name is Jean <br /> and welcome to my website!
          </Text>
        </Flex>
        <Flex width={["50%", "50%", "26%", "26%"]}>
          <Link isExternal href="https://opensea.io/assets/matic/0x432b412f996876383179dd32b1d5a05d82b1c247/42422459518494875301295097471961745295004447736525645121969000116510048539885">
            <Image
              src={"./headshot.jpeg"}
              alt='Jean Gal'
              objectFit="cover"
              alignSelf="center"
              sx={{ filter: 'brightness(105%)' }}
              border="1px"
              borderColor="#DCD7C9"
              borderRadius="50%"
            />
          </Link>
        </Flex>
        <Flex
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          width={["80%", "80%", "26%", "26%"]}
          pt={[8, 8, 0, 0]}
          ml={[0, 0, 8, 8]}
        >
          <Text
            fontSize={["sm", "md", "lg", "x-large"]}
            textAlign={["center", "center", "justify", "justify"]}

          > I am a passionate Software Engineer with a focus on Blockchain technology
          </Text>
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
              BLOCKCHAIN ENGINEER & DEVELOPER
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