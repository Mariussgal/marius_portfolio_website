import { Flex, IconButton, Image, Box } from '@chakra-ui/react';
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Medias() {
    return (
        <Flex direction="row" align="center" justify="right" mr="2%" width="25%">
            <Flex width="40px" justify="center" mr="1%">
                <Box as="a" href="https://cryptojobslist.com/talent/profile/crypto-professional-remote-9qkhu5ocpn6" target="_blank"
                    title="Hire me on Crypto Jobs List"
                    rel="noopener"
                    width="40px"
                    height="40px"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    _hover={{
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        borderRadius: 'md'
                    }}
                >
                    <Image src="https://cryptojobslist.com/images/logo-circle-white.svg" width="20px" height="20px" objectFit="contain" alt="Hire me on Crypto Jobs List" />
                </Box>
            </Flex>
            <IconButton as="a" href="mailto:jeangal.pro@gmail.com" target="_blank" mr="1%"
                aria-label="Mail"
                icon={<FaEnvelope size="20px" />}
                color="white"
                bg="none"
            />
            <IconButton as="a" href="https://twitter.com/jeangalbc" target="_blank" mr="1%"
                aria-label="Twitter"
                icon={<FaXTwitter size="20px" />}
                color="white"
                bg="none"
            />
            <IconButton as="a" href="https://www.linkedin.com/in/jean-gal/" target="_blank" mr="1%"
                aria-label="LinkedIn"
                icon={<FaLinkedin size="20px" />}
                color="white"
                bg="none"
            />
            <IconButton as="a" href="https://github.com/jjeangal" target="_blank"
                aria-label="Github"
                icon={<FaGithub size="20px" />}
                color="white"
                bg="none"
            />
        </Flex>
    );
}