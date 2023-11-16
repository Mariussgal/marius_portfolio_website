import type { NextPage } from 'next';
import { Box, Text, Flex, Center, Image } from '@chakra-ui/react';

const projects: NextPage = () => {

  const cards = [1, 2, 3, 4, 5];

  return (
    <Center height="90vh">
        <Flex overflowX="scroll" py={4}>
          {cards.map((card) => (
            <Box minWidth="300px" height="400px" p="5" bg="white" boxShadow="md" rounded="md" key={card} mr={4}>
              <Image src="https://via.placeholder.com/150" alt="Image" />
              <Text mt="5">Card {card}</Text>
            </Box>
          ))}
        </Flex>
    </Center>
  )
}

export default projects;