import { AppProps } from 'next/app';

export default function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Component {...pageProps} />
      <style jsx global>
        {`
          * {
            margin: 0;
            padding: 0;
          }

          *,
          *::before,
          *::after {
            box-sizing: inherit;
          }

          html {
            box-sizing: border-box;
            text-size-adjust: 100%;
            -webkit-tap-highlight-color: transparent;
            font-family: 'Source Serif Pro', Charter, Georgia, system-ui,
              sans-serif;
            background: #fefdfb;
          }

          aside,
          figcaption,
          figure,
          main,
          menu,
          details {
            display: block;
          }

          figure {
            margin: 0;
          }

          img {
            border-style: none;
            font-style: italic;
            vertical-align: middle;
          }

          svg:not(:root) {
            overflow: hidden;
          }

          p:not(:last-of-type) {
            margin-bottom: 1.25rem;
          }
        `}
      </style>
    </div>
  );
}
