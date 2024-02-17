import { Flex, HStack, Box, Link } from "@chakra-ui/react";
import Medias from './Medias';
import { useState } from 'react';

export default function Header() {
    const [hoveredLink, setHoveredLink] = useState<string | null>(null);

    return (
        <Flex h="10vh" borderBottom="1px" justifyContent="space-between">
            <Box isTruncated display="flex" alignItems="center" width="25%" ml="5%">
                <Box isTruncated onMouseEnter={() => setHoveredLink('home')} onMouseLeave={() => setHoveredLink(null)}>
                    <Link href="/" fontSize={{ md: "x-large", base: "large" }} color={hoveredLink === 'home' ? 'white' : '#DCD7C9'} _hover={{ textDecoration: 'none' }}>{"<JeanGal />"}</Link>
                </Box>
            </Box>
            <Flex justifyContent="center" width="50%">
                <HStack spacing="4vw" >
                    <Box isTruncated onMouseEnter={() => setHoveredLink('work')} onMouseLeave={() => setHoveredLink(null)}>
                        <Link href="/projects" fontSize="lg" color={hoveredLink === 'work' ? 'white' : '#DCD7C9'} _hover={{ textDecoration: 'none' }}>{'//  work'}</Link>
                    </Box>
                    <Box isTruncated onMouseEnter={() => setHoveredLink('about')} onMouseLeave={() => setHoveredLink(null)}>
                        <Link href="/about" fontSize="lg" color={hoveredLink === 'about' ? 'white' : '#DCD7C9'} _hover={{ textDecoration: 'none' }}>{'//  about'}</Link>
                    </Box>
                    <Box isTruncated onMouseEnter={() => setHoveredLink('poaps')} onMouseLeave={() => setHoveredLink(null)}>
                        <Link href="/poaps" fontSize="lg" color={hoveredLink === 'poaps' ? 'white' : '#DCD7C9'} _hover={{ textDecoration: 'none' }}>{'//  poaps'}</Link>
                    </Box>
                </HStack>
            </Flex>
            <Medias />
        </Flex>
    );
}