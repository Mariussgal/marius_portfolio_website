import type { NextPage } from 'next';
import { Container, GridItem, List, ListItem, UnorderedList } from "@chakra-ui/layout";
import { Box, Grid } from '@chakra-ui/react';

const about: NextPage = () => {
  return (
    <>
      <Container w="100vw">
        <Box>Passionate about solving challenges and thinking out of the box. </Box>
        <UnorderedList>
          <ListItem>Blockchain development traineeship at the Alyra Blockchain school, from Paris Remote</ListItem>
          <ListItem>Bachelor at Delft University of Technology in computer science & Engineering</ListItem>
          <ListItem>High School Morocco, Science Baccalaureat with a year of computer science</ListItem>
        </UnorderedList>
        <Box>Soft Skills</Box>
        <Grid
          h="75px"
          templateRows="repeat(1, 1fr)"
          templateColumns="repeat(6, 1fr)"
          gap="4"
        >
          <GridItem rowSpan={1} colSpan={1} bg='tomato' /> 
          <GridItem rowSpan={1} colSpan={1} bg='blue' /> 
          <GridItem rowSpan={1} colSpan={1} bg='tomato' /> 
          <GridItem rowSpan={1} colSpan={1} bg='blue' />  
          <GridItem rowSpan={1} colSpan={1} bg='tomato' /> 
          <GridItem rowSpan={1} colSpan={1} bg='blue' /> 
        </Grid>
        <Box>IT Skills</Box>
        <Grid
          h="75px"
          templateRows="repeat(1, 1fr)"
          templateColumns="repeat(6, 1fr)"
          gap="4"
        >
          <GridItem rowSpan={1} colSpan={1} bg='blue' /> 
          <GridItem rowSpan={1} colSpan={1} bg='tomato' /> 
          <GridItem rowSpan={1} colSpan={1} bg='blue' />  
          <GridItem rowSpan={1} colSpan={1} bg='tomato' /> 
          <GridItem rowSpan={1} colSpan={1} bg='blue' /> 
          <GridItem rowSpan={1} colSpan={1} bg='tomato' /> 
        </Grid>
      </Container>
    </>
  )
}

export default about