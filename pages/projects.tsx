import type { NextPage } from 'next';
import { Box, Text, Flex, Center, VStack, Image } from '@chakra-ui/react';

const projects: NextPage = () => {

  const cards = [1, 2, 3, 4, 5];

  return (
    <Flex flexGrow={1} alignItems="center" justifyContent="center">
        <Flex overflowX="scroll">
          {cards.map((card) => (
            <Box minWidth="300px" height="400px" p="5" bg="white" boxShadow="md" rounded="md" key={card} mr={4}>
              <Image src="https://via.placeholder.com/150" alt="Image" />
              <Text mt="5">Card {card}</Text>
            </Box>
          ))}
        </Flex>
    </Flex>
  )
}

export default projects;