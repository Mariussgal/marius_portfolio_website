import React, { ReactNode } from 'react'
import { Container } from '@chakra-ui/react'
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
            <Header/>
            <Container backgroundColor='#DCD7C9' maxW="full" height="90vh" py='8'>
                {props.children}
            </Container>
        </div>
    )
}