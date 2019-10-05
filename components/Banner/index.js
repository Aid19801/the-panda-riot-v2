import React from 'react';
import './styles.css';

const Banner = ({ src }) => {
  if (!src) {
    return (
      <div className="banner__container">
        <div className="banner__no-img" />
      </div>
    );
  }
  if (src) {
    return (
      <div className="banner__container">
        <img className="banner__img" src={src} />
      </div>
    );
  }
};

export default Banner;
