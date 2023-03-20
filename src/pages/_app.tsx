import { ChakraProvider } from '@chakra-ui/react';
import { ThemeProvider, defaultTheme } from '@cosmology-ui/react';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <ChakraProvider theme={defaultTheme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </ThemeProvider>
  );
}
