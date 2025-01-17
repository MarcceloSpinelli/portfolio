import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Marccelo Spinelli - Portfolio</title>
        <link rel="icon" href="/portfolio/coroa.png" />
        <meta property="og:title" content="Marccelo Spinelli - Portfolio" />
        <meta property="og:description" content="Learn more about me as a professional." />
        <meta property="og:image" content="/portfolio/coroa.png" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}