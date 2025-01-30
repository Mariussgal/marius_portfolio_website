import type { NextPage } from 'next';
import { useState, useEffect } from 'react';
import { Heading } from "@chakra-ui/layout";
import { Box, Flex,  Circle, Grid } from '@chakra-ui/react';
import * as Icons from '../icons';



const About: NextPage = () => {
  const devSkills = [ "TypeScript", "JavaScript", "Nextjs", "React", "Node.js", "Python", "HTML", "Solidity"];
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <Flex as="div" flexDirection="column" width="100%" color="#DCD7C9" p={8}>
      
  
      
      <Flex direction={{ base: 'column', md: 'row' }} gap={8} alignItems="stretch">
        
        <Flex flexDirection="column" flex="1" p={4} bg="gray.800" borderRadius="md" boxShadow="md">
          <Box mb={4}>
            <Heading size="lg">EDUCATION</Heading>
          </Box>
          <Box h="2px" bg="#DCD7C9" mb={4} />
  
          
          <Flex flexDirection="column" gap={4}>
            
            <Flex flexDirection="column">
              <Box><b>ESME</b> Paris</Box>
              <Box textAlign="center"> Second-Year General Engineering (International, English-Taught Program) </Box>
              <Box textAlign="right">Sept. 2023 - July 2028</Box>
            </Flex>
            <Box h="1px" bg="#DCD7C9" />
  
           
            <Flex flexDirection="column">
              <Box>Lycée Montalembert, <b>Courbevoie</b></Box>
              <Box textAlign="center"> Science Baccalaureate with Specializations in Mathematics and Physics </Box>
              <Box textAlign="right">Sept. 2020 - July 2023</Box>
            </Flex>
            <Box h="1px" bg="#DCD7C9" />
  
            
            <Flex flexDirection="column">
              <Box>Collège Sainte Geneviève, <b>Courbevoie</b></Box>
              <Box textAlign="center">Middle school</Box>
              <Box textAlign="right">2018 - 2020</Box>
            </Flex>
            <Box h="1px" bg="#DCD7C9" />
  
            
            <Flex flexDirection="column">
              <Box>Lycée Lyautey, <b>Casablanca</b></Box>
              <Box textAlign="center">Middle school</Box>
              <Box textAlign="right">2016 - 2018</Box>
            </Flex>
          </Flex>
        </Flex>

       
        <Flex flexDirection="column" flex="1" p={4} bg="gray.800" borderRadius="md" boxShadow="md">
          <Box mb={4}>
            <Heading size="lg">EXPERIENCE</Heading>
          </Box>
          <Box h="2px" bg="#DCD7C9" mb={4} />
  
          
          <Flex flexDirection="column" gap={4}>
            <Box>
              <b>D-MAX (Moving company)</b>,<br /> <br />Successfully completed more than 50 moves, ensuring efficient organization and execution. <br />Applied effective lifting techniques to safely handle heavy loads and prevent injuries.
              <Box textAlign="right">June - July 2022/23/24</Box>
            </Box>
            <Box h="1px" bg="#DCD7C9" />
            <Box>
              <b>Levallois entraide (volunteering)</b>, <br /><br />Collected clothing, food, and essential supplies for humanitarian aid in Ukraine. <br />Participated in initiatives to support underprivileged individuals.  
              <Box textAlign="right">Oct. 2021 - June 2022</Box>
            </Box>
            <Box h="1px" bg="#DCD7C9" />
            <Box>
              <b>Les terrasses du clapas (Waiter and dishwasher)</b>,<br /><br /> Took customer orders and provided attentive table service in a fast-paced environment. <br />Managed high-pressure situations, ensuring smooth service and customer satisfaction.
              <Box textAlign="right">july 2021</Box>
            </Box>
            
          </Flex>
        </Flex>
  
       
      </Flex>
  
      <Flex flexDirection="column" gap={8} p={8}>

<Flex flexDirection={{ base: "column", md: "row" }} gap={8} alignItems="stretch">
      

<Flex flexDirection="column" flex="1" p={4} bg="gray.800" borderRadius="md" boxShadow="md">
<Box mb={4}>
  <Heading size="lg">LANGUAGES</Heading>
</Box>
<Box h="2px" bg="#DCD7C9" mb={4} />
<Flex flexDirection="column" gap={4} flex="1">
  
  <Flex flex="1" justify="space-between" alignItems="center">
    <Box flex="1">
      <b>French</b>
 
    <Box textAlign="right" flex="1"> Native </Box>
    </Box>
  </Flex>
  <Box h="1px" bg="#DCD7C9" />
  
  
  <Flex flex="1" justify="space-between" alignItems="center">
    <Box flex="1">
      <b>English</b>
    
    <Box textAlign="right" flex="1">
      Fluent
    </Box>
    </Box>
  </Flex>
  <Box h="1px" bg="#DCD7C9" />

  
  <Flex flex="1" justify="space-between" alignItems="center">
    <Box flex="1">
      <b>Spanish</b>
    
    <Box textAlign="right" flex="1">
      Beginner
    </Box>
    </Box>
  </Flex>

</Flex>

  </Flex>
  <Flex flexDirection="column" flex="1" p={4} bg="gray.800" borderRadius="md" boxShadow="md">
    <Box mb={4}>
      <Heading size="lg">SKILLS</Heading>
    </Box>
    <Box h="2px" bg="#DCD7C9" mb={4} />
    <Flex flexDirection="column" gap={4}>
    <Box h="auto" w="100%"  color="#DCD7C9">
          <Flex>
            <Box display={{ base: "none", md: "flex" }} >
              <Icons.Dev />
            </Box>
            <Heading ml={2} size="md">DEVELOPMENT, (currently learning)</Heading>
          </Flex>
    <Grid templateColumns={["repeat(2, 1fr)", "repeat(2, 1fr)", "repeat(3, 1fr)", "repeat(4, 1fr)"]} fontSize="small" mt={4} gap={3} color="#DCD7C9">
            {devSkills.map((skill, index) => (
              <Circle key={index} size="75px" borderColor="#DCD7C9" borderWidth={1}>
                {skill}
              </Circle>
            ))}
          </Grid>
          </Box>
      
          <Flex alignItems="center">
                <Box display={{ base: "none", md: "flex" }}>
                  <Icons.Tools />
                </Box>
                <Heading ml={2} size="md">Tools</Heading>
              </Flex>
      <Box>
        
       Git, VSCode, Remix IDE
      </Box>
    </Flex>
  </Flex>



  
  <Flex alignItems = "stretch" flexDirection="column" flex="1" p={4} bg="gray.800" borderRadius="md" boxShadow="md">
    <Box mb={4}>
      <Heading size="lg">ASSETS</Heading>
    </Box>
    <Box h="2px" bg="#DCD7C9" mb={4} />
    
    <Flex flex="1" justify="space-between" alignItems="center">
          <Box>
            <b>Team spirit</b> 
 
          </Box>
          </Flex>
          <Box h="1px" bg="#DCD7C9" />
          <Flex flex="1" justify="space-between" alignItems="center">
          <Box>
            <b>Adaptability and flexibility</b> 
   
          </Box>
          </Flex>
          <Box h="1px" bg="#DCD7C9" />
          <Flex flex="1" justify="space-between" alignItems="center">
          <Box>
            <b>Sens of organization</b>

          </Box>
          </Flex>
          </Flex>
        
 
    </Flex>
  </Flex>

      <Box color="#DCD7C9" mt={8}>
       
        <Flex flexDirection="column" flex="1" p={4} bg="gray.800" borderRadius="md" boxShadow="md">
          <Box mb={4}>
            <Heading size="lg">HOBBIES</Heading>
          </Box>
          <Box h="2px" bg="#DCD7C9" mb={4} />
  
          <Flex flexDirection="column" gap={4}>
            <Box>
              <b>Rugby</b>, Espoirs Fédérale 1 level at the Courbevoie rugby club
              <Box textAlign="right">2012- Present</Box>
            </Box>
            <Box h="1px" bg="#DCD7C9" />
            <Box>
              <b>Weight lifting</b>, Practiced for 2 years as a supplement to improve my rugby skills
              <Box textAlign="right">2023 - Present</Box>
            </Box>
            <Box h="1px" bg="#DCD7C9" />
            <Box>
              <b>Running</b>, Completed the half Marathon of Madrid in 1h53  
              <Box textAlign="right">2021</Box>
            </Box>
            <Box h="1px" bg="#DCD7C9" />

          </Flex>
         </Flex>
      </Box>

     
  </Flex>


  );
  
}




export default About


