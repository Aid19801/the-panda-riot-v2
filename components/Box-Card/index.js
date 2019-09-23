import React from 'react';
import Router from 'next/router';
import Link from 'next/link';
import { trimStringSpecifically, analyticsEvent } from '../../lib/utils';
import './styles.css';

const BoxCard = ({ id, img, blurb, headline, link, src }) => {
  if (src !== 'TPR') {
    return (
      <div className="col-sm-4 margin-top">
        <div className="box-card hvr-float-shadow">
          <a href={link} target="_blank">
            <h4 className="card-h4">{trimStringSpecifically(headline, 45)}</h4>
            <p className="card-p">{trimStringSpecifically(blurb, 110)}</p>
            <h3 className="card-h3">{src}</h3>

            <div className="card-img-container">
              <img alt="open mic comedy news" className="card-img" src={img} />
            </div>
          </a>
        </div>
      </div>
    );
  }
  if (src === 'TPR') {
    return (
      <div className="col-sm-4 margin-top">
        <Link href={`/news/${id}`}>
          <a>
            <div className="box-card hvr-float-shadow">
              <h4 className="card-h4">
                {trimStringSpecifically(headline, 45)}
              </h4>
              <p className="card-p">{trimStringSpecifically(blurb, 110)}</p>
              <h3 className="card-h3">{src}</h3>

              <div className="card-img-container">
                <img
                  alt="open mic comedy news"
                  className="card-img"
                  src={img}
                />
              </div>
            </div>
          </a>
        </Link>
      </div>
    );
  }
};

export default BoxCard;
