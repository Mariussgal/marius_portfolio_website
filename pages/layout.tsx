import React, { ReactNode } from 'react'
import { Container, Flex, Box } from '@chakra-ui/react'
import Header from '../components/Header'
import Head from 'next/head'

type Props = {
    children: ReactNode
}

const Layout: React.FC<Props> = (props) => {
    return (
        <Box>
            <Head>
                <title>Portfolio App</title>
                <link rel="icon" href="/favicon.png" />
            </Head>
            <Flex direction="column" minHeight="100vh">
                <Header />
                <Container flexGrow={1} backgroundColor='#DCD7C9' maxW="full">
                    {props.children}
                </Container>
            </Flex>
        </Box>
    )
}

export default Layout;