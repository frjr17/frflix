import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import mainTheme from "../styles";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={mainTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
