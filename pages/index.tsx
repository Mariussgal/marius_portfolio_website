import { Box, Divider, Flex, Image } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <Flex flexDirection="column" height="90vh" width="100%" color="black">
      <Box
        height="60%"
        width="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Image src={"./mepic.png"} alt='Jean Gal' height="60%" width="100%" objectFit="contain" />
      </Box>
      <Flex flexDirection="row" alignItems="center" justifyContent="center" w="100%" height="30%">
        <Flex alignItems="center" justifyContent="center" w="50%">
          <p>Hi, my name is Jean Gal <br /> and welcome to my website</p>
        </Flex>
        <Divider orientation='vertical' size="5px" width="5px" />
        <Flex flexDirection="column" alignItems="center" justifyContent="center" w="50%">
          <p>Software Engineer Graduate and Blockchain Developer</p>
          <p>Working as a freelancer, get in touch with me to collaborate!</p>
        </Flex>
      </Flex>
      <Flex height="10%" width="100%">
        <motion.div
          initial={{ x: '-2vw' }}
          animate={{ x: '100vw' }}
          transition={{ repeat: Infinity, duration: 12 }}
          style={{ marginLeft: 0 }}
        >
          <p>Address</p>
        </motion.div>
      </Flex>
    </Flex >
  );
};

export default Home;