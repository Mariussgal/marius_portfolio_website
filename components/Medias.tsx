import { Flex, IconButton } from '@chakra-ui/react';
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import CryptoJobs from '../icons/CryptoJobs';

export default function Medias() {
    return (
        <Flex direction="row" align="center" justify="right" mr="2%" width="25%">
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
        </Flex>
    );
}