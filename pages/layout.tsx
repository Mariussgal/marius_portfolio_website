import React, { ReactNode } from 'react'
import { Container } from '@chakra-ui/react'
import Header from '../components/Header'

type Props = {
  children: ReactNode
}

export function Layout(props: Props) {
    return (
        <div>
            <Header/>
            <hr/>
            <Container backgroundColor='#DCD7C9' maxW="full"  py='8'>
                {props.children}
            </Container>
        </div>
    )
}