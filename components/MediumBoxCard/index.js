import React from 'react';
import Router from 'next/router';
import Fade from 'react-reveal';
import Link from 'next/link';
import { trimStringSpecifically } from '../../lib/utils';
import './styles.css';

const MediumBoxCard = ({ id, img, blurb, headline, link, src }) => {
    if (src === 'TPR') {
        // TPR news stories box cards
        return (
            <div className="col-sm-8 margin-top">
                <Fade>
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
                </Fade>
            </div>
        );
    }
    if (src !== 'TPR') {
        // every news story that ISNT TPR
        return (
            <div className="col-sm-8 margin-top">
                <Fade>
                    <div className="box-card hvr-float-shadow">
                        <a href={link} target="_blank">
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
                        </a>
                    </div>
                </Fade>
            </div>
        );
    }
};

export default MediumBoxCard;
