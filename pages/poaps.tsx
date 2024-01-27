import type { NextPage, GetServerSideProps } from 'next';
import { Flex, Box, Text, Image, Tooltip, Grid, Heading } from "@chakra-ui/react";
import { fetchPoapData } from '../requests/fetchPoaps';
import { POAP } from '../ts/types';

type Props = {
  poaps: POAP[];
};

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const poaps = await fetchPoapData();
  return { props: { poaps } };
};

const poaps: NextPage<Props> = ({ poaps }) => {
  return (
    <>
      <Flex justifyContent="center" alignItems="center" p="10" direction="column" color="#DCD7C9">
        <Heading mb="4">Check out some of my web3 memories!</Heading>
        {poaps.length > 0 ? (
          <Grid templateColumns="repeat(4, 1fr)" gap={6}>
            {poaps.map((poap) => (
              <Box key={poap.tokenId} p={5}>
                <Tooltip label={poap.event.description} aria-label="A tooltip">
                  <Image src={poap.event.image_url} alt={poap.event.name} />
                </Tooltip>
                <Text mt="2%" textAlign="center">{poap.event.name}</Text>
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

export default poaps;