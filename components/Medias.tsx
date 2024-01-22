import { Box, Flex, IconButton } from '@chakra-ui/react'
import { FaLinkedin, FaGithub, FaEnvelope, FaTwitter } from "react-icons/fa";

export default function Medias() {
    return (
        <Box position="fixed" right="0" top="50%">
            <Flex direction="column" align="center" justify="center" transform="translateY(-50%)">
                <IconButton
                    aria-label="Mail"
                    icon={<FaEnvelope size="24px" />}
                    color="black"
                    onClick={() => window.open('mailto:jeangal.pro@gmail.com', '_blank')}
                />
                <IconButton
                    aria-label="Twitter"
                    icon={<FaTwitter size="24px" />}
                    color="black"
                    onClick={() => window.open('https://twitter.com/jeangalbc', '_blank')}
                />
                <IconButton
                    aria-label="LinkedIn"
                    icon={<FaLinkedin size="24px" />}
                    color="black"
                    onClick={() => window.open('https://www.linkedin.com/in/jean-gal/', '_blank')}
                />
                <IconButton
                    aria-label="Github"
                    icon={<FaGithub size="24px" />}
                    color="black"
                    onClick={() => window.open('https://github.com/jjeangal', '_blank')}
                />
            </Flex>
        </Box>
    );
}