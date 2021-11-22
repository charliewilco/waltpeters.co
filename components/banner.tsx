import Image from 'next/image';
import { Logo } from './logo';

interface HeroBannerProps {
  title: string;
  about: string;
  name: string;
}

export const HeroBanner: React.VFC<HeroBannerProps> = ({
  title,
  about,
  name,
}) => (
  <div className="BannerColorOffset">
    <div className="Banner">
      <figure>
        <Image
          alt="Small greenhouse"
          layout="fill"
          src="/static/garden.jpg"
          priority
        />
      </figure>
      <header>
        <div className="BannerLogoContainer">
          <Logo />
        </div>
        <h1>{name}</h1>
        <h2>{title}</h2>
        <p>{about}</p>
      </header>
    </div>
    <style jsx>{`
      .Banner {
        background: #fefdfb;
        box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.23),
          0 3px 6px 0 rgba(0, 0, 0, 0.16);
        z-index: 1;
      }

      header {
        padding: 1rem;
        flex: 4;
      }
      header > p {
        max-width: 33rem;
        line-height: 1.7;
      }

      h1 {
        color: #d8a75b;
        font-size: 1.875rem;
        margin: 0 0 0.5rem;
        text-align: center;
      }

      h2 {
        font-weight: 400;
        font-size: 1rem;
        text-align: center;
        margin-bottom: 1.5rem;
      }
      figure {
        position: relative;
        width: 100%;
        height: 20rem;
      }

      .BannerLogoContainer {
        margin: 0 auto;
        text-align: center;
        margin-bottom: 1rem;
      }

      .BannerColorOffset {
        position: relative;
      }

      .BannerColorOffset::after {
        content: '';
        width: 12rem;
        height: 12rem;
        background: rgba(216, 167, 91, 0.5);
        padding: 1rem;
        position: absolute;
        margin: 0;
        right: -0.5rem;
        top: -0.5rem;
        z-index: -1;
      }
      @media (min-width: 42rem) {
        .Banner {
          display: flex;
          margin-top: 1rem;
        }

        h1 {
          font-size: 2.125rem;
          text-align: left;
          font-weight: 700;
        }
        header {
          padding: 5rem 1rem;
        }

        h2 {
          text-align: left;
          font-size: 1.5rem;
        }

        figure {
          flex: 2;
          height: auto;
        }

        .BannerLogoContainer {
          text-align: left;
        }

        .BannerColorOffset::after {
          right: -1rem;
          top: -1rem;
        }
      }
    `}</style>
  </div>
);
