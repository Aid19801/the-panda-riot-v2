import React from 'react';
import './styles.css';
import { Fade } from 'react-reveal';

const CircleImage = ({ src }) => {
  return (
    <>
      <Fade>
        <div className="circle__container">
          <img
            className="circle__img"
            src={src}
            alt="comedian profile picture"
          />
        </div>

      </Fade>

    </>
  );
};


export default CircleImage;