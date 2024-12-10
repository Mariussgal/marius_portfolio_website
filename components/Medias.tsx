import { Flex, IconButton, useBreakpointValue, Menu, MenuButton, MenuItem, MenuList, Box, Spacer, Text } from '@chakra-ui/react';
import { FaLinkedin, FaGithub, FaEnvelope, FaBars } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Medias() {
    const isSmallScreen = useBreakpointValue({ base: true, md: false });

    return (
        <Flex direction="row" align="center" justify="right" mr="2%" width="25%" color="#DCD7C9">
            {isSmallScreen ? (
                <Menu>
                    <MenuButton as={IconButton} aria-label="Options" icon={<FaBars color='#DCD7C9' />} bg="none" _hover={{ icon: { color: "#1A202C" } }} />
                    <MenuList bgColor="#1A202C">

                        <MenuItem as="a" href="mailto:marius.gal05@gmail.com" target="_blank" bgColor="#1A202C">
                            <Box display="flex" alignItems="center" bg="none">
                                <FaEnvelope size="20px" />
                                <Spacer width="5px" />
                                <Text>Email</Text>
                            </Box>
                        </MenuItem>
             
                        <MenuItem as="a" href="" target="_blank" bgColor="#1A202C">
                            <Box display="flex" alignItems="center" bg="none">
                                <FaLinkedin size="20px" />
                                <Spacer width="5px" />
                                <Text>Linkedin</Text>
                            </Box>
                        </MenuItem>
                        <MenuItem as="a" href="https://github.com/mariussgal" target="_blank" bgColor="#1A202C">
                            <Box display="flex" alignItems="center" bg="none">
                                <FaGithub size="20px" />
                                <Spacer width="5px" />
                                <Text>Github</Text>
                            </Box>
                        </MenuItem>
                    </MenuList>
                </Menu>
            ) : (
                <>
              
                    <IconButton as="a" href="mailto:marius.gal05@gmail.com" target="_blank" mr="1%"
                        aria-label="Mail"
                        icon={<FaEnvelope size="20px" />}
                        color="#DCD7C9"
                        bg="none"
                        title="Hit me up!"
                    />
        
                    <IconButton as="a" href="" target="_blank" mr="1%"
                        aria-label="LinkedIn"
                        icon={<FaLinkedin size="20px" />}
                        color="#DCD7C9"
                        bg="none"
                    />
                    <IconButton as="a" href="https://github.com/mariussgal" target="_blank"
                        aria-label="Github"
                        icon={<FaGithub size="20px" />}
                        color="#DCD7C9"
                        bg="none"
                    />
                </>
            )}
        </Flex>
    );
}