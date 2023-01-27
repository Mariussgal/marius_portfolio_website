import { Box, Divider, Flex, Image } from '@chakra-ui/react';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <Flex flexDirection="row" height="100%">
      <Box 
        position="absolute" 
        height="200px"
        width="200px" 
        top="50%" 
        left="50%" 
        mt="-100px" 
        ml="-100px" 
        zIndex="1"
        _hover={{
          height: "400px",
          width: "400px",
          mt: "-200px",
          ml: "-200px"
        }}
      >
        <Image src={"./mepic.png"} alt='Jean Gal' />
      </Box>
      <Flex alignItems="center" justifyContent="center" w="50%">
        <p>Hi, my name is Jean Gal <br/> and welcome to my website</p>
      </Flex>
      <Divider orientation='vertical' size="5px" width="5px"/>
      <Flex flexDirection="column" alignItems="center" justifyContent="center" w="50%">
        <p>Software Engineer Graduate and Blockchain Developer</p>
        <p>Working as a freelancer, get in touch with me to collaborate!</p>
      </Flex>
    </Flex>
  );
};

export default Home;
