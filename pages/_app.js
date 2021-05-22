import { GlobalStyle } from "../styles/globalStyle";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Dynamic OG Image Generator</title>
        <meta
          property="og:title"
          content="Dynamic Open Graph Image Generator"
        />
        <meta
          name="description"
          content="📸 Service to generate OG Image dynamically from your code"
        />
        <meta
          property="og:image"
          content={`${process.env.NEXT_PUBLIC_APP_URL}/api/generate?title=Dynamic Open Graph Image Generator&author=Sagar Hani&avatar=https://avatars.githubusercontent.com/u/6933389&websiteUrl=https://sagarhani.in&theme=nightOwl`}
        />
        <meta name="author" content="Sagar Hani" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@sagarhan_i" />
        <meta name="twitter:creator" content="@sagarhan_i" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=PT+Mono&family=Poppins&family=Roboto&display=swap"
          rel="stylesheet"
        />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
