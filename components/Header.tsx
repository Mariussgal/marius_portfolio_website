import { useBreakpointValue } from "@chakra-ui/react";
import { Flex, HStack, Button, Box, Link } from "@chakra-ui/react";
import { MdHome } from "react-icons/md";
import Medias from './Medias';
import { useState } from 'react';
import Image from 'next/image';
import MariusGAL1 from "../image/MariusGAL1.png";


export default function Header() {
    const [hoveredLink, setHoveredLink] = useState<string | null>(null);
    const isSmallScreen = useBreakpointValue({ base: true, md: false });


    return (
        <Flex h="10vh" borderBottom="1px" justifyContent="space-between">
            <Box isTruncated display="flex" alignItems="center" width="25%" ml="5%">
                <Box isTruncated onMouseEnter={() => setHoveredLink('home')} onMouseLeave={() => setHoveredLink(null)}>
                    <Link href="/" fontSize="x-large" color={hoveredLink === 'home' ? 'white' : '#DCD7C9'} _hover={{ textDecoration: 'none' }}>
                        {isSmallScreen ?    <MdHome color='#DCD7C9' size="24px" /> :  <Image 
    src={MariusGAL1} 
    alt="Marius Gal Logo" 
    width={200} 
    height={60} 
    quality={100} // Ajout pour forcer la qualité maximale
    priority // Charge l'image immédiatement
    style={{ objectFit: 'contain', marginTop: '25px' }} 
/>}
                    </Link>
                </Box>
            </Box>
            <Flex justifyContent="center" width="50%">
                <HStack spacing="4vw" >
                    <Box isTruncated onMouseEnter={() => setHoveredLink('work')} onMouseLeave={() => setHoveredLink(null)}>
                    <Button
                            onMouseEnter={() => setHoveredLink('work')}
                            onMouseLeave={() => setHoveredLink(null)}
                            as={Link}
                            href="/projects"
                            fontSize={{ md: "lg", base: "md" }}
                            bg={hoveredLink === 'work' ? 'whiteAlpha.200' : 'transparent'}
                            color={hoveredLink === 'work' ? 'white' : '#DCD7C9'}
                            _hover={{ textDecoration: 'none', bg: 'whiteAlpha.300' }}
                            size="sm"
                        >
                            work
                        </Button>
                    </Box>
                    <Box isTruncated onMouseEnter={() => setHoveredLink('about')} onMouseLeave={() => setHoveredLink(null)}>
                    <Button
                            onMouseEnter={() => setHoveredLink('about')}
                            onMouseLeave={() => setHoveredLink(null)}
                            as={Link}
                            href="/about"
                            fontSize={{ md: "lg", base: "md" }}
                            bg={hoveredLink === 'about' ? 'whiteAlpha.200' : 'transparent'}
                            color={hoveredLink === 'about' ? 'white' : '#DCD7C9'}
                            _hover={{ textDecoration: 'none', bg: 'whiteAlpha.300' }}
                            size="sm"
                        >
                            about
                        </Button>
                    </Box>
                    <Button
                            onMouseEnter={() => setHoveredLink('poaps')}
                            onMouseLeave={() => setHoveredLink(null)}
                            as={Link}
                            href="/poaps"
                            fontSize={{ md: "lg", base: "md" }}
                            bg={hoveredLink === 'poaps' ? 'whiteAlpha.200' : 'transparent'}
                            color={hoveredLink === 'poaps' ? 'white' : '#DCD7C9'}
                            _hover={{ textDecoration: 'none', bg: 'whiteAlpha.300' }}
                            size="sm"
                        >
                            poaps
                        </Button>
                </HStack>
            </Flex>
            <Medias />
        </Flex>
    );
}