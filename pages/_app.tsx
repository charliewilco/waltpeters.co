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

          :root {
            --bg: rgb(248, 244, 236);
            --fg: #333;
            --card: #fefdfb;
          }

          html {
            box-sizing: border-box;
            text-size-adjust: 100%;
            -webkit-tap-highlight-color: transparent;
            font-family: 'Source Serif Pro', Charter, Georgia, system-ui,
              sans-serif;
            background: var(--bg);
            color: var(--fg);
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

          @media (prefers-color-scheme: dark) {
            :root {
              --bg: #131313;
              --fg: #fefdfb;
              --card: #2b2b2b;
            }
          }
        `}
      </style>
    </div>
  );
}
