import { Flex, HStack, Box, Link, Text } from "@chakra-ui/react";
import Medias from './Medias';
import { useState } from 'react';

export default function Header() {
    const [hoveredLink, setHoveredLink] = useState<string | null>(null);

    return (
        <Flex h="10vh" borderBottom="1px" justifyContent="space-between">
            <Box display="flex" alignItems="center" width="25%">
                <Text fontSize="lg" ml='20%'>{"<JeanGal />"}</Text>
            </Box>
            <Flex justifyContent="center">
                <HStack spacing="4vw" >
                    <Box onMouseEnter={() => setHoveredLink('home')} onMouseLeave={() => setHoveredLink(null)}>
                        <Link href="/" fontSize="lg" color={hoveredLink === 'home' ? 'white' : 'lightgray'} _hover={{ textDecoration: 'none' }}>// home</Link>
                    </Box>
                    <Box onMouseEnter={() => setHoveredLink('about')} onMouseLeave={() => setHoveredLink(null)}>
                        <Link href="/about" fontSize="lg" color={hoveredLink === 'about' ? 'white' : 'lightgray'} _hover={{ textDecoration: 'none' }}>//  about</Link>
                    </Box>
                    <Box onMouseEnter={() => setHoveredLink('work')} onMouseLeave={() => setHoveredLink(null)}>
                        <Link href="/projects" fontSize="lg" color={hoveredLink === 'work' ? 'white' : 'lightgray'} _hover={{ textDecoration: 'none' }}>//  work</Link>
                    </Box>
                    <Box onMouseEnter={() => setHoveredLink('poaps')} onMouseLeave={() => setHoveredLink(null)}>
                        <Link href="/poaps" fontSize="lg" color={hoveredLink === 'poaps' ? 'white' : 'lightgray'} _hover={{ textDecoration: 'none' }}>//  poaps</Link>
                    </Box>
                </HStack>
            </Flex>
            <Medias />
        </Flex>
    );
}