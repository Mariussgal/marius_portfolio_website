import Image from 'next/image';
import type { NextPage } from 'next';
import { useState, useEffect } from 'react';
import { IoIosCheckmark } from "react-icons/io";
import { FaExternalLinkAlt, FaFacebook, FaInstagram, FaVideo } from 'react-icons/fa';
import { Circle, Heading } from "@chakra-ui/layout";
import { Box, Grid, Flex, Text, Icon, Link } from '@chakra-ui/react';
import * as Icons from '../icons';

const About: NextPage = () => {

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const ercs = ["ERC-20", "ERC-721", "ERC-721A", "ERC-1155", "ERC-2981", "Access Control", "PaymentSplitter"];
  const tools = ["Git - Github", "Slack", "Notion", "Figma"];
  const devSkills = ["React", "TypeScript", "JavaScript", "Nextjs", "Node.js", "HTML", "Matlab", "Java", "Python", "Dart", "Flutter"];

  return (
    <Flex as="div" flexDirection="column" width="100%" color="#DCD7C9">
      <Box width="100%">
        <Box w="100%" mt={4}>
          <Heading size="lg">EDUCATION</Heading>
        </Box>
        <Box h="2px" bg="#DCD7C9" mt={1} mb={1} />
        <Flex px={5} flexDirection="row" justifyContent="space-between" alignItems="flex-start">
          <Box flex="1 0 22%"><b>New York</b> University</Box>
          <Box flex="2 0 56%" textAlign="center">Master of Science in Computing, Entrepreneurship & Innovation</Box>
          <Box flex="1 0 22%" textAlign="right">Sept. 2023 - Dec. 2024</Box>
        </Flex>
        <Box h="1px" bg="#DCD7C9" mt={1} mb={1} />
        <Flex px={5} flexDirection="row" justifyContent="space-between" alignItems="flex-start">
          <Box flex="1 0 22%">Alyra Blockchain School, <b>Remote</b></Box>
          <Box flex="2 0 56%" textAlign="center">Blockchain Developer Course</Box>
          <Box flex="1 0 22%" textAlign="right">May - Aug. 2022</Box>
        </Flex>
        <Box h="1px" bg="#DCD7C9" mt={1} mb={1} />
        <Flex px={5} flexDirection="row" justifyContent="space-between" alignItems="flex-start">
          <Box flex="1 0 22%"><b>Delft</b> University of Technology</Box>
          <Box flex="2 0 56%" textAlign="center">Bachelor of Science, Computer Science & Engineering</Box>
          <Box flex="1 0 22%" textAlign="right">Sept. 2018 - Aug. 2021</Box>
        </Flex>
        <Box h="1px" bg="#DCD7C9" mt={1} mb={1} />
        <Flex px={5} flexDirection="row" justifyContent="space-between" alignItems="flex-start">
          <Box flex="1 0 22%">Lycée Lyautey, <b>Casablanca</b></Box>
          <Box flex="2 0 56%" textAlign="center">Science Baccalaureat</Box>
          <Box flex="1 0 22%" textAlign="right">Sept. 2014 - July 2018</Box>
        </Flex>
        <Box h="1px" bg="#DCD7C9" mt={1} mb={1} />
        <Flex px={5} flexDirection="row" justifyContent="space-between" alignItems="flex-start">
          <Box flex="1 0 22%">Lycée Français International de <b>Bangkok</b> </Box>
          <Box flex="2 0 56%" textAlign="center">Middle school</Box>
          <Box flex="1 0 22%" textAlign="right">2008-2013</Box>
        </Flex>
        <Box w="100%" mt={6}>
          <Heading size="lg">SKILLS</Heading>
        </Box>
        <Box h="3px" bg="#DCD7C9" />
        <Grid h="300px" templateColumns="40% 60%">
          <Box h="100%" w="100%" p={4}>
            <Flex alignItems="center">
              <Icons.Dev />
              <Heading ml="2" size="md">DEVELOPMENT</Heading>
            </Flex>
            <Grid templateColumns="repeat(4, 1fr)" fontSize="small" mt={4} gap={3}>
              {devSkills.map((skill, index) => (
                <Circle key={index} size="75px" borderColor="#DCD7C9" borderWidth={1}>
                  {skill}
                </Circle>
              ))}
            </Grid>
          </Box>
          <Grid h="100%" w="100%" templateRows="15% 35% 50%">
            <Flex alignItems="center" mt={4}>
              <Icons.Web3 />
              <Heading ml="2" size="md">WEB 3</Heading>
            </Flex>
            <Flex wrap="wrap" h="35%">
              <Flex flexDirection="row" alignItems="center" maxH="60%" mt={3} mr={3}>
                <Icons.Ethereum />
                <Text ml={1}>Ethereum</Text>
              </Flex>
              <Flex flexDirection="row" alignItems="center" maxH="60%" mt={3} mr={3}>
                <Icons.Tezos />
                <Text ml={1}>Tezos</Text>
              </Flex>
              <Flex flexDirection="row" alignItems="center" maxH="60%" mt={3} mr={3}>
                <Icons.Solidity />
                <Text ml={1}>Solidity</Text>
              </Flex>
              <Flex flexDirection="row" alignItems="center" maxH="60%" mt={3} mr={3}>
                <Icons.Hardhat />
                <Text ml={1}>Hardhat</Text>
              </Flex>
              <Flex flexDirection="row" alignItems="center" maxH="60%" mt={3} mr={3}>
                <Icons.Truffle />
              </Flex>
              <Flex flexDirection="row" alignItems="center" maxH="60%" mt={3} mr={3}>
                <Icons.Wagmi />
                <Text ml={1}>Wagmi</Text>
              </Flex>
              <Flex flexDirection="row" alignItems="center" maxH="60%" mt={3} mr={3}>
                <Icons.Web3Js />
                <Text ml={1}>Web.js</Text>
              </Flex>
              <Flex flexDirection="row" alignItems="center" maxH="60%" mt={3} mr={3}>
                <Icons.IPFS />
                <Text ml={1}>IPFS</Text>
              </Flex>
              <Flex flexDirection="row" alignItems="center" justifyContent="start" maxH="60%" mt={3} mr={3}>
                <Icons.OpenZeppelin />
              </Flex>
              <Flex flexDirection="row" alignItems="center" justifyContent="start" maxH="60%" mt={3} mr={3}>
                <Icons.Pinata />
              </Flex>
              <Flex flexDirection="row" alignItems="center" maxH="60%" mt={3} mr={3}>
                <Icons.Metamask />
                <Text ml={1} textStyle="bold">Metamask</Text>
              </Flex>
              <Flex flexDirection="row" alignItems="center" justifyContent="start" maxH="60%" mt={3} mr={3}>
                <Icons.Archetype />
              </Flex>
              <Flex flexDirection="row" alignItems="center" maxH="60%" mt={3} mr={3}>
                <Image
                  src="https://ligolang.org/img/logo/logo-night.svg"
                  alt="LIGO Logo"
                  height={32}
                  width={104}
                />
              </Flex>
            </Flex>
            <Grid templateColumns="50% 50%">
              <Box>
                <Flex alignItems="center">
                  <Icons.Security />
                  <Heading ml="2" size="md">ERCs & OPENZEPPELIN</Heading>
                </Flex>
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
                <Flex alignItems="center">
                  <Icons.Tools />
                  <Heading size="md" ml={2}>TOOLS</Heading>
                </Flex>
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
        <Box h="2px" bg="#DCD7C9" mt={1} mb={1} />
        <Flex px={5} flexDirection="row" justifyContent="space-between" alignItems="flex-start">
          <Box flex="1 0 78%">
            Data DAO Category winner at ETH Global Online Hackathon
            <Link href="https://ethglobal.com/showcase/anc3stree-7a6y8" ml="2" isExternal>
              <Icon as={FaExternalLinkAlt} />
            </Link>
          </Box>
          <Box flex="1 0 22%" textAlign="right">Dec. 2022</Box>
        </Flex>
        <Box h="1px" bg="#DCD7C9" mt={1} mb={1} />
        <Flex px={5} flexDirection="row" justifyContent="space-between" alignItems="flex-start">
          <Box flex="1 0 78%">
            Winner of Minor Contest, TU Delft, International Entrepreneurship and Development
            <Link href="https://www.tudelft.nl/en/tpm/education/minors/international-entrepreneurship-development/" ml="2" isExternal>
              <Icon as={FaExternalLinkAlt} />
            </Link>
          </Box>
          <Box flex="1 0 22%" textAlign="right">Feb. 2021</Box>
        </Flex>
        <Box h="1px" bg="#DCD7C9" mt={1} mb={1} />
        <Flex px={5} flexDirection="row" justifyContent="space-between" alignItems="flex-start">
          <Box flex="1 0 78%">
            Winner of TU Delft Contest, Ideation Category, IRIS
            <Link href="https://2020.tudelftcontest.nl/" ml="2" isExternal>
              <Icon as={FaExternalLinkAlt} />
            </Link>
          </Box>
          <Box flex="1 0 22%" textAlign="right">June 2020</Box>
        </Flex>
        <Flex w="100%" mt={6}>
          <Box w="50%">
            <Heading size="lg">SABBATICAL YEAR</Heading>
          </Box>
          <Box w="50%">
            <Heading size="lg">VOLUNTEERING</Heading>
          </Box>
        </Flex>
        <Box h="2px" bg="#DCD7C9" mt={1} mb={1} />
        <Flex mt="3" flexDirection="row">
          <Flex flex="1" flexDirection="column">
            <Text ml="2"> Following the completion of our undergraduate studies at the Technical University of Delft, my colleague and I embarked on an enriching 7 months journey, stepping out of our comfort zones to explore the diverse landscapes and cultures of South America through backpacking and volunteering.</Text>
            {isClient && (
              <Box
                display="flex"
                justifyContent="center"
                alignItems="flex-end"
                width="100%"
                height="300px"
                p={2}
                mb="3"
                border="0.5px solid rgba(204, 204, 204, 0.5)"
                boxShadow="lg"
                borderRadius="md"
              >
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.polarsteps.com/JeanGal/4562958-south-america/embed"
                  title="South America Journey"
                  style={{ border: 0 }}
                ></iframe>
              </Box>
            )}
          </Flex>
          <Flex flex="1" ml="2" flexDirection="column">
            <Flex mb={2} alignItems="flex-start">
              <Text mr={2}>
                <b>Casamasanté (Cap Skirring, Senegal), May 2023:</b> Responsible for the setup of the IT room and upgrading the software systems. I also assisted in running medical tests for 150 kids in remote villages and islands as part of a school health initiative.
              </Text>
              <Link href="https://www.facebook.com/Casamasante/posts/pfbid02BY742hWm8bQSsCWfd36CUear3VJYqLhA89Gn5LkmMT5ucGQtWa16RsyicbVk2pNql" isExternal>
                <FaFacebook size="1em" />
              </Link>
              <Link ml="2" mr="2" href="https://www.casamasante.org/" isExternal>
                <FaExternalLinkAlt size="1em" />
              </Link>
            </Flex>
            <Box h="1px" bg="#DCD7C9" mt={1} mb={1} />
            <Flex mb={2} alignItems="flex-start">
              <Text mr={2}>
                <b>Azul Wasi Orphanage (Oropesa, Peru), Dec. 2021:</b> Azul Wasi aims to improve the quality of life of children/adolescents from high-risk situations. Participated in daily activities and produced a promotional video.
              </Text>
              <Link href="https://drive.google.com/file/d/1_zuxVwlwc6MI_ki8jpDJUKa4rEJLNStQ/view?usp=drive_link" isExternal ml={2}>
                <FaVideo size="1em" />
              </Link>
              <Link ml="2" mr="2" href="https://azulwasi.wordpress.com" isExternal>
                <FaExternalLinkAlt size="1em" />
              </Link>
            </Flex>
            <Box h="1px" bg="#DCD7C9" mt={1} mb={1} />
            <Flex mb={2} alignItems="flex-start">
              <Text mr={2}>
                <b>Mamatungu Hostel (Baños, Ecuador), Oct. - Nov. 2021:</b> Volunteered for a month as a Bartender, Promoter, Waiter and Receptionist.
              </Text>
              <Link href="https://www.instagram.com/mamatunguhostel/" isExternal>
                <FaInstagram size="1em" />
              </Link>
              <Link ml="2" mr="2" href="https://mamatunguhostel.negocio.site/" isExternal>
                <FaExternalLinkAlt size="1em" />
              </Link>
            </Flex>
          </Flex>
        </Flex>
        <Box w="100%" mt={6}>
          <Heading size="lg">HOBBIES</Heading>
        </Box>
        <Box h="2px" bg="#DCD7C9" mt={1} mb={1} />
        <Flex px={5} flexDirection="row" justifyContent="space-between" alignItems="flex-start">
          <Box flex="1 0 78%">Winner lower bracket at French rugby 7 U16 championship, UNSS </Box>
          <Box flex="1 0 22%" textAlign="right">2017</Box>
        </Flex>
        <Box h="1px" bg="#DCD7C9" mt={1} mb={1} />
        <Flex px={5} flexDirection="row" justifyContent="space-between" alignItems="flex-start">
          <Box flex="1 0 78%">Completed the half marathon of Marrakesh in 1h54</Box>
          <Box flex="1 0 22%" textAlign="right">2015</Box>
        </Flex>
        <Box h="1px" bg="#DCD7C9" mt={1} mb={1} />
        <Flex px={5} flexDirection="row" justifyContent="space-between" alignItems="flex-start" mb="3%">
          <Box flex="1 0 78%">Winner Morocan rugby championship U15</Box>
          <Box flex="1 0 22%" textAlign="right">2014</Box>
        </Flex>
      </Box>
    </Flex>
  )
}

export default About

