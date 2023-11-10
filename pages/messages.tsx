import type { NextPage } from 'next';
import { Container } from "@chakra-ui/layout";
import { StartConversation } from '../components/Messaging/StartConv';

const messages: NextPage = () => {
  return (
    <>
      <Container>
        <StartConversation/>
      </Container>
    </>
  )
}

export default messages