import Document, { Head, Main, NextScript, NextDocumentContext } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

interface WithStyleTags {
  styleTags: any;
}

export default class MyDocument extends Document<WithStyleTags> {
  public static async getInitialProps(context: NextDocumentContext) {
    const initialProps = await Document.getInitialProps(context);
    const sheet = new ServerStyleSheet();

    const page = context.renderPage(App => props =>
      sheet.collectStyles(<App {...props} />)
    );

    const styleTags = sheet.getStyleElement();
    return { ...page, ...initialProps, styleTags };
  }

  render() {
    return (
      <html>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta
            name="google-site-verification"
            content="h6NhLEISPBdUzO9kTpiy-Y6MIKDCJCclBOSIzIo50vY"
          />
          <meta name="theme-color" content="#d8a75b" />
          <meta
            name="description"
            content="An award-winning landscaping expert with over 50 years of experience, looking to equip and teach the community how to grow, garden and invest in back in their own communities in Central PA."
          />

          <link
            rel="stylesheet"
            type="text/css"
            href="https://cloud.typography.com/7107912/6171792/css/fonts.css"
          />
          <link rel="stylesheet" href="static/level.css" />
          <link rel="icon" href="static/favicon.ico" />
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
