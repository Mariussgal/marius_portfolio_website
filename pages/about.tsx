
import type { NextPage } from 'next';
import { Circle } from "@chakra-ui/layout";
import { Box, Grid, Flex, Text } from '@chakra-ui/react';
import Solidity from '../icons/Solidity';
import Ethereum from '../icons/Ethereum';
import Tezos from '../icons/Tezos';
import Wagmi from '../icons/Wagmi';
import Archetype from '../icons/Archetype';
import Pinata from '../icons/Pinata';
import OpenZeppelin from '../icons/OpenZeppelin';
import Metamask from '../icons/Metamask';
import Web3Js from '../icons/Web3Js';

const about: NextPage = () => {

  const ercs = ["ERC-20", "ERC-721", "ERC-1155"];
  const tools = ["Remix IDE", "Visual Studio Code", "Figma"];
  const devSkills = ["React", "Typescript", "Javascript", "Nextjs", "Node.js", "HTML", "Matlab", "Java", "Python", "Dart", "Flutter"];

  return (
    <Flex as="div" flexDirection="row" width="100%">
      <Box width="100%" color="black">
        <Box w="100%" p={4}>
          EDUCATION
        </Box>
        <Box h="4px" bg="black" />
        <Flex px={10} flexDirection="row" justifyContent="space-between" >
          <Box><b>New York</b> University</Box>
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
          <Box><b>Delft</b> University of Technology</Box>
          <Box alignItems="flex-start">Bachelor of Science, Computer Science & Engineering</Box>
          <Box>2018-2021</Box>
        </Flex>
        <Box h="2px" bg="black" />
        <Flex px={10} flexDirection="row" justifyContent="space-between">
          <Box>Lycée Lyautey, <b>Casablanca</b></Box>
          <Box alignItems="flex-start">Science Baccalaureat</Box>
          <Box>2014-2018</Box>
        </Flex>
        <Box h="2px" bg="black" />
        <Flex px={10} flexDirection="row" justifyContent="space-between">
          <Box>Lycée Français International de <b>Bangkok</b> </Box>
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
            <Grid templateColumns="repeat(4, 1fr)" fontSize="small" p={2} gap={2}>
              {devSkills.map((skill, index) => (
                <Circle key={index} size="70px" borderColor="black" borderWidth={1}>
                  {skill}
                </Circle>
              ))}
            </Grid>
          </Box>
          <Grid h="100%" w="100%" templateRows="15% 35% 50%">
            <Box pt={3}>Web3</Box>
            <Flex wrap="wrap" h="35%">
              <Flex flexDirection="row" alignItems="center" maxH="60%" mt={3} mr={3}>
                <Text>Ethereum</Text>
                <Ethereum />
              </Flex>
              <Flex flexDirection="row" alignItems="center" maxH="60%" mt={3} mr={3}>
                <Text>Tezos</Text>
                <Tezos />
              </Flex>
              <Flex flexDirection="row" alignItems="center" maxH="60%" mt={3} mr={3}>
                <Text>Solidity</Text>
                <Solidity />
              </Flex>
              <Flex flexDirection="row" alignItems="center" maxH="60%" mt={3} mr={3}>
                <Text>Hardhat</Text>
              </Flex>
              <Flex flexDirection="row" alignItems="center" maxH="60%" mt={3} mr={3}>
                <Text>Truffle</Text>
              </Flex>
              <Flex flexDirection="row" alignItems="center" maxH="60%" mt={3} mr={3}>
                <Text>Wagmi</Text>
                <Wagmi />
              </Flex>
              <Flex flexDirection="row" alignItems="center" maxH="60%" mt={3} mr={3}>
                <Text>Web.js</Text>
                <Web3Js />
              </Flex>
              <Flex flexDirection="row" alignItems="center" maxH="60%" mt={3} mr={3}>
                <Text>IPFS</Text>
              </Flex>
              <Flex flexDirection="row" alignItems="center" justifyContent="start" maxH="60%" mt={3} mr={3}>
                <OpenZeppelin />
              </Flex>
              <Flex flexDirection="row" alignItems="center" justifyContent="start" maxH="60%" mt={3} mr={3}>
                <Pinata />
              </Flex>
              <Flex flexDirection="row" alignItems="center" maxH="60%" mt={3} mr={3}>
                <Text>Metamask</Text>
                <Metamask />
              </Flex>
              <Flex flexDirection="row" alignItems="center" justifyContent="start" maxH="60%" mt={3} mr={3}>
                <Archetype />
              </Flex>
              <Flex flexDirection="row" alignItems="center" maxH="60%" mt={3} mr={3}>
                <img src="https://ligolang.org/img/logo/logo-night.svg" alt="LIGO Logo" height="32" width="104"></img>
              </Flex>
            </Flex>
            <Grid templateColumns="50% 50%">
              <Box>
                ERCs
                {ercs.map((erc, index) => (
                  <Box key={index}>{erc}</Box>
                ))}
              </Box>
              <Box>
                Tools
                {tools.map((erc, index) => (
                  <Box key={index}>{erc}</Box>
                ))}
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Box h="4px" bg="black" />
        <Box w="100%" p={4}>
          ACHIEVEMENTS
        </Box>
        <Box h="2px" bg="black" />
        <Flex px={10}>
          <Box>Data DAO Category winner at ETH Global Online Hackathon</Box>
        </Flex>
        <Box h="2px" bg="black" />
        <Flex px={10}>
          <Box>Winnor of Minor Contest, TU Delft, International Entrepreneurship and Development</Box>
        </Flex>
        <Box h="2px" bg="black" />
        <Flex px={10}>
          <Box>Winner of TU Delft Contest, Ideation Category, IRIS</Box>
        </Flex>
        <Box h="2px" bg="black" />
        <Flex px={10}>
          <Box>Winner lower bracket at French rugby 7 U16 championship, UNSS </Box>
        </Flex>
        <Box h="2px" bg="black" />
        <Flex px={10} pb={2}>
          <Box>Winner Morocan rugby championship U16</Box>
        </Flex>
      </Box>
    </Flex>
  )
}

export default about

