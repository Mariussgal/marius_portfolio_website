import { Box, Flex, IconButton } from '@chakra-ui/react';
import { FaLinkedin, FaGithub, FaEnvelope, FaTwitter } from "react-icons/fa";

export default function Medias() {
    return (
        <Box position="fixed" right="0" top="50%">
            <Flex direction="column" align="center" justify="center" transform="translateY(-50%)">
                <IconButton as="a" href="mailto:jeangal.pro@gmail.com" target="_blank"
                    aria-label="Mail"
                    icon={<FaEnvelope size="24px" />}
                    color="black"
                />
                <IconButton as="a" href="https://twitter.com/jeangalbc" target="_blank"
                    aria-label="Twitter"
                    icon={<FaTwitter size="24px" />}
                    color="black"
                />
                <IconButton as="a" href="https://www.linkedin.com/in/jean-gal/" target="_blank"
                    aria-label="LinkedIn"
                    icon={<FaLinkedin size="24px" />}
                    color="black"
                />
                <IconButton as="a" href="https://github.com/jjeangal" target="_blank"
                    aria-label="Github"
                    icon={<FaGithub size="24px" />}
                    color="black"
                />
            </Flex>
        </Box>
    );
}