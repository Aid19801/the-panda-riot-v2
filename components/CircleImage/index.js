import React from 'react';

const CircleImage = ({src}) => {
  return (
    <div className="col-sm-1">
      <div className="cicle__container">
        <img
          className="circle__img"
          src={src}
          alt="comedian profile picture"
          />
      </div>
    </div>
  );
};


export default CircleImage;