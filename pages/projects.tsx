import type { NextPage } from 'next';
import { Project } from '../ts/types';
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { Box, Text, Flex, Center, Link, Icon } from '@chakra-ui/react';

const projects: NextPage = () => {

  const cards: Project[] = [
    {
      name: 'Coal x Loopist',
      description: 'Coal is a cutting-edge web3 platform that streamlines digital rights management in the music industry, providing robust copyright violation detection. This project represents a significant advancement in protecting the originality and legal rights of musical works, specifically designed to cater to the needs of artists and producers.',
      githubLink: 'https://github.com/Coal-Organization/Coal-Dapp',
      projectLink: 'https://www.loom.com/share/8822c7ad16d24a70a4801c6418616f1b?sid=0f8b11de-06e5-4bef-903b-0f1a968b6970'
    },
    {
      name: 'Cheyni TV Token & Subscription Model',
      description: 'CHEYNI TV is a film streaming platform featuring NFTs and exclusive collectibles like backstages and special utilities. The platform offers a unique watch-to-earn model with a native token, which viewers can spend on its marketplace.',
      projectLink: 'https://www.cheyni.com/'
    },
    {
      name: 'KYCY Nextchain - NFTouring',
      description: 'This is project 2',
      githubLink: 'https://github.com/jjeangal/nftouring_mint_app',
      projectLink: 'https://nftouring-genesis-mint.vercel.app/'
    },
    {
      name: 'Fundacion Chankuap ',
      description: 'This is project 2',
      githubLink: 'https://github.com/jjeangal/chankuap_flutter',
      projectLink: 'https://chankuap.org/'
    },
    {
      name: 'IRIS Decentralized News Media',
      description: 'Iris is a decentralized news platform promoting the publication of reliable and fact-checked articles.',
      githubLink: 'https://github.com/The-Iris-Team',
      projectLink: 'https://the-iris-team.github.io/'
    }
  ];

  return (
    <Center height="90vh">
      <Flex overflowX="scroll" py={4} px={4}>
        {cards.map((card, index) => (
          <Box minWidth="300px" height="400px" p="5" bg="#1A202C" boxShadow="md" rounded="md" key={index} mr={4} position="relative">
            <Text mt="5">{card.name}</Text>
            <Text>{card.description}</Text>
            <Flex position="absolute" right={4} bottom={4}>
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
          </Box>
        ))}
      </Flex>
    </Center>
  )
}

export default projects;