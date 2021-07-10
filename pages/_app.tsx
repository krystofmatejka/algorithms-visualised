import React from 'react'
import Head from 'next/head'
import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  html, body, #__next {
    height: 100%;
    min-height: 100%;
  }

  body {
    margin: 20px;
    padding: 0;
    font-family: 'Open Sans', sans-serif;
  }
`

const App = ({Component, pageProps}) => {
  return (
    <>
      <Head>
        <title>Algorithms & Data structures visualised</title>
        <link rel='preconnect' href='https://fonts.googleapis.com'/>
        <link href='https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400&display=swap' rel='stylesheet'/>
      </Head>
      <GlobalStyle/>
      <Component {...pageProps}/>
    </>
  )
}

export default App