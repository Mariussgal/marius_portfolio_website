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
      name: 'ERC-20 token smart contract ',
      date: 'July 2024',
      description: "Created a tutorial to deploy an ERC-20 token smart contract on BASE, ARBITRUM-ONE and SCROLL. The functions of the smart contract : \n\n- Enable trading\n- Remove wallet limit\n- Renounce ownership\n- Burn liq",
      githubLink: 'https://github.com/Mariussgal/ERC20-BASE-smart-contract',
      
    },

  ];

  return (
    <Flex width="100%" direction="column">
    <Box w="100%" mt="3%">
      <Heading color="#DCD7C9" size="lg">PROJECTS</Heading>
    </Box>
    <Box h="2px" bg="#DCD7C9" mb="2%" />
    <Flex  color="#DCD7C9">
      {cards.map((card, index) => (
        <Box       maxWidth={'300px'}
        height="400px" p="5" bg="#1A202C" rounded="lg" key={index} mr={8} position="relative" border="2px" borderColor="#1A202C">
          <Heading as="h3" size="md" mt="2" mb="4">{card.name}</Heading>
          <Text>
  {card.description.split('\n').map((line, idx) => (
    <span key={idx}>
      {line}
      <br />
    </span>
  ))}
</Text>
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
      
  </Flex>
  )
}

export default projects;