import type { NextPage } from 'next';
import { GridItem, ListItem, UnorderedList } from "@chakra-ui/layout";
import { Box, Grid, Flex } from '@chakra-ui/react';

const about: NextPage = () => {
  return (
    <>
      <Flex flexDirection="row" width="100%">
        <Box width="100%" color="black">
          <Box w="100%" p={4}>
            EDUCATION
          </Box>
          <Box h="4px" bg="black" />
          <Flex px={10} flexDirection="row" justifyContent="space-between" >
            <Box>New York University</Box>
            <Box alignItems="flex-start">Master of Science in Computing, Entrepreneurship & Innovation</Box>
            <Box>2023-2024</Box>
          </Flex>
          <Box h="2px" bg="black" />
          <Flex px={10} flexDirection="row" justifyContent="space-between">
            <Box>Alyra Blockchain School</Box>
            <Box alignItems="flex-start">Blockchain Developer Course</Box>
            <Box>2022</Box>
          </Flex>
          <Box h="2px" bg="black" />
          <Flex px={10} flexDirection="row" justifyContent="space-between">
            <Box>Delft University of Technology</Box>
            <Box alignItems="flex-start">Bachelor of Science, Computer Science & Engineering</Box>
            <Box>2018-2021</Box>
          </Flex>
          <Box h="2px" bg="black" />
          <Flex px={10} flexDirection="row" justifyContent="space-between">
            <Box>Lycée Lyautey, Casablanca</Box>
            <Box alignItems="flex-start">Science Baccalaureat</Box>
            <Box>2014-2018</Box>
          </Flex>
          <Box h="4px" bg="black" />
          <Box w="100%" p={4}>
            ACHIEVEMENTS
          </Box>
          <Box h="4px" bg="black" />
          <Box w="100%" p={4}>
            SKILLS
          </Box>
          <Box h="4px" bg="black" />
          <Box w="100%" p={4}>
            Soft
          </Box>
          <Box h="2px" bg="black" />
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
          <Box h="2px" bg="black" />
          <Box w="100%" p={4}>
            Technical
          </Box>
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
        </Box>
      </Flex>
    </>
  )
}

export default about