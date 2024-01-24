import { Flex, IconButton } from '@chakra-ui/react';
import { FaLinkedin, FaGithub, FaEnvelope, FaTwitter } from "react-icons/fa";

export default function Medias() {
    return (
        <Flex direction="row" align="center" justify="center" mr="2%">
            <IconButton as="a" href="mailto:jeangal.pro@gmail.com" target="_blank" mr="2%"
                aria-label="Mail"
                icon={<FaEnvelope size="24px" />}
                color="white"
                bg="none"
            />
            <IconButton as="a" href="https://twitter.com/jeangalbc" target="_blank" mr="2%"
                aria-label="Twitter"
                icon={<FaTwitter size="24px" />}
                color="white"
                bg="none"
            />
            <IconButton as="a" href="https://www.linkedin.com/in/jean-gal/" target="_blank" mr="2%"
                aria-label="LinkedIn"
                icon={<FaLinkedin size="24px" />}
                color="white"
                bg="none"
            />
            <IconButton as="a" href="https://github.com/jjeangal" target="_blank"
                aria-label="Github"
                icon={<FaGithub size="24px" />}
                color="white"
                bg="none"
            />
        </Flex>
    );
}