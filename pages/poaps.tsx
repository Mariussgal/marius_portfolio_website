import type { NextPage } from 'next';
import { Flex, Box, Text, Image } from "@chakra-ui/react";
import { useState, useEffect } from 'react';
import { fetchPoapData } from '../requests/fetchPoaps';
import { POAP } from '../ts/types';


const poaps: NextPage = () => {
  
  const [poaps, setPoaps] = useState<POAP[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPoapData();
      setPoaps(data);
    };
    fetchData();
  }, []);
  
  useEffect(() => {
    console.log('Poaps state:', poaps);
  }, [poaps]);

  return (
    <>
    <Flex flexDirection="column">
      {poaps.length > 0 ? poaps.map((poap) => (
        <Box key={poap.tokenId}>
          <Text>{poap.event.name}</Text>
          <Image src={poap.event.image_url} alt={poap.event.name} />
        </Box>
      )) : <Text>Loading...</Text>}
    </Flex>
    </>
  )
}

export default poaps;