import { Text, Container, Center } from '@chakra-ui/react';
import { ConnectWalletButton } from '@cosmology-ui/react';
import { SwapViewDemo } from '../swap/swap-view';

export default function Home() {
  return (
    <Container p={16}>
      <Text as="h1" fontSize="3xl" fontWeight="bold" textAlign="center" mb={16}>
        Swap View
      </Text>
      <Center>
        <SwapViewDemo />
        {/* <ConnectWalletButton /> */}
      </Center>
    </Container>
  );
}
