import { HStack, Text, Link } from "@chakra-ui/react";
import Github from "../icons/GitHub";
import Linkedin from "../icons/Linkedin";
import Mail from "../icons/Mail";
import Twitter from "../icons/Twitter";

export default function Medias() {
    return (
        <HStack spacing={"30px"}>
            <Link
                fontSize="xl"
                fontFamily="heading"
                href="mailto:jeangal.pro@gmail.com"
                isExternal
            >
                <Mail/>
            </Link>
            <Link
                fontSize="xl"
                fontFamily="heading"
                href="https://www.linkedin.com/in/jean-gal-b1280b155/"
                isExternal
            >
                <Linkedin/>
            </Link>
            <Link
                fontSize="xl"
                fontFamily="heading"
                href="https://github.com/jjeangal"
                isExternal
            >
                <Github/>
            </Link>
            <Link
                fontSize="xl"
                fontFamily="heading"
                href="https://twitter.com/jeangalbc"
                isExternal
            >
                <Twitter/>
            </Link>
        </HStack>
    );
}