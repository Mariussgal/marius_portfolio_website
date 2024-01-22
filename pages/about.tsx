import type { NextPage } from 'next';
import { Circle, Heading } from "@chakra-ui/layout";
import { Box, Grid, Flex, Text } from '@chakra-ui/react';
import { IoIosCheckmark } from "react-icons/io";
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
  const tools = ["Git - Github", "Remix IDE", "VSC", "Figma"];
  const devSkills = ["React", "TypeScript", "JavaScript", "Nextjs", "Node.js", "HTML", "Matlab", "Java", "Python", "Dart", "Flutter"];

  return (
    <Flex as="div" flexDirection="column" width="100%">
      <Box width="100%" color="black">
        <Box w="100%" mt={4}>
          <Heading size="lg">EDUCATION</Heading>
        </Box>
        <Box h="3px" bg="black" mt={1} mb={1} />
        <Flex px={5} flexDirection="row" justifyContent="space-between" alignItems="flex-start">
          <Box flex="1 0 22%"><b>New York</b> University</Box>
          <Box flex="2 0 56%" textAlign="center">Master of Science in Computing, Entrepreneurship & Innovation</Box>
          <Box flex="1 0 22%" textAlign="right">2023-2024</Box>
        </Flex>
        <Box h="2px" bg="black" mt={1} mb={1} />
        <Flex px={5} flexDirection="row" justifyContent="space-between" alignItems="flex-start">
          <Box flex="1 0 22%">Alyra Blockchain School, <b>Remote</b></Box>
          <Box flex="2 0 56%" textAlign="center">Blockchain Developer Course</Box>
          <Box flex="1 0 22%" textAlign="right">2022</Box>
        </Flex>
        <Box h="2px" bg="black" mt={1} mb={1} />
        <Flex px={5} flexDirection="row" justifyContent="space-between" alignItems="flex-start">
          <Box flex="1 0 22%"><b>Delft</b> University of Technology</Box>
          <Box flex="2 0 56%" textAlign="center">Bachelor of Science, Computer Science & Engineering</Box>
          <Box flex="1 0 22%" textAlign="right">2018-2021</Box>
        </Flex>
        <Box h="2px" bg="black" mt={1} mb={1} />
        <Flex px={5} flexDirection="row" justifyContent="space-between" alignItems="flex-start">
          <Box flex="1 0 22%">Lycée Lyautey, <b>Casablanca</b></Box>
          <Box flex="2 0 56%" textAlign="center">Science Baccalaureat</Box>
          <Box flex="1 0 22%" textAlign="right">2014-2018</Box>
        </Flex>
        <Box h="2px" bg="black" mt={1} mb={1} />
        <Flex px={5} flexDirection="row" justifyContent="space-between" alignItems="flex-start">
          <Box flex="1 0 22%">Lycée Français International de <b>Bangkok</b> </Box>
          <Box flex="2 0 56%" textAlign="center">Middle school</Box>
          <Box flex="1 0 22%" textAlign="right">2008-2013</Box>
        </Flex>

        <Box w="100%" mt={6}>
          <Heading size="lg">SKILLS</Heading>
        </Box>
        <Box h="3px" bg="black" />
        <Grid h="300px" templateColumns="40% 60%">
          <Box h="100%" w="100%" p={4}>
            <Heading size="md">DEVELOPMENT</Heading>
            <Grid templateColumns="repeat(4, 1fr)" fontSize="small" mt={4} gap={3}>
              {devSkills.map((skill, index) => (
                <Circle key={index} size="70px" borderColor="black" borderWidth={1}>
                  {skill}
                </Circle>
              ))}
            </Grid>
          </Box>
          <Grid h="100%" w="100%" templateRows="15% 35% 50%">
            <Box w="100%" mt={4}>
              <Heading size="md">WEB3</Heading>
            </Box>
            <Flex wrap="wrap" h="35%">
              <Flex flexDirection="row" alignItems="center" maxH="60%" mt={3} mr={3}>
                <Ethereum />
                <Text ml={1}>Ethereum</Text>
              </Flex>
              <Flex flexDirection="row" alignItems="center" maxH="60%" mt={3} mr={3}>
                <Tezos />
                <Text ml={1}>Tezos</Text>
              </Flex>
              <Flex flexDirection="row" alignItems="center" maxH="60%" mt={3} mr={3}>
                <Solidity />
                <Text ml={1}>Solidity</Text>
              </Flex>
              <Flex flexDirection="row" alignItems="center" maxH="60%" mt={3} mr={3}>
                <Hardhat />
                <Text ml={1}>Hardhat</Text>
              </Flex>
              <Flex flexDirection="row" alignItems="center" maxH="60%" mt={3} mr={3}>
                <Truffle />
              </Flex>
              <Flex flexDirection="row" alignItems="center" maxH="60%" mt={3} mr={3}>
                <Wagmi />
                <Text ml={1}>Wagmi</Text>
              </Flex>
              <Flex flexDirection="row" alignItems="center" maxH="60%" mt={3} mr={3}>
                <Web3Js />
                <Text ml={1}>Web.js</Text>
              </Flex>
              <Flex flexDirection="row" alignItems="center" maxH="60%" mt={3} mr={3}>
                <IPFS />
                <Text ml={1}>IPFS</Text>
              </Flex>
              <Flex flexDirection="row" alignItems="center" justifyContent="start" maxH="60%" mt={3} mr={3}>
                <OpenZeppelin />
              </Flex>
              <Flex flexDirection="row" alignItems="center" justifyContent="start" maxH="60%" mt={3} mr={3}>
                <Pinata />
              </Flex>
              <Flex flexDirection="row" alignItems="center" maxH="60%" mt={3} mr={3}>
                <Metamask />
                <Text ml={1} textStyle="bold">Metamask</Text>
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
                <Heading size="md">ERCs & OPENZEPPELIN</Heading>
                <Grid templateColumns="repeat(auto-fill, minmax(150px, 1fr))" mt={2} gap={1}>
                  {ercs.map((erc, index) => (
                    <Flex key={index} fontSize="small" alignItems="center">
                      <IoIosCheckmark />
                      <Text ml={1}>{erc}</Text>
                    </Flex>
                  ))}
                </Grid>
              </Box>
              <Box>
                <Heading size="md">TOOLS</Heading>
                <Grid templateColumns="repeat(1, 1fr)" mt={2} gap={1}>
                  {tools.map((tool, index) => (
                    <Flex key={index} fontSize="small" alignItems="center">
                      <IoIosCheckmark />
                      <Text ml={1}>{tool}</Text>
                    </Flex>
                  ))}
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Box w="100%" mt={6}>
          <Heading size="lg">ACHIEVEMENTS</Heading>
        </Box>
        <Box h="3px" bg="black" mt={1} mb={1} />
        <Flex px={5} flexDirection="row" justifyContent="space-between" alignItems="flex-start">
          <Box flex="1 0 78%">Data DAO Category winner at ETH Global Online Hackathon</Box>
          <Box flex="1 0 22%" textAlign="right">2022</Box>
        </Flex>
        <Box h="2px" bg="black" mt={1} mb={1} />
        <Flex px={5} flexDirection="row" justifyContent="space-between" alignItems="flex-start">
          <Box flex="1 0 78%">Winnor of Minor Contest, TU Delft, International Entrepreneurship and Development</Box>
          <Box flex="1 0 22%" textAlign="right">2021</Box>
        </Flex>
        <Box h="2px" bg="black" mt={1} mb={1} />
        <Flex px={5} flexDirection="row" justifyContent="space-between" alignItems="flex-start">
          <Box flex="1 0 78%">Winner of TU Delft Contest, Ideation Category, IRIS</Box>
          <Box flex="1 0 22%" textAlign="right">2020</Box>
        </Flex>
        <Box h="2px" bg="black" mt={1} mb={1} />
        <Flex px={5} flexDirection="row" justifyContent="space-between" alignItems="flex-start">
          <Box flex="1 0 78%">Winner lower bracket at French rugby 7 U16 championship, UNSS </Box>
          <Box flex="1 0 22%" textAlign="right">2017</Box>
        </Flex>
        <Box h="2px" bg="black" mt={1} mb={1} />
        <Flex px={5} pb={2} flexDirection="row" justifyContent="space-between" alignItems="flex-start">
          <Box flex="1 0 78%">Winner Morocan rugby championship U16</Box>
          <Box flex="1 0 22%" textAlign="right">2016</Box>
        </Flex>
      </Box>
      <Box display="flex" justifyContent="center" alignItems="flex-end" width="100%" height="100%">
        <iframe width="640" height="480" src="https://www.polarsteps.com/JeanGal/4562958-south-america/embed"></iframe>
      </Box>
    </Flex>
  )
}

export default about

