import type { NextPage } from 'next';
import { Circle, Heading } from "@chakra-ui/layout";
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
import IPFS from '../icons/Ipfs';
import Hardhat from '../icons/Hardhat';
import Truffle from '../icons/Truffle';

const about: NextPage = () => {

  const ercs = ["ERC-20", "ERC-721", "ERC-721A", "ERC-1155", "ERC-2981", "Access Control", "PaymentSplitter"];
  const tools = ["Remix IDE", "Visual Studio Code", "Figma"];
  const devSkills = ["React", "TypeScript", "JavaScript", "Nextjs", "Node.js", "HTML", "Matlab", "Java", "Python", "Dart", "Flutter"];

  return (
    <Flex as="div" flexDirection="row" width="100%">
      <Box width="100%" color="black">
        <Box w="100%" pt={4}>
          <Heading size="lg">EDUCATION</Heading>
        </Box>
        <Box h="4px" bg="black" />
        <Flex px={5} flexDirection="row" justifyContent="space-between" alignItems="flex-start">
          <Box flex="1 0 22%"><b>New York</b> University</Box>
          <Box flex="2 0 56%" textAlign="center">Master of Science in Computing, Entrepreneurship & Innovation</Box>
          <Box flex="1 0 22%" textAlign="right">2023-2024</Box>
        </Flex>
        <Box h="2px" bg="black" />
        <Flex px={5} flexDirection="row" justifyContent="space-between" alignItems="flex-start">
          <Box flex="1 0 22%">Alyra Blockchain School, <b>Remote</b></Box>
          <Box flex="2 0 56%" textAlign="center">Blockchain Developer Course</Box>
          <Box flex="1 0 22%" textAlign="right">2022</Box>
        </Flex>
        <Box h="2px" bg="black" />
        <Flex px={5} flexDirection="row" justifyContent="space-between" alignItems="flex-start">
          <Box flex="1 0 22%"><b>Delft</b> University of Technology</Box>
          <Box flex="2 0 56%" textAlign="center">Bachelor of Science, Computer Science & Engineering</Box>
          <Box flex="1 0 22%" textAlign="right">2018-2021</Box>
        </Flex>
        <Box h="2px" bg="black" />
        <Flex px={5} flexDirection="row" justifyContent="space-between" alignItems="flex-start">
          <Box flex="1 0 22%">Lycée Lyautey, <b>Casablanca</b></Box>
          <Box flex="2 0 56%" textAlign="center">Science Baccalaureat</Box>
          <Box flex="1 0 22%" textAlign="right">2014-2018</Box>
        </Flex>
        <Box h="2px" bg="black" />
        <Flex px={5} flexDirection="row" justifyContent="space-between" alignItems="flex-start">
          <Box flex="1 0 22%">Lycée Français International de <b>Bangkok</b> </Box>
          <Box flex="2 0 56%" textAlign="center">Middle school</Box>
          <Box flex="1 0 22%" textAlign="right">2008-2013</Box>
        </Flex>
        <Box h="4px" bg="black" />
        <Box w="100%" pt={4}>
          <Heading size="lg">SKILLS</Heading>
        </Box>
        <Grid h="300px" templateColumns="40% 60%">
          <Box h="100%" w="100%" p={4}>
            <Heading size="md">Development</Heading>
            <Grid templateColumns="repeat(4, 1fr)" fontSize="small" p={2} gap={2}>
              {devSkills.map((skill, index) => (
                <Circle key={index} size="70px" borderColor="black" borderWidth={1}>
                  {skill}
                </Circle>
              ))}
            </Grid>
          </Box>
          <Grid h="100%" w="100%" templateRows="15% 35% 50%">
            <Box w="100%" pt={4}>
              <Heading size="md">Web3</Heading>
            </Box>
            <Flex wrap="wrap" h="35%">
              <Flex flexDirection="row" alignItems="center" maxH="60%" mt={3} mr={3}>
                <Ethereum />
                <Text>Ethereum</Text>
              </Flex>
              <Flex flexDirection="row" alignItems="center" maxH="60%" mt={3} mr={3}>
                <Tezos />
                <Text>Tezos</Text>
              </Flex>
              <Flex flexDirection="row" alignItems="center" maxH="60%" mt={3} mr={3}>
                <Solidity />
                <Text>Solidity</Text>
              </Flex>
              <Flex flexDirection="row" alignItems="center" maxH="60%" mt={3} mr={3}>
                <Hardhat />
                <Text>Hardhat</Text>
              </Flex>
              <Flex flexDirection="row" alignItems="center" maxH="60%" mt={3} mr={3}>
                <Truffle />
              </Flex>
              <Flex flexDirection="row" alignItems="center" maxH="60%" mt={3} mr={3}>
                <Wagmi />
                <Text>Wagmi</Text>
              </Flex>
              <Flex flexDirection="row" alignItems="center" maxH="60%" mt={3} mr={3}>
                <Web3Js />
                <Text>Web.js</Text>
              </Flex>
              <Flex flexDirection="row" alignItems="center" maxH="60%" mt={3} mr={3}>
                <IPFS />
                <Text>IPFS</Text>
              </Flex>
              <Flex flexDirection="row" alignItems="center" justifyContent="start" maxH="60%" mt={3} mr={3}>
                <OpenZeppelin />
              </Flex>
              <Flex flexDirection="row" alignItems="center" justifyContent="start" maxH="60%" mt={3} mr={3}>
                <Pinata />

              </Flex>
              <Flex flexDirection="row" alignItems="center" maxH="60%" mt={3} mr={3}>
                <Metamask />
                <Text textStyle="bold">Metamask</Text>
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
                <Heading size="md">ERCs and OpenZeppelin Contracts</Heading>
                <Grid templateColumns="repeat(auto-fill, minmax(150px, 1fr))" pt={2} gap={1}>
                  {ercs.map((erc, index) => (
                    <Box key={index} fontSize="small">{erc}</Box>
                  ))}
                </Grid>
              </Box>
              <Box>
                <Heading size="md">Tools</Heading>
                <Grid templateColumns="repeat(1, 1fr)" pt={2} gap={1}>
                  {tools.map((erc, index) => (
                    <Box key={index} fontSize="small">{erc}</Box>
                  ))}
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Box h="4px" bg="black" />
        <Box w="100%" pt={4}>
          <Heading size="lg">ACHIEVEMENTS</Heading>
        </Box>
        <Box h="2px" bg="black" />
        <Flex px={5}>
          <Box>Data DAO Category winner at ETH Global Online Hackathon</Box>
        </Flex>
        <Box h="2px" bg="black" />
        <Flex px={5}>
          <Box>Winnor of Minor Contest, TU Delft, International Entrepreneurship and Development</Box>
        </Flex>
        <Box h="2px" bg="black" />
        <Flex px={5}>
          <Box>Winner of TU Delft Contest, Ideation Category, IRIS</Box>
        </Flex>
        <Box h="2px" bg="black" />
        <Flex px={5}>
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

