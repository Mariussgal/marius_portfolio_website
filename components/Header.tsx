import { ConnectButton } from '@rainbow-me/rainbowkit';
import { Flex, Text, HStack, LinkBox, LinkOverlay, Spacer, Box } from "@chakra-ui/react";
import NextLink from "next/link"
import Medias from './Medias';

export default function Header() {

    const siteTitle = "Home"

    return (
        <Flex h="10vh" ml="2%" mr="2%" borderBottomColor="black">
            <HStack spacing="4vw" w="15%">
                <LinkBox>
                    <NextLink href={'/'} passHref>
                        <LinkOverlay>
                            <Text fontSize="lg" fontWeight="bold">{siteTitle}</Text>
                        </LinkOverlay>
                    </NextLink>
                </LinkBox>
                <LinkBox>
                    <NextLink href={'/work'} passHref>
                        <LinkOverlay>
                            <Text fontSize="lg" fontWeight="bold">{"Work"}</Text>
                        </LinkOverlay>
                    </NextLink>
                </LinkBox>
                <LinkBox>
                    <NextLink href={'/about'} passHref>
                        <LinkOverlay>
                            <Text fontSize="lg" fontWeight="bold">{"About"}</Text>
                        </LinkOverlay>
                    </NextLink>
                </LinkBox>
                <LinkBox>
                    <NextLink href={'/nfts'} passHref>
                        <LinkOverlay>
                            <Text fontSize="lg" fontWeight="bold">{"NFTs"}</Text>
                        </LinkOverlay>
                    </NextLink>
                </LinkBox>
            </HStack>
            <Spacer/>
            <Medias/>
            <Spacer/>
            <Box w="15%">
                <ConnectButton />
            </Box>
        </Flex>
    );
}