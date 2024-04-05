import "@/styles/globals.css";
import { ThemeProvider } from "styled-components";
import Head from "next/head";
import Header from "../styled-components/components/Header/index";
import Footer from "../styled-components/components/Footer/index";

import { Page } from "../styled-components/components/Page/index";
import theme from "../styled-components/layout/theme";
import GlobalStyle from "../styled-components/layout/global-style";

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: light)"
          content="#fff"
        />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: dark)"
          content="#212121"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        <Page>
          <Component {...pageProps} />
        </Page>
        <Footer />
      </ThemeProvider>
    </>
  );
}
