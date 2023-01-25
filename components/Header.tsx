import { ConnectButton } from '@rainbow-me/rainbowkit';
import { Flex, Text, HStack, LinkBox, LinkOverlay, Spacer } from "@chakra-ui/react";
import NextLink from "next/link"
import Medias from './Medias';

export default function Header() {

    const siteTitle = "Jean Gal"

    return (
        <Flex>
            <HStack spacing='50px'>
                <LinkBox>
                    <NextLink href={'/'} passHref>
                        <LinkOverlay>
                            <Text fontSize="xl" fontWeight="bold">{siteTitle}</Text>
                        </LinkOverlay>
                    </NextLink>
                </LinkBox>
                <LinkBox>
                    <NextLink href={'/work'} passHref>
                        <LinkOverlay>
                            <Text fontSize="xl" fontWeight="bold">{"Work"}</Text>
                        </LinkOverlay>
                    </NextLink>
                </LinkBox>
                <LinkBox>
                    <NextLink href={'/about'} passHref>
                        <LinkOverlay>
                            <Text fontSize="xl" fontWeight="bold">{"About"}</Text>
                        </LinkOverlay>
                    </NextLink>
                </LinkBox>
            </HStack>
            <Spacer/>
            <Medias/>
            <Spacer/>
            <ConnectButton />
        </Flex>
    );
}