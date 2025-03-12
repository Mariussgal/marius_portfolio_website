import React, { useState } from 'react';
import { Box, Image, Text, Flex, Button, Link, useBreakpointValue } from '@chakra-ui/react';

const FlippableNFTCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  
  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const cardWidth = useBreakpointValue({ base: "170px", sm: "320px" });
  const cardHeight = useBreakpointValue({ base: "100px", sm: "180px" });
  const fontSize = useBreakpointValue({ base: "3xs", sm: "sm" });
  const descFontSize = useBreakpointValue({ base: "3xs", sm: "xs" });
  const addressFontSize = useBreakpointValue({ sm: "2xs" });
  const padding = useBreakpointValue({ base: 3, sm: 4 });

  return (
    <Flex direction="column" align="center" justify="center" w="100%" my={6}>
      <Box
        position="relative"
        w={cardWidth}
        h={cardHeight}
        sx={{ perspective: "1000px" }}
        mb={4}
      >
        <Box
          position="relative"
          w="100%"
          h="100%"
          sx={{ 
            transformStyle: "preserve-3d",
            transition: "transform 0.8s",
            transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0)',
          }}
          shadow="xl"
          borderRadius="lg"
        >
          <Box
            position="absolute"
            w="100%"
            h="100%"
            sx={{ backfaceVisibility: "hidden" }}
            borderRadius="lg"
          >
            <Link 
                href="https://testnets.opensea.io/assets/sepolia/0x76526bc283456aa2445634f22d30020290031d5d/0/"
                isExternal
                w="100%"
                h="100%"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
            <Image
              src="/businessCard.jpg"
              alt="NFT Business Card"
              objectFit="cover"
              borderRadius="lg"
              w="100%"
              h="100%"
            />
            </Link>
          </Box>

          <Box
            position="absolute"
            w="100%"
            h="100%"
            sx={{ 
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
            borderRadius="lg"
            overflow="hidden"
            display="flex"
          >
            <Box 
              bg="black" 
              w="50%" 
              p={padding} 
              color="#8A7CFE"
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
              borderLeftRadius="lg"
            >
              <Box>
                <Text fontSize={fontSize} fontWeight="bold" mb={1}>
                  NFT Business Card
                </Text>
                <Text fontSize={descFontSize} color="#DCD7C9">
                  This NFT serves as my digital business card on the Sepolia testnet.
                </Text>
              </Box>
              
              <Box display={useBreakpointValue({ base: "none", sm: "block" })}>
                <Text fontSize={fontSize} color="#DCD7C9" mb={1}>
                  Contract Address:
                </Text>
                <Text fontSize={addressFontSize} color="#DCD7C9" wordBreak="break-all">
                  0x76526BC283456aa2445634f22D30020290031d5D
                </Text>
              </Box>
            </Box>
            
            <Box 
              bgGradient="linear(to-b, #9429FF, #F3416A)" 
              w="50%" 
              display="flex"
              alignItems="center"
              justifyContent="center"
              p={2}
              borderRightRadius="lg"
            >
              <Link 
                href="https://testnets.opensea.io/assets/sepolia/0x76526bc283456aa2445634f22d30020290031d5d/0/"
                isExternal
                w="100%"
                h="100%"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Image
                  src="/businessCard.jpg"
                  alt="QR Code"
                  fit="contain"
                  maxH="90%"
                  maxW="90%"
                />
              </Link>
            </Box>
          </Box>
        </Box>
        
        <Button 
          onClick={handleFlip} 
          colorScheme="blue" 
          size={useBreakpointValue({ base: "xs", sm: "sm" })}
          mt={2}
          bg="#3182CE"
        >
          {isFlipped ? "View Front" : "View Details"}
        </Button>
      </Box>
    </Flex>
  );
};

export default FlippableNFTCard;