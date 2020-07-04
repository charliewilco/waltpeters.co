import { AppProps } from 'next/app';
import '../components/global.css';

export default function CustomApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
