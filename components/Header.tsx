import { Flex, HStack, Spacer, Box, Link } from "@chakra-ui/react";
import Medias from './Medias';

export default function Header() {
    const siteTitle = "Home"

    return (
        <Flex h="10vh" borderBottom="1px">
            <HStack spacing="4vw" w="30%" ml="2%">
                <Box>
                    <Link href="/" fontSize="lg" fontWeight="bold">{siteTitle}</Link>
                </Box>
                <Box>
                    <Link href="/projects" fontSize="lg" fontWeight="bold">Work</Link>
                </Box>
                <Box>
                    <Link href="/about" fontSize="lg" fontWeight="bold">About</Link>
                </Box>
                <Box>
                    <Link href="/poaps" fontSize="lg" fontWeight="bold">POAPs</Link>
                </Box>
            </HStack>
            <Spacer />
            <Medias />
            <Spacer />
            <Flex w="30%" alignItems="center" justifyContent="right" mr="2%">
                <Box>web3 button</Box >
            </Flex>
        </Flex>
    );
}
