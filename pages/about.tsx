
import type { NextPage } from 'next';
import { Circle } from "@chakra-ui/layout";
import { Box, Grid, Flex } from '@chakra-ui/react';
import Solidity from '../icons/Solidity';
import Ethereum from '../icons/Ethereum';
import Tezos from '../icons/Tezos';

const about: NextPage = () => {
  return (
    <Flex as="div" flexDirection="row" width="100%">
      <Box width="100%" color="black">
        <Box w="100%" p={4}>
          EDUCATION
        </Box>
        <Box h="4px" bg="black" />
        <Flex px={10} flexDirection="row" justifyContent="space-between" >
          <Box>New York University</Box>
          <Box alignItems="flex-start">Master of Science in Computing, Entrepreneurship & Innovation</Box>
          <Box>2023-2024</Box>
        </Flex>
        <Box h="2px" bg="black" />
        <Flex px={10} flexDirection="row" justifyContent="space-between">
          <Box>Alyra Blockchain School</Box>
          <Box alignItems="flex-start">Blockchain Developer Course</Box>
          <Box>2022</Box>
        </Flex>
        <Box h="2px" bg="black" />
        <Flex px={10} flexDirection="row" justifyContent="space-between">
          <Box>Delft University of Technology</Box>
          <Box alignItems="flex-start">Bachelor of Science, Computer Science & Engineering</Box>
          <Box>2018-2021</Box>
        </Flex>
        <Box h="2px" bg="black" />
        <Flex px={10} flexDirection="row" justifyContent="space-between">
          <Box>Lycée Lyautey, Casablanca</Box>
          <Box alignItems="flex-start">Science Baccalaureat</Box>
          <Box>2014-2018</Box>
        </Flex>
        <Box h="2px" bg="black" />
        <Flex px={10} flexDirection="row" justifyContent="space-between">
          <Box>Lycée Français International de Bangkok </Box>
          <Box>Middle school</Box>
          <Box>2008-2013</Box>
        </Flex>
        <Box h="4px" bg="black" />
        <Box w="100%" p={4}>
          SKILLS
        </Box>
        <Box h="2px" bg="black" />
        <Grid h="300px" templateColumns="40% 60%">
          <Box h="100%" w="100%" p={4}>
            Development
            <Grid templateColumns="repeat(4, 1fr)" pt={1}>
              <Circle size="70px" borderColor="black" borderWidth={1}>React</Circle>
              <Circle size="70px" borderColor="black" borderWidth={1}>Typescript</Circle>
              <Circle size="70px" borderColor="black" borderWidth={1}>Javascript</Circle>
              <Circle size="70px" borderColor="black" borderWidth={1}>Nextjs</Circle>
              <Circle size="70px" borderColor="black" borderWidth={1}>Node.js</Circle>
              <Circle size="70px" borderColor="black" borderWidth={1}>HTML</Circle>
              <Circle size="70px" borderColor="black" borderWidth={1}>Matlab</Circle>
              <Circle size="70px" borderColor="black" borderWidth={1}>Java</Circle>
              <Circle size="70px" borderColor="black" borderWidth={1}>Python</Circle>
              <Circle size="70px" borderColor="black" borderWidth={1}>Dart</Circle>
              <Circle size="70px" borderColor="black" borderWidth={1}>Flutter</Circle>
            </Grid>
          </Box>
          <Grid h="100%" templateRows="15% 35% 50%">
            <Box pt={3}>Web3</Box>
            <Box display="flex" flexDirection="row">
              <Box>Ethereum</Box>
              <Ethereum />
              <Box>Tezos</Box>
              <Tezos />
              <Box>Solidity</Box>
              <Solidity />
              <Box>Hardhat</Box>
              <Box>Truffle</Box>
              <Box>Wagmi</Box>
              <Box>Web3.js</Box>
              <Box>IPFS</Box>
              <Box>OpenZeppelin</Box>
              <Box>Metamask</Box>
              <Box>Pinata</Box>
              <Box>Archetype</Box>
              <Box>JsLigo</Box>
            </Box>
            <Grid templateColumns="50% 50%">
              <Box bg="tomato">ERCs</Box>
              <Box bg="blue">Tools</Box>
            </Grid>
          </Grid>
        </Grid>
        <Box h="4px" bg="black" />
        <Box w="100%" p={4}>
          ACHIEVEMENTS
        </Box>
      </Box>
    </Flex>
  )
}

export default about

