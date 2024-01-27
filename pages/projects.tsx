import type { NextPage } from 'next';
import { Project } from '../ts/types';
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { Box, Text, Flex, Center, Icon, Heading, Link } from '@chakra-ui/react';

const projects: NextPage = () => {

  const cards: Project[] = [
    {
      name: 'Co-founded Coal',
      date: 'Sept. 2023 - Present',
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
    <Center height="90vh">
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
    </Center>
  )
}

export default projects;