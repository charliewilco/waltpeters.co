import Document, { Head, Html, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  public render(): JSX.Element {
    return (
      <Html lang="en">
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta
            name="google-site-verification"
            content="h6NhLEISPBdUzO9kTpiy-Y6MIKDCJCclBOSIzIo50vY"
          />
          <meta name="theme-color" content="#d8a75b" />
          <link
            href="https://fonts.googleapis.com/css2?family=Source+Serif+Pro:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&display=swap"
            rel="stylesheet"
          />
          <meta
            name="description"
            content="An award-winning landscaping expert with over 50 years of experience, looking to equip and teach the community how to grow, garden and invest in back in their own communities in Central PA."
          />
          <link rel="icon" href="static/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
