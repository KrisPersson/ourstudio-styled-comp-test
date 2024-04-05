import "@/styles/globals.css";
import { ThemeProvider } from "styled-components";

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
