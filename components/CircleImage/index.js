import React, { useState } from 'react';
import { Fade } from 'react-reveal';
import './styles.css';

const CircleImage = ({ src }) => {

  const [ dynamicSrc, setDynamicSrc ] = useState(src);

  const handleError = () => {
    setDynamicSrc('/static/no_prof_pic.png');
  }

  return (
    <>
      <Fade>
        <div className="circle__container">
          <img
            className="circle__img"
            src={dynamicSrc}
            alt="comedian profile picture"
            onError={handleError}
          />
        </div>

      </Fade>

    </>
  );
};


export default CircleImage;