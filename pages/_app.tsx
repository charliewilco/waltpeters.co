import { AppProps } from 'next/app';
import 'typeface-source-serif-pro';

export default function CustomApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
