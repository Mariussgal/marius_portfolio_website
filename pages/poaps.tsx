import type { NextPage } from 'next';
import { Flex, Box, Text, Image, Tooltip, Grid, Heading } from "@chakra-ui/react";
import { useState, useEffect } from 'react';
import { fetchPoapData } from '../requests/fetchPoaps';
import { POAP } from '../ts/types';
import Header from '../components/Header';

const Poaps: NextPage = () => {

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
      <Flex justifyContent="center" alignItems="center" p="10" direction="column">
        <Heading mb="4">Check out some of my web3 memories!</Heading>
        {poaps.length > 0 ? (
          <Grid templateColumns="repeat(4, 1fr)" gap={6}>
            {poaps.map((poap) => (
              <Box key={poap.tokenId} p={5}>
                <Tooltip label={poap.event.description} aria-label="A tooltip">
                  <Image src={poap.event.image_url} alt={poap.event.name} />
                </Tooltip>
                <Text justifyContent="center" alignItems="center">{poap.event.name}</Text>
              </Box>
            ))}
          </Grid>
        ) : (
          <Text>Loading...</Text>
        )}
      </Flex>
    </>
  )
}

export default Poaps;