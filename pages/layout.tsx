import React, { ReactNode } from 'react'
import { Container, Flex } from '@chakra-ui/react'
import Header from '../components/Header'
import Head from 'next/head'

type Props = {
  children: ReactNode
}

export function Layout(props: Props) {
    return (
        <div>
            <Head>
                <title>Portfolio App</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Flex direction="column" minHeight="100vh">
                <Header/>
                <Container flexGrow={1} backgroundColor='#DCD7C9' maxW="full">
                    {props.children}
                </Container>
            </Flex>
        </div>
    )
}