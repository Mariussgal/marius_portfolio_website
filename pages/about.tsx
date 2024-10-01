import type { NextPage } from 'next';
import { useState, useEffect } from 'react';
import { FaExternalLinkAlt, FaFacebook, FaInstagram, FaVideo, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Heading } from "@chakra-ui/layout";
import { Box, Flex, Text, Link, Icon } from '@chakra-ui/react';
import { FaX, FaXTwitter } from 'react-icons/fa6';

const About: NextPage = () => {

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <Flex as="div" flexDirection="column" width="100%" color="#DCD7C9">
      <Box w="100%" mt="3%">
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
      <Box w="100%" mt="3%">
        <Heading size="lg">ACHIEVEMENTS</Heading>
      </Box>
      <Box h="2px" bg="#DCD7C9" mb={1} />
      <Flex px={5} mt="1" flexDirection="row" justifyContent="space-between" alignItems="flex-start">
        <Box flex="1 0 78%">
          Winner at ETH Denver, Story Protocol & Chainlink
          <Link href="https://x.com/StoryProtocol/status/1765462365989175330" ml="2" isExternal>
            <Icon as={FaExternalLinkAlt} />
          </Link>
        </Box>
        <Box flex="1 0 22%" textAlign="right">March. 2023</Box>
      </Flex>
      <Box h="1px" bg="#DCD7C9" mt={1} mb={1} />
      <Flex px={5} mt="1" flexDirection="row" justifyContent="space-between" alignItems="flex-start">
        <Box flex="1 0 78%">
          Winner at ETH Global Online Hackathon, Data DAO Category
          <Link href="https://ethglobal.com/showcase/anc3stree-7a6y8" ml="2" isExternal>
            <Icon as={FaExternalLinkAlt} />
          </Link>
        </Box>
        <Box flex="1 0 22%" textAlign="right">Dec. 2022</Box>
      </Flex>
      <Box h="1px" bg="#DCD7C9" mt={1} mb={1} />
      <Flex px={5} flexDirection="row" justifyContent="space-between" alignItems="flex-start">
        <Box flex="1 0 78%">
          Winner of International Entrepreneurship and Development Minor Contest, TU Delft
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
      <Flex mt="3%" flexDirection={{ base: "column", md: "row" }}>
        <Flex flex="1" flexDirection="column">
          <Box w="100%">
            <Heading size="lg">SABBATICAL YEAR</Heading>
            <Box h="2px" bg="#DCD7C9" mt={1} mb={1} />
          </Box>
          <Text textAlign="justify" ml="2" mb="4"> Following the completion of our undergraduate studies at the Technical University of Delft, my colleague and I embarked on an enriching 7 months journey, stepping out of our comfort zones to explore the diverse landscapes and cultures of South America through backpacking and volunteering.</Text>
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
        <Flex flex="1" ml="1%" flexDirection="column">
          <Box w="100%">
            <Heading size="lg">VOLUNTEERING</Heading>
            <Box h="2px" bg="#DCD7C9" mt={1} mb={1} />
          </Box>
          <Text textAlign="justify">
            <b>Blockchain Lab @ NYU (New York, USA),  Jan. - Dec. 2024:</b> As an E-board member during Spring 2024, I organized events with leading web3 figures and doubled our online presence. Now, as the president, I am in the process of registering the lab as an official NYU club for the first time, growing our influence through partnerships, events, and workshops.
          </Text>
          <Flex direction="row" mt="1%" mb="1%">
            <Link href="https://www.linkedin.com/company/blockchain-lab-nyu/" isExternal>
              <FaLinkedin size="1em" />
            </Link>
            <Link ml="2" mr="2" href="https://www.instagram.com/nyublockchainlab" isExternal>
              <FaInstagram size="1em" />
            </Link>
            <Link href="https://x.com/BlockchainNYU" isExternal>
              <FaXTwitter size="1em" />
            </Link>
            <Link ml="2" mr="2" href="https://linktr.ee/nyu_blockchain_lab" isExternal>
              <FaExternalLinkAlt size="1em" />
            </Link>
          </Flex>
          <Box h="1px" bg="#DCD7C9" mt={1} mb={1} />
          <Text textAlign="justify" mr={5}>
            <b>Casamasanté (Cap Skirring, Senegal), May 2023:</b> Responsible for the setup of the IT room and upgrading the software systems. I also assisted in running medical tests for 150 kids in remote villages and islands as part of a school health initiative.
          </Text>
          <Flex direction="row" mt="1%" mb="1%">
            <Link href="https://www.facebook.com/Casamasante/posts/pfbid02BY742hWm8bQSsCWfd36CUear3VJYqLhA89Gn5LkmMT5ucGQtWa16RsyicbVk2pNql" isExternal>
              <FaFacebook size="1em" />
            </Link>
            <Link ml="2" mr="2" href="https://www.casamasante.org/" isExternal>
              <FaExternalLinkAlt size="1em" />
            </Link>
          </Flex>
          <Box h="1px" bg="#DCD7C9" mt={1} mb={1} />
          <Text textAlign="justify" mr={5}>
            <b>Azul Wasi Orphanage (Oropesa, Peru), Dec. 2021:</b> Azul Wasi aims to improve the quality of life of children/adolescents from high-risk situations. Participated in daily activities and produced a promotional video.
          </Text>
          <Flex direction="row" mt="1%" mb="1%">
            <Link href="https://drive.google.com/file/d/1_zuxVwlwc6MI_ki8jpDJUKa4rEJLNStQ/view?usp=drive_link" isExternal>
              <FaVideo size="1em" />
            </Link>
            <Link ml="2" mr="2" href="https://azulwasi.wordpress.com" isExternal>
              <FaExternalLinkAlt size="1em" />
            </Link>
          </Flex>
          <Box h="1px" bg="#DCD7C9" mt={1} mb={1} />
          <Text textAlign="justify" mr={5}>
            <b>Mamatungu Hostel (Baños, Ecuador), Oct. - Nov. 2021:</b> Volunteered for a month as a Bartender, Promoter, Waiter and Receptionist.
          </Text>
          <Flex direction="row" mt="1%">
            <Link href="https://www.instagram.com/mamatunguhostel/" isExternal>
              <FaInstagram size="1em" />
            </Link>
            <Link ml="2" mr="2" href="https://mamatunguhostel.negocio.site/" isExternal>
              <FaExternalLinkAlt size="1em" />
            </Link>
          </Flex>
        </Flex>
      </Flex>
      <Box w="100%" mt="3%">
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
        <Box flex="1 0 78%">Winner Moroccan rugby championship U15</Box>
        <Box flex="1 0 22%" textAlign="right">2014</Box>
      </Flex>
    </Flex>
  )
}

export default About

