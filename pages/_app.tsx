import { ApolloClient, InMemoryCache } from "@apollo/client";
import { AppProps } from "next/app";
import "../styles/global.css";

const client = new ApolloClient({
  uri: "file://schema.gql",
  cache: new InMemoryCache(),
});

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
