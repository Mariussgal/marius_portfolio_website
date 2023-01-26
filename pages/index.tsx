import { Box, Divider, Flex, Image } from '@chakra-ui/react';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <Flex flexDirection="row" height="100%">
      <Box position="absolute" height="400px" width="400px" top="50%" left="50%" mt="-200px" m="-200px" zIndex="1">
        <Image src={"./mepic.png"} alt='Jean Gal' />
      </Box>
      <Flex alignItems="center" justifyContent="center" w="50%">
        <p>Hi, my name is Jean Gal <br/> and welcome to my website</p>
      </Flex>
      <Divider orientation='vertical' colorScheme="blackAlpha" position="relative"/>
      <Flex flexDirection="column" alignItems="center" justifyContent="center" w="50%">
        <p>Software Engineer Graduate and Blockchain Developer</p>
        <p>Working as a freelancer, get in touch with me to collaborate!</p>
      </Flex>
    </Flex>
  );
};

export default Home;
