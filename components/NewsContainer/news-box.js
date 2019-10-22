import React, { Component } from 'react';
import { Router } from 'next/router';
import './styles.css';

const NewsBox = ({ id, headline, blurb, img, link, src }) => {
  return (
    <div className="col-sm-4" onClick={() => Router.push(link)}>
      <div className="news-box__container">
        <img src={img} className="newsbox__img" alt="comedy news individual story" />
        <h3>{headline}</h3>
        <p>{blurb}</p>
        <h4>{src}</h4>
      </div>
    </div>
  );
};

export default NewsBox;
