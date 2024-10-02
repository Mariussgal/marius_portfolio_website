import type { NextPage } from 'next';
import { Project } from '../ts/types';
import Image from 'next/image';
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { Box, Text, Flex, Icon, Heading, Link, Circle, Grid } from '@chakra-ui/react';
import * as Icons from '../icons';
import { IoIosCheckmark } from 'react-icons/io';

const projects: NextPage = () => {

  const ercs = ["ERC-20", "ERC-721(A)", "ERC-1155", "ERC-2981", "Access Control", "PaymentSplitter"];
  const tools = ["Git - Github", "Slack", "Notion", "Figma"];
  const devSkills = ["Rust", "TypeScript", "JavaScript", "C#", "Nextjs", "React", "Node.js", "Python", "HTML", "Matlab", "Java", "Dart", "Flutter"];

  const cards: Project[] = [
    {
      name: 'Key-Value Commitments (KVaC) for Stateless Blockchains ',
      date: 'Sept. 2024 - Dec. 2024',
      description: 'Conducting a programming project as part of my independent study supervised by Professor Benedikt Bünz, I am implementing a key-value commitment scheme from Shashank Agrawal and Srinivasan Raghuraman in Rust, known as KVaC.',
      githubLink: 'https://github.com/jjeangal/rust-kvac',
      projectLink: 'https://eprint.iacr.org/2020/1161'
    },
    {
      name: 'Course Assistant @ NYU',
      date: 'Sept. - Dec. 2024',
      description: 'Preparing and giving technical lectures and solidity workshops for 60 undergraduates students taking the course “CSGY CS-UY 3943 9223 Introduction to Blockchain and Distributed Ledger Technology” taught by professor Ayesha Kiani.',
    },
    {
      name: 'Computer Security Grader @ NYU',
      date: 'Sept. - Dec. 2024',
      description: 'Grading the homework and technical projects of 95 undergraduates students taking the course “CSCI-UA.0480-​063 Special Topics: Introduction to Computer Security” led by professor Benedikt Bünz.',
      projectLink: 'https://cs.nyu.edu/~jcb/CSCI-UA.0480-063.html'
    },
    {
      name: 'Blockchain Core Engineer Intern @ Nethermind',
      date: 'May - Aug. 2024',
      description: 'Supported the transition of Verkle Trees cryptographic proof operations from C# to Rust for Netherminds Ethereum client, achieving 60-70% improvements in proof creation and verification times as part of the \'Verge\' Ethereum roadmap.',
      githubLink: 'https://github.com/jjeangal/rust-verklehttps://github.com/NethermindEth/bandersnatch-sharp/commit/b1bb93709235283b9d9a4d5bf58f36c7a2cec1cd',
      projectLink: 'https://www.nethermind.io/verkle-trees'
    },
    {
      name: 'DAO Protocol with BLS Aggregate Signatures',
      date: 'Feb. - May 2024',
      description: 'Developed and benchmarked a DAO protocol leveraging BLS aggregate signature verification on Ethereum, achieving a 30% reduction in gas costs for transactions with over 38 signatures compared to ECDSA.',
      githubLink: 'https://github.com/jjeangal/bls-agg-dao',
      projectLink: 'https://github.com/jjeangal/bls-agg-dao/blob/main/DaoWithBLS.pdf'
    },
    {
      name: 'Co-founded Coal',
      date: 'Sept. 2023 - Mar. 2024',
      description: 'Coal is a cutting-edge web3 platform that streamlines digital rights management in the music industry, providing robust copyright violation detection.',
      githubLink: 'https://github.com/Coal-Organization/Coal-Dapp',
      projectLink: 'https://www.loom.com/share/8822c7ad16d24a70a4801c6418616f1b?sid=0f8b11de-06e5-4bef-903b-0f1a968b6970'
    },
    {
      name: 'Freelance Blockchain Developer @ Cheyni TV',
      date: 'Feb. - Mar. 2023',
      description: 'CHEYNI TV is a film streaming platform featuring NFTs and exclusive collectibles like backstages and special utilities. I developed a unique watch-to-earn model with smart contracts for the native Cheyni token and subscription system.',
      projectLink: 'https://www.cheyni.com/'
    },
    {
      name: 'Freelance Blockchain Developer @ KYCY Nextchain',
      date: 'Sept. 2022 - Jan. 2023',
      description: 'For the NFTouring project, I developed an NFT collection with a whitelist presale and enforced royalties. I wrote the smart contracts in Solidity, employing ERC721A and other secure protocols, and build a user-friendly minting dApp using Next.js and TypeScript.',
      githubLink: 'https://github.com/jjeangal/nftouring_mint_app',
      projectLink: 'https://nftouring-genesis-mint.vercel.app/'
    },
    {
      name: 'Software Engineer Intern @ Fundacion Chankuap',
      date: 'Nov. 2020 - Feb. 2021',
      description: 'Designed and implemented an ERP solution for the food and cosmetic supply chain of an Ecuadorian non-profit organization (cross-platform software application).',
      githubLink: 'https://github.com/jjeangal/chankuap_flutter',
      projectLink: 'https://chankuap.org/'
    },
    {
      name: 'Co-founded the Startup Iris',
      date: 'Feb. 2020 - Nov. 2021',
      description: 'Iris is a decentralized blockchain based news platform, promoting the publication of reliable and fact-checked articles.',
      githubLink: 'https://github.com/The-Iris-Team',
      projectLink: 'https://the-iris-team.github.io/'
    }
  ];

  return (
    <Flex width="100%" direction="column">
      <Box w="100%" mt="3%">
        <Heading color="#DCD7C9" size="lg">EXPERIENCE AND PROJECTS</Heading>
      </Box>
      <Box h="2px" bg="#DCD7C9" mb="2%" />
      <Flex overflowX="scroll" color="#DCD7C9">
        {cards.map((card, index) => (
          <Box minWidth="350px" height="400px" p="5" bg="#1A202C" rounded="lg" key={index} mr={8} position="relative" border="2px" borderColor="#DCD7C9">
            <Heading as="h3" size="md" mt="2" mb="4">{card.name}</Heading>
            <Text>{card.description}</Text>
            <Flex position="absolute" left={4} bottom={4}>
              {card.githubLink &&
                <Box mr={2}>
                  <Link href={card.githubLink} isExternal>
                    <Icon as={FaGithub} />
                  </Link>
                </Box>
              }
              {card.projectLink &&
                <Box>
                  <Link href={card.projectLink} isExternal>
                    <Icon as={FaExternalLinkAlt} />
                  </Link>
                </Box>
              }
            </Flex>
            <Flex position="absolute" right={4} bottom={4}>
              <Text fontSize="sm">{card.date}</Text>
            </Flex>
          </Box>
        ))}
      </Flex>
      <Box width="100%" mt="3%" mb="2%">
        <Heading color="#DCD7C9" size="lg">SKILLS</Heading>
        <Box h="3px" bg="#DCD7C9" />
        <Grid h="auto" templateColumns={["100%", "40% 60%"]}>
          <Box h="auto" w="100%" p={4} color="#DCD7C9">
            <Flex>
              <Box display={{ base: "none", md: "flex" }}>
                <Icons.Dev />
              </Box>
              <Heading ml={2} size="md">DEVELOPMENT</Heading>
            </Flex>
            <Grid templateColumns={["repeat(2, 1fr)", "repeat(2, 1fr)", "repeat(3, 1fr)", "repeat(4, 1fr)"]} fontSize="small" mt={4} gap={3} color="#DCD7C9">
              {devSkills.map((skill, index) => (
                <Circle key={index} size="75px" borderColor="#DCD7C9" borderWidth={1}>
                  {skill}
                </Circle>
              ))}
            </Grid>
          </Box>
          <Box h="auto" w="100%" color="#DCD7C9">
            <Flex alignItems="center" pt="4">
              <Box display={{ base: "none", md: "flex" }}>
                <Icons.Web3 />
              </Box>
              <Heading ml={2} size="md">WEB 3</Heading>
            </Flex>
            <Flex wrap="wrap" justify="start" align="start" mb="4%">
              <Flex flexDirection="row" alignItems="center" height="20px" mt={3} mr={3}>
                <Icons.Ethereum />
                <Text ml={1}>Ethereum</Text>
              </Flex>
              <Flex flexDirection="row" alignItems="center" height="20px" mt={3} mr={3}>
                <Icons.Tezos />
                <Text ml={1}>Tezos</Text>
              </Flex>
              <Flex flexDirection="row" alignItems="center" height="20px" mt={3} mr={3}>
                <Icons.Solidity />
                <Text ml={1}>Solidity</Text>
              </Flex>
              <Flex flexDirection="row" alignItems="center" height="20px" mt={3} mr={3}>
                <Icons.Hardhat />
                <Text ml={1}>Hardhat</Text>
              </Flex>
              <Flex flexDirection="row" alignItems="center" height="20px" mt={3} mr={3}>
                <Icons.Truffle />
              </Flex>
              <Flex flexDirection="row" alignItems="center" height="20px" mt={3} mr={3}>
                <Icons.Wagmi />
                <Text ml={1}>Wagmi</Text>
              </Flex>
              <Flex flexDirection="row" alignItems="center" height="20px" mt={3} mr={3}>
                <Icons.Web3Js />
                <Text ml={1}>Web.js</Text>
              </Flex>
              <Flex flexDirection="row" alignItems="center" height="20px" mt={3} mr={3}>
                <Icons.IPFS />
                <Text ml={1}>IPFS</Text>
              </Flex>
              <Flex flexDirection="row" alignItems="center" justifyContent="start" height="20px" mt={3} mr={3}>
                <Icons.OpenZeppelin />
              </Flex>
              <Flex flexDirection="row" alignItems="center" justifyContent="start" height="20px" mt={3} mr={3}>
                <Icons.Pinata />
              </Flex>
              <Flex flexDirection="row" alignItems="center" height="20px" mt={3} mr={3}>
                <Icons.Metamask />
                <Text ml={1} textStyle="bold">Metamask</Text>
              </Flex>
              <Flex flexDirection="row" alignItems="center" height="20px" mt={3} mr={3}>
                <Image
                  src="https://ligolang.org/img/logo/logo-night.svg"
                  alt="LIGO Logo"
                  height={32}
                  width={104}
                />
              </Flex>
              <Flex flexDirection="row" alignItems="center" justifyContent="start" maxH="30%" mt={3} mr={3}>
                <Icons.Archetype />
              </Flex>
            </Flex>
            <Grid h="auto" w="100%" templateColumns="repeat(auto-fit, minmax(240px, 1fr))" gap={2}>
              <Box>
                <Flex alignItems="center">
                  <Box display={{ base: "none", md: "flex" }}>
                    <Icons.Security />
                  </Box>
                  <Heading ml={2} size="md">ERCs & OPENZEPPELIN</Heading>
                </Flex>
                <Grid h="auto" templateColumns="repeat(auto-fill, minmax(150px, 1fr))" mt={2} gap={2}>
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
                  <Box display={{ base: "none", md: "flex" }}>
                    <Icons.Tools />
                  </Box>
                  <Heading ml={2} size="md">TOOLS</Heading>
                </Flex>
                <Grid templateColumns="repeat(2, 1fr)" gap={2} mt={2}>
                  {tools.map((tool, index) => (
                    <Flex key={index} fontSize="small" alignItems="center">
                      <IoIosCheckmark />
                      <Text ml={1}>{tool}</Text>
                    </Flex>
                  ))}
                </Grid>
              </Box>
            </Grid>
          </Box>
        </Grid>
      </Box>
    </Flex>
  )
}

export default projects;