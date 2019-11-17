import React from 'react';
import './styles.css';

const Banner = ({ src, children }) => {
  if (!src) {
    return (
      <div className="banner__container">
        <div className="banner__no-img" alt="open mic comedy non-bringer" />
      </div>
    );
  }
  if (src) {
    return (
      <div className="banner__container">
        <img className="banner__img" src={src} alt="open mic comedy bringer" />
        {children}
      </div>
    );
  }
};

export default Banner;
