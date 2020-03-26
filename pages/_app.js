import Head from 'next/head'
import Layout from '../components/Layout/Layout'
import {ThemeProvider} from 'styled-components'
import theme from '../style/theme'
import '../style/common.css' 


const MyApp =({Component, pageProps})=>{
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>SoundCloud</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
