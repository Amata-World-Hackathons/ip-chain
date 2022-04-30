import "../globals.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  // const applyLayout = Component.applyLayout ||
  return <Component {...pageProps} />;
}

export default MyApp;
