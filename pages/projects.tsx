import type { NextPage } from 'next';
import { Project } from '../ts/types';
import { Box, Text, Flex, Center, Link } from '@chakra-ui/react';

const projects: NextPage = () => {

  const cards: Project[] = [
    {
      name: 'Coal x Loopist',
      description: 'This is project 1',
      githubLink: 'https://github.com/user/project1',
      projectLink: 'https://project1.com'
    },
    {
      name: 'Cheyni TV',
      description: 'This is project 2',
      githubLink: '',
      projectLink: ''
    },
    {
      name: 'KYCY Nextchain',
      description: 'This is project 2',
      githubLink: '',
      projectLink: ''
    },
    {
      name: 'Fundacion Chankuap ',
      description: 'This is project 2',
      githubLink: '',
      projectLink: ''
    },
    {
      name: 'IRIS Decentralized News Media',
      description: 'This is project 2',
      githubLink: '',
      projectLink: ''
    }
  ];

  return (
    <Center height="90vh">
      <Flex overflowX="scroll" py={4} px={4}> {/* Add horizontal padding */}
        {cards.map((card, index) => (
          <Box minWidth="300px" height="400px" p="5" bg="#1A202C" boxShadow="md" rounded="md" key={index} mr={4}>
            <Text mt="5">{card.name}</Text>
            <Text>{card.description}</Text>
            <Box><Link href={card.githubLink} isExternal>GitHub Link</Link></Box>
            {card.projectLink && <Box><Link href={card.projectLink} isExternal>Project Link</Link></Box>}
          </Box>
        ))}
      </Flex>
    </Center>
  )
}

export default projects;