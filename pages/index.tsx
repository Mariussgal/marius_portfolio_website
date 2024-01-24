import { Box, Flex, Image, Tooltip, Button, useToast } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import type { NextPage } from 'next';
import { useState } from 'react';

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
      <Flex height="10%" width="100%">
        <motion.div
          initial={{ x: '-2vw' }}
          animate={{ x: '100vw' }}
          transition={{ repeat: Infinity, duration: 12 }}
          style={{ marginLeft: 0 }}
        >
          <Tooltip label="Address copied" m={0} isOpen={isOpen} >
            <Button color="black" bg="transparent" onClick={handleClick}>{address}</Button>
          </Tooltip>
        </motion.div>
      </Flex>
    </Flex >
  );
};

export default Home;