import { Flex, IconButton, useBreakpointValue, Menu, MenuButton, MenuItem, MenuList, Box, Spacer, Text } from '@chakra-ui/react';
import { FaLinkedin, FaGithub, FaEnvelope, FaBars } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import CryptoJobs from '../icons/CryptoJobs';

export default function Medias() {
    const isSmallScreen = useBreakpointValue({ base: true, md: false });

    return (
        <Flex direction="row" align="center" justify="right" mr="2%" width="25%" color="#DCD7C9">
            {isSmallScreen ? (
                <Menu>
                    <MenuButton as={IconButton} aria-label="Options" icon={<FaBars color='#DCD7C9' />} bg="none" _hover={{ icon: { color: "#1A202C" } }} />
                    <MenuList bgColor="#1A202C">
                        <MenuItem as="a" href="https://cryptojobslist.com/talent/profile/crypto-professional-remote-9qkhu5ocpn6" target="_blank">
                            <Box display="flex" alignItems="center" bgColor="#1A202C">
                                <CryptoJobs />
                                <Spacer width="5px" />
                                <Text>Crypto Jobs List</Text>
                            </Box>
                        </MenuItem>
                        <MenuItem as="a" href="mailto:jeangal.pro@gmail.com" target="_blank">
                            <Box display="flex" alignItems="center" bgColor="#1A202C">
                                <FaEnvelope size="20px" />
                                <Spacer width="5px" />
                                <Text>Email</Text>
                            </Box>
                        </MenuItem>
                        <MenuItem as="a" href="https://twitter.com/jeangalbc" target="_blank">
                            <Box display="flex" alignItems="center" bgColor="#1A202C">
                                <FaXTwitter size="20px" />
                                <Spacer width="5px" />
                                <Text>Twitter / X</Text>
                            </Box>
                        </MenuItem>
                        <MenuItem as="a" href="https://www.linkedin.com/in/jean-gal/" target="_blank">
                            <Box display="flex" alignItems="center">
                                <FaLinkedin size="20px" />
                                <Spacer width="5px" />
                                <Text>Linkedin</Text>
                            </Box>
                        </MenuItem>
                        <MenuItem as="a" href="https://github.com/jjeangal" target="_blank">
                            <Box display="flex" alignItems="center">
                                <FaGithub size="20px" />
                                <Spacer width="5px" />
                                <Text>Github</Text>
                            </Box>
                        </MenuItem>
                    </MenuList>
                </Menu>
            ) : (
                <>
                    <IconButton as="a" href="https://cryptojobslist.com/talent/profile/crypto-professional-remote-9qkhu5ocpn6" target="_blank" mr="1%"
                        aria-label="Mail"
                        icon={<CryptoJobs />}
                        color="#DCD7C9"
                        bg="none"
                    />
                    <IconButton as="a" href="mailto:jeangal.pro@gmail.com" target="_blank" mr="1%"
                        aria-label="Mail"
                        icon={<FaEnvelope size="20px" />}
                        color="#DCD7C9"
                        bg="none"
                        title="Hit me up!"
                    />
                    <IconButton as="a" href="https://twitter.com/jeangalbc" target="_blank" mr="1%"
                        aria-label="Twitter"
                        icon={<FaXTwitter size="20px" />}
                        color="#DCD7C9"
                        bg="none"
                    />
                    <IconButton as="a" href="https://www.linkedin.com/in/jean-gal/" target="_blank" mr="1%"
                        aria-label="LinkedIn"
                        icon={<FaLinkedin size="20px" />}
                        color="#DCD7C9"
                        bg="none"
                    />
                    <IconButton as="a" href="https://github.com/jjeangal" target="_blank"
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