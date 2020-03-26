import Documnet, { Html, Head,Main,NextScript } from "next/document";


class MyDocument extends Documnet {
  render() {
    return (
      <Html lang="ko">
        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=Roboto:100,200,300,400,500,700&display=swap"
            rel="stylesheet"></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}


export default MyDocument