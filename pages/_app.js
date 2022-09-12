import React from "react";
import Head from "next/head";
import GlobalStyle from "../src/Components/svg/GlobalStyle";
import Header from "../src/Layouts/Header";
import Footer from "../src/Layouts/Footer";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Head>
        <meta
          name="viewport"
          content="initial-scale=1,width=device-width,viewport-fit=cover,maximum-scale=1.0,user-scalable=no"
        />
      </Head>
      <Header/>
      <Component {...pageProps} />
      <Footer/>
    </>
  );
}
export default MyApp;
