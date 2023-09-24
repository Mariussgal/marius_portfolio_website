import { ConnectButton } from '@rainbow-me/rainbowkit';
import { Flex, Text, HStack, LinkBox, LinkOverlay, Spacer, Box } from "@chakra-ui/react";
import NextLink from "next/link"
import Medias from './Medias';

export default function Header() {

    const siteTitle = "Home"

    return (
        <Flex h="10vh" borderBottom="1px">
            <HStack spacing="4vw" w="30%" ml="2%">
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
                <LinkBox>
                    <NextLink href={'/messages'} passHref>
                        <LinkOverlay>
                            <Text fontSize="lg" fontWeight="bold">{"Messages"}</Text>
                        </LinkOverlay>
                    </NextLink>
                </LinkBox>
            </HStack>
            <Spacer/>
            <Medias/>
            <Spacer/>
            <Flex w="30%" alignItems="center" justifyContent="right" mr="2%">
                <ConnectButton />
            </Flex>
        </Flex>
    );
}