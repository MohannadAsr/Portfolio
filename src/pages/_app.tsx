import type { AppProps } from "next/app";
// import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/main.scss";
import { ThemeProvider } from "styled-components";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Head from "next/head";
import { themeing } from "@/types/types";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import { Html } from "next/document";

export default function App({ Component, pageProps }: AppProps) {
  const darkTheme: themeing = {
    bg: "#0e1533",
    color: "#fff",
    white: "#fff",
    black: "#000",
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <Head>
        <meta
          name="description"
          content="Welcome to M.ASR Portfolio Stay tuned for all new projects and designs."
        />
        <link rel="icon" type="image/x-icon" href="/me.png" />
        <title>M.ASR Portfolio</title>
      </Head>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  );
}
