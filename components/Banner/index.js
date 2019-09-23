import React from 'react';
import './styles.css';

const Banner = ({ src }) => {
    return (
        <div className="banner__container">
            <img className="banner__img" src={src} />
        </div>
    )
}

export default Banner;