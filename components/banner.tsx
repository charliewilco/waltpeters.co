import * as React from 'react';
import Logo from './logo';

interface HeroBannerProps {
  title: string;
  about: string;
  name: string;
}

const HeroBanner: React.FC<HeroBannerProps> = ({ title, about, name }) => (
  <div className="BannerColorOffset">
    <div className="Banner">
      <figure className="BannerAsideFigure">
        <img className="BannerImage" src="static/garden.jpg" />
      </figure>
      <header className="BannerPostHeader">
        <div className="BannerLogoContainer">
          <Logo />
        </div>
        <h1 className="BannerTitle">{name}</h1>
        <h2 className="BannerSubtitle">{title}</h2>
        <p>{about}</p>
      </header>
    </div>
  </div>
);

export default HeroBanner;
